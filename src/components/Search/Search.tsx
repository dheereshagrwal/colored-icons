import { useState, useContext, useRef } from "react";
import { Combobox } from "@headlessui/react";
import { ComboBoxInput, ComboBoxButton, ComboBoxOption } from ".";
import { Modal } from "@/components/Icon";
import { icons } from "@/constants";
import { SearchContext } from "@/context/SearchContextProvider";
import useOutsideClick from "@/hooks/useOutsideClick";
import { Icon } from "@/interfaces";

const temp: Icon = {
  name: "",
  classes: ["ci", "ci-transparent"],
  category: "technology",
  url: ""
};

export default function Search() {
  const [query, setQuery] = useState<string>("");
  const [selectedIcon, setSelectedIcon] = useState<Icon>(temp);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // State to control the modal
  const closeModal = () => setIsModalOpen(false);
  const { setShowSearch, isCrossButtonClicked, setIsCrossButtonClicked } =
    useContext(SearchContext);
  const modalRef = useRef<HTMLDivElement>(null); // Create a ref for the Modal
  const comboboxRef = useRef<HTMLDivElement>(null);

  useOutsideClick(comboboxRef, modalRef, () => setShowSearch(false)); // Pass modalRef as the second argument

  const filteredIcons: Icon[] = icons.filter((icon: Icon) => {
    if (query === "") {
      return true;
    }

    const lowerCaseQuery = query.toLowerCase();

    // Check in name
    if (icon.name.toLowerCase().includes(lowerCaseQuery)) {
      return true;
    }

    // Check in classes
    for (let i = 0; i < icon.classes.length; i++) {
      if (icon.classes[i].toLowerCase().includes(lowerCaseQuery)) {
        return true;
      }
    }

    // Check in url
    if (icon.url.toLowerCase().includes(lowerCaseQuery)) {
      return true;
    }

    return false;
  });


  return (
    <div className="fixed inset-0 backdrop-blur-lg flex justify-center items-center px-6">
      <Combobox
        as="div"
        value={selectedIcon}
        onChange={(icon: Icon) => {
          setSelectedIcon(icon);
          setIsModalOpen(true);
          setIsCrossButtonClicked(false);
        }}
        className="w-full relative rounded-full shadow border-2 ring-1 ring-blue-500 border-blue-500 border-opacity-75 max-w-md"
        ref={comboboxRef}
      >
        <ComboBoxInput
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)}
          displayValue={isCrossButtonClicked ? "" : selectedIcon.name}
        />

        <ComboBoxButton />

        {filteredIcons.length > 0 && (
          <Combobox.Options className="absolute mt-2 max-h-56 w-full bg-white rounded-xl text-sm drop-shadow-2xl overflow-auto shadow-2xl">
            {filteredIcons.map((icon: Icon) => (
              <ComboBoxOption icon={icon} key={icon.classes[0]} />
            ))}
          </Combobox.Options>
        )}
      </Combobox>

      {isModalOpen && (
        <div ref={modalRef}>
          <Modal icon={selectedIcon} onClose={closeModal} />
        </div>
      )}
    </div>
  );
}
