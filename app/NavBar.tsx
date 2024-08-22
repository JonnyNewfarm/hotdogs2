import Link from "next/link";
import React from "react";

const NavBar = () => {
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
            className="text-zinc-500 hover:text-zinc-900 transition-colors"
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
