# Introduction

This is a simple full-stack Shopping List app built with Golang, React(NextJS), and Postgres.

# Dependencies / Requirements
Please make sure you have the following installed on your machine before proceeding.
- Docker
- Make
- NodeJS
- Golang

# Steps to Run the App
 1. Clone this repository
    
 2. Start the backend

    - cd into the `backend` directory
    - make sure to have docker active
    - make sure to have `.env` file in the `backend` directory (please use the content of `.env.example` file by renaming it to `.env`)
    - start the postgres database by running `make db-up`
    - start the backend server by running `go run main.go`
 
 3. Start the frontend
    - cd into the `frontend` directory
    - run `npm install` to install dependencies
    - run `npm run dev` to start the frontend server
