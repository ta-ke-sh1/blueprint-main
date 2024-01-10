import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid } from "@mui/material";

const playground = [
  {
    name: "Shortest Path Visualizer",
    year: 2023,
    details: "",
    image: "",
    author: "Clement Mihailescu",
    url: "https://www.youtube.com/watch?v=msttfIHHkak",
  },
  {
    name: "Parallax Scrolling",
    year: 2022,
    details: "",
    image: "",
    author: "Dennis Snellenberg",
    url: "https://project-parallax.com/",
  },
  {
    name: "Side Scrolling",
    year: 2021,
    details: "",
    image: "",
    author: "Aristide Benoist",
    url: "https://camillemormal.com/",
  },
  {
    name: "Motion Trailing",
    year: 2023,
    details: "",
    image: "",
    author: "Manoela Ilic",
    url: "https://tympanus.net/codrops/2023/10/18/ideas-for-image-motion-trail-animations/",
  },
  {
    name: "Moving Eyes",
    year: 2022,
    details: "",
    image: "",
    author: "Saleh Mubashar",
    url: "https://salehmubashar.com/blog/mouse-tracking-eye-effect-with-javascript",
  },
];

export default function Playground() {
  const navigate = useNavigate();

  const [isGridView, setIsGridView] = useState(true);

  function handleNavigate(index) {
    navigate("/project/details/" + index);
  }

  function handleChangeView() {
    setIsGridView(!isGridView);
  }

  return (
    <div className="playground-container">
      <Button
        variant=""
        onClick={handleChangeView}
        style={{
          marginBottom: "30px",
        }}
      >
        {isGridView ? "List View" : "Grid View"}
      </Button>
      <div
        className="regular"
        style={{
          marginBottom: "30px",
        }}
      >
        This is where I try to replicate dope effects from around the internet.
        <br /> All the implementations are made in React.js
      </div>

      <Grid container spacing={isGridView ? 4 : 1}>
        {playground.map((project, index) => {
          project.index = index + 1;
          return isGridView ? <ProjectCardGrid project={project} /> : <ProjectCardList project={project} />;
        })}
      </Grid>
    </div>
  );
}

function ProjectCardList(props) {
  const { project } = props;
  return (
    <Grid item xs={12}>
      <div
        className="project-card-list"
        onClick={() => {
          // handleNavigate(index);
        }}
      >
        <div className="project-card-content">
          <div className="serif-light-italic s-40">({project.index})</div>
          <div
            style={{
              marginLeft: "40px",
            }}
          >
            <div className="serif-light-italic s-40">{project.name}</div>
            <div className="regular">by {project.author}</div>
          </div>
        </div>
        <div className="project-card-bg"></div>
      </div>
    </Grid>
  );
}

function ProjectCardGrid(props) {
  const { project } = props;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <div
        className="project-card-grid"
        onClick={() => {
          // handleNavigate(index);
        }}
      >
        <div className="project-card-index">
          <div className="serif-light-italic s-40">#{project.index}</div>
        </div>
        <div className="project-card-content">
          <div className="serif-light-italic s-40">{project.name}</div>
          <div className="regular">by {project.author}</div>
          <div></div>
        </div>
        <div className="project-card-bg"></div>
      </div>
    </Grid>
  );
}
