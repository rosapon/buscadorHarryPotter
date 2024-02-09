import FilterByCharacter from "./FilterByCharacter";
import FilterByHouse from "./FilterByHouse";
import FilterByStatus from "./FilterByStatus";

function Filters({ filterCharacters, handleFilterCharacter, handleFilterHouse, filterHouse, handleFilterStatus, filterStatus }) {
  return (
    <form action="">
      <FilterByCharacter handleFilterCharacter={handleFilterCharacter}/>
      <FilterByHouse filterHouse={filterHouse} handleFilterHouse={handleFilterHouse}/>
      <FilterByStatus handleFilterStatus={handleFilterStatus} filterStatus={filterStatus}/>
    </form>
  )
}

export default Filters