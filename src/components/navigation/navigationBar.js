import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDimensions } from "../../hooks/useDimensions";
import { gsap } from "gsap";
import useToggle from "../../hooks/useToggle";
import { usePreloader } from "../../hooks/usePreloader";
import NavigationContent from "./navContent";
import Animations, { Direction } from "../../animations/animations";

export default function NavigationBar() {
  const navigate = useNavigate();
  const preloader = usePreloader();

  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const burgerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const navContent = useRef(null);
  const navMenu = useRef(null);
  const navBg = useRef(null);


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

  return (
    <>
      <div
        style={{
          zIndex: 100,
          width: "100%",
          height: "100%",
          position: "relative",
          pointerEvents: "none",
        }}
      >
        <div
          id="logo"
          style={{
            marginLeft: "5px",
          }}
        >
          <Link onClick={handlePageChange} style={{ textDecoration: "none", position: "relative" }} className="nav-link">
            <div className="display-light-italic s-48" ref={logoRef} style={{
              position: 'fixed',
              left: '50%',
              top: '5px',
              transform: 'translateX(-50%)'
            }}>
              Trung Ha
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
