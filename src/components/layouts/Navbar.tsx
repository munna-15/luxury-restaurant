
"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

import MaisonRomaLogo from "@/components/common/MaisonRomaLogo";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const accentColor = "#d97706";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="container-shell">
        <div className="flex h-[86px] items-center justify-between border-b border-black/10">
          {/* Brand */}
          <Link
            href="/"
            onClick={closeMenu}
            aria-label="maison home"
            className="group flex items-center"
          >
            <MaisonRomaLogo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`group relative py-3 font-body text-[12px] font-semibold uppercase tracking-[0.15em] transition-colors duration-300 ${
                    active
                      ? "text-[#d97706]"
                      : "text-black/70 hover:text-[#d97706]"
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute bottom-0 left-0 h-px bg-[#d97706] transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}

            <Link
              href="/reservation"
              className="ml-2 inline-flex items-center justify-center rounded-full bg-[#d97706] px-7 py-3.5 font-body text-[10px] font-semibold uppercase tracking-[0.18em] !text-white shadow-[0_8px_24px_rgba(217,119,6,0.18)] transition-all duration-300 hover:bg-[#b45309] hover:shadow-[0_10px_28px_rgba(180,83,9,0.26)]"
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
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-black/75 transition-all duration-300 hover:border-[#d97706] hover:text-[#d97706] lg:hidden"
          >
            {open ? (
              <X size={20} strokeWidth={1.5} />
            ) : (
              <Menu size={20} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`absolute inset-x-0 top-[86px] overflow-hidden border-b border-black/10 bg-white transition-all duration-300 lg:hidden ${
          open
            ? "max-h-[520px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <nav className="container-shell flex flex-col py-4">
          {navigation.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className={`border-b border-black/10 py-4 font-body text-[12px] font-semibold uppercase tracking-[0.17em] transition-colors duration-300 ${
                  active
                    ? "text-[#d97706]"
                    : "text-black/70 hover:text-[#d97706]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/reservation"
            onClick={closeMenu}
            className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#d97706] px-7 py-3.5 font-body text-[10px] font-semibold uppercase tracking-[0.18em] !text-white transition-all duration-300 hover:bg-[#b45309]"
          >
            Reserve a Table
          </Link>
        </nav>
      </div>
    </header>
  );
}

