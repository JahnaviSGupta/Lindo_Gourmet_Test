import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomeCategories() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch(
        "https://lindogourmet.com/app/category/list"
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

  return (
    <table className="table mt-5 text-center">
      <thead>
        <tr>
          {/* <th>label</th> */}
          {/* <th>Edit</th>
              <th>Delete</th> */}
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <div className="home__categories">
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
                <td className="home__categoryname">{todo.label}</td>
                <td className="home__categoryimage">
                  <img
                    src={
                      "http://lindogourmet.com/images/category?categoryEntityId=" +
                      todo.categoryEntityId +
                      "&action=medium&v=" +
                      todo.version
                    }
                    width="100px"
                  ></img>
                </td>
              </Link>
            </tr>
          </div>
        ))}
      </tbody>
    </table>
  );
}
