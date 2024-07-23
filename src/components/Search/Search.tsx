import { SearchContext } from "@/context/SearchContextProvider";
import { useContext, useEffect, useRef } from "react";
import { CiSearch } from "react-icons/ci";

function SearchBox() {
  const ref = useRef<HTMLInputElement>(null);

  const { search, setSearch, showSearch, focusTrigger } =
    useContext(SearchContext);

  useEffect(() => {
    if (showSearch) {
      ref.current?.focus();
    }
  }, [showSearch, focusTrigger]);

  return (
    // <div>
    //   <input
    //     ref={ref}
    //     type="text"
    //     name="search"
    //     id="search"
    //     className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //     placeholder="Search icon name"
    //     value={search}
    //     onChange={(e) => setSearch(e.target.value)}
    //   />
    // </div>

    <div className="relative">
      <label htmlFor="Search" className="sr-only">
        {" "}
        Search{" "}
      </label>

      <input
        ref={ref}
        type="text"
        name="search"
        id="Search"
        className="w-full rounded-xl py-2.5 pe-10 shadow-sm sm:text-sm border-blue-500 ring-blue-500"
        placeholder="Search icon name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
        <button type="button" className="text-gray-600 hover:text-gray-700">
          <span className="sr-only">Search</span>
          <CiSearch className="text-gray-800 text-xl" />
        </button>
      </span>
    </div>
  );
}

export default SearchBox;
