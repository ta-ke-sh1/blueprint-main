import { useEffect } from "react";
import TwoColumnGrid from "../components/container/twoColumn";
import { useColorTheme } from "../hooks/useColorTheme";
import { Grid, Box } from "@mui/material";
import FaceSVG from "../components/svgs/faceSvg";

export default function AboutMe(props) {
  const { fetchSavedPallete } = useColorTheme();

  useEffect(() => {
    fetchSavedPallete();
  }, []);

  return (
    <div
      style={{
        ...props.sx,
        padding: "0 1.5vw",
        marginBottom: "60px",
        height: "100vh",
      }}
    >
      <Grid container>
        <Grid item xs={4}>
          <div style={{ position: "fixed", height: "100%", width: "100%" }} className="s-120 display-medium">
            <div
              style={{
                marginTop: "60vh",
                position: "relative",
                height: "100%",
                width: "33.33vw",
              }}
            >
              Folio
              <FaceSVG
                sx={{
                  position: "absolute",
                  right: "200px",
                  top: "-30px",
                  zIndex: -1,
                }}
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={8}>
          <div
            style={{
              marginTop: "20vh",
              height: "35vh",
              backgroundColor: "#D9D9D9",
            }}
          ></div>
          <Grid
            container
            spacing={4}
            style={{
              marginTop: "5vh",
              fontSize: "70px",
              marginBottom: "5vh",
            }}
          >
            <Grid item xs={9}>
              <div className="serif-light-italic">Hello, my name is Trung, a fresh developer based in Hanoi.</div>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={6}></Grid>
            <Grid item xs={6}>
              <div
                className="regular"
                style={{
                  textAlign: "justify",
                  fontSize: "16px",
                  letterSpacing: "0px",
                }}
              >
                CURRENTLY WORKING AT TOSHIBA SOFTWARE DEVELOPMENT VIETNAM AS A VIRTUALIZATION AND SIMULATION BACK-END DEVELOPER. HOWEVER, MY PASSION IS TO CREATE MESMERIZING AND DOPE-ASS PRODUCTS.
              </div>
            </Grid>
          </Grid>

          <TechStack
            sx={{
              marginTop: "100px",
            }}
          />

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

          <div
            style={{
              marginTop: "20vh",
              height: "100px",
            }}
          ></div>
        </Grid>
      </Grid>
    </div>
  );
}

function TechStack(props) {
  const style = {
    height: "240px",
    backgroundColor: "#D9D9D9",
    borderRadius: "5px",
  };

  return (
    <>
      <Grid container spacing={4} sx={{ ...props.sx }}>
        <Grid item xs={12} className="s-40 display-medium">
          Tech Stack
        </Grid>
        <Grid item xs={3}>
          <div style={{ ...style }}></div>
        </Grid>
        <Grid item xs={3}>
          <div style={{ ...style }}></div>
        </Grid>
        <Grid item xs={3}>
          <div style={{ ...style }}></div>
        </Grid>
        <Grid item xs={3}>
          <div style={{ ...style }}></div>
        </Grid>
        <Grid item xs={3}>
          <div style={{ ...style }}></div>
        </Grid>
        <Grid item xs={3}>
          <div style={{ ...style }}></div>
        </Grid>
        <Grid item xs={3}>
          <div style={{ ...style }}></div>
        </Grid>
        <Grid item xs={3}>
          <div style={{ ...style }}></div>
        </Grid>
      </Grid>
    </>
  );
}

function WorkExperiences(props) {
  return (
    <div
      style={{
        ...props.sx,
      }}
    >
      <div item xs={12} className="s-40 display-medium">
        Work <br />
        Experiences
      </div>
      <p>
        <span
          className="semi-bold"
          style={{
            fontSize: "18px",
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
              fontSize: "18px",
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
                fontSize: "18px",
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
              fontSize: "18px",
              textAlign: "justify",
            }}
          >
            <span className="medium">Intern</span>
            <br />
            Work as an intern for my final defense thesis. Created a mobile application in Flutter to utilize deep learning model to predict and categorize human movements types using sensors’ readings of built-in sensors such as Accelerometer and Gyroscope.
          </p>
          <p
            className="regular"
            style={{
              fontSize: "18px",
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
                fontSize: "18px",
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
              fontSize: "18px",
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
                fontSize: "18px",
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
              fontSize: "18px",
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
                fontSize: "18px",
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
              fontSize: "18px",
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
                fontSize: "18px",
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
