import { CiSearch } from "react-icons/ci";

const FauxSearch: React.FC = () => {
  return (
    <div className="w-full relative rounded-full shadow border-2 ring-1 ring-blue-500 border-blue-500">
      <input
        type="text"
        id="Search"
        placeholder="Search icons..."
        className="w-full rounded-full py-4 pl-14 outline-none hover:cursor-pointer"
        readOnly
      />

      <button className="absolute inset-y-0 left-0 grid pl-4 place-content-center text-gray-400 hover:text-gray-700">
        <CiSearch className="text-2xl" aria-hidden="true" />
      </button>
    </div>
  );
};

export default FauxSearch;
