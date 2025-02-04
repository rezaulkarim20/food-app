import Image from "./Image";
import Text from "./Text";

const Review = () => {
  return (
    <div className="flex  flex-col sm:flex-row justify-between items-center  gap-10 p-6 ">
      <Text />
      <Image />
    </div>
  );
};

export default Review;
