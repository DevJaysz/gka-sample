import React, { useState } from "react";
import NavLogo from "./../../assets/nav/NavLogo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="pt-5 px-6 bg-slate-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-5 rounded-full bg-slate-50">
        <div className="flex items-center">
          <div className="w-32">
            <img src={NavLogo} alt="Logo" />
          </div>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-zinc-700 font-bold">
            Apparel
          </a>
          <a href="#" className="text-zinc-700 font-bold">
            Accessories
          </a>
          <a href="#" className="text-zinc-700 font-bold">
            Home & Lifestyle
          </a>
          <a href="#" className="text-zinc-700 font-bold">
            Collections
          </a>
        </div>
        <div className="hidden md:flex space-x-4">
          <button className="border-2 border-grey-500 px-4 py-2 font-bold rounded-3xl">
            Log In
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 font-bold rounded-3xl">
            Get Started
          </button>
        </div>
        <button
          className="md:hidden text-zinc-700 dark:text-zinc-300"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          Menu
        </button>
      </div>
      {isOpen && (
        <div id="mobile-menu" className="md:hidden bg-slate-50 px-6 py-4">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-zinc-700 font-bold">
              Apparel
            </a>
            <a href="#" className="text-zinc-700 font-bold">
              Accessories
            </a>
            <a href="#" className="text-zinc-700 font-bold">
              Home & Lifestyle
            </a>
            <a href="#" className="text-zinc-700 font-bold">
              Collections
            </a>
          </nav>
          <div className="flex flex-col space-y-4 mt-4">
            <button className="border-2 border-grey-500 px-4 py-2 font-bold rounded-3xl">
              Log In
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 font-bold rounded-3xl">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
