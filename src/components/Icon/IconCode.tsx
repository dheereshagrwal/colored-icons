import { IoCloseOutline } from "react-icons/io5";
import { HiOutlineClipboard, HiOutlineClipboardCheck } from "react-icons/hi";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

interface IconCodeProps {
  onClose: () => void;
  iconClass: string;
}

const IconCode: React.FC<IconCodeProps> = ({ onClose, iconClass }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 4 seconds
  };

  return (
    <>
      <div className="grid grid-cols-7 md:grid-cols-8 md:mx-6 mt-5 mx-2 place-items-center">
        <i className={`${iconClass} ${size(iconClass)} col-span-2`}></i>
        <code
          className={`text-xs font-rubik col-span-4 md:col-span-5 p-1 ${copied
            ? "border border-gray-500 border-dashed"
            : "border border-transparent"
            }`}
        >{`<i className="${iconClass} ${size(iconClass)}"></i>`}</code>
        <CopyToClipboard
          text={`<i className="${iconClass} ${size(iconClass)}"></i>`}
          onCopy={handleCopy}
        >
          <span className={`col-span-1 text-gray-500 cursor-pointer hover:text-gray-800 ${copied ? "text-green-500" : ""
            }`}>
            {copied ? <HiOutlineClipboardCheck /> : <HiOutlineClipboard />}
          </span>
        </CopyToClipboard>
      </div>
      <IoCloseOutline
        className="absolute top-3 right-3 text-xl cursor-pointer text-gray-600"
        onClick={onClose}
      />
    </>
  );
};

export default IconCode;

const size = (iconClass: string) => {
  switch (true) {
    case iconClass.includes("horizontal"):
    case iconClass.includes("wordmark"):
      return "ci-5x";
    case iconClass.includes("vertical"):
      return "ci-3x";
    default:
      return "ci-2x";
  }
};
