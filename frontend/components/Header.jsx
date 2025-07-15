'use client'
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed z-50 w-full top-0">
      <div className="hidden lg:flex items-center w-full">
        <Nav/>
      </div>

      <div className="flex lg:hidden justify-between items-center px-4 py-3 backdrop-blur-2xl text-white shadow-md">
        <Link  className="flex items-center gap-2" href="/">
          <Logo width={96} height={32} />
          <p>
            <span className="text-blue-400">Dever</span>Crowd
          </p>
        </Link>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="focus:outline-none">
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 backdrop-blur-sm text-white px-4 space-y-3 items-center justify-center gap-4 flex flex-col ${
          mobileOpen ? "max-h-96 py-9 opacity-100 shadow-lg shadow-primary" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <a href="/" className="block hover:text-blue-300">Home</a>
        <a href="/about" className="block hover:text-blue-300">About</a>
        <a href="/services" className="block hover:text-blue-300">Services</a>
        <a href="/works" className="block hover:text-blue-300">Works</a>
        <a href="/contact" className="block hover:text-blue-300">Contact</a>
      </div>
    </header>
  );
};

export default Header;
