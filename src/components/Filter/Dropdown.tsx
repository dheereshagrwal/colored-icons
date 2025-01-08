import { Listbox, Transition } from "@headlessui/react";
import { ListboxButton, Selected } from ".";
import { Fragment } from "react";
import { Category } from "@/interfaces";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface DropdownProps {
  categories: Category[];
  selectedCategory: Category;
  onChange: (value: Category) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  categories,
  selectedCategory,
  onChange,
}) => {
  return (
    <Listbox value={selectedCategory} onChange={onChange}>
      {({ open }) => (
        <>
          <div className="relative text-sm">
            <ListboxButton selectedCategory={selectedCategory} />
            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-lg bg-white py-2 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                {categories.map((category: Category) => (
                  <Listbox.Option
                    key={category.name}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-gray-100" : "",
                        "relative cursor-default select-none py-3 pl-4 pr-9 transition-colors duration-200"
                      )
                    }
                    value={category}
                  >
                    {({ selected, active }) => (
                      <Selected
                        selected={selected}
                        active={active}
                        category={category}
                      />
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default Dropdown;
