const API_URL = process.env.REACT_APP_API_ENDPOINT || "http://localhost:4000";

export const getNotes = async (searchTerm?: string) => {
  const endpoint = searchTerm
    ? `${API_URL}/notes/search/${searchTerm}`
    : `${API_URL}/notes`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
};

export const createNote = async (content: string) => {
  const response = await fetch(`${API_URL}/notes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content }),
  });
  const data = await response.json();
  return data;
};

export const updateNote = async (id: number, content: string) => {
  const response = await fetch(`${API_URL}/notes/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content }),
  });
  const data = await response.json();
  return data;
};

export const deleteNote = async (id: number) => {
  const response = await fetch(`${API_URL}/notes/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(`Failed to delete note with id ${id}`);
  }
};

export const searchNotes = async (term: string) => {
  const response = await fetch(`${API_URL}/search/${term}`);
  const data = await response.json();
  return data;
};
