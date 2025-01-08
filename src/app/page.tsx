"use client";
import { Navbar } from "@/components/Navbar";
import { Search } from "@/components/Search";
import { Filter } from "../components/Filter";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import { Inter, Outfit } from "next/font/google";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"], weight: ["600"] });

export default function Home() {
  const searchRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`relative isolate ${inter.className}`}>
      {/* Gradient Background Elements */}

      <section className="max-w-7xl mx-auto px-6">
        <Navbar />
      </section>

      <section className="mx-auto max-w-2xl py-12 sm:py-20 lg:py-28 text-center px-6">
        <h1
          className={`mt-7 text-balance text-5xl sm:text-7xl ${outfit.className} tracking-tight text-gray-900 font-semibold`}
        >
          Beautiful Icons. <br />
          Endless Possibilities
        </h1>
        <h2 className="mt-8 text-pretty text-lg font-medium text-gray-600 sm:text-xl/8 max-w-md mx-auto">
          Your one-stop destination for stunning colored icons. Find the perfect
          icon to bring your designs to life.
        </h2>

        <div className="mt-8 sm:flex sm:justify-center">
          <Link
            href="https://github.com/dheereshagrwal/colored-icons"
            target="_blank"
            className="relative rounded-full px-4 py-2 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 flex items-center gap-2"
          >
            <FaStar className="text-lg text-amber-500" />
            <span className="font-semibold">Star us on Github</span>
          </Link>
        </div>
      </section>

      {/* Bottom Gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-400 to-purple-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>

      <section className="mt-20 mb-20 mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-5 lg:gap-0 lg:items-center mb-10">
          <h1
            id="popular-icons"
            className={`${outfit.className} text-4xl text-gray-900`}
          >
            Most Popular Colored Icons
          </h1>
          <div id="search" className="lg:w-4/12">
            <Search />
          </div>
        </div>
        <Filter />
      </section>
    </div>
  );
}
