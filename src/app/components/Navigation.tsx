"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  // Function to generate navigation items based on URL structure
  const generateNavigationItems = () => {
    if (pathname === "/") {
      return [{ label: "Home", href: "/", isActive: true }];
    }

    const segments = pathname.split("/").filter(Boolean);
    const items = [{ label: "Home", href: "/", isActive: false }];
    
    let currentPath = "";
    
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Convert segment to readable label
      const label = segment
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      
      const isActive = index === segments.length - 1;
      
      items.push({
        label,
        href: currentPath,
        isActive
      });
    });
    
    return items;
  };

  const navigationItems = generateNavigationItems();

  return (
    <div>
      {navigationItems.map((item, index) => (
        <React.Fragment key={item.href}>
          <Link 
            href={item.href} 
            rel="noopener" 
            className={`text-xs uppercase font-semibold p-1 hover:text-orange-500 ${
              item.isActive ? "text-orange-500" : ""
            }`}
          >
            <span>{item.label}</span>
          </Link>
          {index < navigationItems.length - 1 && (
            <span className="last:hidden">/</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}