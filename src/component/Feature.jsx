import Image from "./Image";
import Text from "./Clicnt";

const Feature = () => {
  return (
    <di>
      <h2 className=" text-4xl font-bold text-green-600 capitalize text-center py-6">
        Lorem ipsum dolor sit amet.
      </h2>
      <div className="flex  flex-col sm:flex-row justify-between items-center  gap-10 p-6 ">
        <Image />
        <Text />
      </div>
    </di>
  );
};

export default Feature;
