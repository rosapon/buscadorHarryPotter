import PropTypes from "prop-types";


function CharacterCard({ char, noImage }) {

  return (
    <div className="charList__card">
      <img className="charList__card--img" src={char.picture ? char.picture : noImage} alt={char.name}/>
      <h3 className="charList__card--name">{char.name}</h3>
      <h4 className="charList__card--species">{char.species}</h4>
    </div>
  )
}

CharacterCard.propTypes = {
  char: PropTypes.object,
  noImage: PropTypes.string
};

export default CharacterCard