"use client";

import { User } from "@/app/columns";
import { useToast } from "@/components/ui/use-toast";
import { useUserContext } from "@/context/userContext";
import { useEffect, useState } from "react";
import { CiGlobe } from "react-icons/ci";
import { FaRegBuilding } from "react-icons/fa";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { RiMapPinLine } from "react-icons/ri";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Loading from "../Loading";

interface UserEditModalProps {
  userId: number;
}

export function UserViewModal({ userId }: UserEditModalProps) {
  const { users } = useUserContext();
  const [formData, setFormData] = useState<User>({} as User);
  const { toast } = useToast();
  
  useEffect(() => {
    const selectedUser = users.find((user: User) => user.id === userId);
    if (selectedUser) {
      setFormData(selectedUser);
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: "User not found.",
      });
    }
  }, [userId, users]);  

  if (!formData) return <Loading/>; 
      
  return (
    <div className="flex flex-col gap-5 items-center w-full">
      <div className="w-1/3 border-none md:border-r pr-3">
        <div className="flex mb-3 items-center justify-center space-x-4">
          <Avatar className="h-24 w-24 border">
            <AvatarImage src={`https://api.dicebear.com/5.x/micah/svg?seed=${formData?.id}`} />
            <AvatarFallback className="text-center">{formData?.name}</AvatarFallback>
          </Avatar>
        </div>
        <h1 className="text-center text-lg text-primary inline-block w-full font-semibold">{formData?.name}</h1>
        <span className="font-light inline-block w-full text-center text-xs">@{formData?.username}</span>
      </div>
      <div className="grid gap-3">
        <div className="w-full flex items-center gap-2">
          <MdOutlineEmail className="text-2xl text-primary"/>
          <span className="text-gray-600">{formData?.email}</span>
        </div>
        <div className="w-full flex items-center gap-2">
          <MdOutlinePhone className="text-2xl text-primary"/>
          <span className="text-gray-600">{formData?.phone}</span>
        </div>
        <div className="w-full flex items-center gap-2">
          <CiGlobe className="text-2xl text-primary"/>
          <span className="text-gray-600">{formData?.website}</span>
        </div>
        <div className="w-full flex items-center gap-2">
          <RiMapPinLine className="text-2xl text-primary"/>
          <span className="text-gray-600">{formData?.address?.street}, {formData?.address?.suite}</span>
        </div>
        <div className="w-full flex items-center gap-2">
          <FaRegBuilding className="text-2xl text-primary"/>
          <span className="text-gray-600">{formData?.company?.name}</span>
        </div>
      </div>
    </div>
  );
}
