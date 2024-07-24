import { useRef, useEffect } from "react";
import { IconCode } from ".";
import { Icon } from "@/interfaces";

interface ModalProps {
  icon: Icon;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ icon, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 backdrop-blur-lg flex justify-center items-center">
      <div ref={modalRef} className="drop-shadow w-full mx-4 px-2 py-10 rounded-lg shadow-lg relative max-w-xl bg-gray-200 max-h-160 overflow-auto">
        {icon.classes.map((iconClass, index) => (
          <IconCode key={iconClass} iconClass={iconClass} onClose={onClose} />
        ))}
      </div>
    </div>
  );
};

export default Modal;
