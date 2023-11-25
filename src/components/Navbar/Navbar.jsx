"use client";
import { useState, useContext } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { MenuList } from ".";
import { SearchContext } from "@/context/SearchContextProvider";
import Link from "next/link";

const Navbar = () => {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setShowSearch } = useContext(SearchContext);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="flex items-center justify-between">
        <Link className="font-pacifico text-3xl" href="/">
          Colored Icons
        </Link>

        <div className="hidden md:block">
          <MenuList className="flex items-center gap-12 text-gray-500 font-semibold" />
        </div>

        <div className="flex items-center gap-6">
          <button>
            <CiSearch
              className="text-gray-800 text-2xl"
              onClick={() => setShowSearch(true)}
            />
          </button>
          <button className="block md:hidden">
            {isMenuOpen ? (
              <RxCross2 onClick={toggleMenu} className="text-lg" />
            ) : (
              <RxHamburgerMenu onClick={toggleMenu} className="text-lg" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-8 h-screen bg-white">
          <MenuList className="flex flex-col text-lg font-semibold text-gray-600 divide-y divide-double" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
