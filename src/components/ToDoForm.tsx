import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

interface ToDoFormProps {
  addToDo(userInput: string): void;
}

export const ToDoForm: React.FC<ToDoFormProps> = (props) => {
  const [userInput, setUserInput] = useState("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };
  const submitHandler = () => {
    props.addToDo(userInput);
    setUserInput("");
  };
  return (
    <InputGroup className="mb-3 mt-5">
      <Form.Control
        placeholder="Введите задачу"
        aria-label="Введите задачу"
        aria-describedby="basic-addon2"
        value={userInput}
        onChange={changeHandler}
      />
      <Button
        variant="outline-secondary"
        id="button-addon2"
        onClick={submitHandler}
      >
        Добавить
      </Button>
    </InputGroup>
  );
};
