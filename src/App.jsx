import React, { useState, useEffect } from "react";
import { FoodBox } from "./components/FoodBox";
import "./styles.css";
import foods from "./resources/FoodData";
import Search from "./components/Search";

const App = () => {
  const [query, setQuery] = useState("");
  const [filteredFoods, setFilteredFoods] = useState(foods);

  useEffect(() => {
    const filterFoods = () => {
      const updatedFoods = foods.filter((food) =>
        food.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredFoods(updatedFoods);
    };

    filterFoods();
  }, [query]);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  return (
    <div className="App">
      <Search onSearch={handleSearch} />
      {filteredFoods.map((food) => (
        <FoodBox key={food.id} food={food} />
      ))}
    </div>
  );
};

export default App;
