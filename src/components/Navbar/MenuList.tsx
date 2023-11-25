import Link from "next/link";

interface MenuListProps {
  className: string;
}

const MenuList: React.FC<MenuListProps> = ({ className }) => {
  return (
    <div className={className}>
      {links.map((link, index) =>
        link !== "divider" ? (
          <Link
            key={index}
            className="transition hover:text-blue-500 py-3.5"
            href={url}
            target="_blank"
          >
            {link}
          </Link>
        ) : (
          <div key={index} className="pt-3"></div>
        )
      )}
    </div>
  );
};

const links: string[] = ["About", "Docs", "Installation", "divider"];
const url: string =
  "https://github.com/dheereshagrwal/colored-icons/blob/master/README.md";

export default MenuList;
