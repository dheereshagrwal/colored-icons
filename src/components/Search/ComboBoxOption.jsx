import { Combobox } from "@headlessui/react";

export function ComboBoxOption({ icon }) {
  return (
    <Combobox.Option
      value={icon}
      className={({ active }) =>
        `relative py-4 px-3 text-black ${active ? "bg-gray-100" : ""}`
      }
    >
      {({ active, selected }) => (
        <div className="flex items-center gap-2">
          <i className={icon.classes[0]} />
          <span className={`${selected && "font-semibold"}`}>{icon.name}</span>
        </div>
      )}
    </Combobox.Option>
  );
}
