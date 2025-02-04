import { Star } from "lucide-react";
import Stae from "./Stae";

const Service = () => {
  return (
    <div className="flex gap-1">
      <Stae />
      <Stae />
      <Stae />
      <Stae />
      <div className="relative w-6 h-6">
        {/* Gray Background Star */}
        <Star className="text-gray-300 absolute" />
        {/* Half Colored Star */}
        <div className="absolute left-0 top-0 w-1/2 h-full overflow-hidden">
          <Star className="text-yellow-500" />
        </div>
      </div>
    </div>
  );
};

export default Service;
