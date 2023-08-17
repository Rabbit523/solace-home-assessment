export interface Note {
  id: number;
  content: string;
}

export interface NotesListProps {
  searchTerm: string;
  notes: Note[];
}

export interface SearchBarProps {
  onSearch: (term: string) => void;
}

export interface NoteFormProps {
  onNoteAdd: (note: any) => void;
}