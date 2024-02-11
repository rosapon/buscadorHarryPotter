import PropTypes from "prop-types";

function ResetButton({ handleReset }) {
  return (
    <button className="resetButton" onClick={handleReset}>Nueva búsqueda</button>
  )
}

ResetButton.propTypes = {
  handleReset: PropTypes.func
};

export default ResetButton