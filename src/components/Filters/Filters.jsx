import FilterByCharacter from "./FilterByCharacter";
import FilterByHouse from "./FilterByHouse";

function Filters({ filterCharacters, handleFilterCharacter, handleFilterHouse, filterHouse }) {
  return (
    <form action="">
      <FilterByCharacter handleFilterCharacter={handleFilterCharacter}/>
      <FilterByHouse filterHouse={filterHouse} handleFilterHouse={handleFilterHouse}/>
    </form>
  )
}

export default Filters