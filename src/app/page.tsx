"use client"
import { DataTable } from "@/components/Datatable";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useUserContext } from "@/context/userContext";
import Link from "next/link";
import { IoAddOutline } from "react-icons/io5";
import { columns } from "./columns";
import Loading from "@/components/Loading";

export default function UserPage() {
  const { users, isLoading, error } = useUserContext();
  if (isLoading) return <Loading/>;
  if (error) return <div>Error: {error}</div>; 

  return (
    <>
      <div className="mb-5">
        <Button>
          <Link href="/create" className="inline-flex"><IoAddOutline className="text-xl mr-1"/> Create</Link>
        </Button>
      </div>
      <Card className="w-full">
          <CardHeader>
          <CardTitle>Data User</CardTitle>
          <CardDescription>Manage Data User</CardDescription>
          </CardHeader>
          <CardContent>
              <DataTable columns={columns} data={users} />
          </CardContent>
      </Card>
    </>
  )
}
