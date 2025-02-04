import PropTypes from "prop-types";

import Fooddeatils from "./Fooddeatils";

const Foodcard = ({ food }) => {
  const { title, Water, Ingredients, OiButter, product, offer, price } = food;
  return (
    <>
      <Fooddeatils
        title={title}
        Water={Water}
        Ingredients={Ingredients}
        OiButter={OiButter}
        product={product}
        offer={offer}
        price={price}
      />
    </>
  );
};

Foodcard.propTypes = {
  food: PropTypes.shape({
    title: PropTypes.string.isRequired,
    Water: PropTypes.string.isRequired,
    Ingredients: PropTypes.string.isRequired,
    OiButter: PropTypes.string.isRequired,
    product: PropTypes.string.isRequired,
    offer: PropTypes.bool.isRequired,
    price: PropTypes.string.isRequired,
  }),
};

export default Foodcard;
