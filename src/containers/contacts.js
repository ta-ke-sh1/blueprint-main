import { useEffect, useRef } from "react";
import { Grid } from "@mui/material";
import gsap from "gsap";
import AsciiItems, { AsciiMorph } from "../components/ascii/asciiMorph";

export default function Contacts() {
    const ascii = useRef(null);

    useEffect(() => {
        AsciiMorph(ascii.current, { x: 60, y: 30 });
        AsciiMorph.render(AsciiItems.contacts[0]);

        return function () {
            AsciiMorph.destroy();
        };
    }, []);

    function onMouseLeaveLinks() {
        console.log("leave");
        AsciiMorph.morph(AsciiItems.contacts[0]);
    }

    return (
        <div
            className="contact-container"
            style={{
                height: "100vh",
                position: "relative",
                width: "100vw",
            }}>
            <div
                style={{
                    minWidth: "900px",
                    overflowX: "hidden",
                    position: "absolute",
                    left: "50%",
                    top: "55%",
                    transform: "translate(-50%, -80%) scale(0.8)",
                    textAlign: "center",
                }}>
                <pre
                    style={{
                        overflow: "hidden",
                        margin: "0 auto",
                        fontSize: "7px",
                        letterSpacing: "calc(3px)",
                        lineHeight: "calc(12.5px)",
                        whiteSpace: "pre-wrap",
                        fontFamily: "medium",
                        userSelect: "none",
                        zIndex: -1,
                        color: "orange",
                    }}
                    id="asciiArt"
                    ref={ascii}></pre>
            </div>
            <div
                className="absolute-container"
                style={{
                    left: "50%",
                    top: "63%",
                    transform: "translate(-50%, -50%)",
                }}>
                <div
                    style={{
                        justifyContent: "center",
                        textAlign: "center",
                        width: "60vmax",
                        maxWidth: "600px",
                    }}>
                    <div
                        className="semi-bold mail-btn"
                        style={{
                            fontSize: "20px",
                            cursor: "pointer",
                            letterSpacing: "-0.2px",
                            padding: "5px 20px",
                            width: "fit-content",
                            margin: "0 auto",
                            marginBottom: "25px",
                            borderRadius: "4px",
                            mixBlendMode: "darken",
                        }}>
                        contact@trungha.com
                    </div>
                    <Grid
                        onMouseLeave={onMouseLeaveLinks}
                        container
                        spacing={2}
                        sx={{
                            margin: "10 auto",
                            fontSize: "24px",
                        }}>
                        <Grid item xs={12} sm={4}>
                            <BoxLink
                                url=""
                                title="FACEBOOK"
                                morphEnterHandler={() => {
                                    AsciiMorph.morph(AsciiItems.contacts[1]);
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <BoxLink
                                url=""
                                title="BEHANCE"
                                morphEnterHandler={() => {
                                    AsciiMorph.morph(AsciiItems.contacts[2]);
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <BoxLink
                                url=""
                                title="GITHUB"
                                morphEnterHandler={() => {
                                    AsciiMorph.morph(AsciiItems.contacts[3]);
                                }}
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}

function BoxLink(props) {
    const box = useRef();

    const onMouseEnter = () => {
        gsap.to(box.current, {
            backgroundColor: "orange",
            duration: 0.2,
            ease: "power",
        });

        props.morphEnterHandler();
    };

    const onMouseLeave = () => {
        gsap.to(box.current, {
            backgroundColor: "black",
            duration: 0.2,
            ease: "power",
        });
    };

    return (
        <>
            <div
                className="regular link-div"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}>
                <div className="box-link" ref={box}></div>
                <span>{props.title}</span>
            </div>
        </>
    );
}
