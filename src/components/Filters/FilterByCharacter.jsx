import PropTypes from "prop-types";

function FilterByCharacter({ filterCharacters, handleFilterCharacter }) {

  
  return (
    
    <div className='filters__name'>
       <label className='filters__name--label'>Busca por personaje:</label>
       <input className='filters__name--input' type="text" placeholder='Harry Potter' value={filterCharacters} onChange={(ev) => handleFilterCharacter(ev.target.value)}/>
    </div>
    
  )
}

FilterByCharacter.propTypes = {
  filterCharacters: PropTypes.any,
  handleFilterCharacter: PropTypes.func
};


export default FilterByCharacter