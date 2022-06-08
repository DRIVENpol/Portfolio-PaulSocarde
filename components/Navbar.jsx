import React from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { PlusSmIcon } from '@heroicons/react/solid'
import { useTheme } from 'next-themes'
import Link from 'next/link';
import ToggleButton from './ToggleButtons'




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const { theme, setTheme } = useTheme()


    const navigation = [
      { name: 'About Me', href: '#about', current: '' },
      { name: 'Skills', href: '#skills', current: ''},
      { name: 'Articles', href: '#articles', current: ''},
    ]

  return (  <>
    <Disclosure as="nav" className="bg-slate-100 dark:bg-slate-900 sticky top-0 z-30">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-shrink-0 flex items-center">
                <Link href="/">
          <div
            className="flexCenter cursor-pointer"
            onClick={() => {}}
          >
          
            <p className="text-nft-black-1
            dark:text-white
            font-semibold
            text-lg
            ml-2"
            >👨🏼 Paul Socarde
            </p>
           
          </div>
        </Link>
                </div>
                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={
                        item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 dark:bg-gray-800 text-white' : 'text-gray-500 dark:text-gray-200 hover:bg-gray-700 hover:text-white',
                        'px-3 py-2 rounded-md text-sm font-medium'
                      )}
                      aria-current={item.current ==='true' ? 'page' : undefined}
                      onChange={() => {
                        item.current = 'true';
                      }}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-5">
                  <button
                    type="button"
                    className="hidden md:flex relative items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium 
                    rounded-md text-white 
                    bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl
                  dark:focus:ring-blue-800
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                  >
                    <PlusSmIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                    <span>Contact Me</span>
                  </button>

                </div>
                <ToggleButton sm={() => {setTheme(theme === 'light' ? 'dark' : 'light')}}/>
               
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current === 'true' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-500 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <button
                    type="button"
                    className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium 
                    rounded-md text-white  bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500
                    ml-3 mb-10"
                  >
                    <span>Contact Me</span>
                  </button>
          </Disclosure.Panel>
        </>
      )}

    </Disclosure>
</>)
}