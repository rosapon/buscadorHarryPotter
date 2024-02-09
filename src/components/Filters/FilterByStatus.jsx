

function FilterByStatus({ handleFilterStatus, filterStatus }) {


    const handleChange = (ev) => {
        handleFilterStatus(ev.target.value)
    }



  return (
    <div className="filters__status">
      <label htmlFor="dead" className="filters__status--status">
        Muerto
        <input
          type="checkbox"
          id="dead"
          onChange={handleChange}
          value="dead"
          checked={filterStatus === "dead"}
        />
      </label>

      <label htmlFor="alive" className="filters__status--status">
        Vivo
        <input
          type="checkbox"
          id="alive"
          onChange={handleChange}
          value="alive"
          checked={filterStatus === "alive"}
        />
      </label>
    </div>
  );
};

export default FilterByStatus