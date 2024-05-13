import { useEffect, useRef } from "react";
import { Grid } from "@mui/material";
import Contacts from "./contacts";
import { usePreloader } from "../hooks/usePreloader";
import ScrollWrapper from "../hooks/useSmoothScroll";
import BottomNavigation from "../components/navigation/bottomNav";
import { textShuffle } from "../animations/text";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe(props) {
    const { openAnimation } = usePreloader();
    const title = useRef();

    const landingImg = useRef();

    useEffect(() => {
        openAnimation();
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(landingImg.current, {
                scrollTrigger: {
                    trigger: landingImg.current,
                    scrub: true,
                    start: "-50% center",
                    end: () => {
                        let height = window.innerHeight * 2;
                        return `+=${height}px`;
                    },
                },
                backgroundPosition: "100% 100%",
            });
        }, []);

        return function () {
            ctx.revert();
        };
    });

    function onExit() { }

    function onMouseEnterNav() { }

    function mouseEnterTitle() {
        let interval;
        textShuffle(title.current, "DEVELOPER", interval, 50);
    }

    return (
        <>
            <BottomNavigation
                onExit={onExit}
                onMouseEnterNav={onMouseEnterNav}
                current={1}
            />
            <ScrollWrapper>
                <div
                    style={{
                        ...props.sx,
                    }}>
                    <div
                        style={{
                            margin: 0,
                            width: "100dvw",
                            height: "100dvh",
                        }}>
                        <div
                            style={{
                                position: "relative",
                                width: "100%",
                                height: "100%",
                            }}>
                            <div
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    textAlign: "center",
                                    color: "black",
                                    zIndex: 10,
                                }}>
                                <div
                                    className="display-light-italic"
                                    style={{
                                        minWidth: "320px",
                                        maxWidth: "700px",
                                        fontSize: "calc(10px + 4vmin)",
                                    }}>
                                    <span className="semi-bold">DEVELOPER</span>{" "}
                                    by day,
                                    <br />
                                    <span className="semi-bold">
                                        ART SEEKER
                                    </span>{" "}
                                    by night
                                </div>
                                <div
                                    className="medium"
                                    style={{
                                        marginTop: "20px",
                                        maxWidth: "400px",
                                        fontSize: "calc(5px + 1vmin)",
                                        lineHeight: "calc(10px + 1vmin)",
                                    }}>
                                    SPECIALIZED IN VIRTUALIZATION & SIMULATION
                                    WITH A SIDE-HOBBY PASSION FOR CREATING
                                    DOPE-ASS VISUALS. CURRENTLY BASED IN HANOI,
                                    VIETNAM
                                </div>
                                <div
                                    className="medium"
                                    style={{
                                        width: "fit-content",
                                        padding: "5px 15px",
                                        margin: "0 auto",
                                        backgroundColor: "black",
                                        color: "white",
                                        marginTop: "20px",
                                        fontSize: "calc(5px + 1vmin)",
                                        lineHeight: "calc(10px + 1vmin)",
                                    }}>
                                    SCROLL TO EXPLORE ↓
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        ref={landingImg}
                        style={{
                            minHeight: "100vh",
                            width: "100%",
                            backgroundImage: `linear-gradient(rgb(0,0,0, 0.5), rgb(0,0,0, 0.3)), url("/banner.jpg")`,
                            backgroundSize: "cover",
                            backgroundPosition: "0% 0%",
                        }}></div>
                    <div
                        style={{
                            position: "relative",
                            minHeight: "100vh",
                            width: "100%",
                            marginTop: "10vh"
                        }}>
                        <Grid
                            container
                            spacing={4}
                            sx={{
                                margin: "0 auto",
                                minHeight: "100vh",
                                width: "80vw",
                                paddingTop: "100px",
                            }}>
                            <Grid item sm={12} md={6}></Grid>
                            <Grid item sm={12} md={6}>
                                <div
                                    className="regular"
                                    style={{
                                        fontSize: "48px",
                                        lineHeight: "52px",
                                        letterSpacing: "0px",
                                        marginBottom: "20px",
                                    }}>
                                    Graduated from the University of Greenwich
                                    with first-class honors in 2023, I have been
                                    working as a back-end developer with a focus
                                    on virtualization and simulation at Toshiba
                                    Software Development Vietnam.
                                    <br />
                                    <br />
                                    In my free time, I pursue visual designing
                                    and front-end development as a hobby. This
                                    website is primarily a space for me to
                                    experiment and learn so it's quite messy. In
                                    here, I try to replicate amazing scenes from
                                    talented individuals around the world.
                                    Mainly React.Js is used as tool for
                                    implementation.
                                </div>
                            </Grid>
                            <Grid item sm={12}>
                                <div
                                    style={{
                                        margin: "0 auto",
                                        width: "80vw",
                                        height: "400px",
                                    }}></div>
                            </Grid>
                            <Grid item sm={12} md={6}>
                                <div
                                    className="display-light-italic"
                                    style={{
                                        fontSize: "48px",
                                        lineHeight: "52px",
                                        letterSpacing: "0px",
                                        marginBottom: "10px",
                                    }}>
                                    Work Experience
                                </div>
                                <div
                                    className="regular"
                                    style={{
                                        letterSpacing: "0px",
                                        marginBottom: "20px",
                                    }}>
                                    <span
                                        style={{
                                            fontSize: "48px",
                                            lineHeight: "40px",
                                        }}>
                                        Fullstack Developer <br />
                                        Toshiba Software Development Vietnam
                                    </span>
                                    <br />
                                    <span
                                        style={{
                                            fontSize: "24px",
                                            lineHeight: "32px",
                                        }}>
                                        2023 - Current
                                    </span>
                                </div>

                                <div
                                    className="display-light-italic"
                                    style={{
                                        marginTop: "100px",
                                        fontSize: "48px",
                                        lineHeight: "52px",
                                        letterSpacing: "0px",
                                        marginBottom: "10px",
                                    }}>
                                    Education
                                </div>
                                <div
                                    className="regular"
                                    style={{
                                        letterSpacing: "0px",
                                        marginBottom: "20px",
                                    }}>
                                    <span
                                        style={{
                                            fontSize: "48px",
                                            lineHeight: "40px",
                                        }}>
                                        Bachelor of Computing
                                        <br />
                                        University of Greenwich
                                    </span>
                                    <br />
                                    <span
                                        style={{
                                            fontSize: "24px",
                                            lineHeight: "32px",
                                        }}>
                                        2020 - 2023
                                    </span>
                                </div>
                                <div
                                    className="regular"
                                    style={{
                                        letterSpacing: "0px",
                                        marginBottom: "20px",
                                    }}>
                                    <span
                                        style={{
                                            fontSize: "48px",
                                            lineHeight: "40px",
                                        }}>
                                        Bachelor of Business Japanese
                                        <br />
                                        Foreign Trade University
                                    </span>
                                    <br />
                                    <span
                                        style={{
                                            fontSize: "24px",
                                            lineHeight: "32px",
                                        }}>
                                        2016 - 2020
                                    </span>
                                </div>
                            </Grid>
                            <Grid item sm={12} md={6}></Grid>
                        </Grid>
                    </div>
                </div>
                <Contacts />
            </ScrollWrapper>
        </>
    );
}
