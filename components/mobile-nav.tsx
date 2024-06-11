'use client';

import Link from 'next/link';
import ThemeToggleMobile from './theme-toggle-mobile';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { List } from '@phosphor-icons/react/dist/ssr';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { SignOut } from '@phosphor-icons/react/dist/ssr';
import { usePathname } from 'next/navigation';

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="fixed flex w-full p-3 items-center justify-between top-0 bg-white/80 backdrop-blur-lg z-10 sm:hidden">
      <Link href="/profile">
        <Avatar className={pathname === '/profile' ? 'invisible' : 'border'}>
          <AvatarImage src="https://github.com/UlwanLuthfi.png" />
          <AvatarFallback>UL</AvatarFallback>
        </Avatar>
      </Link>

      <ThemeToggleMobile />

      <DropdownMenu>
        <DropdownMenuTrigger>
          <List className="w-7 h-7" />
          <span className="sr-only">Open</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <SignOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
