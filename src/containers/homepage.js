import { useEffect } from "react";
import { Grid, Typography, Box } from "@mui/material";
import Chip from "../components/chip";
import FaceSVG from "../components/svgs/faceSvg";
import ProjectsSvg from "../components/svgs/projectsSvg";
import SmileSvg from "../components/svgs/smileySvg";
import HelloSvg from "../components/svgs/helloSvg";
import gsap from "gsap/gsap-core";
import { useColorTheme } from "../hooks/useColorTheme";
import { usePreloader } from "../hooks/usePreloader";

const text_title_style = {
  fontSize: "12.55vw",
  fontFamily: "SemiBold",
  margin: "0 1.5vw",
  color: "#F4F4F4",
};

const iconItems = [
  {
    title: "+ Folio",
    icon: <FaceSVG />,
    original_icon_xPos: "-90px",
    original_icon_yPos: "-40px",
    dest_icon_xPos: "70px",
    dest_icon_yPos: "20px",
  },
  {
    title: "+ Projects",
    icon: <ProjectsSvg />,
    original_icon_xPos: "-100px",
    original_icon_yPos: "-50px",
    dest_icon_xPos: "100px",
    dest_icon_yPos: "-160px",
  },
  {
    title: "+ Playground",
    icon: <SmileSvg />,
    original_icon_xPos: "-70px",
    original_icon_yPos: "-80px",
    dest_icon_xPos: "180px",
    dest_icon_yPos: "20px",
  },
  {
    title: "+ Contact ",
    icon: <HelloSvg />,
    original_icon_xPos: "-50px",
    original_icon_yPos: "-160px",
    dest_icon_xPos: "50px",
    dest_icon_yPos: "-210px",
  },
];

export default function Homepage(props) {
  const { fetchSavedPallete } = useColorTheme();
  const preloader = usePreloader();

  useEffect(() => {
    setTimeout(() => {
      preloader.tl.play();
    }, 1500);

    fetchSavedPallete();
    iconItems.forEach((_, index) => {
      const i = document.getElementById("icon-button-" + index);
      gsap.to(i, {
        opacity: 0,
        duration: 0,
        left: iconItems[index].original_icon_xPos,
        top: iconItems[index].original_icon_yPos,
      });
    });
  }, []);

  function onMouseEnterNavItem(index) {
    const item = document.getElementById("icon-button-" + index);
    gsap.to(item, {
      opacity: 1,
      duration: 0.3,
      ease: "power1",
      top: iconItems[index].dest_icon_yPos,
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
      top: iconItems[index].original_icon_yPos,
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
      <div className="absolute-container center-position" style={{}}>
        <div className="relative-container full-width">
          <div
            className="row"
            style={{
              width: "100vw",
              justifyContent: "space-between",
            }}
          >
            {iconItems.map((item, index) => {
              return (
                <div
                  className="icon-button"
                  key={"icon-button-" + index}
                  style={{
                    zIndex: 0,
                  }}
                >
                  <div className="icon-title">
                    <Chip onMouseEnter={() => onMouseEnterNavItem(index)} onMouseLeave={() => onMouseLeaveNavItem(index)}>
                      {item.title}
                    </Chip>
                  </div>
                  <div id={"icon-button-" + index} className="icon-svg">
                    {item.icon}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className="absolute-container"
        style={{
          maxWidth: "100vw",
          width: "100%",
          bottom: "0px",
          zIndex: -20,
        }}
      >
        <div
          className="row user-select-none"
          style={{
            justifyContent: "space-between",
          }}
        >
          <div style={{ ...text_title_style }} className="primary">
            HA
          </div>
          <div style={{ ...text_title_style }} className="primary">
            THE
          </div>
          <div style={{ ...text_title_style }} className="primary">
            TRUNG
          </div>
        </div>
      </div>
      <div
        className="absolute-container"
        style={{
          maxWidth: "100vw",
          width: "100vw",
          bottom: "2.5vw",
        }}
      >
        <Box
          sx={{
            width: "100%",
            padding: "0 2vw",
            sm: {
              opacity: 0,
            },
            md: {
              opacity: 1,
            },
          }}
        >
          <Grid container spacing={4}>
            <Grid item md={4} xs={12}>
              <Typography>
                <span className="semi-bold">Writing spaghetti code.</span>
              </Typography>
              <Typography>
                <span className="semi-bold">Currently playing Baldur's Gate 3.</span>
              </Typography>
            </Grid>
            <Grid item md={4} xs={12}>
              <Typography>
                {" "}
                <span className="semi-bold">Currently based in Hanoi.</span>
              </Typography>
              <Typography>
                {" "}
                <span className="semi-bold">12:44 PM - GMT+7</span>
              </Typography>
            </Grid>
            <Grid item md={4} xs={12}>
              <Box display="flex" justifyContent="flex-end">
                <Typography>
                  <br />
                  <span className="semi-bold">©2024</span>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}
