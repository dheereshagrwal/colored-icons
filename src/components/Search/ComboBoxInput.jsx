import { Combobox } from "@headlessui/react";

export function ComboBoxInput({ onChange, displayValue, shouldFocus }) {
  return (
    <Combobox.Input
      className="w-full rounded-full py-4 pl-14 outline-none"
      onChange={onChange}
      displayValue={displayValue}
      placeholder="Search icons..."
      autoFocus={shouldFocus}
    />
  );
}
