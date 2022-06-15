export function filter(todos: Array<any>) {
  return todos.filter((todo) => todo.complete);
}
