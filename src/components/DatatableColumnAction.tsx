import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { IoMdMore } from "react-icons/io";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from './ui/alert-dialog';
import { Dialog, DialogContent } from './ui/dialog';
import { useToast } from './ui/use-toast';

interface DatatableColumnActionProps {
  id: number;
  viewModal: React.ReactNode;
  editModal: React.ReactNode;
  onDelete?: (id: number) => Promise<void>;
}


export function DatatableColumnAction({ id, viewModal, editModal, onDelete }: DatatableColumnActionProps) {
  const { toast } = useToast();
  const router = useRouter();
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);

  const handleDelete = async () => {
    try {
      if (onDelete) { 
        await onDelete(id);
        toast({
          title: "Sukses",
          description: "Data berhasil dihapus",
        });
        setDeleteOpen(false);
        router.refresh();
      } else {
        console.error("onDelete function is not provided.");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Terjadi kesalahan",
        description: "Gagal menghapus data",
      });
      console.error("Error deleting user:", error);
    }
  };
  
  return (
      <>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <IoMdMore className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div onClick={() => setEditOpen(true)} className='w-full cursor-pointer'>
                Edit
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div onClick={() => setViewOpen(true)} className='w-full cursor-pointer'>
                View
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="text-destructive cursor-pointer" onClick={() => setDeleteOpen(true)}>
                Hapus
              </div>
            </DropdownMenuItem>         
          </DropdownMenuContent>
        </DropdownMenu>
        <AlertDialog open={deleteOpen} onOpenChange={setDeleteOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are You Sure You Want to Delete This Data?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This action will delete data from the server permanently.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleDelete} className="bg-destructive hover:bg-destructive/90">
                Yes, Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <Dialog open={editOpen} onOpenChange={setEditOpen}>
          <DialogContent>
            {editModal}
          </DialogContent>
        </Dialog>

        <Dialog open={viewOpen} onOpenChange={setViewOpen}>
          <DialogContent>
            {viewModal}
          </DialogContent>
        </Dialog>
      </>
    )
}