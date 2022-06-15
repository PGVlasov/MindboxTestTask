import { IToDo } from "../interFaces";

type ToDoListProps = {
  unCompleted: IToDo[];
};

export const ActiveList: React.FC<ToDoListProps> = ({ unCompleted }) => {
  return (
    <div className="mb-3 mt-5 ms-5 me-5">
      {unCompleted.map((todo) => {
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
                className={"form-check-label ms-2"}
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
