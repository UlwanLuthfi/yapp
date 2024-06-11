import { InputWithIcon } from '@/components/ui/input-with-icon';
import UsersList from '@/components/users-list';
import { SearchIcon, Users } from 'lucide-react';
import React from 'react';

export default function page() {
  return (
    <div className="flex flex-col p-3 gap-5">
      <InputWithIcon startIcon={SearchIcon} placeholder="Search..." />
      <UsersList />
      <UsersList />
      <UsersList />
      <UsersList />
      <UsersList />
      <UsersList />
      <UsersList />
      <UsersList />
      <UsersList />
      <UsersList />
      <UsersList />
      <UsersList />
      <UsersList />
      <UsersList />
    </div>
  );
}
