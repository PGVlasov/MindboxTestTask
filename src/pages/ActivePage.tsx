import { ActiveList } from "../components/ActiveList";

export const ActivePage = () => {
  const allTodos = JSON.parse(localStorage.getItem("todos") || "[]");

  function filter(todos: Array<any>) {
    return todos.filter((todo) => !todo.complete);
  }

  const unCompleted = filter(allTodos);

  return (
    <div>
      <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
        <h1>TODOS</h1>
        <h3>What needs to be done.</h3>
      </div>
      <ActiveList unCompleted={unCompleted} />;
    </div>
  );
};
