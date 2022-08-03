import React, { Fragment, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/Categoryentityidpage.css";

function Categoryentityidpage() {
  const { state } = useLocation();
  console.log(state);

  const [todos, setTodos] = useState([]);
  const getTodos = async () => {
    try {
      const response = await fetch(
        //
        // use first link to test without server, second to test with server
        //
        "http://lindogourmet.com/app/product/listbycategory?categoryEntityId=" +
          // "http://localhost:8080/app/product/listbycategory?categoryEntityId=" +
          state.id
      );
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);
  console.log(todos);

  const [todos2, setTodos2] = useState([]);
  const getTodos2 = async () => {
    try {
      const response2 = await fetch(
        "http://lindogourmet.com/app/category/textlongdescription?categoryEntityId=" +
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
      <div className="catentity__title">{state.label}</div>
      <div className="catentity__longdscrpt">
        <img
          src={
            "http://lindogourmet.com/images/category?categoryEntityId=" +
            state.id +
            "&action=medium&v=" +
            state.version
          }
          width="200px"
        ></img>
        <br />
        {todos2.slice(3, -4)}
      </div>
      <Fragment>
        <table className="table mt-5 text-center">
          {/* <thead>
                    <tr>
                    <th>product</th>
                    </tr>
                </thead> */}
          <tbody>
            {todos.map((todo) => (
              <div className="catentity__product">
                <tr key={todo.categoryentityid}>
                  <Link
                    to={{
                      pathname: "/Productpage",
                      state: {
                        label: todo.label,
                        id: todo.productEntityId,
                        version: todo.version,
                      },
                    }}
                  >
                    <td className="catentity__productimage">
                      <img
                        src={
                          "http://lindogourmet.com/images/product?productEntityId=" +
                          todo.productEntityId +
                          "&action=thumb&v=" +
                          todo.version
                        }
                      ></img>
                    </td>
                    <td className="catentity__productname">{todo.label}</td>
                  </Link>
                </tr>
              </div>
            ))}
          </tbody>
        </table>
      </Fragment>
    </div>
  );
}

export default Categoryentityidpage;
