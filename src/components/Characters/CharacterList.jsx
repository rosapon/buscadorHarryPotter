import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";

function CharacterList({characters}) {
  const renderCharacters = characters.map((char) => {
    return <li key={char.id}>
        <CharacterCard char={char}/>
    </li>
  })



  return (
    <section>
      <ul>
        {renderCharacters}
      </ul>
    </section>
  )
}

export default CharacterList