import { useEffect, useRef } from "react";
import { Grid, Typography, Box } from "@mui/material";
import Chip from "../components/chip";
import gsap from "gsap";
import { useColorTheme } from "../hooks/useColorTheme";
import { usePreloader } from "../hooks/usePreloader";
import MarqueTrack from "../components/marquee/marquee";
import Animations, { Direction } from "../animations/animations";

export default function Homepage() {
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
    <div
      style={{
        maxWidth: "100vw",
        height: "100vh",
        msOverflowY: "hidden",
        overflowY: "hidden",
      }}
    >
      <div
        className="absolute-container"
        style={{
          position: "fixed",
          bottom: 0,
          width: "100vw",
          padding: "0 1.5vw",
        }}
      >
        <Grid container spacing={0}>
          <Grid item sm={12} md={6} sx={{ userSelect: "none", marginBottom: "20px" }}>
            <Typography sx={{ lineHeight: "56px" }}>
              <div className="wrapper-hidden">
                <div className="condensed primary-text s-64 item-container">Software</div>
              </div>
              <div className="wrapper-hidden">
                <div className="condensed primary-text s-64 item-container">Developer</div>
              </div>
            </Typography>
            <Typography sx={{ lineHeight: "22px" }}>
              <span className="medium primary-text s-12">WORKS MAINLY AS A BACK-END DEV</span>
            </Typography>
            <Typography sx={{ lineHeight: "22px" }}>
              <span className="medium primary-text s-12">BUT I ENJOY DOING COOL SHITS</span>
            </Typography>
          </Grid>
          <Grid item sm={12} md={6} sx={{ marginBottom: "20px" }}>
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
  );
}
