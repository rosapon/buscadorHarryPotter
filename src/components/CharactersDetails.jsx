import { Link, Route, Routes } from "react-router-dom"
import App from "./App";

function CharactersDetails({ charData }) {
  return (
    <div>
       <Link to="/">
        <button>Volver</button>
      </Link>
    
        <div>
          <img src={charData.picture} alt={charData.name} />
          <h2>{charData.name}</h2>
          <h3>{charData.status}</h3>
          <h3>{charData.species}</h3>
          <h3>{charData.gender}</h3>
          <h3>{charData.house}</h3>
        </div>
    </div>
  )
}

export default CharactersDetails