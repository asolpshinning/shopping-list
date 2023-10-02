# Introduction

This is a simple full-stack Shopping List app built with Golang, React(NextJS), and Postgres.

# Dependencies / Requirements
Please make sure you have the following installed on your machine before proceeding.
- Docker
- Make
- NodeJS
- Golang

# Steps to Run the App
## 1. Start the backend
    - cd into the `backend` directory
    - Make sure to have docker active
    - Make sure to have `.env` file in the `backend` directory (please use the content of `.env.example` file by renaming it to `.env`)
    - Start the postgres database by running `make db-up`
    - Start the backend server by running `go run main.go`
## 2. Start the frontend
    - cd into the `frontend` directory
    - run `npm install` to install dependencies
    - run `npm run dev` to start the frontend server
