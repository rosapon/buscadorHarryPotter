import FilterByCharacter from "./FilterByCharacter";
import FilterByHouse from "./FilterByHouse";
import FilterByStatus from "./FilterByStatus";
import ResetButton from "../ResetButton";

function Filters({ filterCharacters, handleFilterCharacter, handleFilterHouse, filterHouse, handleFilterStatus, filterStatus }) {
  return (
    <form className="filters">
      <FilterByCharacter handleFilterCharacter={handleFilterCharacter}/>
      <FilterByHouse filterHouse={filterHouse} handleFilterHouse={handleFilterHouse}/>
      <FilterByStatus handleFilterStatus={handleFilterStatus} filterStatus={filterStatus}/>
    </form>
  )
}

export default Filters