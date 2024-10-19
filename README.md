# Task Manager App

## Overview

Task Manager is a web application built with Next.js that allows users to manage their tasks efficiently. Users can create, update, delete, and filter tasks based on priority and other criteria.

## Features

- Read ,Create, update, and delete tasks
- Sort tasks by priority, due_date, status and created_at etc
- Filter tasks based on status, priority, and other attributes

## Tech stack

- Typescript
- Next.js
- Tailwindcss
- Prisma ORM
- Postgresql
- Shadcn.ui

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/veronica-76sh/Task-manager.git
   cd task-manager-app

2. Install dependencies:

   ```bash
   npm install

3. Run the development server:

   ```bash
   npm run dev

4. Open <http://localhost:3000> with your browser to see the result.

## API Endpoints

## Tasks

### GET /api/tasks

Retrieves all tasks.

- **Query parameters**: `sort`, `filter`
- **Response**:

  ```json
  [
    { "id": "string", "title": "string", "description" : "string" ,"priority": "string", "status": "string", "dueDate": "date" }
  ]

### POST /api/tasks

Creates a new task.

- **Request body**:

  ```json
  { "title": "string", "description" : "string" ,"priority": "string", "status": "string", "dueDate": "date" }
- **Response body**:

  ```json
  { "message": "Task created successfully" }

### PATCH /api/tasks/:id

Updates an existing task.

- **Request body**:

    ```json
    { "title": "string", "description" : "string", "status": "string", "priority": "string" }
- **Response:**

    ```json
    { "message": "Task updated successfully" }

### DELETE /api/tasks/:id

Deletes a task.

- **Response**:

    ```json
    { "message": "Task deleted successfully" }

## Sorting and Filtering

### Sorting

Tasks can be sorted by the following criteria:

priority
dueDate
status

### Example:

- **GET /api/tasks?sort=priority**

### Filtering

Tasks can be filtered by the following attributes:

status
priority

### Example:

- **GET /api/tasks?status=IN_PROGRESS**

## Contributing

1. Fork the repository.

2. Create a new branch: git checkout -b feature/your-feature-name.

3. Make your changes and commit them: git commit -m 'Add some feature'.
4. Push to the branch: git push origin feature/your-feature-name.
5. Open a pull request.