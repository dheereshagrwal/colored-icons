import { Combobox } from "@headlessui/react";
import { Icon } from "@/interfaces";

interface ComboBoxOptionProps {
  icon: Icon;
}

const ComboBoxOption: React.FC<ComboBoxOptionProps> = ({ icon }) => {
  return (
    <Combobox.Option
      value={icon}
      className={({ active }) =>
        `relative py-4 px-3 text-black ${active ? "bg-gray-100" : ""}`
      }
    >
      {({ active, selected }) => (
        <div className="flex items-center gap-2">
          <i className={`ci ci-${icon.classes[0]}`} />
          <span className={`${selected && "font-semibold"}`}>{icon.name}</span>
        </div>
      )}
    </Combobox.Option>
  );
};

export default ComboBoxOption;
