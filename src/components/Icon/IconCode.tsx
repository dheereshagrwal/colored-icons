import { HiOutlineClipboard, HiOutlineClipboardCheck } from "react-icons/hi";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { Icon } from "@/interfaces";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

interface IconCodeProps {
  iconClass: string;
}

const IconCode: React.FC<IconCodeProps> = ({ iconClass }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="relative group rounded-lg">
      <pre
        className={`${rubik.className} text-sm overflow-x-auto text-gray-800 p-2 rounded-md`}
      >
        <code>{`<i class="ci ci-${iconClass}"></i>`}</code>
      </pre>

      <CopyToClipboard
        text={`<i class="ci ci-${iconClass}"></i>`}
        onCopy={handleCopy}
      >
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-md hover:bg-gray-300/50 transition-colors"
          title="Copy to clipboard"
        >
          {copied ? (
            <HiOutlineClipboardCheck className="w-5 h-5 text-green-600" />
          ) : (
            <HiOutlineClipboard className="w-5 h-5 text-gray-600 group-hover:text-gray-700" />
          )}
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default IconCode;
