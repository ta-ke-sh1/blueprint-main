import { useEffect, useRef } from "react";
import { Grid, Typography, Box } from "@mui/material";
import Chip from "../components/chip";
import gsap from "gsap";
import { useColorTheme } from "../hooks/useColorTheme";
import { usePreloader } from "../hooks/usePreloader";
import MarqueTrack from "../components/marquee/marquee";
import Animations, { Direction } from "../animations/animations";
import Ascii from "../components/ascii/ascii";
import { useMouse } from "@uidotdev/usehooks";
import CenterContainer from "../components/containers/center";

export default function Homepage() {
  const [mouse] = useMouse();
  const { fetchSavedPalette } = useColorTheme();
  const preloader = usePreloader();

  useEffect(() => {
    setTimeout(() => {
      preloader.tl.play();
    }, 1500);

    fetchSavedPalette();

    let elements = document.querySelectorAll(".item-container");
    elements.forEach((element) => {
      Animations.appearAnimation(Direction.Up, element, 2, 3.55, "power4");
    });
  }, []);

  return (
    <>
      <div
        className="relative-container"
        style={{
          maxWidth: "100vw",
          height: "100vh",
          msOverflowY: "hidden",
          overflowY: "hidden",
        }}
      >
        <Ascii />
        <div className="medium  absolute-container" style={{
          left: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
        }}>
          <div>
            <span className="primary-text"> X: {mouse.x}</span><br />
            <span className="primary-text">Y: {mouse.y}</span>
          </div>
        </div>
        <div className="medium  absolute-container" style={{
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
        }}>
          <div style={{
            textAlign: 'right'
          }}>
            <span className="primary-text">YOUR VISION</span><br />
            <span className="primary-text">MY MATERIALIZATION</span>

          </div>
        </div>
        <div
          className="absolute-container"
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100vw",
          }}
        >
          <Grid container spacing={0}>
            <Grid item sm={12} md={8} sx={{ userSelect: "none", marginBottom: "10px", padding: '0 10px' }}>
              <Typography sx={{ lineHeight: "44px" }}>
                <div className="wrapper-hidden" style={{
                  marginBottom: '4px'
                }}>
                  <div className="condensed s-48 item-container" style={{
                    backgroundColor: 'white',
                    width: 'fit-content'
                  }}>Software</div>
                </div>
                <div className="wrapper-hidden">
                  <div className="condensed s-48 item-container" style={{
                    backgroundColor: 'white',
                    width: 'fit-content'
                  }}>Developer</div>
                </div>
              </Typography>
              <Typography sx={{ lineHeight: "18px" }}>
                <span className="medium primary-text s-12">WORKS MAINLY AS A BACK-END DEV</span>
              </Typography>
              <Typography sx={{ lineHeight: "18px" }}>
                <span className="medium primary-text s-12">BUT I ENJOY DOING COOL SHITS</span>
              </Typography>
            </Grid>
            <Grid item sm={12} md={4} sx={{
              marginLeft: '-2px',
              marginBottom: "10px", padding: {
                xs: '0',
                sm: '0',
                md: '0 10px 0 0 '
              }
            }}>
              <Box sx={{ display: "flex", justifyContent: "center", height: "100%", alignItems: "flex-end" }}>
                <div className="wrapper-hidden">
                  <div className="item-container">
                    <MarqueTrack />
                  </div>
                </div>
              </Box>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
