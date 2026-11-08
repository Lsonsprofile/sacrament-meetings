'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
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