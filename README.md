# React Portfolio Platform

A responsive single page portfolio application built with React. The app allows users to view projects, search projects dynamically, and add new projects using a form.

## Features

- Landing page with portfolio projects
- Reusable React components
- Add new project form
- Dynamic search and filtering
- Responsive layout
- State management using React `useState`
- Props passed between parent and child components

## Technologies Used

- React
- Vite
- JavaScript
- CSS
- Git and GitHub

## Component Hierarchy

```txt
App
- Header
- Hero
- SearchBar
- ProjectForm
- ProjectList
  - ProjectCard
```

## Project Structure

```txt
src/
  components/
    Header.jsx
    Hero.jsx
    SearchBar.jsx
    ProjectForm.jsx
    ProjectList.jsx
    ProjectCard.jsx
  data/
    projects.js
  App.jsx
  App.css
  main.jsx
```

## How to Run

```bash
npm install
npm run dev
```

## Author

Daniel Andeche
