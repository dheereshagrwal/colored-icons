import { Icon } from "@/interfaces";


interface IconCardProps {
  icon: Icon;
}

const IconCard: React.FC<IconCardProps> = ({ icon }) => {
  return (
    <div className="rounded-lg border-2 hover:border-blue-500 hover:cursor-pointer flex px-4 gap-4 py-4 items-center w-full sm:w-48">
      <i className={`ci ci-${icon.classes[0]} ci-2x`}></i>
      <span className="flex flex-col gap-1 text-xs">
        <h4 className="text-gray-800 font-semibold truncate">{icon.name}</h4>
        <h4 className="text-gray-400 text-2xs">{icon.url}</h4>
      </span>
    </div>
  );
};

export default IconCard;
