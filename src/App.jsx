import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/ui/Header.jsx";
import CharacterGrid from "./components/characters/CharacterGrid.jsx";
import Search from "./components/ui/Search.jsx";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios(`https://www.breakingbadapi.com/api/characters?name=${query}`).then(
      (result) => {
        console.log(result.data);
        setItems(result.data);
        setIsLoading(false);
      }
    );
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search onSearch={(val) => setQuery(val)} />
      <CharacterGrid items={items} isLoading={isLoading}></CharacterGrid>
    </div>
  );
}

export default App;
