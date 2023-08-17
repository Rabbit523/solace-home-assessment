# Solace Simple Notes Web App

A web application to create, view, update, and delete notes with added search functionality.

## Technologies Used

- Backend: NestJS
- Frontend: React with TypeScript

## Local Setup

1. **Clone the Repo**:

   ```bash
   git clone [https://github.com/Rabbit523/solace-home-assessment]
   cd [solace-home-assessment]

2. **Install Dependencies**:
   - Backend:

      ```bash
      cd backend
      npm install

   - Frontend:

    ```bash
    cd frontend
    npm install

3. **Run the Applications**:
   - Backend:

      ```bash
      cd backend
      npm run start:dev

   - Frontend:

    ```bash
    cd frontend
    npm start

## Features

-CRUD operations for notes.
-Search functionality to find notes by content.

## Assumptions & Decisions

Notes are stored in-memory for simplicity.
Search functionality is implemented on the client-side for real-time filtering.

## Trade-offs

Opted for client-side search to reduce the number of server requests, but it might not be scalable for a large number of notes.

## License

Again, make sure to replace the placeholders (`[https://github.com/Rabbit523/solace-home-assessment]` and `[solace-home-assessment]`) with your actual repository details.
