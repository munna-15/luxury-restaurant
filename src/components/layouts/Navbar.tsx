"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const accentColor = "#c87832";
const darkColor = "#1d1814";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-white">
      <div className="container-shell">
        <div className="flex h-18 items-center justify-between border-b border-black/10">
          {/* Brand */}
          <Link
            href="/"
            onClick={closeMenu}
            aria-label="Maison Roma home"
            className="group flex flex-col leading-none"
          >
            <span
              className="font-display text-[2rem] font-medium tracking-[-0.035em] transition-colors duration-300 group-hover:text-[#c87832]"
              style={{ color: darkColor }}
            >
              Maison Roma
            </span>

            <span className="mt-1 text-[8px] font-semibold uppercase tracking-[0.34em] text-black/45 transition-colors duration-300 group-hover:text-[#c87832]">
              Cucina Italiana
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/65 transition-colors duration-300 hover:text-[#c87832]"
              >
                {item.label}

                <span className="absolute bottom-0 left-0 h-px w-0 bg-[#c87832] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            <Link
              href="/reservation"
              className="ml-2 inline-flex items-center justify-center border border-[#c87832] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c87832] transition-all duration-300 hover:bg-[#c87832] hover:text-white"
            >
              Reserve a Table
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center border border-black/10 text-black/75 transition-all duration-300 hover:border-[#c87832] hover:text-[#c87832] lg:hidden"
          >
            {open ? (
              <X size={20} strokeWidth={1.4} />
            ) : (
              <Menu size={20} strokeWidth={1.4} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`absolute inset-x-0 top-24 overflow-hidden border-b border-black/10 bg-white transition-all duration-300 lg:hidden ${
          open
            ? "max-h-[500px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <nav className="container-shell flex flex-col py-5">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className="border-b border-black/10 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-black/70 transition-colors duration-300 hover:text-[#c87832]"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/reservation"
            onClick={closeMenu}
            className="mt-5 inline-flex w-fit border border-[#c87832] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c87832] transition-all duration-300 hover:bg-[#c87832] hover:text-white"
          >
            Reserve a Table
          </Link>
        </nav>
      </div>
    </header>
  );
}
