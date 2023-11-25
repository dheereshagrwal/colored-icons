const Shapes: React.FC = () => (
  <div className="flex flex-col items-center justify-center relative">
    <div className="bg-green-500 transform -rotate-6 absolute h-14 w-14 sm:h-24 sm:w-24 top-24 overflow-hidden -z-10 left-1"></div>
    <div className="bg-pink-500 transform -rotate-6 absolute h-14 w-14 sm:h-24 sm:w-24 top-96 -z-10  overflow-hidden right-1"></div>
    <div className="bg-blue-500 transform -rotate-6 absolute h-14 w-14 sm:h-24 sm:w-24 top-20 rounded-full -z-10 overflow-hidden right-1"></div>
    <div className="bg-yellow-300 transform  absolute h-28 w-28 sm:h-48 sm:w-48 top-96 rounded-full -z-10 overflow-hidden left-1"></div>
  </div>
);

export default Shapes;
