import { useState, useContext } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { MenuList } from ".";
import { SearchContext } from "@/context/SearchContextProvider";
import Link from "next/link";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

const Navbar: React.FC = () => {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { setShowSearch } = useContext(SearchContext);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="flex items-center justify-between">
        <Link
          className={`${pacifico.className} text-3xl lg:w-1/3`}
          href="/"
        >
          Colored Icons
        </Link>
        
        <div className="hidden lg:block lg:w-1/3">
          <MenuList className="flex items-center justify-center gap-12 text-gray-500 font-semibold text-xl" />
        </div>

        <div className="flex items-center justify-end gap-6 lg:w-1/3">
          <button>
            <CiSearch
              className="text-gray-800 text-2xl"
              onClick={() => setShowSearch(true)}
            />
          </button>
          <button className="block lg:hidden">
            {isMenuOpen ? (
              <RxCross2 onClick={toggleMenu} className="text-lg" />
            ) : (
              <RxHamburgerMenu onClick={toggleMenu} className="text-lg" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden mt-8 h-screen bg-white">
          <MenuList className="flex flex-col text-lg font-semibold text-gray-600 divide-y divide-double" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
