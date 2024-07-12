import { useEffect, useRef } from "react";
import { Grid } from "@mui/material";
import Contacts from "./contacts";
import { usePreloader } from "../hooks/usePreloader";
import ScrollWrapper from "../hooks/useSmoothScroll";
import BottomNavigation from "../components/navigation/bottomNav";
import { textShuffle } from "../animations/text";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe(props) {
  const { openAnimation } = usePreloader();
  const title = useRef();

  const landingImg = useRef();

  useEffect(() => {
    openAnimation();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(landingImg.current, {
        scrollTrigger: {
          trigger: landingImg.current,
          scrub: true,
          start: "-50% center",
          end: () => {
            let height = window.innerHeight * 2;
            return `+=${height}px`;
          },
        },
        backgroundPosition: "100% 100%",
      });
    }, []);

    return function () {
      ctx.revert();
    };
  });

  function onExit() { }

  function onMouseEnterNav() { }

  function mouseEnterTitle() {
    let interval;
    textShuffle(title.current, "DEVELOPER", interval, 50);
  }

  return (
    <>
      <BottomNavigation onExit={onExit} onMouseEnterNav={onMouseEnterNav} />
      <ScrollWrapper>
        <div
          style={{
            ...props.sx,
          }}
        >
          <div
            style={{
              margin: 0,
              width: "100dvw",
              height: "50dvh",
            }}
          >
            {/* <div
              className="regular"
              style={{
                width: "fit-content",
                padding: "5px 15px",
                margin: "0 auto",
                backgroundColor: "#d61730",
                color: "white",
                marginTop: "20px",
                fontSize: "calc(5px + 1vmin)",
                lineHeight: "calc(10px + 1vmin)",
              }}
            >
              SCROLL TO EXPLORE ↓
            </div> */}
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
                  left: "10%",
                  textAlign: "center",
                  color: "black",
                  zIndex: 10,
                }}
              >
                <div
                  className="regular"
                  style={{
                    fontSize: "calc(10px + 4vmin)",
                    lineHeight: "calc(10px + 5vmin)",
                    textAlign: 'left',
                    color: '#d61730'
                  }}
                >
                  A SOFTWARE DEVELOPER
                </div>
                <div className="display-light-italic" style={{
                  fontSize: "calc(10px + 4vmin)",
                  lineHeight: "calc(10px + 5vmin)",
                  textAlign: 'left',
                  width: '700px'
                }}>
                  who enjoys creating visuals
                </div>
                <div
                  className="regular"
                  style={{
                    marginTop: "20px",
                    textAlign: 'left',
                    fontSize: "calc(5px + 1vmin)",
                    lineHeight: "calc(10px + 1vmin)",
                  }}
                >
                  Specialized in virtualization & simulation with a side-hobby passion for creating dope-ass visuals. Currently based in Hanoi, Vietnam.
                </div>
              </div>
            </div>
          </div>
          <div
            ref={landingImg}
            style={{
              minHeight: "100vh",
              backgroundImage: `linear-gradient(rgb(0,0,0, 0.5), rgb(0,0,0, 0.3)), url("/banner.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "0% 0%",
            }}
          ></div>
          <div
            style={{
              position: "relative",
              minHeight: "100vh",
              width: "100%",
              marginTop: "10vh",
            }}
          >
            <Grid
              container
              spacing={4}
              sx={{
                margin: "0 auto",
                minHeight: "100vh",
                width: "80vw",
                paddingTop: "100px",
              }}
            >

              <Grid item sm={12} md={6}></Grid>
              <Grid item sm={12} md={6}>
                <div
                  className="medium"
                  style={{
                    fontSize: "13px",
                    marginBottom: "4px",
                  }}
                >
                  STORY
                </div>
                <div
                  className="regular"
                  style={{
                    fontSize: "13px",
                    letterSpacing: "-0.21px",
                    marginBottom: "20px",
                  }}
                >
                  GRADUATED FROM THE UNIVERSITY OF GREENWICH WITH FIRST-CLASS HONORS IN 2023, I HAVE BEEN WORKING AS A BACK-END DEVELOPER WITH A FOCUS ON VIRTUALIZATION AND SIMULATION AT TOSHIBA SOFTWARE DEVELOPMENT VIETNAM. <br />
                  <br />
                  IN MY FREE TIME, I PURSUE VISUAL DESIGNING AND FRONT-END DEVELOPMENT AS A HOBBY. THIS WEBSITE IS PRIMARILY A SPACE FOR ME TO EXPERIMENT AND LEARN SO IT'S QUITE MESSY. IN HERE, I TRY TO REPLICATE AMAZING SCENES FROM TALENTED INDIVIDUALS AROUND THE WORLD. MAINLY
                  REACT.JS IS USED AS TOOL FOR IMPLEMENTATION.
                </div>
              </Grid>
              <Grid item sm={12} md={6}>
                <div
                  className="medium"
                  style={{
                    fontSize: "13px",
                  }}
                >
                  WORK EXPERIENCE
                </div>
                <div
                  className="regular"
                  style={{
                    letterSpacing: "0px",
                    marginBottom: "20px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "13px",
                    }}
                  >
                    FULLSTACK DEVELOPER <br />
                    TOSHIBA SOFTWARE DEVELOPMENT VIETNAM
                  </span>
                  <br />
                  <span
                    style={{
                      fontSize: "13px",
                      lineHeight: "32px",
                    }}
                  >
                    2023 - CURRENT
                  </span>
                </div>

                <div
                  className="medium"
                  style={{
                    fontSize: "13px",
                  }}
                >
                  EDUCATION
                </div>
                <div
                  className="regular"
                  style={{
                    letterSpacing: "0px",
                    marginBottom: "20px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "13px",
                    }}
                  >
                    BACHELOR OF COMPUTING
                    <br />
                    UNIVERSITY OF GREENWICH
                  </span>
                  <br />
                  <span
                    style={{
                      fontSize: "13px",
                    }}
                  >
                    2020 - 2023
                  </span>
                </div>
              </Grid>
              <Grid item sm={12} md={6}></Grid>
            </Grid>
          </div>
        </div>
        <Contacts />
      </ScrollWrapper>
    </>
  );
}
