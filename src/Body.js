import React, { useEffect, useState } from "react";
import axios from "axios";
import './Body.css';
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

function Body() {
  const [items, setItems] = useState("");

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        console.log(res.data);
        setItems(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const itemlists =  Array.from(items).map((object) => {
    return (
      <div className="col-md-4">
        <p> {object.strMeal}</p>
        <img src={object.strMealThumb} className="img-fluid" />
      </div>
    )
    
  });

  return (
    <div>
      <div className="row">
        <br/>
        {itemlists}
        </div>
    </div>
  )
}

export default Body;
