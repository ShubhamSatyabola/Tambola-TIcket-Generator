# Tambola Ticket Generator Backend

## Description

This repository contains the backend engine for generating and managing Tambola tickets. The project is implemented using Node.js with Express and Sequelize for MySQL database integration.

The numbers 1 to 90 are used once only.
● In the first column are the numbers 1 to 9, the second column has numbers 10 to
19, etc, all the way to the 9th column which has numbers 80 to 90 in it.
● Every row must have exactly 5 numbers in it.
● In a specific column, numbers must be arranged in ascending order from top to
bottom.
● Each column must have at least 1 number.
● All the numbers 1 to 90 are used only once in each set of 6 tickets.
● Blank Cell fill by zero.
● Each ticket must be unique and not exist in the database.


## Features

- **Tambola Ticket Generation:** Generate N sets of Tambola tickets and save them to the database.
- **Pagination:** Retrieve Tambola tickets with pagination.
- **Production-Grade:** Code architecture and structure are designed to be production-ready using MVC architecture.
- **Robust Error Handling:** Implemented robust error handling and logging .
- **Data Validations:** Validation of input data with proper error messages.

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ShubhamSatyabola/Tambola-TIcket-Generator.git

   Install dependencies:

## bash
## Copy code

  npm install

  
## Set up the database:

provide necessary Db name and  password in util/database folder


# Run the server:

## bash
## Copy code

npm start
The server will be running at http://localhost:3000.

# API Endpoints


1. Generate Tambola Ticket
Endpoint: POST /ticket/create-tickets
Parameters:
sets(Number of sets)
2. Fetch Tambola Tickets
Endpoint: GET /tickets/get-tickets
Parameters:
page (Page number, default: 1)
pageSize (Number of tickets per page, default: 10)
Usage
Generate Tambola tickets by making a POST request to /ticket/create-tickets.
Retrieve Tambola tickets with pagination by making a GET request to /tickets/get-tickets.

## Contributors

Shubham Satyabola
