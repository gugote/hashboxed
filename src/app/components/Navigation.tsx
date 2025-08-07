"use client";
import Link from "next/link";
import React from "react";
import { NavigationData } from "../../../data/navigationData";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const isHere = usePathname()

  // Function to check if the current pathname matches the link
  const isActiveLink = (href: string) => {
    if (href === "/" && isHere === "/") {
      return true;
    }
    if (href !== "/" && isHere.startsWith(href)) {
      return true;
    }
    return false;
  };

  return(
    <div>
      { NavigationData.map((item) => 
        item.active ? (
          <React.Fragment key={item.label}>
            <Link 
              key={item.label} 
              href={item.href} 
              rel="noopener" 
              className={`text-xs uppercase font-semibold p-1 hover:text-orange-500 ${
                isActiveLink(item.href) ? "text-orange-500" : ""
              }`}
            >
              <span>{item.label}</span>
            </Link>
            <span className="last:hidden">/</span>
          </React.Fragment>
        ) : null
      )}
    </div>
  );
}