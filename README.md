# Task Management Application
This is a basic task management application where users can add, view, and delete tasks.The application consists of a backend API to manage tasks and a frontend application to interact with the API.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [.NET Framework](https://dotnet.microsoft.com/en-us/download/dotnet) (.Net 8.0 Framework)
- [Node.js and npm](https://nodejs.org/) (Node -> 20.12.1,Npm -> 10.5.0)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

## Technology Used
1. Backend: Dotnet Core Web Api
2. Database: Sql Server
3. ORM: Entity Framework
4. Frontend: React, HTML5, CSS(Tailwind)

# Task Management Backend (TaskManagementApiV1)

## Setup
1. Clone the repository.
2. Navigate to the project directory.
3. Open appsettings.json and update the connection string to match your SQL Server configuration.
4. Restore dependencies: `dotnet restore`
5. Update database: `dotnet ef database update`
6. Run the project: `dotnet run`

## Endpoints
- `GET /tasks`
- `POST /tasks`
- `DELETE /tasks/:id`

# Task Management Frontend (TaskManagementAppV1)

## Setup
1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies: `npm install`
4. Start the project: `npm run dev`

## Features
- List Tasks
- Add Task
- Delete Task
