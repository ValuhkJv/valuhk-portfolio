"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

/** Floating nav shown on every page; highlights the current page. */
export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main"
      className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-stretch gap-1 rounded-md border border-line-strong bg-[var(--nav-bg)] p-1 text-xs backdrop-blur-sm"
    >
      {links.map((link) => {
        const active = isActive(pathname, link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={`rounded-sm px-3.5 py-2.5 transition-colors ${
              active ? "bg-ink text-bg" : "hover:text-accent"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
      <span aria-hidden="true" className="my-1.5 w-px bg-line-strong" />
      <ThemeToggle className="rounded-sm px-3" />
    </nav>
  );
}
