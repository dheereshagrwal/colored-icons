import { SearchContext } from "@/context/SearchContextProvider";
import { useContext, useEffect, useRef } from "react";

function SearchBox() {
  const ref = useRef<HTMLInputElement | null>();

  const { search, setSearch, showSearch } = useContext(SearchContext);

  useEffect(() => {
    if (showSearch) {
      ref.current?.focus();
    }
  }, [showSearch]);

  return (
    <input
      ref={ref}
      type="text"
      name="search"
      id="search"
      className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Search icon name"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBox;
