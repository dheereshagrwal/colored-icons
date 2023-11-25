"use client";
import { useState } from "react";
import Dropdown from "./Dropdown";
import IconList from "../Icon/IconList";
import Modal from "../Icon/Modal";
import categories from "../../icons/categories";
import icons from "@/icons/icons";

export default function Filter() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState({});

  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col sm:flex-row gap-10">
      <div className="hidden sm:flex flex-col gap-3 text-sm w-48">
        {categories.map((category) => (
          <button
            key={category.name}
            className={`inline-flex items-center px-4 py-2 font-medium rounded-md text-gray-900 hover:bg-gray-50 border-2 ring-1 w-48 ${
              selectedCategory.name === category.name
                ? "border-blue-500 ring-blue-500"
                : "border-transparent ring-transparent"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="sm:hidden">
        <Dropdown
          categories={categories}
          selectedCategory={selectedCategory}
          onChange={setSelectedCategory}
        />
      </div>
      <div>
        <IconList
          icons={icons}
          selectedCategory={selectedCategory}
          handleIconClick={handleIconClick}
        />
      </div>

      {isModalOpen && <Modal icon={selectedIcon} onClose={closeModal} />}
    </div>
  );
}
