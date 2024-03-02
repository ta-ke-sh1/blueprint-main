import { useEffect } from "react";
import { Grid, Typography, Box } from "@mui/material";
import Chip from "../components/chip";
import gsap from "gsap/gsap-core";
import { useColorTheme } from "../hooks/useColorTheme";
import { usePreloader } from "../hooks/usePreloader";
import { useNavigate } from "react-router-dom";
import MarqueTrack from "../components/marquee/marquee";


export default function Homepage(props) {
  const { fetchSavedPalette } = useColorTheme();
  const preloader = usePreloader();

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      preloader.tl.play();
    }, 1500);

    fetchSavedPalette();
    iconItems.forEach((_, index) => {
      const i = document.getElementById("icon-button-" + index);
      gsap.to(i, {
        opacity: 0,
        duration: 0,
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      });
    });
  }, []);

  function onMouseEnterNavItem(index) {
    const item = document.getElementById("icon-button-" + index);

    gsap.to(item, {
      opacity: 1,
      duration: 0.3,
      ease: "power1",
      rotate: 4,
      scale: 1.05,
    });
  }

  function onMouseLeaveNavItem(index) {
    const item = document.getElementById("icon-button-" + index);
    gsap.to(item, {
      opacity: 0,
      duration: 0.3,
      ease: "power1",
      rotate: 0,
      scale: 1,
    });
  }

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
          bottom: 0,
          width: "100vw",
          padding: "0 1.5vw",
        }}
      >
        <Grid container spacing={0}>
          <Grid item sm={12} md={6} sx={{ userSelect: "none", marginBottom: "20px" }}>
            <Typography sx={{ lineHeight: "56px" }}>
              <div className="condensed s-64">
                Software
                <br />
                Developer
              </div>
            </Typography>
            <Typography sx={{ lineHeight: "22px" }}>
              <span className="medium s-12">Works mainly as a back-end dev</span>
            </Typography>
            <Typography sx={{ lineHeight: "22px" }}>
              <span className="medium s-12">but I enjoy doing cool shits</span>
            </Typography>
          </Grid>
          <Grid item sm={12} md={6} sx={{ marginBottom: "20px" }}>
            <Box sx={{ display: "flex", justifyContent: "center", height: "100%", alignItems: "flex-end" }}>
              <MarqueTrack />
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
