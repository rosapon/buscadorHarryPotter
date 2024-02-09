import React from 'react'

function FilterByCharacter({ filterCharacters, handleFilterCharacter }) {
  return (
    
    <div className='filters__name'>
       <label className='filters__name--label'>Busca por personaje:</label>
       <input className='filters__name--input' type="text" placeholder='Harry Potter' value={filterCharacters} onChange={(ev) => handleFilterCharacter(ev.target.value)}/>
    </div>
    
  )
}

export default FilterByCharacter