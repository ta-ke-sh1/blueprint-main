import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, IconButton } from "@mui/material";

import ViewListIcon from "@mui/icons-material/ViewList";
import GridViewIcon from "@mui/icons-material/GridView";
import Contacts from "./contacts";
import ScrollWrapper from "../hooks/useSmoothScroll";
import { ProjectCardGrid, ProjectCardList } from "../components/cards/cards";

import { useColorTheme } from "../hooks/useColorTheme";
import { usePreloader } from "../hooks/usePreloader";

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
  const { fetchSavedPalette } = useColorTheme();

  const preloader = usePreloader();

  useEffect(() => {
    setTimeout(() => {
      preloader.tl.play();
    }, 1500);
    fetchSavedPalette();
  }, []);

  const [isGridView, setIsGridView] = useState(true);

  function handleNavigate(index) {
    navigate("/playground/details/" + index);
  }

  function handleChangeView() {
    setIsGridView(!isGridView);
  }

  return (
    <>
      <ScrollWrapper>
        <div className="playground-container" data-scroll>
          <div
            className="mt-30 mb-20"
            style={{
              width: "100%",
              textAlign: "center",
            }}
          >
            <div className="serif-light-italic s-72 mb-20">Playground</div>
            <div className="regular s-16 mb-10">
              This is where I try to replicate dope effects from around the internet.
              <br /> All the implementations are made in React.js
            </div>

            <IconButton variant="" onClick={handleChangeView}>
              {isGridView ? <GridViewIcon /> : <ViewListIcon />}
            </IconButton>
          </div>

          <Grid container spacing={isGridView ? 4 : 1}>
            {playground.map((project, index) => {
              project.index = index + 1;
              return isGridView ? <ProjectCardGrid handleNavigate={handleNavigate} index={index} project={project} /> : <ProjectCardList handleNavigate={handleNavigate} index={index} project={project} />;
            })}
          </Grid>
        </div>

        <Contacts />
        <div
          style={{
            height: "80px",
          }}
        ></div>
      </ScrollWrapper>
    </>
  );
}
