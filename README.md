# Full-Stack Todo List Application

This is a full-stack Todo List application built using Spring Boot, React, Maven, Docker, and H2 Database.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Add, edit, delete, and view todos.
- Mark todos as completed.
- Responsive UI with React.
- RESTful API with Spring Boot.
- In-memory H2 database.
- Containerized with Docker for easy deployment.

## Technologies Used

- **Frontend:** React, JavaScript, HTML, CSS
- **Backend:** Spring Boot, Java 21
- **Build Tool:** Maven
- **Database:** H2 (in-memory)
- **Containerization:** Docker

## Prerequisites

- Java 21 or later
- Node.js and npm
- Docker (optional, for containerization)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/VMA9/fullstack-springboot-react-todolist.git
   cd fullstack-springboot-react-todolist

	2.	Install frontend dependencies:

cd todolist-frontend
npm install
cd ..


	3.	Build the backend:

./mvnw clean install



Running the Application

Without Docker

	1.	Start the backend server:

./mvnw spring-boot:run


	2.	Start the frontend development server:

cd todolist-frontend
npm start



With Docker

	1.	Build and run the Docker containers:

docker-compose up --build



Usage

	1.	Open your browser and navigate to http://localhost:3000 to access the Todo List application.
	2.	Use the UI to add, edit, delete, and mark todos as completed.

Contributing

Contributions are welcome! Please fork the repository and use a feature branch. Pull requests are accepted.

	1.	Fork the repository.
	2.	Create a new feature branch: git checkout -b feature/your-feature-name.
	3.	Commit your changes: git commit -m 'Add some feature'.
	4.	Push to the branch: git push origin feature/your-feature-name.
	5.	Open a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for details.