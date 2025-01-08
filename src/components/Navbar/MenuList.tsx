import Link from "next/link";

interface MenuListProps {
  className?: string;
  onClick?: () => void;
}

const MenuList: React.FC<MenuListProps> = ({ className, onClick }) => {
  return (
    <ul className={className} onClick={onClick}>
      <li>
        <Link
          href="/"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          About
        </Link>
      </li>
      <li>
        <a
          href="https://github.com/dheereshagrwal/colored-icons/blob/master/README.md"
          target="_blank"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          Docs
        </a>
      </li>
    </ul>
  );
};

export default MenuList;
