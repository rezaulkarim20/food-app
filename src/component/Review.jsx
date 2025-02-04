import Image from "./Image";
import Clicnt from "./Clicnt";

const Review = () => {
  return (
    <div className="flex  flex-col sm:flex-row justify-between items-center  gap-10 p-6 ">
      <Clicnt />
      <Image />
    </div>
  );
};

export default Review;
