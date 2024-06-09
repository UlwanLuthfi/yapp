'use client';

import Link from 'next/link';
import {
  House,
  MagnifyingGlass,
  PlusCircle,
  Heart,
  User,
} from '@phosphor-icons/react/dist/ssr';
import { usePathname } from 'next/navigation';

export default function MobileNavBottom() {
  const pathname = usePathname();

  const links = [
    {
      href: '/',
      label: 'Home',
      icon: (
        <House
          weight={pathname === '/' ? 'fill' : 'regular'}
          className="h-7 w-7"
        />
      ),
    },
    {
      href: '/search',
      label: 'Search',
      icon: (
        <MagnifyingGlass
          weight={pathname === '/search' ? 'fill' : 'regular'}
          className="h-7 w-7"
        />
      ),
    },
    {
      href: '/create',
      label: 'Create',
      icon: (
        <PlusCircle
          weight={pathname === '/create' ? 'fill' : 'regular'}
          className="h-7 w-7"
        />
      ),
    },
    {
      href: '/activity',
      label: 'Activity',
      icon: (
        <Heart
          weight={pathname === '/activity' ? 'fill' : 'regular'}
          className="h-7 w-7"
        />
      ),
    },
    {
      href: '/profile',
      label: 'Profile',
      icon: (
        <User
          weight={pathname === '/profile' ? 'fill' : 'regular'}
          className="h-7 w-7"
        />
      ),
    },
  ];

  return (
    <div className="fixed flex w-full p-5 items-center justify-between bottom-0 bg-white/90 backdrop-blur-xl z-10">
      {links.map(({ href, label, icon }) => (
        <Link key={href} href={href}>
          <span className="sr-only">{label}</span>
          {icon}
        </Link>
      ))}
    </div>
  );
}
