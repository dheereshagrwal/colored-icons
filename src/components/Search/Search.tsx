import { SearchContext } from "@/context/SearchContextProvider";
import { useContext, useEffect, useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";

function SearchBox() {
  const ref = useRef<HTMLInputElement>(null);

  const {
    search,
    setSearch,
    showSearch,
    focusTrigger,
  } = useContext(SearchContext);

  useEffect(() => {
    if (showSearch || focusTrigger) {
      ref.current?.focus();
    }
  }, [showSearch, focusTrigger]);
  const handleClearSearch = () => {
    setSearch("");
    ref.current?.focus();
  };
  return (
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
        className="w-full rounded-xl py-2.5 pe-10 shadow-sm sm:text-sm border-gray-200 ring-blue-500"
        placeholder="Search icon name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
        <button
          type="button"
          className="text-gray-600 hover:text-gray-700"
          onClick={handleClearSearch}
        >
          <span className="sr-only">Search</span>
          <IoCloseOutline className="text-gray-400 text-lg hover:text-gray-800" />
        </button>
      </span>
    </div>
  );
}

export default SearchBox;
