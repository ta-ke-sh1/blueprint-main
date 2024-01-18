import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion as m } from "framer-motion";
import { BurgerToggle } from "./burger";
import { useDimensions } from "../../hooks/useDimensions";
import { Grid, Button } from "@mui/material";
import { gsap } from "gsap";
import useToggle from "../../hooks/useToggle";
import { usePreloader } from "../../hooks/usePreloader";
import NavigationContent from "./navContent";
import { useColorTheme } from "../../hooks/useColorTheme";
import MarqueTrack from "../marquee/marquee";

export default function NavigationBar() {
    const { toggle } = useToggle();
    const { changeColor } = useColorTheme();

    const navigate = useNavigate();
    const preloader = usePreloader();

    const containerRef = useRef(null);

    const burgerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    const [isOpen, setOpen] = useState(false);

    const navContent = useRef(null);
    const navMenu = useRef(null);
    const navBg = useRef(null);

    useEffect(() => {
        closeNav();
    }, []);

    const openNav = () => {
        gsap.to(navMenu.current, {
            y: 0,
            x: 0,
            duration: 0,
            opacity: 1,
            ease: ease,
        });

        gsap.to(navBg.current, {
            opacity: 0.3,
            duration: 0.4,
            ease: ease,
        });

        gsap.to(navContent.current, {
            delay: 0.3,
            y: 0,
            x: 0,
            duration: 0.4,
            ease: ease,
        });
    };

    const closeNav = () => {
        gsap.to(navMenu.current, {
            x: "100%",
            duration: 0,
            opacity: 0,
            delay: 0.4,
            ease: ease,
        });

        gsap.to(navBg.current, {
            opacity: 0,
            duration: 0.4,
            ease: ease,
        });

        gsap.to(navContent.current, {
            x: "100%",
            delay: 0.1,
            duration: 0.4,
            ease: ease,
        });
    };

    const handlePageChange = () => {
        console.log(window.location.href);
        if (window.location.href !== "http://localhost:3000/") {
            preloader.tl.reverse();
            setTimeout(() => {
                navigate("/");
            }, 1500);
        }
    };

    const ease = "power";

    const toggleOpen = () => {
        if (isOpen) {
            // close
            closeNav();
        } else {
            // open
            openNav();
        }

        setOpen(!isOpen);
    };

    return (
        <>
            <m.nav className="custom-nav" initial={false} custom={height}>
                <div ref={containerRef}>
                    <m.div ref={burgerRef} animate={isOpen ? "open" : "closed"}>
                        <Grid container columns={12}>
                            <Grid item xs={12} sm={2}>
                                <Link
                                    style={{ textDecoration: "none" }}
                                    onClick={() => handlePageChange()}
                                    className="nav-link">
                                    <div className="nav-item med nav-btn regular logo s-12">
                                        + Space .01
                                    </div>
                                </Link>
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <MarqueTrack />
                            </Grid>
                            <Grid item xs={12} sm={2}></Grid>
                            <Grid item xs={12} sm={2}>
                                <div
                                    className="nav-item med nav-btn regular"
                                    onClick={changeColor}
                                    style={{ zIndex: 10 }}>
                                    + Shift
                                </div>
                            </Grid>
                        </Grid>

                        <div className={"nav-menu"} ref={navMenu}>
                            <div className="nav-content" ref={navContent}>
                                <NavigationContent />
                            </div>
                            <div
                                className="nav-background"
                                ref={navBg}></div>
                        </div>
                        <BurgerToggle
                            onClick={toggle}
                            toggle={() => toggleOpen()}
                        />
                    </m.div>
                </div>
            </m.nav >
        </>
    );
}
