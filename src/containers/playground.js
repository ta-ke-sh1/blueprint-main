import { useState } from "react";
import { useNavigate } from "react-router-dom";

const playground = [
  {
    id: 1,
    name: "Shortest Path Visualizer",
    year: 2021,
    details: "",
    image: "",
  },
];

export default function Playground() {
  const navigate = useNavigate();

  function handleNavigate(index) {
    navigate("/project/details/" + index);
  }

  return (
    <div className="playground-container">
      {playground.map((project, index) => {
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
