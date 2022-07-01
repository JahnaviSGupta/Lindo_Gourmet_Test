import React, { Fragment, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/Productpage.css";

function Productpage() {
  const { state } = useLocation();
  console.log(state);

  const [todos2, setTodos2] = useState([]);
  const getTodos2 = async () => {
    try {
      const response2 = await fetch(
        "http://localhost:8080/app/product/textlongdescription?productEntityId=" +
          state.id
      );
      const jsonData2 = await response2.text();

      setTodos2(jsonData2);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getTodos2();
  }, []);
  console.log(todos2);

  return (
    <div>
      <div className="product__title">{state.label}</div>
      <div className="product__longdscrpt">
        <img
          src={
            "http://localhost:8080/images/product?productEntityId=" +
            state.id +
            "&action=thumb&v=" +
            state.version
          }
        ></img>
        <br />
        {todos2.slice(3, -4)}
      </div>
      <div className="product__input">
        <label for="quantity">Quantity: </label>
        <input className="product__input2" type="number"></input>
        <br />
        <input className="product__submit" type="submit" value="Submit"></input>
      </div>
    </div>
  );
}

export default Productpage;
