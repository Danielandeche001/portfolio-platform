import { useState } from "react";

function ProjectForm({ addProject }) {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    image: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.title || !formData.category || !formData.description) {
      alert("Please fill in title, category, and description.");
      return;
    }

    addProject({
      ...formData,
      image:
        formData.image ||
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
    });

    setFormData({
      title: "",
      category: "",
      description: "",
      image: "",
    });
  };

  return (
    <form id="add-project" className="project-form" onSubmit={handleSubmit}>
      <h3>Add New Project</h3>

      <input
        type="text"
        name="title"
        placeholder="Project title"
        value={formData.title}
        onChange={handleChange}
      />

      <input
        type="text"
        name="category"
        placeholder="Category e.g. Web Design"
        value={formData.category}
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="Project description"
        value={formData.description}
        onChange={handleChange}
      />

      <input
        type="url"
        name="image"
        placeholder="Image URL optional"
        value={formData.image}
        onChange={handleChange}
      />

      <button type="submit">Add Project</button>
    </form>
  );
}

export default ProjectForm;
