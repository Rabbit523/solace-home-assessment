import styled from "styled-components";

export const AppContainer = styled.div`
  padding: 20px;
  background-color: #f6f6f6;
  font-family: Arial, sans-serif;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const NavLink = styled.a`
  text-decoration: none;
  img {
    max-height: 77px;
    max-width: 100%;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const TextareaField = styled.textarea`
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const NotesContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

export const NoteItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }
`;

export const SearchBarContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 20px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  width: 100%;
`;
