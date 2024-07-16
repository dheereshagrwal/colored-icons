import { IconCard } from ".";
import { Icon, Category } from "@/interfaces";

interface IconListProps {
  icons: Icon[];
  selectedCategory: Category;
  handleIconClick: (icon: Icon) => void;
}

const IconList: React.FC<IconListProps> = ({
  icons,
  selectedCategory,
  handleIconClick,
}) => {
  return (
    <ul className="flex flex-col sm:flex-row sm:flex-wrap justify-between gap-3">
      {icons
        .filter(
          (icon) =>
            icon.category.toLowerCase() === selectedCategory.name.toLowerCase()
        )
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((icon) => (
          <li key={icon.name} onClick={() => handleIconClick(icon)}>
            <IconCard icon={icon} />
          </li>
        ))}
    </ul>
  );
};

export default IconList;
