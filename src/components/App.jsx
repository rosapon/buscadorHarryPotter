import { Link, Route, Routes } from "react-router-dom";
import getDataFromApi from "../services/api";
import { useState } from "react";
import { useEffect } from "react";
import Filters from "./Filters/Filters";
import CharacterList from "./Characters/CharacterList";

const App = () => {

  const [characters, setCharacter] = useState([])
  const [filterCharacters, setFilterCharacters] = useState("");

  useEffect(() => {
    getDataFromApi().then((cleanData) => {
      setCharacter(cleanData)
    })
  }, [])


  const handleFilterCharacter = (value) => {
    setFilterCharacters(value)
  }

  const filteredChars = characters
  .filter((char) => char.name.toLowerCase().includes(filterCharacters));


  return <>
    <h1>Harry Potter</h1>

    <Routes>
      <Route path="/" element={
        <>
        <Filters filterCharacters={filterCharacters} handleFilterCharacter={handleFilterCharacter}/>
        <CharacterList characters={filteredChars}/>
        </>
      } />


    </Routes>
    </>
};

export default App;