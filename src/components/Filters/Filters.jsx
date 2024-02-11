import FilterByCharacter from "./FilterByCharacter";
import FilterByHouse from "./FilterByHouse";
import FilterByStatus from "./FilterByStatus";
import PropTypes from "prop-types";

function Filters({ filterCharacters, handleFilterCharacter, handleFilterHouse, filterHouse, handleFilterStatus, filterStatus }) {
  return (
    <form className="filters">
      <FilterByCharacter handleFilterCharacter={handleFilterCharacter}/>
      <FilterByHouse filterHouse={filterHouse} handleFilterHouse={handleFilterHouse}/>
      <FilterByStatus handleFilterStatus={handleFilterStatus} filterStatus={filterStatus}/>
    </form>
  )
}

Filters.propTypes = {
  filterCharacters: PropTypes.any,
  handleFilterCharacter: PropTypes.func,
  handleFilterHouse: PropTypes.func,
  filterHouse: PropTypes.string,
  handleFilterStatus: PropTypes.func,
  filterStatus: PropTypes.string
};

export default Filters