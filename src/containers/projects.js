import { useState } from "react";
import ShortestPath from "../components/projects/shortestPath/shortestPath";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    name: "Shortest Path Visualizer",
    year: 2021,
    component: <ShortestPath />,
    details: "",
    image: "",
  },
];

export default function Projects() {
  const navigate = useNavigate();

  function handleNavigate(index) {
    navigate("/project/details/" + index);
  }

  return (
    <div className="projects-container">
      {projects[0].component}
      {projects.map((project, index) => {
        return (
          <div
            className="project-card"
            onClick={() => {
              handleNavigate(index);
            }}
          >
            <div className="project-card-content">
              <div>{project.name}</div>
            </div>
            <div className="project-card-bg"></div>
          </div>
        );
      })}
    </div>
  );
}
