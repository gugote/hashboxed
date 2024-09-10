import Link from "next/link"
import { NavigationData } from "../../../data/navigationData"

export default function ContentsIndex(){
  return (
    <>
      <h2 className="tracking-tighter font-extrabold text-2xl mb-2 dark:text-white">Contents</h2>
      <div className="navigation-index-box flex flex-wrap justify-start gap-6 my-4">
        { NavigationData.map((item) => 
          item.active ? (
          <Link key={item.label} href={item.href} rel="noopener" className="uppercase font-semibold text-xs mb-3 last:mb-0 flex flex-col border border-zinc-200 rounded-lg p-4 w-[calc(33.333%-1rem)] flex-grow-0 flex-shrink-0 dark:bg-dark-cards dark:border-dark-cards-border">
            <span className="w-6 h-6 inline-block mb-2">
              {item.icon}
            </span>
            {item.label}
            <span className="inline-block text-xs font-normal normal-case">{item.description}</span>
          </Link>
          ) : null
        )}
      </div>
    </>
  )
}
