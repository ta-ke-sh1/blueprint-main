import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion as m } from "framer-motion";
import { BurgerToggle } from "./burger";
import { useDimensions } from "../../hooks/useDimensions";
import { Box } from "@mui/material";
import { gsap } from "gsap";
import useToggle from "../../hooks/useToggle";
import { usePreloader } from "../../hooks/usePreloader";
import NavigationContent from "./navContent";
import { useColorTheme } from "../../hooks/useColorTheme";
import Animations, { Direction } from "../../animations/animations";

export default function NavigationBar() {
  const { toggle } = useToggle();
  const { changeColor } = useColorTheme();

  const navigate = useNavigate();
  const preloader = usePreloader();

  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const burgerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [isOpen, setOpen] = useState(false);

  const navContent = useRef(null);
  const navMenu = useRef(null);
  const navBg = useRef(null);

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    closeNav();
    let elements = document.querySelectorAll(".logo-container");
    elements.forEach((element) => {
      Animations.appearAnimation(Direction.Down, element, 1.5, 3.75, "power4");
    });
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
      <Box
        className="absolute-container medium s-16"
        sx={{
          opacity: {
            xs: 0,
            sm: 0,
            md: 1,
          },
        }}
        style={{
          top: "10px",
          right: "0px",
          display: "flex",
        }}
      >
        <div className="nav--item active">HOME</div>
        <div className="spacing-slash">/</div>
        <div className="nav--item">WORKS</div>
        <div className="spacing-slash">/</div>
        <div className="nav--item">PLAYGROUND</div>
        <div className="spacing-slash">/</div>
        <div className="nav--item">CONTACT</div>
      </Box>
      <div
        style={{
          zIndex: 1000,
          width: "100%",
          height: "100%",
          position: "relative",
          pointerEvents: "none",
        }}
      >
        <div id="logo">
          <Link onClick={handlePageChange} style={{ textDecoration: "none", position: "relative" }} className="nav-link">
            <div className="wrapper-hidden">
              <div className="condensed s-48 logo-container" ref={logoRef} style={{
                lineHeight: '60px'
              }}>
                <div>HA TRUNG</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <m.nav className="custom-nav" initial={false} custom={height}>
        <div ref={containerRef}>
          <m.div ref={burgerRef} animate={isOpen ? "open" : "closed"}>
            <div className={"nav-menu"} ref={navMenu}>
              <div className="nav-content" ref={navContent}>
                <NavigationContent />
              </div>
              <div className="nav-background" ref={navBg}></div>
            </div>
            <Box
              sx={{
                opacity: {
                  xs: 1,
                  sm: 1,
                  md: 0,
                },
              }}
            >
              <BurgerToggle onClick={toggle} toggle={() => toggleOpen()} />
            </Box>
          </m.div>
        </div>
      </m.nav>
    </>
  );
}
