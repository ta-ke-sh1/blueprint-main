import { useEffect, useRef } from "react";
import { Grid, Box } from "@mui/material";
import Contacts from "./contacts";
import { usePreloader } from "../hooks/usePreloader";
import ScrollWrapper from "../hooks/useSmoothScroll";
import BottomNavigation from "../components/navigation/bottomNav";
import { textShuffle } from "../animations/text";

export default function AboutMe(props) {
  const { openAnimation } = usePreloader();
  const title = useRef();

  let currentIndex = 1;

  useEffect(() => {
    openAnimation();
    console.log("loaded");
  }, []);

  function onExit() { }

  function onMouseEnterNav() { }

  function mouseEnterTitle() {
    let interval;
    textShuffle(title.current, "DEVELOPER", interval, 50);
  }

  return (
    <>
      <BottomNavigation onExit={onExit} onMouseEnterNav={onMouseEnterNav} current={1} />
      <ScrollWrapper>
        <div
          style={{
            ...props.sx,
          }}
        >
          <div
            style={{
              margin: 0,
              position: "absolute",
              left: 0,
              top: 0,
              width: "100dvw",
              height: "100dvh",
              backgroundImage: `url("/banner.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                  color: "white",
                  zIndex: 10,
                }}
              >
                <div className="display-light-italic s-48">
                  a
                  <br />
                  <span className="medium" onMouseEnter={mouseEnterTitle} ref={title}>
                    DEVELOPER
                  </span>
                  <br />
                  currently
                  <br />
                  based
                  <br />
                  in
                  <br />
                  Hanoi, Vietnam
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              paddingTop: "110dvh",
              margin: "0 auto",
              position: "relative",
              minHeight: "100vh",
              width: "60vw",
            }}
          >
            <div
              className="regular"
              style={{
                textAlign: "justify",
                fontSize: "14px",
                letterSpacing: "0px",
                marginBottom: "20px",
              }}
            >
              HA TRUNG GRADUATED FROM THE UNIVERSITY OF GREENWICH WITH FIRST-CLASS HONORS IN 2023. HE HAS BEEN WORKING AS A BACK-END DEVELOPER WITH
              A FOCUS ON VIRTUALIZATION AND SIMULATION AT TOSHIBA SOFTWARE DEVELOPMENT VIETNAM. TRUNG HAS ALWAYS HAD A PASSION FOR CREATING VISUALLY STUNNING PRODUCTS,
              WHICH HE HAS ENJOYED SINCE HIS EARLY YEARS OF CHILDHOOD.
              <br /><br />
              IN HIS FREE TIME, TRUNG PURSUES VISUAL DESIGNING AND FRONT-END DEVELOPMENT AS A HOBBY. THIS WEBSITE IS PRIMARILY
              A SPACE FOR HIM TO EXPERIMENT AND LEARN ON HIS OWN, WHERE HE TRIES TO REPLICATE AMAZING SCENES FROM TALENTED INDIVIDUALS AROUND THE WORLD.
              HE USES MAINLY REACT.JS FOR IMPLEMENTATION.
            </div>
            <div
              className="regular"
              style={{
                textAlign: "justify",
                fontSize: "14px",
                letterSpacing: "0px",
              }}
            >
            </div>
            <WhatIDo sx={{
              marginTop: "100px",
            }} />
          </div>
        </div>
        <Contacts />
      </ScrollWrapper>
    </>
  );
}

function WhatIDo(props) {
  return (
    <div
      style={{
        ...props.sx,
      }}
    >
      <div xs={12} className="s-40 display-light-italic">
        What can<br />
        I Do?
      </div>
      <Grid container spacing={4} sx={{ marginBottom: "30px" }}>
        <Grid item xs={8}>
          <p
            className="regular"
            style={{
              fontSize: "14px",
              textAlign: "justify",
            }}
          >
            <span className="medium">Software Engineer</span>
            <br />
            Worked a full-time software engineer to develop a virtual environment for testing industrial IOT systems that uses different networking protocol (DIO, SECNET, FLNET).
          </p>
        </Grid>
      </Grid>
    </div>
  );
}
