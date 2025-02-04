import PropTypes from "prop-types";

const Fooddeatils = ({
  title,
  Water,
  Ingredients,
  OiButter,
  product,
  offer,
  price,
}) => {
  return (
    <div className="bg-white  shadow-md rounded-md p-6">
      <h2 className="font-bold text-green-600 capitalize ">title : {title}</h2>
      <p className="text-sm capitalize">
        <span className="font-semibold">Water : </span>
        {Water ? "broth for added flavor" : "adjust based on rice type"}
      </p>
      <p className="capitalize text-sm">
        <span className="font-semibold ">Ingredients : </span>
        {Ingredients}
      </p>
      <p className="text-sm capitalize">
        <span className="font-semibold capitalize">OiButter : </span>
        {OiButter ? "for cooking or sautéing" : "no menu"}
      </p>
      <p className="text-sm capitalize">
        <span className="font-semibold capitalize">product : </span>
        {product}
      </p>
      <p className="text-sm capitalize">
        <span className="font-semibold capitalize">offer : </span>
        {offer ? " 50%" : " NO OFFER"}
      </p>

      <p className="text-sm capitalize">
        <span className="font-semibold capitalize">price : </span>
        {price}
      </p>
    </div>
  );
};

Fooddeatils.propTypes = {
  title: PropTypes.string.isRequired,
  Water: PropTypes.string.isRequired,
  Ingredients: PropTypes.string.isRequired,
  OiButter: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
  offer: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Fooddeatils;
