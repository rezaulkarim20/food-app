import Service from "./service";

const Text = () => {
  return (
    <div className="w-full ">
      <div className="w-full   p-4">
        <h2 className="font-bold text-3xl capitalize mb-5">
          That what our clicnt says
        </h2>
        <p className="mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
          cumque repellendus mollitia facilis, voluptatem illo labore repellat
          est quisquam consequuntur?Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Aliquid, natus.
        </p>
        <Service />
        <div className="flex justify-center md:justify-start mt-4">
          <button className=" border px-8 py-2 uppercase bg-amber-400 hover:bg-green-700  hover:text-white rounded-md text-gray-900 cursor-pointer mt-6  ">
            order now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Text;
