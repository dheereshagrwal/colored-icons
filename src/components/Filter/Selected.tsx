import { IoCheckmark } from "react-icons/io5";

function classNames(...classes: (string)[]) {
  return classes.filter(Boolean).join(" ");
}

interface SelectedProps {
  selected: boolean;
  active: boolean;
  category: { name: string };
}

const Selected: React.FC<SelectedProps> = ({ selected, active, category }) => {
  return (
    <>
      <span className={classNames(selected ? "font-semibold" : "font-normal")}>
        {category.name}
      </span>
      {selected && (
        <span
          className={classNames(
            active ? "text-gray-700" : "",
            "absolute inset-y-0 right-0 flex items-center pr-4"
          )}
        >
          <IoCheckmark className="text-xl" aria-hidden="true" />
        </span>
      )}
    </>
  );
};

export default Selected;
