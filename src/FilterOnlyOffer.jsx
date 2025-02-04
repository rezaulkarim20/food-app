import PropTypes from "prop-types";

const FilterOnlyOffer = ({ onCheaker, cheackOffer }) => {
  return (
    <div>
      <input
        type="checkbox"
        id="Offer"
        onChange={onCheaker}
        checked={cheackOffer}
      />
      <label> Who Offer Only </label>
    </div>
  );
};

FilterOnlyOffer.propTypes = {
  onCheaker: PropTypes.func.isRequired,
  cheackOffer: PropTypes.bool.isRequired,
};

export default FilterOnlyOffer;
