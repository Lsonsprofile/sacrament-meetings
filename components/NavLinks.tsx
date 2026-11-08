'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Suspense } from 'react';

function ActiveLinks() {
  const pathname = usePathname();
  const links = [
    { href: '/', label: 'Home' },
    { href: '/meetings', label: 'Meetings' },
    { href: '/meetings/current', label: 'Current Program' },
  ];

  return (
    <ul className="flex gap-8 text-sm font-medium text-blue-100">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              className={isActive ? 'text-white border-b-2 border-white pb-1' : 'hover:text-white transition'}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

// This is a static fallback that doesn't use usePathname. 
// It will be used during pre-rendering so Vercel doesn't crash.
function StaticLinks() {
  return (
    <ul className="flex gap-8 text-sm font-medium text-blue-100">
      <li><Link href="/" className="hover:text-white transition">Home</Link></li>
      <li><Link href="/meetings" className="hover:text-white transition">Meetings</Link></li>
      <li><Link href="/meetings/current" className="hover:text-white transition">Current Program</Link></li>
    </ul>
  );
}

export default function NavLinks() {
  return (
    <Suspense fallback={<StaticLinks />}>
      <ActiveLinks />
    </Suspense>
  );
}