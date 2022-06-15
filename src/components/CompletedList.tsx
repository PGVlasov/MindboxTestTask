import { IToDo } from "../interFaces";

type ToDoListProps = {
  completed: IToDo[];
};

export const CompletedList: React.FC<ToDoListProps> = ({ completed }) => {
  return (
    <div className="mb-3 mt-5 ms-5 me-5">
      {completed.map((todo) => {
        return (
          <div key={todo.id}>
            <div className="form-check form-switch border border-dark mb-1">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                checked={todo.complete}
                onChange={() => {}}
              />
              <label
                className={"form-check-label ms-2 text-decoration-line-through"}
                htmlFor="flexSwitchCheckDefault"
              >
                {todo.task}
              </label>
            </div>
          </div>
        );
      })}
    </div>
  );
};
