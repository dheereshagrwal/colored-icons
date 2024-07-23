"use client";
import { createContext, useState, ReactNode } from "react";

interface SearchContextType {
  search: string;
  setSearch: (search: string) => void;
  showSearch: boolean;
  setShowSearch: (show: boolean) => void;
  focusTrigger: number;
  triggerFocus: () => void;
}
// Define initial context values
const initialSearchContext: SearchContextType = {
  search: "",
  setSearch: () => {},
  showSearch: false,
  setShowSearch: () => {},
  focusTrigger: 0,
  triggerFocus: () => {},
};

export const SearchContext =
  createContext<SearchContextType>(initialSearchContext);

interface SearchContextProviderProps {
  children: ReactNode;
}

export const SearchContextProvider = ({
  children,
}: SearchContextProviderProps) => {
  const [search, setSearch] = useState<string>("");
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [focusTrigger, setFocusTrigger] = useState<number>(0);

  const triggerFocus = () => {
    setFocusTrigger((prev) => prev + 1);
  };

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        showSearch,
        setShowSearch,
        focusTrigger,
        triggerFocus,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
