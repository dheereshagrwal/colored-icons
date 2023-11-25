import Link from "next/link";

const MenuList = ({ className }) => {
  return (
    <div className={className + " divide-y divide-double"}>
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

const links = ["About", "Docs", "Installation", "divider"];
const url =
  "https://github.com/dheereshagrwal/colored-icons/blob/master/README.md";

export default MenuList;
