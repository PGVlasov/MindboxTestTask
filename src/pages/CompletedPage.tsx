import { CompletedList } from "../components/CompletedList";

export const CompletedPage = () => {
  const allTodos = JSON.parse(localStorage.getItem("todos") || "[]");

  function filter(todos: Array<any>) {
    return todos.filter((todo) => todo.complete);
  }

  const completed = filter(allTodos);

  return (
    <div>
      <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
        <h1>TODOS</h1>
        <h3>What is done.</h3>
      </div>
      <CompletedList completed={completed} />
    </div>
  );
};
