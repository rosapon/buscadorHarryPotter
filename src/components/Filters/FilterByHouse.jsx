

function FilterByHouse({ filterHouse, handleFilterHouse }) {
  return (
    <>
    <label htmlFor="houses">Selecciona la casa</label>
    <select id="houses"  onChange={(ev) => handleFilterHouse(ev.target.value)}>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
    </select>
    </>
  )
}

export default FilterByHouse