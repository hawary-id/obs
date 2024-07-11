"use client";
import { User } from "@/app/columns";
import { fetchUsers } from "@/lib/user/api";
import { createContext, FC, useContext, useEffect, useState, PropsWithChildren } from "react";

interface UserContextType {
    users: User[];
    isLoading: boolean;
    error: string | null;
    setSelectedUser: (user: User | null) => void;
    updateUser: (updatedUser: User) => void;
}

const initialUserContext: UserContextType = {
    users: [],
    isLoading: true,
    error: null,
    setSelectedUser: () => {},
    updateUser: () => { }
};

const UserContext = createContext<UserContextType>(initialUserContext);

export const UserProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      if (users.length === 0) { 
        const fetchData = async () => {
          try {
            const data = await fetchUsers();
            setUsers(data);
          } catch (error) {
            setError("Error fetching users");
          } finally {
            setIsLoading(false);
          }
        };
  
        fetchData();
      } else {
        setIsLoading(false); 
      }
    }, [users]); 

    const updateUser = (updatedUser: User) => {
        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user.id === updatedUser.id ? updatedUser : user
            )
        );
    };

    return (
        <UserContext.Provider value={{ users, isLoading, error, setSelectedUser: (user: User | null) => { }, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
};
