import { Link, Route, Routes } from "react-router-dom";
import getDataFromApi from "../services/api";
import { useState } from "react";
import { useEffect } from "react";
import Filters from "./Filters/Filters";
import CharacterList from "./Characters/CharacterList";
import noImage from "/images/hpnoimage.png";

const App = () => {

  const [characters, setCharacter] = useState([])
  const [filterCharacters, setFilterCharacters] = useState("");
  const [filterHouse, setFilterHouse] = useState("Gryffindor")

  const CharFilterByHouse = characters.filter((char) => char.house.includes(filterHouse));

 

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



  const filteredChars = characters
  .filter((char) => char.name.toLowerCase().includes(filterCharacters))
  .filter((char) => {
    return filterHouse === "Griffindor" ? true : char.house === filterHouse
  });




      
    
  

    


  return <>
    <h1>Harry Potter</h1>

    <Routes>
      <Route path="/" element={
        <>
        <Filters filterCharacters={filterCharacters} handleFilterCharacter={handleFilterCharacter} handleFilterHouse={handleFilterHouse} filterHouse={filterHouse}/>
        <CharacterList characters={filteredChars} noImage={noImage}/>
        </>
      } />


    </Routes>
    </>
};

export default App;