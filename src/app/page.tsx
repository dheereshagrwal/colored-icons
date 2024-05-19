"use client";
import { useContext } from "react";
import { Navbar } from "@/components/Navbar";
import { Search, FauxSearch } from "@/components/Search";
import { Filter } from "../components/Filter";
import { Shapes, Line } from "@/components/Background";
import { SearchContext } from "@/context/SearchContextProvider";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ['latin'], weight: "700" });


export default function Home() {
  const { showSearch, setShowSearch } = useContext(SearchContext);
  return (
    <>
      <section className="max-w-7xl mx-auto">
        <Shapes />
      </section>
      <section className="-mx-8 mb-2">
        <Line />
      </section>
      <section className="max-w-7xl mx-auto">
        <Navbar />
      </section>
      <section className="mt-20 text-center max-w-7xl mx-auto">
        <h1 className={`text-5xl lg:text-7xl ${poppins.className}`}>All Icons. <br />In one place</h1>
        <h2 className="text-lg mt-6 text-gray-600 max-w-md mx-auto">Colored Icons is the home for the world&apos;s icons.
          Discover the latest logos and colors.</h2>
      </section>
      <section className="mt-10 max-w-md mx-auto" onClick={() => setShowSearch(true)}>
        <FauxSearch />
      </section>
      <Link href="https://github.com/dheereshagrwal/colored-icons" target="_blank" className="text-xs sm:text-sm mt-10 rounded-full gap-2.5 flex items-center h-10 justify-center w-48 mx-auto border bg-gray-100 text-gray-700">
        <FaStar className="text-lg text-amber-500"/>
        <p className="font-semibold">
          Star us on Github
        </p>
      </Link>

      <section className="mt-10">
        {showSearch && <Search />}
      </section>
      <section className="my-20 mx-auto max-w-7xl">
        <h1 className="font-bold text-4xl mb-10">Most Popular Colored Icons</h1>
        <Filter />
      </section>
    </>
  );
}
