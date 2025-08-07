"use client";
import * as motion from "motion/react-client"
import { useState } from "react";
import Link from "next/link";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { NavigationData } from "../../../data/navigationData";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "motion/react";
interface NavigationProps {
  layoutClass?: string
  isWorks?: boolean
}

export default function Navigation({ isWorks, layoutClass }: NavigationProps) {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  }

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
    <div className="relative">
      <nav className={`${layoutClass} z-10 w-[37px]`}>
        <div
          className={`z-10 relative p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 ${(isWorks) ? "bg-gray-200" : ""} ${(menu) ? 'bg-gray-200':''}`}
        >
          {menu ? (
            <XMarkIcon className={`w-5 h-5 cursor-pointer hover:text-orange-500 ${menu ? 'text-orange-500' : ''}`} onClick={handleMenu} />
          ) : (
            <Bars3Icon className="w-5 h-5 cursor-pointer dark:text-white hover:text-orange-500" onClick={handleMenu} />
          )}
        </div>
      </nav>
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.2,
              type: "spring",
            }}
          >
            <div className="bg-gray-200 p-2 rounded-md absolute right-0 top-11 ${}">
              { NavigationData.map((item) => 
                item.active ? (
                  <Link 
                    key={item.label} 
                    href={item.href} 
                    rel="noopener" 
                    className={`text-xs uppercase font-semibold block p-1 hover:text-orange-500 ${
                      isActiveLink(item.href) ? "text-orange-500" : ""
                    }`}
                  >
                    <span>{item.label}</span>
                  </Link>
                ) : null
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}