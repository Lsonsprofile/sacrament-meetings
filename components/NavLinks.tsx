'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Suspense } from 'react';

function ActiveLinks({ isHeader }: { isHeader: boolean }) {
  const pathname = usePathname();
  const links = [
    { href: '/', label: 'Home' },
    { href: '/meetings', label: 'Meetings' },
    { href: '/meetings/current', label: 'Current Program' },
  ];

  // If it's in the header, use light colors. Otherwise, use dark colors.
  const baseColor = isHeader ? 'text-blue-100' : 'text-blue-600';
  const activeColor = isHeader ? 'text-white border-b-2 border-white pb-1' : 'text-blue-800 font-bold';
  const hoverColor = isHeader ? 'hover:text-white' : 'hover:text-blue-900';

  return (
    <ul className={`flex gap-8 text-sm font-medium ${baseColor}`}>
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              className={isActive ? activeColor : `${hoverColor} transition`}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function StaticLinks({ isHeader }: { isHeader: boolean }) {
  const baseColor = isHeader ? 'text-blue-100' : 'text-blue-600';
  const hoverColor = isHeader ? 'hover:text-white' : 'hover:text-blue-900';

  return (
    <ul className={`flex gap-8 text-sm font-medium ${baseColor}`}>
      <li><Link href="/" className={`${hoverColor} transition`}>Home</Link></li>
      <li><Link href="/meetings" className={`${hoverColor} transition`}>Meetings</Link></li>
      <li><Link href="/meetings/current" className={`${hoverColor} transition`}>Current Program</Link></li>
    </ul>
  );
}

export default function NavLinks({ isHeader = false }: { isHeader?: boolean }) {
  return (
    <Suspense fallback={<StaticLinks isHeader={isHeader} />}>
      <ActiveLinks isHeader={isHeader} />
    </Suspense>
  );
}