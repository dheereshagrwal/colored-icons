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
          <div className="relative text-sm border rounded-md">
            <ListboxButton selectedCategory={selectedCategory} />
            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 shadow-lg focus:outline-none">
                {categories.map((category: Category) => (
                  <Listbox.Option
                    key={category.name}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-gray-100" : "",
                        "relative cursor-default select-none py-2 pl-3"
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
