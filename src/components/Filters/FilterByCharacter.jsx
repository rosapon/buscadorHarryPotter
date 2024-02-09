import React from 'react'

function FilterByCharacter({ filterCharacters, handleFilterCharacter }) {
  return (
    <>
    <label>Busca por personaje</label>
    <input type="text" placeholder='Harry Potter' value={filterCharacters} onChange={(ev) => handleFilterCharacter(ev.target.value)}/>
    </>
  )
}

export default FilterByCharacter