import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";

function CharacterList({characters, noImage}) {
  const renderCharacters = characters.map((char) => {
    return <li key={char.id}>
      <Link to={`/char/${char.id}`} >
        <CharacterCard char={char} noImage={noImage}/>
      </Link>
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