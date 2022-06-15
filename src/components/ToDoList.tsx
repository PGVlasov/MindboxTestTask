import { Button } from "react-bootstrap";
import { IToDo } from "../interFaces";

type ToDoListProps = {
  todos: IToDo[];
  completeHandler: (id: number) => void;
  removeToDo: (todos: Array<any>) => void;
};
export const ToDoList: React.FC<ToDoListProps> = ({
  todos,
  completeHandler,
  removeToDo,
}) => {
  if (todos.length === 0) {
    return <p className="mt-2 ms-5">Заданий нет или они все уже сделаны</p>;
  }
  const removeHandler = (event: React.MouseEvent, todos: Array<any>) => {
    removeToDo(todos);
  };

  return (
    <div className="mb-3 mt-5 ms-5 me-5">
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <div className="form-check form-switch border border-dark mb-1">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                checked={todo.complete}
                onChange={() => completeHandler(todo.id)}
              />
              <label
                className={
                  todo.complete
                    ? "form-check-label ms-2 text-decoration-line-through"
                    : "form-check-label ms-2"
                }
                htmlFor="flexSwitchCheckDefault"
              >
                {todo.task}
              </label>
            </div>
          </div>
        );
      })}
      <Button
        className="mt-3"
        onClick={(event) => {
          removeHandler(event, todos);
        }}
      >
        Clear Completed?
      </Button>
    </div>
  );
};
