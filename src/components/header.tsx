"use client";

import Link from "next/link";
import React from "react";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Header = () => {
  const routes = [
    { href: "/", label: "Home" },
    { href: "/events/all", label: "All event" },
  ];

  const currentRoute = usePathname();

  return (
    <header className="flex items-center justify-between border-b border-white/10 h-14 px-3 sm:px-9">
      <Logo />

      <nav className="h-full">
        <ul className="flex gap-x-6 h-full text-sm">
          {routes.map((route) => (
            <li
              key={route.href}
              className={cn(
                "hover:text-white h-full flex items-center relative hover:text-white/50 transition",
                {
                  "text-white": currentRoute === route.href,
                  "text-white/50": currentRoute !== route.href,
                }
              )}
            >
              <Link href={route.href}>{route.label}</Link>
              {currentRoute === route.href && (
                <motion.div
                  layoutId="active-nav-link"
                  className="bg-accent h-1 w-full absolute bottom-0"
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
