import { useState } from "react";
import "./App.css";
import { initialProjects } from "./data/projects";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState("");

  const addProject = (newProject) => {
    setProjects([
      {
        id: Date.now(),
        ...newProject,
      },
      ...projects,
    ]);
  };

  const filteredProjects = projects.filter((project) => {
    const search = searchTerm.toLowerCase();

    return (
      project.title.toLowerCase().includes(search) ||
      project.category.toLowerCase().includes(search) ||
      project.description.toLowerCase().includes(search)
    );
  });

  return (
    <div className="app">
      <Header />
      <Hero />

      <main className="container">
        <section className="controls-section">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <ProjectForm addProject={addProject} />
        </section>

        <ProjectList projects={filteredProjects} />
      </main>
    </div>
  );
}

export default App;
