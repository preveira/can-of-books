# Can of Books

**Author**: Kawika Reveira, Justin Cheeseman
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview

"A sleek web app for managing your personal book collection. Explore, categorize, and track your reading journey with ease. Share recommendations and connect with fellow book enthusiasts. Start building your literary haven today!"

## Getting Started

npm install
npm install the following node services (express, axios, nodemon, dotenv, mongoose, cors)
Be sure to set your .env to include your DATABASE_URL for MOngoDB.

## Architecture

1. **Backend Technologies**:
   - **Node.js**: Used as the runtime environment for server-side JavaScript.
   - **Express.js**: Used as the web application framework for Node.js, providing a robust set of features for building web applications and APIs.
   - **MongoDB**: A NoSQL database used to store the application data. MongoDB is chosen for its flexibility and scalability, making it suitable for handling various types of data structures.
   - **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js. Mongoose provides a straightforward schema-based solution for modeling application data and interacting with MongoDB databases.

2. **Frontend Technologies (if applicable)**:
   - Since the focus seems to be on backend development, there might not be specific frontend technologies mentioned here. However, if there's a frontend component, popular choices might include React.js, Angular, or Vue.js for building interactive user interfaces.

3. **RESTful API Design**:
   - The application follows RESTful principles for designing its API endpoints. This includes using appropriate HTTP methods (GET, POST, PUT, DELETE) for CRUD operations on resources.
   - Each endpoint is designed to be resource-oriented, with clear and meaningful URLs that represent the resources being manipulated (e.g., `/books` for managing books).

4. **Application Architecture**:
   - The application follows a typical client-server architecture, where the backend server handles data storage, retrieval, and business logic, while the frontend (if applicable) interacts with the server via HTTP requests to fetch and display data to users.
   - The server-side code is structured using modular components, such as routers, models, controllers, etc., to promote maintainability and scalability.

5. **Data Modeling**:
   - Data is modeled using Mongoose schemas, which define the structure of the application's data entities (e.g., books).
   - Each schema defines the properties of a specific data entity, such as its fields, data types, validation rules, etc.

6. **Error Handling**:
   - The application implements error handling mechanisms to gracefully handle errors that may occur during request processing.
   - Errors are categorized and appropriate HTTP status codes (e.g., 500 for server errors, 404 for resource not found) are returned along with error messages to the client.

7. **Security**:
   - The application may implement security measures such as input validation, sanitization, and authentication/authorization mechanisms to protect against common security threats.
   - Measures like CORS (Cross-Origin Resource Sharing) headers may be used to control access to the API from different origins.

8. **Testing and Debugging**:
   - The application may include testing suites and tools for unit testing, integration testing, and end-to-end testing to ensure the reliability and robustness of the codebase.
   - Logging mechanisms are implemented to facilitate debugging and monitoring of the application's behavior.

Overall, the application design focuses on building a scalable, maintainable, and secure backend system for managing and interacting with data using RESTful API endpoints.

## Change Log
03-11-2024 2:00pm: Repositories created, team members added to each repo for collaboration. Front-end and Back-end repositories cloned to teams local machines to begin work. .gitignore, eslintrc.json, eslintrc.cjs, node_modules, files added. Added dependencies to package.json. Initial push/merge made from server repo by Kawika.

03-11-2024 7:50pm: Deployed server can-of-books-api to reder.com for back-end deployment.

03-11-2024 11:05pm: GET Books function added to back-end server.

03-12-2024 11:10pm: CREATE and DELETE requests added to back-end server.


## Estimates

Name of feature: GET Books Function

Estimate of time needed to complete: 3 hours

Start time: 7pm

Finish time: 10:25pm

Actual time needed to complete: 3.35 hours

*************************************************************************************************************************

Name of feature: CREATE and DELETE requests

Estimate of time needed to complete: 3 hours

Start time: 8:30pm

Finish time: 10:30pm

Actual time needed to complete: 2 hours

*************************************************************************************************************************

Name of feature: ________________________________

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____

*************************************************************************************************************************


## Credit and Collaborations
Justin Cheeseman - Collaboration team member
Special thank you to Jacob Knaack - Instructor at Code Fellows