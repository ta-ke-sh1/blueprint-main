import { useEffect, useRef, useState } from "react";
import { Typography, Box } from "@mui/material";
import { usePreloader } from "../hooks/usePreloader";
import Animations, { Direction } from "../animations/animations";
import { useMouse } from "@uidotdev/usehooks";
import AsciiItems, { AsciiMorph } from "../components/ascii/asciiMorph";
import { textShuffle } from "../animations/text";
import BottomNavigation from "../components/navigation/bottomNav";
export default function Homepage() {
  const [mouse] = useMouse();
  const preloader = usePreloader();
  const instruction = useRef(null)

  const [current, setCurrent] = useState(0)
  const [date, setDate] = useState(new Date());

  const ascii = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 30000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      preloader.tl.play();
    }, 1500);

    AsciiMorph(ascii.current, { x: 60, y: 30 });
    AsciiMorph.render(AsciiItems.asciis[0]);

    return function () {
      AsciiMorph.destroy();
    };
  }, []);



  const containers = {

  }

  function onMouseEnterNav(index) {
    AsciiMorph.morph(AsciiItems.asciis[index]);
    setCurrent(index)

    let interval = null
    if (instruction.current) {
      if (index === 0) {
        textShuffle(instruction.current, "TO PLAY AROUND", interval, 40)
      } else if (instruction.current.innerHTML !== "TO PRESS ENTER") {
        textShuffle(instruction.current, "TO PRESS ENTER", interval, 40)
      }
    }

  }

  return (
    <>
      <BottomNavigation onMouseEnterNav={onMouseEnterNav} />
      <Box
        className="absolute-container"
        sx={{
          right: "10px",
          bottom: {
            xs: "40px",
            sm: "40px",
            md: "10px",
          }
        }}
      >
        <div className=" medium primary-text" style={{
          backgroundColor: 'rgb(0,0,0,0)',
          textAlign: 'right'
        }}>
          FEEL FREE<br />
          <span ref={instruction}>TO PLAY AROUND</span>
        </div>
      </Box>
      <div
        className="medium absolute-container"
        style={{
          left: "10px",
          top: "10px",
        }}
      >
        <div className="primary-text" style={{
          textAlign: 'left'
        }}>
          GOT SOMETHING<br />
          IN MIND?
        </div>
      </div>
      <div
        className="medium absolute-container"
        style={{
          right: "10px",
          top: "10px",
        }}
      >
        <div className="primary-text" style={{
          textAlign: 'right'
        }}>
          HANOI,VIETNAM<br />
          {date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
        </div>
      </div>
      <div
        className="relative-container"
        style={{
          width: '100%',
          height: "100vh",
          msOverflowX: "hidden",
          overflowX: "hidden",
        }}
      >
        {

        }
        <div
          style={{
            minWidth: '900px',
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
              overflow: 'hidden',
              margin: "0 auto",
              fontSize: "12px",
              letterSpacing: "calc(0.6px)",
              lineHeight: "calc(14.5px)",
              color: "black",
              whiteSpace: "pre-wrap",
              fontFamily: "Regular",
              userSelect: "none",
            }}
            id="asciiArt"
            ref={ascii}
          ></pre>
        </div>
        <div
          className="medium absolute-container"
          style={{
            left: "10px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <div>
            <span className="primary-text"> X: {mouse.x}</span>
            <br />
            <span className="primary-text">Y: {mouse.y}</span>
          </div>
        </div>
        <div
          className="medium absolute-container"
          style={{
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <div
            style={{
              textAlign: "right",
            }}
          >
            <span className="primary-text">YOUR VISION</span>
            <br />
            <span className="primary-text">MY MATERIALIZATION</span>
          </div>
        </div>
        <Box
          className="absolute-container"
          sx={{
            bottom: {
              xs: "40px",
              sm: "40px",
              md: "10px",
            },
            left: '10px',
          }}
        >
          <Typography sx={{ lineHeight: "44px" }}>
            <div
              className="wrapper-hidden"
              style={{
                marginBottom: "4px",
              }}
            >
              <div
                className="condensed s-48 item-container"
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
                className="condensed s-48 item-container"
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
      </div >
    </>
  );
}
