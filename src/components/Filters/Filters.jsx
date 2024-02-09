import FilterByCharacter from "./FilterByCharacter";
import FilterByHouse from "./FilterByHouse";

function Filters({ filterCharacters, handleFilterCharacter }) {
  return (
    <form action="">
      <FilterByCharacter handleFilterCharacter={handleFilterCharacter}/>
      <FilterByHouse />
    </form>
  )
}

export default Filters