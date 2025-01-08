import { HiOutlineClipboard, HiOutlineClipboardCheck } from "react-icons/hi";
import useCopy from '@/hooks/useCopy';

interface IconCodeProps {
  iconClass: string;
}

const IconCode: React.FC<IconCodeProps> = ({ iconClass }) => {
  const { copied, handleCopy } = useCopy();

  return (
    <div className="relative group rounded-lg">
      <pre
        className={`text-sm overflow-x-auto text-gray-800 p-2 rounded-md`}
      >
        <code>{`<i class="ci ci-${iconClass}"></i>`}</code>
      </pre>

      <button
        onClick={() => handleCopy(`<i class="ci ci-${iconClass}"></i>`)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-md hover:bg-gray-300/50 transition-colors"
        title="Copy to clipboard"
      >
        {copied ? (
          <HiOutlineClipboardCheck className="w-5 h-5 text-green-600" />
        ) : (
          <HiOutlineClipboard className="w-5 h-5 text-gray-600 group-hover:text-gray-700" />
        )}
      </button>
    </div>
  );
};

export default IconCode;
