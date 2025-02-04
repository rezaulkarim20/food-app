import villageImage from "../assets/images/vegetables.jpg";

const Image = () => {
  return (
    <div className="w-full">
      <img className="w-full rounded-md" src={villageImage} alt="" />
    </div>
  );
};

export default Image;
