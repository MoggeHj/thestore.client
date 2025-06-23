"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({
  href,
  children,
  className = "",
}: NavLinkProps) {
  const path = usePathname();
  const isActive = path === href || (href !== "/" && path.startsWith(href));
  return (
    <Link
      href={href}
      className={
        (isActive
          ? "text-blue-500 font-bold "
          : "hover:underline hover:font-bold ") + className
      }
    >
      {children}
    </Link>
  );
}
