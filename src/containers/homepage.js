import { useEffect } from "react";
import { Grid, Typography, Box } from "@mui/material";
import Chip from "../components/chip";
import gsap from "gsap/gsap-core";
import { useColorTheme } from "../hooks/useColorTheme";
import { usePreloader } from "../hooks/usePreloader";
import { useNavigate } from "react-router-dom";
import MarqueTrack from "../components/marquee/marquee";


export default function Homepage() {
  const { fetchSavedPalette } = useColorTheme();
  const preloader = usePreloader();

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      preloader.tl.play();
    }, 1500);

    fetchSavedPalette();

    return function cleanUp() {

    }
  }, []);

  function onMouseEnterNavItem(index) { }

  function onMouseLeaveNavItem(index) { }

  return (
    <div
      style={{
        maxWidth: "100vw",
        height: "100vh",
        msOverflowY: "hidden",
        overflowY: "hidden",
      }}
    >
      <div className="video-container" style={{
        height: '100%',
        width: '100%',
        zIndex: 1
      }}>
        <video controls width="100%" autoPlay muted loop >
          <source src={"/bgVideo.mp4"} type="video/mp4" />
          Sorry, your browser doesn't support videos.
        </video>
      </div>
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
              <div className="condensed white s-64">
                Software
                <br />
                Developer
              </div>
            </Typography>
            <Typography sx={{ lineHeight: "22px" }}>
              <span className="medium white s-12">Works mainly as a back-end dev</span>
            </Typography>
            <Typography sx={{ lineHeight: "22px" }}>
              <span className="medium white s-12">but I enjoy doing cool shits</span>
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
