'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

const NavLink = ({ href, children }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`px-5 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
        isActive
          ? "bg-[#223311] text-[#a3e635]"
          : "text-gray-300 hover:text-white hover:bg-gray-800/50"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;