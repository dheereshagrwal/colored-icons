import { useMemo } from "react";
import { IconCard } from ".";
import { Icon, Category } from "@/interfaces";
import useDebounce from "@/hooks/useDebounce";

interface IconListProps {
  icons: Icon[];
  selectedCategory: Category;
  handleIconClick: (icon: Icon) => void;
  search: string;
}

const IconList: React.FC<IconListProps> = ({
  icons,
  selectedCategory,
  handleIconClick,
  search,
}) => {
  const debouncedSearch = useDebounce(search);

  const searchFilteredIcons = useMemo(() => {
    if (!debouncedSearch) return icons;
    const debouncedSearchLowercase = debouncedSearch.toLowerCase();
    return icons.filter(
      (icon) =>
        icon.name.toLowerCase().includes(debouncedSearchLowercase) ||
        icon.url.toLowerCase().includes(debouncedSearchLowercase)
    );
  }, [icons, debouncedSearch]);

  const filteredIcons = useMemo(() => {
    const sortedIcons = searchFilteredIcons.sort((a, b) =>
      a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    );

    if (selectedCategory.name === "All") {
      return sortedIcons.map((icon) => (
        <li key={icon.name} onClick={() => handleIconClick(icon)}>
          <IconCard icon={icon} />
        </li>
      ));
    } else {
      return sortedIcons
        .filter(
          (icon) =>
            icon.category.toLowerCase() === selectedCategory.name.toLowerCase()
        )
        .map((icon) => (
          <li key={icon.name} onClick={() => handleIconClick(icon)}>
            <IconCard icon={icon} />
          </li>
        ));
    }
  }, [handleIconClick, searchFilteredIcons, selectedCategory.name]);

  return (
    <ul className="flex flex-col sm:flex-row sm:flex-wrap justify-between gap-3">
      {filteredIcons}
    </ul>
  );
};

export default IconList;
