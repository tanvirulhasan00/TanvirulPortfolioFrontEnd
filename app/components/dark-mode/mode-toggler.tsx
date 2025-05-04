import { useContext, useState } from "react";
import { Moon } from "lucide-react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { SunIcon, ComputerDesktopIcon } from "@heroicons/react/20/solid";
import { ThemeContext } from "./theme-provider";

export default function ThemeToggler() {
  const themeContext = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  if (!themeContext) return null;

  const { theme, setTheme } = themeContext;

  return (
    <Menu as={"div"} className="relative inline-block text-left">
      {/* Toggle button */}
      <div>
        <MenuButton
          // onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
          // className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
        >
          {theme === "light" ? (
            <SunIcon className="w-5 h-5" />
          ) : theme === "dark" ? (
            <Moon className="w-5 h-5" />
          ) : (
            <ComputerDesktopIcon className="w-5 h-5" />
          )}
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute z-10 mt-2 w-56 origin-top-right rounded-md text-black dark:text-white bg-white dark:bg-gray-800 border ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <button
              onClick={() => {
                setTheme("light");
                setIsOpen(false);
              }}
              className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
            >
              <SunIcon className="w-4 h-4 mr-2" /> Light
            </button>
          </MenuItem>
          <MenuItem>
            <button
              onClick={() => {
                setTheme("dark");
                setIsOpen(false);
              }}
              className="cursor-pointer flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Moon className="w-4 h-4 mr-2" /> Dark
            </button>
          </MenuItem>
          <MenuItem>
            <button
              onClick={() => {
                setTheme("system");
                setIsOpen(false);
              }}
              className="cursor-pointer flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <ComputerDesktopIcon className="w-4 h-4 mr-2" /> System
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
