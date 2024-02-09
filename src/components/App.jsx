import { Link, Route, Routes } from "react-router-dom";
import getDataFromApi from "../services/api";
import { useState } from "react";
import { useEffect } from "react";
import Filters from "./Filters/Filters";
import CharacterList from "./Characters/CharacterList";

const App = () => {

  const [characters, setCharacter] = useState([])

  useEffect(() => {
    getDataFromApi().then((cleanData) => {
      setCharacter(cleanData)
    })
  }, [])


  return <>
    <h1>Harry Potter</h1>

    <Routes>
      <Route path="/" element={
        <>
        <Filters />
        <CharacterList characters={characters}/>
        </>
      } />


    </Routes>
    </>
};

export default App;