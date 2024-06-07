import React from "react";

function Navbar() {
  return (
    <nav className="container mx-auto flex justify-between items-center px-6 py-4">
      <div className="flex items-center">
        <img
          src="https://placehold.co/40x40"
          alt="Logo"
          className="h-10 w-10"
          crossorigin="anonymous"
        />
        <span className="ml-3 text-xl font-semibold text-zinc-900 dark:text-black">
          <h1>zanrly</h1>
        </span>
      </div>
      <nav className="hidden md:flex space-x-8">
        <a href="#" className="text-zinc-700 dark:text-zinc-300">
          Features
        </a>
        <a href="#" className="text-zinc-700 dark:text-zinc-300">
          Solutions
        </a>
        <a href="#" className="text-zinc-700 dark:text-zinc-300">
          Resources
        </a>
        <a href="#" className="text-zinc-700 dark:text-zinc-300">
          Pricing
        </a>
      </nav>
      <div className="hidden md:flex space-x-4">
        <button className="text-zinc-700 dark:text-zinc-300">Log In</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Get Started
        </button>
      </div>
      <button className="md:hidden text-zinc-700 dark:text-zinc-300">
        Menu
      </button>
    </nav>
  );
}

export default Navbar;
