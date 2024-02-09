


function CharacterCard({ char, noImage }) {
  return (
    <div className="character">
      <img src={char.picture ? char.picture : noImage} alt={char.name}/>
      <h3>{char.name}</h3>
      <h4>{char.species}</h4>
    </div>
  )
}

export default CharacterCard