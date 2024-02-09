import { Route, Routes } from "react-router-dom";
import getDataFromApi from "../services/api";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {

  const [characters, setCharacter] = useState([])

  useEffect(() => {
    getDataFromApi().then((cleanData) => {
      setCharacter(cleanData)
    })
  }, [])


  return (
    <div>
      <h1>Hola mundo</h1>
    </div>
  );
};

export default App;