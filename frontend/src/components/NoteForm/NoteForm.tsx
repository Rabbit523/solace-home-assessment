import React, { useState } from "react";
import { createNote } from "../../services/api";
import { NoteFormProps } from "../../types";
import { FormContainer, SubmitButton, TextareaField } from "..";

const NoteForm: React.FC<NoteFormProps> = ({ onNoteAdd }) => {
  const [content, setContent] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (content.length < 20 || content.length > 300) {
      alert("Note length must be between 20 and 300 characters.");
      return;
    }
    const newNote = await createNote(content);
    onNoteAdd(newNote);
    setContent("");
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <TextareaField
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your note here..."
      />
      <SubmitButton type="submit">Add Note</SubmitButton>
    </FormContainer>
  );
};

export default NoteForm;
