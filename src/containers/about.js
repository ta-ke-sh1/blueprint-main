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

  function onExit() {}

  function onMouseEnterNav() {}

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
                  zIndex: 1000,
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
              paddingTop: "120dvh",
              margin: "0 auto",
              position: "relative",
              minHeight: "100vh",
              width: "80vw",
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
              FRESHLY GRADUATED IN 2023, CURRENTLY, HE'S WORKING AT TOSHIBA SOFTWARE DEVELOPMENT VIETNAM AS A VIRTUALIZATION-AND-SIMULATION-FOCUSED BACK-END DEVELOPER.
            </div>
            <div
              className="regular"
              style={{
                textAlign: "justify",
                fontSize: "14px",
                letterSpacing: "0px",
              }}
            >
              EVER SINCE A KID, TRUNG HAS ALWAYS LOVED CREATING MESMERIZING, EYE-CANDIED, AND DOPE-ASS PRODUCTS. NOW, HE TAKES VISUAL DESIGNING AND FRONT-END DEVELOPMENT AS A SIDE HOBBY. THIS WEBSITE MAINLY SERVES AS HIS PLAYGROUND AND SELF-LEARNING SPACE WHERE HE TRIES TO
              RECREATE STUNNING SCENES FROM TALENTS AROUND THE WORLD. THEY ARE REVISIONED MAINLY IN REACT.JS
            </div>
            <WorkExperiences
              sx={{
                marginTop: "100px",
              }}
            />
            <AcademicResults
              sx={{
                marginTop: "100px",
              }}
            />
            <AcademicAchievements
              sx={{
                marginTop: "100px",
              }}
            />
          </div>
        </div>
        <Contacts />
      </ScrollWrapper>
    </>
  );
}

function Ethos(props) {
  return (
    <div
      style={{
        ...props.sx,
      }}
    >
      <div xs={12} className="s-40 display-medium">
        My Ethos
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
            I believe in trial and errors{" "}
          </p>
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="flex-end">
            <p
              className="regular"
              style={{
                fontSize: "14px",
              }}
            >
              May 2023 - Now
            </p>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

function WorkExperiences(props) {
  return (
    <div
      style={{
        ...props.sx,
      }}
    >
      <div xs={12} className="s-40 display-medium">
        Work <br />
        Experiences
      </div>
      <p>
        <span
          className="semi-bold"
          style={{
            fontSize: "14px",
            textAlign: "justify",
          }}
        >
          Toshiba Software Development Vietnam
        </span>
      </p>
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
        <Grid item xs={4}>
          <Box display="flex" justifyContent="flex-end">
            <p
              className="regular"
              style={{
                fontSize: "14px",
              }}
            >
              May 2023 - Now
            </p>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <p
            className="regular"
            style={{
              fontSize: "14px",
              textAlign: "justify",
            }}
          >
            <span className="medium">Intern</span>
            <br />
            Work as an intern for my final defense thesis. Created a mobile application in Flutter to utilize deep learning model to predict and categorize human movements types using sensors readings of built-in sensors such as Accelerometer and Gyroscope.
          </p>
          <p
            className="regular"
            style={{
              fontSize: "14px",
              textAlign: "justify",
            }}
          >
            The model has achieved 95% prediction accuracy on 13 different holding positions. The result was further used in a pedometer module, which has achieved 91% overall accuracy in counting & differentiate walking, running and stairs climbing steps.
          </p>
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="flex-end">
            <p
              className="regular"
              style={{
                fontSize: "14px",
              }}
            >
              Nov 2022 - Apr 2023
            </p>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

function AcademicResults(props) {
  return (
    <div
      style={{
        ...props.sx,
      }}
    >
      <div
        className="regular"
        style={{
          textAlign: "justify",
          fontSize: "14px",
          letterSpacing: "0px",
        }}
      >
        IF YOU ARE LOOKING FOR MY ACADEMIC RESULTS THEN HERE IT IS:
      </div>
      <Grid container spacing={4} sx={{ marginBottom: "30px" }}>
        <Grid item xs={12} className="s-40 display-medium">
          Academic
          <br />
          Results
        </Grid>
        <Grid item xs={8}>
          <p
            className="regular"
            style={{
              fontSize: "14px",
              textAlign: "justify",
            }}
          >
            <span className="semi-bold">University of Greenwich, Vietnam</span>
            <br />
            Bachelor of Software Engineering
            <br />
            First Class Honors
            <br />
            GPA: 3.7/4.0
          </p>
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="flex-end">
            <p
              className="regular"
              style={{
                fontSize: "14px",
              }}
            >
              2020-2023
            </p>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <p
            className="regular"
            style={{
              fontSize: "14px",
              textAlign: "justify",
            }}
          >
            <span className="semi-bold">Foreign Trade University, Vietnam</span>
            <br />
            Bachelor of Business Japanese
          </p>
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="flex-end">
            <p
              className="regular"
              style={{
                fontSize: "14px",
              }}
            >
              2016 - 2020
            </p>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

function AcademicAchievements(props) {
  return (
    <div
      style={{
        ...props.sx,
      }}
    >
      <Grid container spacing={4} sx={{ marginBottom: "30px" }}>
        <Grid item xs={12} className="s-40 display-medium">
          Academic
          <br />
          Achievements
        </Grid>
        <Grid item xs={8}>
          <p
            className="regular"
            style={{
              fontSize: "14px",
              textAlign: "justify",
            }}
          >
            <span className="semi-bold">Top 3 Student with highest GPA</span>
            <br />
            of Computing Department
          </p>
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="flex-end" textAlign={"end"}>
            <p
              className="regular"
              style={{
                fontSize: "14px",
              }}
            >
              Summer 2023 <br />
              Fall 2022 <br />
              Summer 2022 <br />
              Spring 2022 <br />
              Fall 2021 <br />
              Spring 2021
            </p>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
