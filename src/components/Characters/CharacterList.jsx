import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CharacterList({ characters, noImage }) {

  const abcCharactersList = characters.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  const renderCharacters = abcCharactersList.map((char) => {
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

CharacterList.propTypes = {
  characters: PropTypes.array,
  noImage: PropTypes.string
};


export default CharacterList