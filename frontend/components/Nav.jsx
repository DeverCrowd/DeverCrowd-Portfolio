"use client";
import Link from "next/link";
import Logo from "./Logo";
import { Code2 } from "lucide-react";
import { HiMail } from "react-icons/hi";
import { useScroll } from "motion/react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav
      style={{ borderRadius: "0px 0px 100px 100px" }}
      className="flex items-center justify-between h-[47px] backdrop-blur-3xl hover:shadow-lg shadow-md shadow-primary w-full transition-all duration-300 z-50"
    >
      <div className="flex items-center justify-between px-15 w-full h-full ">
        <Link className="flex w-[15%] items-center gap-2" href="/">
          <Logo width={96} height={32} />
          <p>
            <span className="text-blue-400">Dever</span>Crowd
          </p>
        </Link>
        <div className="flex items-center justify-between h-full w-[30%] ">
          {[
            { href: "/", label: "HOME" },
            { href: "/about", label: "ABOUT" },
            { href: "/services", label: "SERVICES" },
            { href: "/works", label: "WORKS" },
          ].map(({ href, label }, i) => (
            <Link
              key={i}
              className={pathname === href ? "text-blue-400 " : ""}
              href={href}
            >
              <div className="hover:border-primary text-center rounded-sm hover:text-primary transition-all duration-300 hover:scale-105 flex gap-2 ">
                {label}
              </div>
            </Link>
          ))}
        </div>
        <Link className="flex w-[15%] justify-end " href="/contact">
          <div
            className={`hover:border-primary  items-end rounded-full hover:text-primary transition-all duration-300 hover:scale-105 flex gap-2 `}
          >
            <HiMail className="text-4xl text-primary" />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
