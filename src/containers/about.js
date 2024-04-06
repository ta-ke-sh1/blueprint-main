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

  let currentIndex = 1;

  useEffect(() => {
    openAnimation();
    console.log("loaded");
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(landingImg.current, {
        scrollTrigger: {
          trigger: landingImg.current,
          scrub: true,
          start: "top center",
          end: () => {
            let height = window.innerHeight;
            return `+=${height}px`;
          },
        },
        backgroundPosition: "100% 100%",
        ilter: "grayscale(100%)",
      });
    }, []);

    return function () {
      ctx.revert();
    };
  });

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
            ref={landingImg}
            style={{
              margin: 0,
              position: "absolute",
              left: 0,
              top: 0,
              width: "100dvw",
              height: "100dvh",
              backgroundImage: `url("/banner.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "0% 0%",
              filter: "grayscale(0%)",
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
                <div
                  className="display-light-italic"
                  style={{
                    maxWidth: "600px",
                    fontSize: "calc(10px + 4vmin)",
                  }}
                >
                  A young developer specialized in virtualization & simulation with a side-hobby passion for creating dope-ass visuals. Currently based in Hanoi, Vietnam
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
              Ha Trung graduated from the University of Greenwich with first-class honors in 2023. He has been working as a back-end developer with a focus on virtualization and simulation at Toshiba Software Development Vietnam.
              <br />
              <br />
              In his free time, Trung pursues visual designing and front-end development as a hobby. This website is primarily a space for him to experiment and learn on his own, where he tries to replicate amazing scenes from talented individuals around the world. He uses mainly
              React.Js as tool for implementation.
            </div>
            <div
              className="regular"
              style={{
                textAlign: "justify",
                fontSize: "14px",
                letterSpacing: "0px",
              }}
            ></div>
            <WhatIDo
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

function WhatIDo(props) {
  return (
    <div
      style={{
        ...props.sx,
      }}
    >
      <div xs={12} className="s-40 display-light-italic">
        What can
        <br />I Do?
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
