import { useEffect, useRef, useState } from "react";
import { Typography, Box, Grid } from "@mui/material";
import AsciiItems, { AsciiMorph } from "../components/ascii/asciiMorph";
import { textShuffle } from "../animations/text";
import BottomNavigation from "../components/navigation/bottomNav";
import { usePreloader } from "../hooks/usePreloader";
import { useMouse } from "@uidotdev/usehooks";
import MarqueTrack from "../components/marquee/marquee";

export default function Homepage() {
  const { openAnimation } = usePreloader();
  const [date, setDate] = useState(new Date());

  const [isExiting, setIsExiting] = useState(false);

  const currIndex = useRef(0);

  const ascii = useRef(null);

  const [mouse] = useMouse();

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 30000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    openAnimation();
  }, []);

  useEffect(() => {
    AsciiMorph(ascii.current, { x: 60, y: 30 });
    AsciiMorph.render(AsciiItems.asciis[0]);

    return function () {
      AsciiMorph.destroy();
    };
  }, []);

  function onMouseEnterNav(index) {
    if (!isExiting) {
      AsciiMorph.morph(AsciiItems.asciis[index]);
      currIndex.current = index;
    }
  }

  function onExit() {
    setIsExiting(true);
    if (currIndex.current === 3 || currIndex.current === 2 || currIndex.current === 1) {
      AsciiMorph.morph(AsciiItems.asciis[4]);
    }
  }

  return (
    <>
      <BottomNavigation
        onMouseEnterNav={onMouseEnterNav}
        onExit={() => {
          onExit();
        }}
      />
      <Box
        className="regular fixed-container"
        sx={{
          left: 0,
          top: 0,
          width: "100dvw",
          height: "100dvh",
          zIndex: 10,
          pointerEvents: "none",
          opacity: {
            xs: 0,
            sm: 1
          }
        }}
      >
        <div
          className="regular absolute-container"
          style={{
            right: "10px",
            top: "10px",
          }}
        >
          <div
            style={{
              textAlign: "right",
            }}
          >
            <span className="primary-text">HANOI,VIETNAM</span>
            <br />
            <span className="primary-text">{date.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true })}</span>
          </div>
        </div>
      </Box>
      <div
        className="relative-container"
        style={{
          width: "100vw",
          height: "100vh",
          msOverflowX: "hidden",
          overflowX: "hidden",
        }}
      >
        <div
          className="regular absolute-container"
          style={{
            left: "10px",
            top: "10px",
            zIndex: 10,
          }}
        >
          <div>
            <span className="primary-text"> X: {mouse.x}</span>
          </div>
        </div>
        <div
          className="regular absolute-container"
          style={{
            right: "10px",
            bottom: "10px",
            zIndex: 10,
          }}
        >
          <span className="primary-text">Y: {mouse.y}</span>
        </div>
        <Box sx={
          {
            position: "absolute",
            left: "0",
            top: "50%",
            transform: "translateY(-50%)"
          }
        }>
          <MarqueTrack />
        </Box>
        <Box
          item
          sx={{
            minWidth: "900px",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: {
              xs: "translate(-50%, -50%) scale(0.5)",
              sm: "translate(-50%, -50%) scale(0.5)",
              md: "translate(-50%, -50%) scale(0.9)",
            },

            textAlign: "center",
          }}
        >
          <pre
            style={{
              overflow: "hidden",
              margin: "0 auto",
              fontSize: "7px",
              letterSpacing: "calc(7.2px)",
              lineHeight: "calc(22.5px)",
              whiteSpace: "pre-wrap",
              fontFamily: "Medium",
              userSelect: "none",
              zIndex: -1,
              color: "white",
            }}
            id="asciiArt"
            ref={ascii}
          ></pre>
        </Box>
        <Box
          className="absolute-container"
          sx={{
            bottom: "10px",
            left: "3px",
            zIndex: 100,
          }}
        >
          <Typography sx={{ lineHeight: "36px" }}>
            <div className="wrapper-hidden">
              <div
                className="display-light-italic s-48 item-container"
                style={{
                  width: "fit-content",
                  padding: "3px 0px 3px 10px",
                }}
              >
                Software
              </div>
            </div>
            <div className="wrapper-hidden">
              <div
                className="display-light-italic s-48 item-container"
                style={{
                  width: "fit-content",
                  padding: "0px 20px 3px 10px",
                }}
              >
                Developer
              </div>
            </div>
          </Typography>
          <Typography sx={{ marginTop: "6px", lineHeight: "18px" }}>
            <span
              className="regular primary-text s-12"
              style={{
                padding: "3px 10px",
              }}
            >
              WORKS MAINLY AS A BACK-END DEV
            </span>
          </Typography>
          <Typography sx={{ lineHeight: "18px" }}>
            <span
              className="regular primary-text s-12"
              style={{
                padding: "3px 10px",
              }}
            >
              BUT I ENJOY DOING COOL SHITS
            </span>
          </Typography>
        </Box>
      </div>
    </>
  );
}
