import React from "react";

import { useEffect, useState } from "react";
import DisplayFood from "./DisplayFood";

const SearchFood = () => {
  const [foodInput, setfoodInput] = useState([]);
  const [foodItem, setData] = useState([]);

  const handleInputChange = (e) => {
    setfoodInput(e.target.value);
  };

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=f`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data.meals));
  }, [foodInput]);

  const onSearch = () => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${foodInput}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data.meals));
  };

  return (
    <div className="container">
      <h1 className="pt-3">FOOD ITEM</h1>
      <p>Search your favorite "Food" first letter</p>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search The Food First Letter"
          aria-describedby="button-addon2"
          value={foodInput}
          onChange={handleInputChange}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={onSearch}
        >
          Search
        </button>
      </div>

      <DisplayFood foodItem={foodItem} />
    </div>
  );
};

export default SearchFood;
