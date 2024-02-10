import { Link, Route, Routes, useParams, useNavigate } from "react-router-dom"


function CharactersDetails({ charData }) {
  const { idChar } = useParams();
  

  if (!charData) {
    const navigate = useNavigate();
    navigate("/");
    return null;
  }


  return (
    <div>
       <Link to="/">
        <button>Volver</button>
      </Link>
    
        <div className="charDetails">
          <img className="charDetails__picture" src={charData.picture} alt={charData.name} />
          <div className="charDetails__info">
          <h2 className="charDetails__info--name" >{charData.name}</h2>
          <h3 className="charDetails__info--status" >Estatus: {charData.status}  <i class="fa-solid fa-heart-pulse"></i></h3>
          <h3 className="charDetails__info--species" >Especie: {charData.species}</h3>
          <h3 className="charDetails__info--gender">Género: {charData.gender}</h3>
          <h3 className="charDetails__info--house" >Casa: {charData.house}</h3>
          </div>
        </div>
    </div>
  )
}

export default CharactersDetails