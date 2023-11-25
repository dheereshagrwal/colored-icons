"use client";
import { Icon, Category } from "@/interfaces";
import { useState } from "react";
import { Dropdown } from ".";
import { IconList, Modal } from "@/components/Icon";
import { icons, categories } from "@/constants";


const Filter = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(categories[0]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedIcon, setSelectedIcon] = useState<Icon | {}>({});

  const handleIconClick = (icon: Icon) => {
    setSelectedIcon(icon);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col sm:flex-row gap-10">
      <div className="hidden sm:flex flex-col gap-3 text-sm w-48">
        {categories.map((category: Category) => (
          <button
            key={category.name}
            className={`inline-flex items-center px-4 py-2 font-medium rounded-md text-gray-900 hover:bg-gray-50 border-2 ring-1 w-48 ${selectedCategory.name === category.name
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

      {isModalOpen && <Modal icon={selectedIcon as Icon} onClose={closeModal} />}
    </div>
  );
};

export default Filter;
