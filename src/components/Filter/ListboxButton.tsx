import { HiChevronUpDown } from "react-icons/hi2";
import { Listbox } from "@headlessui/react";

interface ListboxButtonProps {
  selectedCategory: { name: string };
}

const ListboxButton: React.FC<ListboxButtonProps> = ({ selectedCategory }) => {
  return (
    <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left text-gray-900 shadow-sm focus:outline-none">
      <span>{selectedCategory.name}</span>
      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
        <HiChevronUpDown className="text-xl text-gray-400" aria-hidden="true" />
      </span>
    </Listbox.Button>
  );
};

export default ListboxButton;
