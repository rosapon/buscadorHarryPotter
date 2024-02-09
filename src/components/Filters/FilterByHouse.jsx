

function FilterByHouse({ filterHouse, handleFilterHouse }) {
  return (
    <>
    <div className="filters__house">
    <label htmlFor="houses" className="filters__house--label">Selecciona la casa:</label>
    <select className="filters__house--input" id="houses"  onChange={(ev) => handleFilterHouse(ev.target.value)}>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
    </select>
    </div>
    </>
  )
}

export default FilterByHouse