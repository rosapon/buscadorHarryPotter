


function CharacterCard({ char, noImage }) {
  return (
    <div>
      <img src={char.picture ? char.picture : noImage} alt={char.name}/>
      <h3>{char.name}</h3>
      <h4>{char.species}</h4>
      <h4>{char.house}</h4>
    </div>
  )
}

export default CharacterCard