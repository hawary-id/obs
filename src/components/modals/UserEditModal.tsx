"use client";
import { User } from "@/app/columns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useUserContext } from "@/context/userContext";
import { updateUser } from "@/lib/user/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";
import Loading from "../Loading";
import { useForm } from "react-hook-form";
import { userFormSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";

interface UserEditModalProps {
  userId: number;
}

export function UserEditModal({ userId }: UserEditModalProps) {
  const { users, updateUser: updateUserContext } = useUserContext();
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<User>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: {
          lat: "",
          lng: "",
        },
      },
      phone: "",
      website: "",
      company: {
        name: "",
        catchPhrase: "",
        bs: "",
      },
    },
  });

  useEffect(() => {
    const selectedUser = users.find((user: User) => user.id === userId);
    if (selectedUser) {
      form.reset(selectedUser);
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: "User not found.",
      });
    }
  }, [userId, users, form.reset]);

  const onSubmit  = async (data: User) => {
    try {
      updateUserContext(data);
      toast({
        title: "Success",
        description: "User updated successfully.",
      });
      router.refresh();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update user.",
      });
      console.error("Error updating user:", error);
    }
  };
    
  if (!form.getValues('name')) return <Loading />
  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <Form {...form}>
        <div className="flex items-center justify-center space-x-4">
          <Avatar className="h-32 w-32 border">
            <AvatarImage src={`https://api.dicebear.com/5.x/micah/svg?seed=${userId}`} />
            <AvatarFallback className="text-center">{form.getValues("name")}</AvatarFallback>
          </Avatar>
        </div>
        <Separator className="my-3"/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="Phone" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website</FormLabel>
                <FormControl>
                  <Input placeholder="Website" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address.street"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Street</FormLabel>
                <FormControl>
                  <Input placeholder="Street" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address.suite"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Suite</FormLabel>
                <FormControl>
                  <Input placeholder="Suite" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company.name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="Company Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Separator/>

        <div className="flex justify-end mt-2">
          <Button type="submit">Save changes</Button>
        </div>
      </Form>
    </form>
  );
}
