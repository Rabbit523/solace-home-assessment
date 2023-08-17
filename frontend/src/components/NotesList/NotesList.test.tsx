/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "@testing-library/react";
import NotesList from "./NotesList";

test("it renders without crashing", () => {
  render(<NotesList notes={[]} searchTerm="" />);
});

test("it renders notes", () => {
  const notes = [
    { id: 1, content: "First Note" },
    { id: 2, content: "Second Note" },
  ];
  const searchTerm = "First";
  const { getByText } = render(<NotesList notes={notes} searchTerm={searchTerm}  />);

  expect(getByText("First Note")).toBeInTheDocument();
});
