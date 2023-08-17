import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import NotesList from "./components/NotesList/NotesList";
import NoteForm from "./components/NoteForm/NoteForm";
import SearchBar from "./components/SearchBar/SearchBar";
import { Note } from "./types";
import { AppContainer } from "./components";
import { searchNotes } from "./services/api";

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [notes, setNotes] = useState<Note[]>([]);

  const handleNoteAdd = (newNote: Note) => {
    // Add the new note to the state, so it renders immediately.
    setNotes((prevNotes) => [newNote, ...prevNotes]);
  };

  useEffect(() => {
    // Fetch the search results when the searchTerm changes
    if (searchTerm) {
      searchNotes(searchTerm).then(setNotes);
    }
  }, [searchTerm]);

  return (
    <AppContainer>
      <Header />
      <SearchBar onSearch={setSearchTerm} />
      <NotesList notes={notes} searchTerm={searchTerm} />
      <NoteForm onNoteAdd={handleNoteAdd} />
    </AppContainer>
  );
};

export default App;
