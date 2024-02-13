import { useEffect } from "react";
import { Grid, Typography, Box } from "@mui/material";
import Chip from "../components/chip";
import FaceSVG from "../components/svgs/faceSvg";
import ProjectsSvg from "../components/svgs/projectsSvg";
import SmileSvg from "../components/svgs/smileySvg";
import HelloSvg from "../components/svgs/helloSvg";
import { useColorTheme } from "../hooks/useColorTheme";
import { usePreloader } from "../hooks/usePreloader";
import { useNavigate } from "react-router-dom";

const text_title_style = {
    fontSize: "12.55vw",
    fontFamily: "SemiBold",
    margin: "0 1.5vw",
    color: "#F4F4F4",
};

const iconItems = [
    {
        title: "+ Folio",
        path: "/folio",
    },
    {
        title: "+ Projects",
        path: "/projects",
    },
    {
        title: "",
        path: "",
    },
    {
        title: "+ Playground",
        path: "/playground",
    },
    {
        title: "+ Contact ",
        path: "/contact",
    },
];

export default function Homepage() {
    const { fetchSavedPalette } = useColorTheme();
    const preloader = usePreloader();

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            preloader.tl.play();
        }, 1500);

        fetchSavedPalette();
    }, []);

    function onMouseEnterNavItem(index) {}

    function onMouseLeaveNavItem(index) {}

    return (
        <div
            style={{
                maxWidth: "100vw",
                height: "100vh",
                msOverflowY: "hidden",
                overflowY: "hidden",
            }}>
            <div className="absolute-container center-position" style={{}}>
                <div className="relative-container full-width">
                    <div
                        className="row"
                        style={{
                            width: "100vw",
                            justifyContent: "space-between",
                        }}>
                        {iconItems.map((item, index) => {
                            return (
                                <div
                                    onClick={() => {
                                        preloader.tl.reverse();
                                        setTimeout(() => {
                                            navigate(item.path);
                                        }, 1500);
                                    }}
                                    className="icon-button"
                                    key={"icon-button-" + index}
                                    style={{
                                        opacity: item.title ? 1 : 0,
                                        zIndex: 0,
                                    }}>
                                    <div className="icon-title">
                                        <Chip
                                            id={"btn-" + index}
                                            onMouseEnter={() =>
                                                onMouseEnterNavItem(index)
                                            }
                                            onMouseLeave={() =>
                                                onMouseLeaveNavItem(index)
                                            }>
                                            {item.title}
                                        </Chip>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div
                className="poster-image absolute-container"
                style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "500px",
                    height: "600px",
                    backgroundColor: "#D9D9D9",
                    zIndex: -1,
                }}></div>
            <div
                className="absolute-container"
                style={{
                    maxWidth: "100vw",
                    width: "100%",
                    bottom: "0px",
                    zIndex: -20,
                }}>
                <div
                    className="row user-select-none"
                    style={{
                        justifyContent: "space-between",
                    }}>
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
                    bottom: "45px",
                }}>
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
                    }}>
                    <Grid container spacing={4}>
                        <Grid item md={3} xs={12}>
                            <Typography>
                                <span className="regular s-12">
                                    Writing spaghetti code.
                                </span>
                            </Typography>
                            <Typography>
                                <span className="regular s-12">
                                    Currently playing Baldur's Gate 3.
                                </span>
                            </Typography>
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <Typography>
                                <span className="regular s-12">
                                    Currently based in Hanoi.
                                </span>
                            </Typography>
                            <Typography>
                                {" "}
                                <span className="regular s-12">
                                    12:44 PM - GMT+7
                                </span>
                            </Typography>
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <Typography>
                                <span className="regular s-12">Revision</span>
                            </Typography>
                            <Typography>
                                <span className="regular s-12">Jan 2024</span>
                            </Typography>
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <Box display="flex" justifyContent="flex-end">
                                <Typography>
                                    <br />
                                    <span className="regular s-12">©2024</span>
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    );
}
