import { ReactElement } from "react"

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
    //icon: "",
    description: "Everything else",
  },
  {
    label: "Work",
    href: "/work",
    active: true,
    //icon: '',
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