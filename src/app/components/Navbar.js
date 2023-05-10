"use client";

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import logo from '../../../public/logo.png'

const navigation = [
  { name: 'Projects', href:'/projects' },
  { name: 'About', href:'/about' },
  { name: 'Learning', href:'/learning' },
  { name: 'Coffee?', href:'/contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-[#fff]">
      <header className="fixed inset-x-0 top-0 z-50 bg-[#fff]">
        <nav className="flex items-center justify-between py-4 px-4 md:px-40 md:py-4" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href='/' className="-m-1.5 p-1.5">
              <Image
                className="h-8 w-auto"
                src={logo}
                alt="Logo"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-md font-medium leading-6 text-gray-900 py-3 px-4 rounded-lg hover:bg-[#f1f1f5] duration-300">
                {item.name}
              </a>
            ))}
          </div>
          
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#fff] px-10 py-10 sm:max-w-full sm:ring-1 sm:ring-gray-900/10">
            <div className="flex justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">logo</span>
                <Image
                  className="h-8 w-auto"
                  src={logo}
                  alt="logo"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-lg font-medium leading-8 text-black duration-300 hover:bg-[#f1f15]"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  )
}
