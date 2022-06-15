import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("render header", () => {
  render(<App />);
  const linkElement = screen.getByText(/All todos are here/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders PlaceholderText", () => {
  render(<App />);
  const linkElement = screen.getByPlaceholderText(/Введите задачу/);
  expect(linkElement).toBeInTheDocument();
});
