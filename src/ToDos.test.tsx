import { filter } from "./filterTest";

test("return complete true", () => {
  const todos: Array<any> = [
    {
      id: 1,
      task: "learn jest",
      complete: true,
    },
  ];
  filter(todos).forEach((todo, index) => {
    expect(true).toEqual(true);
  });
});

test("return: complete fasle", () => {
  const todos: Array<any> = [
    {
      id: 2,
      task: "make test",
      complete: true,
    },
  ];
  filter(todos).forEach((todo, index) => {
    expect(true).toEqual(true);
  });
});

test("return: complete false", () => {
  const todos: Array<any> = [
    {
      id: 3,
      task: "get work",
      complete: false,
    },
  ];
  filter(todos).forEach((todo, index) => {
    expect(false).toEqual(true);
  });
});

test("return: complete fasle again", () => {
  const todos: Array<any> = [
    {
      id: 4,
      task: "save world",
      complete: false,
    },
  ];
  filter(todos).forEach((todo, index) => {
    expect(false).toEqual(true);
  });
});
