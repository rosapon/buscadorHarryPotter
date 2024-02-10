


function CharacterCard({ char, noImage }) {
  return (
    <div className="charList__card">
      <img className="charList__card--img" src={char.picture ? char.picture : noImage} alt={char.name}/>
      <h3 className="charList__card--name">{char.name}</h3>
      <h4 className="charList__card--species">{char.species}</h4>
    </div>
  )
}

export default CharacterCard