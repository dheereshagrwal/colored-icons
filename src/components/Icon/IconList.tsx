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
    <ul className="gap-3 flex flex-col sm:flex-row sm:flex-wrap">
      {icons
        .filter(
          (icon) =>
            icon.category.toLowerCase() === selectedCategory.name.toLowerCase()
        )
        .map((icon) => (
          <li key={icon.name} onClick={() => handleIconClick(icon)}>
            <IconCard icon={icon} />
          </li>
        ))}
    </ul>
  );
};

export default IconList;
