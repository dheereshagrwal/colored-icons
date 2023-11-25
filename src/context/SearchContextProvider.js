"use client";
import { createContext, useState } from "react";

// Create Context Object
export const SearchContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const SearchContextProvider = (props) => {
  const [showSearch, setShowSearch] = useState(false);
  const [isCrossButtonClicked, setIsCrossButtonClicked] = useState(false);

  return (
    <SearchContext.Provider
      value={{
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
