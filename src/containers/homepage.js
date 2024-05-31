import { useEffect, useRef, useState } from "react";
import { Typography, Box, Grid } from "@mui/material";
import AsciiItems, { AsciiMorph } from "../components/ascii/asciiMorph";
import { textShuffle } from "../animations/text";
import BottomNavigation from "../components/navigation/bottomNav";
import { usePreloader } from "../hooks/usePreloader";
import { useMouse } from "@uidotdev/usehooks";

export default function Homepage() {
  const { openAnimation } = usePreloader();

  const instruction = useRef(null);

  const [isExiting, setIsExiting] = useState(false);

  const currIndex = useRef(0);

  const ascii = useRef(null);

  const [mouse] = useMouse();

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

    let interval = null;
    if (instruction.current) {
      if (index === 0) {
        textShuffle(instruction.current, "TO PLAY AROUND", interval, 40);
      } else if (instruction.current.innerHTML !== "TO PRESS ENTER") {
        textShuffle(instruction.current, "TO PRESS ENTER", interval, 40);
      }
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
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
          }}
        >
          <div>
            <span className="primary-text"> X: {mouse.x}</span>
            <br />
            <span className="primary-text">Y: {mouse.y}</span>
          </div>
        </div>

        <Box
          item
          sx={{
            minWidth: "900px",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: {
              xs: "translate(-50%, -65%) scale(0.5)",
              sm: "translate(-50%, -65%) scale(0.5)",
              md: "translate(-50%, -65%) scale(0.9)",
            },

            textAlign: "center",
          }}
        >
          <pre
            style={{
              overflow: "hidden",
              margin: "0 auto",
              fontSize: "8px",
              letterSpacing: "calc(1px)",
              lineHeight: "calc(10.5px)",
              color: "black",
              whiteSpace: "pre-wrap",
              fontFamily: "Medium",
              userSelect: "none",
              zIndex: -1,
              color: "rgb(253, 135, 0)",
            }}
            id="asciiArt"
            ref={ascii}
          ></pre>
          <img
            src="./pc_overlay.png"
            style={{
              position: "absolute",
              left: "50%",
              top: "70%",
              transform: "translate(-50%, -50%) scale(1)",
              width: "780px",
              zIndex: 10,
              mixBlendMode: "screen",
            }}
          />
        </Box>
        <Box
          className="absolute-container"
          sx={{
            right: "10px",
            bottom: {
              xs: "40px",
              sm: "40px",
              md: "10px",
            },
            zIndex: 10,
          }}
        >
          <div
            className="regular"
            style={{
              backgroundColor: "rgb(0,0,0,0)",
              textAlign: "right",
            }}
          >
            <span className="primary-text">FEEL FREE</span>
            <br />
            <span className="primary-text" ref={instruction}>
              TO PLAY AROUND
            </span>
          </div>
        </Box>
        <Box
          className="absolute-container"
          sx={{
            bottom: {
              xs: "40px",
              sm: "40px",
              md: "10px",
            },
            left: "10px",
            zIndex: 100,
          }}
        >
          <Typography sx={{ lineHeight: "36px" }}>
            <div className="wrapper-hidden">
              <div
                className="display-light-italic s-48 item-container"
                style={{
                  backgroundColor: "white",
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
                  backgroundColor: "white",
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
