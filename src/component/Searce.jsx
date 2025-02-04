import PropTypes from "prop-types";
import FilterOnlyOffer from "../FilterOnlyOffer";

const Searce = ({ searchTerm, onSearchFood, cheackOffer, onCheaker }) => {
  return (
    <form className="flex flex-col sm:flex-row items-center gap-3 p-6">
      <input
        className="border px-3 py-1 outline-none pr-16 rounded-md"
        type="text"
        value={searchTerm}
        onChange={(event) => onSearchFood(event.target.value)}
        placeholder="Searce here..."
      />
      <FilterOnlyOffer cheackOffer={cheackOffer} onCheaker={onCheaker} />
    </form>
  );
};

Searce.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchFood: PropTypes.func.isRequired,
  cheackOffer: PropTypes.bool.isRequired,
  onCheaker: PropTypes.func.isRequired,
};

export default Searce;
