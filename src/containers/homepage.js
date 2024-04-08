import { useEffect, useRef, useState } from "react";
import { Typography, Box } from "@mui/material";
import AsciiItems, { AsciiMorph } from "../components/ascii/asciiMorph";
import { textShuffle } from "../animations/text";
import BottomNavigation from "../components/navigation/bottomNav";

export default function Homepage() {
  const instruction = useRef(null);

  const [isExiting, setIsExiting] = useState(false);

  const currIndex = useRef(0);

  const ascii = useRef(null);

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
          width: "100%",
          height: "100vh",
          msOverflowX: "hidden",
          overflowX: "hidden",
        }}
      >
        <div
          style={{
            minWidth: "900px",
            overflowX: "hidden",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <pre
            style={{
              overflow: "hidden",
              margin: "0 auto",
              fontSize: "12px",
              letterSpacing: "calc(0.6px)",
              lineHeight: "calc(14.5px)",
              color: "black",
              whiteSpace: "pre-wrap",
              fontFamily: "Regular",
              userSelect: "none",
              zIndex: -1,
            }}
            id="asciiArt"
            ref={ascii}
          ></pre>
        </div>
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
            className=" medium"
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
          <Typography sx={{ lineHeight: "50px" }}>
            <div className="wrapper-hidden">
              <div
                className="display-light-italic s-48 item-container"
                style={{
                  backgroundColor: "white",
                  width: "fit-content",
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
                }}
              >
                Developer
              </div>
            </div>
          </Typography>
          <Typography sx={{ lineHeight: "18px" }}>
            <span className="medium primary-text s-12">WORKS MAINLY AS A BACK-END DEV</span>
          </Typography>
          <Typography sx={{ lineHeight: "18px" }}>
            <span className="medium primary-text s-12">BUT I ENJOY DOING COOL SHITS</span>
          </Typography>
        </Box>
      </div>
    </>
  );
}
