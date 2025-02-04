const Banner = () => {
  return (
    <div className=" banner-bg h-screen flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 px-4 md:px-12 lg:px-24 opacity-90 md:text-left  ">
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-green-600">
          Village Food<br></br> Checken House
        </h1>
        <h4 className="text-2xl">
          বাসি পচা খাবার এরিয়ে চলুন <br></br>
          সতেজ ও তাজা খাবার খেতে চলে আসুন
        </h4>
        <div className="flex justify-center md:justify-start">
          <button className="border px-8 py-2 uppercase bg-amber-400 hover:bg-green-700  hover:text-white rounded-md text-gray-900 cursor-pointer mt-6">
            order now
          </button>
        </div>
      </div>
      <div className="w-1/5"></div>
    </div>
  );
};

export default Banner;
