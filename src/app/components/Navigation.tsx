"use client";
// React / Frameworks
import { useState } from "react";
import Link from "next/link";
// Components
// Assets
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
// Data
import { NavigationData } from "../../../data/navigationData";

interface NavigationProps {
  layoutClass?: string
}

export default function Navigation({ layoutClass }: NavigationProps) {
  
  const [menu, setMenu] = useState(false);
  
  const handleMenu = () => {
    setMenu(!menu);
  }


  return(
    <nav className={`${layoutClass} z-10`}>
      <div className="z-10 relative p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
        {menu ? (
          <XMarkIcon className="w-5 h-5 cursor-pointer" onClick={handleMenu} />
        ) : (
          <Bars3Icon className="w-5 h-5 cursor-pointer dark:text-white" onClick={handleMenu} />
        )}
      </div>
      {menu && (
        <div className="border shadow-lg pl-5 pr-5 py-5 absolute top-[-10px] right-[-10px] bg-white rounded-md w-[250px]">
          { NavigationData.map((item) => 
            item.active ? (
              <Link key={item.label} href={item.href} rel="noopener" className="uppercase font-semibold text-sm mb-3 last:mb-0 flex flex-row py-2 px-2 hover:bg-zinc-100 items-center w-[85%] rounded-lg">
                <span className="w-6 mr-2">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ) : null
          )}
        </div>
      )}
    </nav>
  );
}