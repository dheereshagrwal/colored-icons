import Link from "next/link";

const MenuList = ({ className }) => {
  return (
    <div className={className}>
      <Link
        className="transition hover:text-blue-500"
        href="https://github.com/dheereshagrwal/colored-icons/blob/master/README.md"
        target="_blank"
      >
        About
      </Link>
      <Link
        className="transition hover:text-blue-500"
        href="https://github.com/dheereshagrwal/colored-icons/blob/master/README.md"
        target="_blank"
      >
        Docs
      </Link>
      <Link
        className="transition hover:text-blue-500"
        href="https://github.com/dheereshagrwal/colored-icons/blob/master/README.md"
        target="_blank"
      >
        Installation
      </Link>
    </div>
  );
};

export default MenuList;
