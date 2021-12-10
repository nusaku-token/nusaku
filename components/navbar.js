import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import { Disclosure } from "@headlessui/react";

// Menu Icon
function MenuIcon({ open }) {
  return (
    <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      {open && (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
        />
      )}
      {!open && (
        <path
          fillRule="evenodd"
          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
        />
      )}
    </svg>
  );
}

const brand = {
  href: "/",
  src: "/img/logonusaku.png",
};

const comingsoon = {
  name: "Coming soon !!!",
  href: "#dapps",
};

const navlinks = [
  { name: "Nusaku", href: "https://nusaku.id" },
  { name: "Blog", href: "http://nusaku.net" }
];

export default function Navbar() {
  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href={brand.href}>
                  <a className="flex items-center space-x-2 text-green-500 transition duration-500 ease-in-out transform text-xlfont-medium dark:text-gray-100 hover:-translate-y-1 hover:scale-110 ">
                    <span>
                      <img src={brand.src} alt="N" width="50" height="50" />
                    </span>
                  </a>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-gray-500 focus:text-white focus:bg-green-500 focus:outline-none dark:text-gray-500 dark:focus:bg-trueGray-700"
                >
                  <MenuIcon open={open} />
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navlinks.map((link, index) => (
                      <Link key={index} href={link.href} passHref>
                        <a className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-green-500 focus:text-green-500 focus:bg-green-100 focus:outline-none dark:focus:bg-trueGray-700">
                          {link.name}
                        </a>
                      </Link>
                    ))}
                    <Link href={comingsoon.href}>
                      <a className="w-full px-6 py-2 mt-3 text-center text-white bg-green-600 rounded-md lg:ml-5">{comingsoon.name}</a>
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navlinks.map((link, index) => (
              <li key={index} className="mr-3 nav__item">
                <Link href={link.href} passHref>
                  <a className="inline-block px-4 py-2 font-normal text-gray-500 no-underline transition duration-500 ease-in-out transform rounded-md text-lg:px dark:text-gray-200 hover:text-green-500 focus:text-green-500 focus:bg-green-50 focus:outline-none hover:-translate-y-1 hover:scale-110 ">
                    {link.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-3 lg:flex nav__item">
          <Link href={comingsoon.href} passHref>
            <a className="px-6 py-2 text-white transition duration-500 ease-in-out transform rounded-md md:ml-5 hover:-translate-y-1 hover:scale-110 bg-gradient-to-r from-blue-300 to-green-400">
              {comingsoon.name}
            </a>
          </Link>

          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}
