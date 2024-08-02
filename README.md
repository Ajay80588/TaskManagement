# Task Management Application
This is a basic task management application where users can add, view, and delete tasks.The application consists of a backend API to manage tasks and a frontend application to interact with the API.

-> Please use visual studio and visual studio code in admin mode.

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

## Choose either of below setup for backend project

## Setup if using Microsoft Visual Studio
1. Clone the repository.
2. Open project in visual studio.
3. Open appsettings.json and update the connection string to match your SQL Server configuration.
4. Please run below command in "Package Manager Console" in Visual Studio
5. Restore dependencies: `dotnet restore`
6. Update database: `database update`
7. Run the project: Normal run using Visual studio which we usually do.
8. Note: Please run backend project in http only. We are using http url in frontend project.

## Setup if using Visual Studio Code (Cli tool)
1. Clone the repository.
2. Navigate to the project directory.
3. Open appsettings.json and update the connection string to match your SQL Server configuration.
4. Please run below command in "Terminal" window in Visual Studio Code
5. Restore dependencies: `dotnet restore`
6. Install dotnet-ef: `dotnet tool install --global dotnet-ef`
7. Update database: `dotnet ef database update`
8. Run the project: `dotnet run`
9. Note: Please run backend project in http only. We are using http url in frontend project.

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
