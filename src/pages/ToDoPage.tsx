import React, { useEffect, useState } from "react";
import { ToDoForm } from "../components/ToDoForm";
import { ToDoList } from "../components/ToDoList";
import { IToDo } from "../interFaces";

export const ToDoPage = () => {
  const [todos, setTodos] = useState<IToDo[]>(
    JSON.parse(localStorage.getItem("todos") || "[]") || []
  );

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as IToDo[];

    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addToDo = (userInput: string) => {
    if (userInput) {
      const newItem = {
        id: Math.random(),
        task: userInput,
        complete: false,
      };

      setTodos((prev) => [...prev, newItem]);
    }
  };

  const completeHandler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      )
    );
  };
  const removeToDo = () => {
    setTodos((prev) => prev.filter((todos) => !todos.complete));
  };
  return (
    <div>
      <ToDoForm addToDo={addToDo} />
      <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
        <h1>TODOS</h1>
        <h3>All todos are here</h3>
      </div>
      <ToDoList
        todos={todos}
        completeHandler={completeHandler}
        removeToDo={removeToDo}
      />
    </div>
  );
};
