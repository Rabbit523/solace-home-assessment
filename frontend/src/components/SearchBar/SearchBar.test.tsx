/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";

test("it renders without crashing", () => {
  render(<SearchBar onSearch={jest.fn()} />);
});

test("it handles search input", () => {
  const mockOnSearch = jest.fn();
  const { getByPlaceholderText, getByText } = render(
    <SearchBar onSearch={mockOnSearch} />
  );
  const input = getByPlaceholderText("Search notes...");
  const button = getByText("Search");

  fireEvent.change(input, { target: { value: "sample" } });
  fireEvent.click(button);

  expect(mockOnSearch).toHaveBeenCalledWith("sample");
});
