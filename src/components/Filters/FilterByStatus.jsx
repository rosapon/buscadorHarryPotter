import PropTypes from "prop-types";

function FilterByStatus({ handleFilterStatus, filterStatus }) {
  
    const handleChange = (ev) => {
        handleFilterStatus(ev.target.value)
    }



  return (
    <div className="filters__status">
      <label htmlFor="muerto" className="filters__status--status">
        Muerto
        <input
          type="checkbox"
          id="muerto"
          onChange={handleChange}
          value="muerto"
          checked={filterStatus === "muerto"}
        />
      </label>

      <label htmlFor="vivo" className="filters__status--status">
        Vivo
        <input
          type="checkbox"
          id="vivo"
          onChange={handleChange}
          value="vivo"
          checked={filterStatus === "vivo"}
        />
      </label>
    </div>
  );
};

FilterByStatus.propTypes = {
  handleFilterStatus: PropTypes.func,
  filterStatus: PropTypes.string
};

export default FilterByStatus