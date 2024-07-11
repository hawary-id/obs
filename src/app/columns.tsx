'use client';
import { DatatableColumnAction } from '@/components/DatatableColumnAction';
import { DataTableColumnHeader } from '@/components/DatatableColumnHeader';
import { UserEditModal } from '@/components/modals/UserEditModal';
import { UserViewModal } from '@/components/modals/UserViewModal';
import { deleteUser } from '@/lib/user/api';
import { ColumnDef } from '@tanstack/react-table';

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
  },
  {
    accessorKey: 'username',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Username" />
    ),
  },
  {
    accessorKey: 'email',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
  },
  {
    accessorKey: 'address.street',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Street" />
    ),
  },
  {
    accessorKey: 'address.suite',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Suite" />
    ),
  },
  {
    accessorKey: 'address.city',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="City" />
    ),
  },
  {
    accessorKey: 'address.zipcode',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="zipcode" />
    ),
  },
  {
    accessorKey: 'phone',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Phone" />
    ),
  },
  {
    accessorKey: 'website',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Website" />
    ),
  },
  {
    accessorKey: 'company.name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Company" />
    ),
  },
  {
    id: 'actions',
    header: () => <div>actions</div>,
    cell: ({ row }) => (
      <DatatableColumnAction
        id={row.original.id}
        onDelete={() => deleteUser(row.original.id)}
        editModal={<UserEditModal userId={row.original.id} />}
        viewModal={<UserViewModal userId={row.original.id} />}
      />
    ),
  },
];
