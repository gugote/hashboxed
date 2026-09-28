"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-1">
      {navigationItems.map((item, index) => {
        const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

        return (
          <span key={item.href} className="flex items-center gap-1">
            <Link
              href={item.href}
              className={`p-1 text-xs font-semibold uppercase transition hover:text-orange-500 ${isActive ? "text-orange-500" : ""}`}
            >
              {item.label}
            </Link>
            {index < navigationItems.length - 1 && <span className="text-zinc-300">/</span>}
          </span>
        );
      })}
    </nav>
  );
}
