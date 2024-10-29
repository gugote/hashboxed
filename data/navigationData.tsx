import { ReactElement } from "react"
import { HomeModernIcon } from "@heroicons/react/24/outline"
import { BriefcaseIcon } from "@heroicons/react/24/outline"

export interface NavigationDataTypes {
  label: string,
  href: string,
  active: boolean,
  icon?: ReactElement,
  description: string,
}

export const NavigationData: NavigationDataTypes[] = [
  {
    label: "Home",
    href: "/",
    active: true,
    icon: <HomeModernIcon className="w-full" />,
    description: "Everything else",
  },
  {
    label: "Works",
    href: "/works",
    active: true,
    icon: <BriefcaseIcon className="w-full" />,
    description: "View Hashboxed latest works",
  },
  {
    label: "Design Crit",
    href: "/design-crit-service",
    active: false,
    // icon: "",
    description: "",
  },
  {
    label: "Writing",
    href: "/writing",
    active: false,
    // icon: "",
    description: "",
  },
  {
    label: "Books",
    href: "/books",
    active: false,
    // icon: "",
    description: "",
  },
  {
    label: "Movies",
    href: "/movies",
    active: false,
    // icon: "",
    description: "",
  },
  {
    label: "Series",
    href: "/series",
    active: false,
    // icon: "",
    description: "",
  },
  {
    label: "Games",
    href: "/games",
    active: false,
    // icon: "",
    description: "",
  },
  {
    label: "Newsletters",
    href: "/newsletters",
    active: false,
    // icon: "",
    description: "",
  },
  {
    label: "Objects",
    href: "/objects",
    active: false,
    // icon: "",
    description: "",
  }
]