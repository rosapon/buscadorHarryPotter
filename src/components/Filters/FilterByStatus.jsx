

function FilterByStatus({ handleFilterStatus, filterStatus }) {


    const handleChange = (ev) => {
        handleFilterStatus(ev.target.value)
    }



  return (
    <div>
        <label htmlFor="status">Muerto</label>
          <input type="checkbox" id="dead" onChange={handleChange} value="dead"/>

        <label htmlFor="status">Vivo</label>
          <input type="checkbox" id="alive" onChange={handleChange} value="alive"/>
        
    </div>
  )
}

export default FilterByStatus