import Link from "next/link";
import React from "react";
import Logo from "./logo";

const Header = () => {
  const routes = [
    { href: "/", label: "Home" },
    { href: "/events/all", label: "All event" },
  ];

  return (
    <header className="flex items-center justify-between border-b border-white/10 h-14 px-3 sm:px-9">
      <Logo />

      <nav>
        <ul className="flex gap-x-6 h-full text-sm">
          {routes.map((route) => (
            <li
              key={route.href}
              className="hover:text-white flex items-center relative hover:text-white/50 transition"
            >
              <Link href={route.href}>{route.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
