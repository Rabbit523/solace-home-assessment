import React, { useState, useEffect } from "react";
import { getNotes } from "../../services/api";
import { Note, NotesListProps } from "../../types";
import { NoteItem, NotesContainer } from "..";

const NotesList: React.FC<NotesListProps> = ({ searchTerm }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const notes = await getNotes(searchTerm);
      setNotes(notes);
    };

    fetchNotes();
  }, [searchTerm]);

  return (
    <NotesContainer>
      {notes.map((note) => (
        <NoteItem key={note.id}>
          <p>{note.content}</p>
        </NoteItem>
      ))}
    </NotesContainer>
  );
};

export default NotesList;
