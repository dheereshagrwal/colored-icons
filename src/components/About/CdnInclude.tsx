import { HiOutlineClipboard, HiOutlineClipboardCheck } from "react-icons/hi";
import { useState } from "react";
interface CdnIncludeProps {
  text: string;
  url: string;
}

const CdnInclude: React.FC<CdnIncludeProps> = ({ text, url }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (content: string) => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="prose prose-gray max-w-full">
      <p className="text-gray-600 mt-4">{text}</p>
      <div className="mt-4 relative">
        <pre className="bg-gray-800/95 text-white p-4 pr-14 rounded-lg whitespace-pre-wrap word-break-all">
          <code>{`<link rel="stylesheet" href="${url}" />`}</code>
        </pre>
        <button
          onClick={() => handleCopy(`<link rel="stylesheet" href="${url}" />`)}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-md hover:bg-white/10 transition-colors"
          title="Copy to clipboard"
        >
          {copied ? (
            <HiOutlineClipboardCheck className="w-5 h-5 text-green-400" />
          ) : (
            <HiOutlineClipboard className="w-5 h-5 text-gray-400" />
          )}
        </button>
      </div>
    </div>
  );
};

export default CdnInclude;
