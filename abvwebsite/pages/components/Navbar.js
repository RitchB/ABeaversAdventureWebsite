import React, { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import Button from "./Button";
import { Menu, Transition } from "@headlessui/react";
import { FaWindowClose } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsTwitter } from "react-icons/bs";

const Navbar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <nav>
      <div className="mt-8 flex justify-between">
        <div className="flex gap-8">
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className="items-center text-5xl text-blue-900 hover:text-blue-700 tracking-tight antialised font-Schoolbell"
            >
              A Beaver's Adventure
            </Link>
          </div>
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://objkt.com/collection/KT1GUKaPHrc4T6ZtShKv1zGMiuKLkmFnatpn"
              className="text-3xl text-red-700 hover:text-red-800 antialised font-PatrickHandSC"
            >
              Genesis Collection
            </Link>
            <Link
              href="/lore"
              className="text-3xl text-red-700 hover:text-red-800 antialised font-PatrickHandSC"
            >
              Lore
            </Link>
            <Link
              href="/about"
              className="text-3xl text-red-700 hover:text-red-800 antialised font-PatrickHandSC"
            >
              About Arthur
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex flex items-center space-x-1">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/dnbrgnft"
            className="text-twitter text-6xl"
          >
            <BsTwitter />
          </a>
        </div>

        {/*mobile button goes here*/}

        <div className="lg:hidden flex items-center">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button
                onClick={() => setIsMenuToggled(!isMenuToggled)}
                className="text-2xl text-red-700 hover:text-red-900"
              >
                {isMenuToggled ? <FaWindowClose /> : <GiHamburgerMenu />}
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        target="_blank"
                        rel="noreferrer"
                        href="https://objkt.com/collection/KT1GUKaPHrc4T6ZtShKv1zGMiuKLkmFnatpn"
                        className={classNames(
                          active
                            ? " px-4 py-1 block text-2xl text-red-700 hover:text-red-800 antialised font-PatrickHandSC"
                            : " px-4 py-1 block text-2xl text-red-700 antialised font-PatrickHandSC"
                        )}
                      >
                        Genesis Collection
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/lore"
                        className={classNames(
                          active
                            ? " px-4 py-1 block text-2xl text-red-700 hover:text-red-800 antialised font-PatrickHandSC"
                            : " px-4 py-1 block text-2xl text-red-700 antialised font-PatrickHandSC"
                        )}
                      >
                        Lore
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/about"
                        className={classNames(
                          active
                            ? " px-4 py-1 block text-2xl text-red-700 hover:text-red-800 antialised font-PatrickHandSC"
                            : " px-4 py-1 block text-2xl text-red-700 antialised font-PatrickHandSC"
                        )}
                      >
                        About Arthur
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
