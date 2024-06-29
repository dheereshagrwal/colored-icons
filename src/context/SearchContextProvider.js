"use client";
import { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchContextProvider = (props) => {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [isCrossButtonClicked, setIsCrossButtonClicked] = useState(false);

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        showSearch,
        setShowSearch,
        isCrossButtonClicked,
        setIsCrossButtonClicked,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};
