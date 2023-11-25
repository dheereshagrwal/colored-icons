import { useState, useContext, useRef } from "react";
import { Combobox } from "@headlessui/react";
import { ComboBoxInput } from "./ComboBoxInput";
import { ComboBoxButton } from "./ComboBoxButton";
import { ComboBoxOption } from "./ComboBoxOption";
import Modal from "../Icon/Modal";
import icons from "../../icons/icons";
import { SearchContext } from "@/context/SearchContextProvider";
import useOutsideClick from "@/hooks/useOutsideClick";

export default function Search() {
  const [query, setQuery] = useState("");
  const [selectedIcon, setSelectedIcon] = useState(temp);
  const [isModalOpen, setIsModalOpen] = useState(false); // state to control the modal
  const closeModal = () => setIsModalOpen(false);
  const { setShowSearch, isCrossButtonClicked, setIsCrossButtonClicked } =
    useContext(SearchContext);
  const modalRef = useRef(); // Create a ref for the Modal
  const comboboxRef = useRef();

  useOutsideClick(comboboxRef, modalRef, () => setShowSearch(false)); // Pass modalRef as the second argument

  const filteredIcons =
    query === ""
      ? icons
      : icons.filter((icon) => {
          return icon.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="fixed inset-0 backdrop-blur-lg flex justify-center items-center z-10 px-6">
      <Combobox
        as="div"
        value={selectedIcon}
        onChange={(icon) => {
          setSelectedIcon(icon);
          setIsModalOpen(true);
          setIsCrossButtonClicked(false);
        }}
        className="w-full relative rounded-full shadow border-2 ring-1 ring-blue-500 border-blue-500 border-opacity-75 max-w-md"
        ref={comboboxRef}
      >
        <ComboBoxInput
          shouldFocus={true}
          onChange={(event) => setQuery(event.target.value)}
          displayValue={isCrossButtonClicked ? "" : (icon) => icon.name}
        />
        <ComboBoxButton />

        {filteredIcons.length > 0 && (
          <Combobox.Options className="absolute mt-2 max-h-56 w-full bg-white rounded-xl text-sm drop-shadow-2xl overflow-auto z-10 shadow-2xl">
            {filteredIcons.map((icon) => (
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

const temp = { name: "", class: "ci ci-transparent", category: "technology" };
