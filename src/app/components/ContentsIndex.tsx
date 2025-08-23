import Link from "next/link"

export default function ContentsIndex(){
  // Define the available routes with their metadata
  const availableRoutes = [
    {
      label: "Home",
      href: "/",
      description: "Main landing page",
      icon: "🏠"
    },
    {
      label: "Work",
      href: "/work",
      description: "Hashboxed latest works",
      icon: "💼"
    },
    {
      label: "Color Names",
      href: "/colornames",
      description: "Color naming utility",
      icon: "🎨"
    }
  ];

  return (
    <>
      <h2 className="tracking-tighter font-extrabold text-2xl mb-2 dark:text-white">Contents</h2>
      <div className="navigation-index-box flex flex-wrap justify-start md:gap-6 my-4">
        {availableRoutes.map((item) => (
          <Link 
            key={item.label} 
            href={item.href} 
            rel="noopener" 
            className="uppercase font-semibold text-xs mb-3 flex flex-col flex-grow-0 flex-shrink-0 justify-start items-start border border-zinc-200 rounded-lg p-4 w-full dark:bg-dark-cards dark:border-dark-cards-border md:w-[calc(33.333%-1rem)] group"
          >
            <span className="group-hover:text-blue-700 font-bold">{item.label}</span>
            <span className="inline-block text-xs font-normal normal-case">{item.description}</span>
          </Link>
        ))}
      </div>
    </>
  )
}
