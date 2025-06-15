# Express Comments App

A simple and interactive comment management app built with **Node.js** and **Express.js**. Users can create, view, edit, and delete comments in a browser interface. Each comment is given a unique ID and displayed using server-side rendering with EJS templates.

---

## Features

- View all existing comments  
- Create a new comment with username and message  
- View individual comment details  
- Edit a comment  
- Delete a comment  
- Form validation for empty inputs  
- Clean, RESTful route design

---

## Preview

This app includes the following pages:

- **All Comments** – Lists all comments with options to view, edit, or delete  
- **Add Comment** – Simple form to create a new comment  
- **Edit Comment** – Form to modify an existing comment  
- **Comment Details** – View one comment's full content

---

## Technologies Used

- **Node.js** – JavaScript runtime for the backend  
- **Express.js** – Framework to handle routing and middleware  
- **EJS** – Templating engine for server-side rendering  
- **UUID** – Generates unique IDs for each comment  
- **HTML & CSS** – Used within EJS templates for layout and design

---

## JavaScript Concepts Used

- RESTful Routing using Express Router  
- Dynamic route parameters (`:id`)  
- Form handling and validation  
- Array manipulation (`find`, `filter`, `push`)  
- Conditional rendering with EJS

---

## Routes Overview

| Route                   | Method | Description                     |
|------------------------|--------|---------------------------------|
| `/comments`            | GET    | View all comments               |
| `/comments`            | POST   | Add a new comment               |
| `/comments/newComment` | GET    | Show form to add a comment      |
| `/comments/:id`        | GET    | View a specific comment         |
| `/comments/:id`        | PATCH  | Edit a comment                  |
| `/comments/:id`        | DELETE | Delete a comment                |
| `/comments/:id/edit`   | GET    | Show form to edit a comment     |

---

## Future Improvements
	•	Connect to a database like MongoDB
	•	Add user authentication
	•	Display timestamps on comments
	•	Use flash messages for success/error notifications
	•	Add styling with CSS frameworks like Tailwind or Bootstrap
 
 Note: The data will reset each time the server restarts, since no database is connected.
