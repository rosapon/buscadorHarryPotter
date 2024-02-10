import CharacterCard from "./CharacterCard";
import noImage from "../../images/hpnoimage.png";
import { Link } from "react-router-dom";

function CharacterList({ characters }) {
  const renderCharacters = characters.map((char) => {
    return <li key={char.id} className="li">
      <Link to={`/char/${char.id}`} >
        <CharacterCard char={char} noImage={noImage}/>
      </Link>
    </li>
  })



  return (
    <section>
      <ul className="CharList">
        {renderCharacters}
      </ul>
    </section>
  )
}

export default CharacterList