import gsap from "gsap";
import { useLayoutEffect, useRef, useState, useContext, createContext, useMemo } from "react";
import Animations, { Direction } from "../animations/animations";

const Preloader = createContext();

export function usePreloader() {
  return useContext(Preloader);
}

export function PreloaderWrapper({ children }) {
  const logoRef = useRef(null);

  const preloader_2 = useRef(null);

  const delay = 2.4;

  useLayoutEffect(() => {
    Animations.appearAnimation(Direction.Up, logoRef.current, 1.2, 0.55, "power4");
  }, []);

  const closeAnimation = () => {
    console.log("close");
    gsap.to(preloader_2.current, {
      y: "0%",
      duration: 1.8,
      ease: "power2",
    });
    Animations.appearAnimation(Direction.Up, logoRef.current, 1.2, 1.8, "power4");
  };

  const openAnimation = () => {
    Animations.exitAnimation(Direction.Down, logoRef.current, 2.2, 2.2, "power4");
    setTimeout(() => {
      gsap.to(preloader_2.current, {
        delay: delay,
        y: "-100%",
        duration: 1.8,
        ease: "power2",
      });
    }, 1500);
  };

  let value = useMemo(() => ({ closeAnimation, openAnimation }), []);

  return (
    <Preloader.Provider value={value}>
      <div className="preloader" id="second-slide" ref={preloader_2}>
        <div className="wrapper-hidden preloader-logo-container">
          <div className="preloader-logo" ref={logoRef}>
            <div
              className="s-64"
              style={{
                fontFamily: "display-italic",
                lineHeight: "95px",
                color: "white",
              }}
            >
              Trung Ha
            </div>
          </div>
        </div>
      </div>
      {children}
    </Preloader.Provider>
  );
}
