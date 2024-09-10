// React / Frameworks
import { useState } from "react";
import Link from "next/link";
// Components
// Assets
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
// Data
import { NavigationData } from "../../../data/navigationData";

interface NavigationProps {
  className?: string
}

export default function Navigation({ className }: NavigationProps) {
  
  const [menu, setMenu] = useState(false);
  
  const handleMenu = () => {
    setMenu(!menu);
  }


  return(
    <nav className={`${className} z-10`}>
      <div className="z-10 relative">
        {menu ? (
          <XMarkIcon className="w-6 h-6" onClick={handleMenu} />
        ) : (
          <Bars3Icon className="w-6 h-6 dark:text-white" onClick={handleMenu} />
        )}
      </div>
      {menu && (
        <div className="border shadow-lg pl-5 pr-5 py-5 absolute top-[-10px] right-[-10px] bg-white rounded-md w-[200px]">
          { NavigationData.map((item) => 
            item.active ? (
              <Link key={item.label} href={item.href} rel="noopener" className="block uppercase font-semibold text-sm mb-3 last:mb-0">
                {item.icon}
                {item.label}
              </Link>
            ) : null
          )}
        </div>
      )}
    </nav>
  );
}