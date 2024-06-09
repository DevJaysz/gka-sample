import React from "react";
import NavLogo from "./../../assets/nav/NavLogo.png";

function Navbar() {
  return (
    <nav className="pt-5">
      <div className="container mx-auto flex justify-between items-center px-6 py-5 rounded-full bg-slate-50 ">
        <div className="flex items-center">
          <div className="w-44">
            {" "}
            <img src={NavLogo} alt="" />
          </div>

          <div className="ml-3 text-xl font-semibold text-zinc-900 dark:text-black"></div>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-zinc-700  font-bold">
            Apparel
          </a>
          <a href="#" className="text-zinc-700  font-bold">
            Accessories
          </a>
          <a href="#" className="text-zinc-700  font-bold">
            Home & Lifestyle
          </a>
          <a href="#" className="text-zinc-700 font-bold">
            Collections
          </a>
        </nav>
        <div className="hidden md:flex space-x-4">
          <button className="border-2 border-grey-500  px-4 py-2 font-bold rounded-3xl ">
            Log In
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 font-bold rounded-3xl">
            Get Started
          </button>
        </div>
        <button className="md:hidden text-zinc-700 dark:text-zinc-300">
          Menu
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
