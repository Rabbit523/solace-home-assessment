/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NoteForm from './NoteForm';

test('it renders without crashing', () => {
  render(<NoteForm onNoteAdd={jest.fn()} />);
});

test('it handles the note submission', async () => {
  const mockOnNoteAdd = jest.fn();
  const { getByPlaceholderText, getByText } = render(<NoteForm onNoteAdd={mockOnNoteAdd} />);
  const textarea = getByPlaceholderText('Write your note here...');
  const button = getByText('Add Note');

  fireEvent.change(textarea, { target: { value: "This is a sample note content that's more than 20 characters." } });
  fireEvent.click(button);

  // Assuming createNote is mocked and works, the following line checks if our mock function was called
  expect(mockOnNoteAdd).toHaveBeenCalledTimes(1);
});
