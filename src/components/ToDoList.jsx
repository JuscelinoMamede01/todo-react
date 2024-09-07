import React from "react";
import ToDoCard from "./ToDoCard";

function ToDoList(props) {
  const { todos } = props;
  return (
    <ul className="main">
      {todos.map((todo, index) => {
        return (
          <ToDoCard {...props} key={index} index={index}>
            <p>{todo}</p>
          </ToDoCard>
        );
      })}
    </ul>
  );
}

export default ToDoList;
