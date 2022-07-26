// import React from 'react'
import React, { Fragment, useState, useEffect } from "react";
import "../styles/Categorypage.css";
import { Link } from "react-router-dom";

function Categorypage() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:8080/app/category/list");
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

  return (
    // <div>
    //     <h1>Categories</h1>
    //   {todos ? todos : 'There is no data available'}
    // </div>
    <div>
      <div className="catpage__title">Categories</div>
      <Fragment>
        {/* {" "} */}
        <table className="table mt-5 text-center">
          {/* <thead>
            <tr>
              <th>label</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead> */}
          <tbody>
            {todos.map((todo) => (
              <div className="catpage__categories">
                <tr key={todo.categoryentityid}>
                  <Link
                    to={{
                      pathname: "/Categoryentityidpage",
                      state: {
                        label: todo.label,
                        id: todo.categoryEntityId,
                        version: todo.version,
                      },
                    }}
                  >
                    <td className="catpage__categoryname">{todo.label}</td>
                    <td className="catpage__categoryimage">
                      <img
                        src={
                          "http://localhost:8080/images/category?categoryEntityId=" +
                          todo.categoryEntityId +
                          "&action=medium&v=" +
                          todo.version
                        }
                      ></img>
                    </td>
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

export default Categorypage;
