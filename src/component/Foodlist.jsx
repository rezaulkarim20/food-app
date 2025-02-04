import Foodcard from "./Foodcard";
import PropTypes from "prop-types";

const Foodlist = ({ searchTerm, foods, cheackOffer }) => {
  const cards = [];

  foods.forEach((food) => {
    if (food.title.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
      return;
    }
    if (cheackOffer && !food.offer) {
      return;
    }
    cards.push(<Foodcard key={food.id} food={food} />);
  });
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between items-center gap-3 p-6">
      {cards}
    </div>
  );
};

Foodlist.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  foods: PropTypes.array.isRequired,
  cheackOffer: PropTypes.bool.isRequired,
};
export default Foodlist;
