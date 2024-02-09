import React from 'react'

function CharacterCard({ char }) {
  return (
    <div>
      <img src={char.picture}/>
      <h3>{char.name}</h3>
      <h4>{char.species}</h4>
      <h4>{char.house}</h4>
    </div>
  )
}

export default CharacterCard