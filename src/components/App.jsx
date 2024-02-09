import { Link, Route, Routes, matchPath, useLocation, useParams } from "react-router-dom";
import getDataFromApi from "../services/api";
import { useState } from "react";
import { useEffect } from "react";
import Filters from "./Filters/Filters";
import CharacterList from "./Characters/CharacterList";
import noImage from "/images/hpnoimage.png";
import CharacterCard from "./Characters/CharacterCard";
import CharactersDetails from "./CharactersDetails";
import local from '../services/localStorage';
import { BrowserRouter } from "react-router-dom";
import ResetButton from "./ResetButton";


const App = () => {

  const [characters, setCharacter] = useState([])
  const [filterCharacters, setFilterCharacters] = useState(local.get('Búsqueda', ''));
  const [filterHouse, setFilterHouse] = useState("Gryffindor")
  const [filterStatus, setFilterStatus] = useState("");

  const CharFilterByHouse = characters.filter((char) => char.house.includes(filterHouse));

  useEffect(() => {
    local.set('Búsqueda', filterCharacters);
  }, [filterCharacters]);
 

  useEffect(() => {
    getDataFromApi().then((cleanData) => {
      setCharacter(cleanData)
    })
  }, [])


  const handleFilterCharacter = (value) => {
    setFilterCharacters(value)
  }

  const handleFilterHouse = (value) => {
    setFilterHouse(value)
  }

  const handleFilterStatus = (value) => {
    setFilterStatus(value)
  }


  const [msg, setMsg] = useState("");

  
  const filteredChars = characters
    .filter((char) => {
      return char.name.toLowerCase().includes(filterCharacters.toLowerCase());
    })
    .filter((char) => {
      return filterHouse === "Griffindor" ? true : char.house === filterHouse;
    })
    .filter ((char) => {
      if (filterStatus === "alive") {
        return char.status === true;
      } else if (filterStatus === "dead") {
        return char.status === false;
      } else {
        return true;
      }
    });


 


    useEffect(() => {
      if (filterCharacters && filteredChars.length === 0) {
        setMsg(`Aunque no lo creas, no existe ningún personaje en toda la saga de Harry Potter que se llame  ${filterCharacters}`);
      } else {
        setMsg("");
      }
    }, [filterCharacters, filteredChars]);


    const handleReset = (ev) => {
      ev.preventDefault;
      setFilterCharacters("")
      setFilterHouse("Gryffindor")
      local.clear()
    }
  



  const { pathname } = useLocation();
  const routeData = matchPath("/char/:idChar", pathname)
  const idChar = routeData !== null ? routeData.params.idChar : null;
  const charData = characters.find((char) => char.id === idChar);



      
  

  return <>
    <h1>Harry Potter</h1>
    <ResetButton handleReset={handleReset}/>

    <Routes>
      <Route path="/" element={
        <>
        <Filters 
        filterCharacters={filterCharacters} 
        handleFilterCharacter={handleFilterCharacter} 
        handleFilterHouse={handleFilterHouse} 
        filterHouse={filterHouse}
        handleFilterStatus={handleFilterStatus}
        filterStatus={filterStatus}/>
        <CharacterList characters={filteredChars} 
        noImage={noImage} />
        </>
      } />

      <Route path="/char/:idChar" element={<CharactersDetails charData={charData} />}/>


    </Routes>

    <h2 className="errormsg">{msg}</h2>
    </>
    
};

export default App;