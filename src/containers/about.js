import { useEffect } from "react";
import TwoColumnGrid from "../components/container/twoColumn";
import { useColorTheme } from "../hooks/useColorTheme";
import { Grid, Box } from "@mui/material";

export default function AboutMe() {
  const { fetchSavedPallete } = useColorTheme();

  useEffect(() => {
    fetchSavedPallete();
  }, [])

  return (
    <div
      style={{
        padding: "150px 1.5vw",
      }}
    >
      <LandingImage sx={{
        marginBottom: "60px",
      }} />
      <Folio sx={{
        marginBottom: "60px",
      }} />
      <TechStack sx={{
        marginBottom: "60px",
      }} />
      <WorkExperiences sx={{
        marginBottom: "60px",
      }} />
      <AcademicResults sx={{
        marginBottom: "60px",
      }} />
      <AcademicAchievements sx={{
        marginBottom: "60px",
      }} />
    </div>
  );
}

function LandingImage(props) {
  return (
    <>
      <TwoColumnGrid
        sx={{
          ...props.sx,
          marginBottom: "60px",
        }}
        rightContent={
          <div
            style={{
              height: "364px",
              backgroundColor: "#D9D9D9",
            }}
          ></div>
        }
      />
    </>
  );
}

function Folio(props) {
  return (
    <TwoColumnGrid
      sx={{ ...props.sx, marginBottom: "120px" }}
      leftContent={<div className="s-120 display-medium">Folio</div>}
      rightContent={
        <>
          <Grid container spacing={4} style={{
            fontSize: '70px'
          }}>
            <Grid item xs={9}>
              <div className="medium" style={{ letterSpacing: '-3px' }}>
                Hello, my name is Trung, <br /> a fresh developer based in Hanoi.
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={6}>
            </Grid>
            <Grid item xs={6}>
              <div className="regular" style={{
                fontSize: '20px'
              }}>
                Currently working at Toshiba Software Development Vietnam as a virtualization and simulation back-end developer. However, my passion is to create mesmerizing and dope-ass products.
              </div>
            </Grid>
          </Grid>
        </>

      }
    />
  );
}

function TechStack(props) {
  const style = {
    height: '240px',
    backgroundColor: '#D9D9D9',
    borderRadius: '5px'
  }

  return <TwoColumnGrid sx={{ ...props.sx, marginBottom: "120px" }} leftContent={<div className="s-48 display-medium">Tech Stack</div>} rightContent={

    <Grid container spacing={4}>
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
  } />;
}

function WorkExperiences(props) {
  return <TwoColumnGrid sx={{ ...props.sx, marginBottom: "120px" }} leftContent={<div className="s-48 display-medium">Work<br />Experiences</div>}
    rightContent={
      <>
        <p >
          <span className="semi-bold" style={{
            fontSize: '20px',
            textAlign: 'justify'
          }}>
            Toshiba Software Development Vietnam
          </span>
        </p>
        <Grid container spacing={4} sx={{ marginBottom: "30px" }}>
          <Grid item xs={8}>
            <p className="regular" style={{
              fontSize: '20px',
              textAlign: 'justify'
            }}>
              <span className="medium">
                Software Engineer
              </span>
              <br />
              Worked a full-time software engineer to develop a virtual environment for testing industrial IOT systems that uses different networking protocol (DIO, SECNET, FLNET).
            </p>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" justifyContent="flex-end">
              <p className="regular" style={{
                fontSize: '20px'
              }}>
                May 2023 - Now
              </p>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={8}>
            <p className="regular" style={{
              fontSize: '20px',
              textAlign: 'justify'
            }}>
              <span className="medium">
                Intern
              </span>
              <br />
              Work as an intern for my final defense thesis. Created a mobile application in Flutter to utilize deep learning model to predict and categorize human movements types using sensors’ readings of built-in sensors such as Accelerometer and Gyroscope.
            </p>
            <p className="regular" style={{
              fontSize: '20px',
              textAlign: 'justify'
            }}>
              The model has achieved 95% prediction accuracy on 13 different holding positions. The result was further used in a pedometer module, which has achieved 91% overall accuracy in counting & differentiate walking, running and stairs climbing steps.
            </p>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" justifyContent="flex-end">
              <p className="regular" style={{
                fontSize: '20px'
              }}>
                Nov 2022 - Apr 2023
              </p>
            </Box>
          </Grid>
        </Grid>
      </>
    }
  />;
}

function AcademicResults(props) {
  return <TwoColumnGrid sx={{ ...props.sx, marginBottom: "120px" }} leftContent={<div className="s-48 display-medium">Academic<br />Results</div>} rightContent={
    <>
      <Grid container spacing={4} sx={{ marginBottom: "30px" }}>
        <Grid item xs={8}>
          <p className="regular" style={{
            fontSize: '20px',
            textAlign: 'justify'
          }}>
            <span className="semi-bold">
              University of Greenwich, Vietnam
            </span>
            <br />
            Bachelor of Software Engineering<br />
            First Class Honors<br />
            GPA: 3.7/4.0
          </p>
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="flex-end">
            <p className="regular" style={{
              fontSize: '20px'
            }}>
              2020-2023
            </p>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <p className="regular" style={{
            fontSize: '20px',
            textAlign: 'justify'
          }}>
            <span className="semi-bold">
              Foreign Trade University, Vietnam
            </span>
            <br />
            Bachelor of Business Japanese
          </p>
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="flex-end">
            <p className="regular" style={{
              fontSize: '20px'
            }}>
              2016 - 2020
            </p>
          </Box>
        </Grid>
      </Grid>
    </>
  }
  />;
}

function AcademicAchievements(props) {
  return <TwoColumnGrid sx={{ ...props.sx, marginBottom: "120px" }} leftContent={<div className="s-48 display-medium">Academic<br />Achievements</div>} rightContent={
    <>
      <Grid container spacing={4} sx={{ marginBottom: "30px" }}>
        <Grid item xs={8}>
          <p className="regular" style={{
            fontSize: '20px',
            textAlign: 'justify'
          }}>
            <span className="semi-bold">
              Top 3 Student with highest GPA
            </span>
            <br />
            of Computing Department
          </p>
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="flex-end" textAlign={"end"}>
            <p className="regular" style={{
              fontSize: '20px'
            }}>
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
    </>
  } />;
}
