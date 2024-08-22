"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const currentPath = usePathname();
  const links = [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Products", href: "/products" },
  ];
  return (
    <nav className="flex space-x-7 border-b mb-7 px-6 h-14 items-center">
      <Link href="/">Hotdogs</Link>

      <ul className="flex space-x-7">
        {links.map((link) => (
          <Link
            key={link.href}
            className={` ${
              link.href === currentPath ? "text-zinc-900" : "text-zinc-500"
            } text-zinc-500 hover:text-zinc-900 transition-colors`}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
