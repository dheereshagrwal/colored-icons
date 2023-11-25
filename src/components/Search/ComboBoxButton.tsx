import { Combobox } from "@headlessui/react";
import { CiSearch, CiSquareRemove } from "react-icons/ci";
import { useContext } from "react";
import { SearchContext } from "@/context/SearchContextProvider";

interface ComboBoxButtonProps {}

const ComboBoxButton: React.FC<ComboBoxButtonProps> = () => {
  const { setIsCrossButtonClicked } = useContext(SearchContext);
  return (
    <>
      <Combobox.Button className="absolute inset-y-0 left-0 pl-4">
        <CiSearch
          className="text-2xl text-gray-400 hover:text-gray-700"
          aria-hidden="true"
        />
      </Combobox.Button>
      <Combobox.Button
        className="absolute inset-y-0 right-0 pr-4  text-gray-400 hover:text-gray-700"
        onClick={() => setIsCrossButtonClicked(true)}
      >
        <CiSquareRemove className="text-2xl" aria-hidden="true" />
      </Combobox.Button>
    </>
  );
};

export default ComboBoxButton;
