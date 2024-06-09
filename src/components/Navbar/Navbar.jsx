import React, { useState } from "react";
import NavLogo from "./../../assets/nav/NavLogo.png";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="pt-5 px-6">
      <div className="container mx-auto flex justify-between items-center px-6 py-5 rounded-full bg-slate-50">
        <div className="flex items-center">
          <div className="w-32">
            <img src={NavLogo} alt="Logo" />
          </div>
        </div>
        <div className="hidden md:flex space-x-8">
          <a
            href="#"
            className="relative font-bold text-l w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            Apparel
          </a>
          <a
            href="#"
            className="relative font-bold text-l w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            Accessories
          </a>
          <a
            href="#"
            className="relative font-bold text-l w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            Home & Lifestyle
          </a>
          <a
            href="#"
            className="relative font-bold text-l w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            Collections
          </a>
        </div>
        <div className="hidden md:flex space-x-4">
          <button className="border-2 border-grey-500 px-4 py-2 font-bold rounded-3xl">
            Log In
          </button>
          <button className="bg-gray-800 text-white px-4 py-2 font-bold rounded-3xl">
            Get Started
          </button>
        </div>
        <button
          className="md:hidden font-semibold"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3BottomRightIcon className="h-6 w-6" />
          )}
        </button>
      </div>
      <div
        id="mobile-menu"
        className={`md:hidden bg-slate-50 px-6 pt-0 pb-10 fixed top-5 left-0 w-full h-50 z-50 flex flex-col items-center transition-transform transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-full flex justify-end p-4">
          <button
            className="font-semibold"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <XMarkIcon className="w-6" />
          </button>
        </div>
        <div className="mt-0 flex flex-col items-center space-y-4">
          <a
            href="#"
            className="text-zinc-700 font-bold hover:bg-gray-800 hover:text-white px-4 py-2 rounded-md"
          >
            Apparel
          </a>
          <a
            href="#"
            className="text-zinc-700 font-bold hover:bg-gray-800 hover:text-white px-4 py-2 rounded-md"
          >
            Accessories
          </a>
          <a
            href="#"
            className="text-zinc-700 font-bold hover:bg-gray-800 hover:text-white px-4 py-2 rounded-md"
          >
            Home & Lifestyle
          </a>
          <a
            href="#"
            className="text-zinc-700 font-bold hover:bg-gray-800 hover:text-white px-4 py-2 rounded-md"
          >
            Collections
          </a>
        </div>
        <div className="flex flex-col items-center space-y-4 mt-4">
          <button className="border-2 border-grey-500 px-4 py-2 font-bold rounded-3xl">
            Log In
          </button>
          <button className="bg-gray-800 text-white px-4 py-2 font-bold rounded-3xl">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
