'use client';
import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function NavLink({ href, isActive, iconFilled, iconOutlined, text }) {
  return (
    <Link href={href} className="flex items-center">
      <Icon
        icon={isActive ? iconFilled : iconOutlined}
        width="32"
        height="32"
        className={isActive ? 'text-lime-500' : ''}
      />
      {/* Display only on larger screens */}
      <span className={`ml-2 p-2 hidden sm:inline ${isActive ? 'font-bold text-lime-500' : ''}`}>{text}</span>
    </Link>
  );
}
