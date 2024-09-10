'use client'
// Components
import { useTheme } from "./ThemeProvider"
// Assets
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"

interface ToggleThemeProps {
  className?: string;
}

export default function ToggleTheme({ className }: ToggleThemeProps){
  const {theme, toggleTheme} = useTheme()
  return (
    <button
      onClick={toggleTheme}
      className={`${className} p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700`}
    >
      {theme === 'light' ? (
        <MoonIcon className="h-5 w-5 dark:text-white" />
      ) : (
        <SunIcon className="h-5 w-5 dark:text-white" />
      )}
      <span className="sr-only">Toggle Theme</span>
    </button>
  )
}