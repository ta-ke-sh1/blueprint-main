import gsap from "gsap";
import { useLayoutEffect, useRef, useState, useContext, createContext, useMemo } from "react";
import Animations, { Direction } from "../animations/animations";

const Preloader = createContext();

export function usePreloader() {
  return useContext(Preloader);
}

export function PreloaderWrapper({ children }) {
  const container = useRef(null);
  const logoRef = useRef(null);

  const preloader_2 = useRef(null);
  const [isLoaded, updateLoaded] = useState(false);

  const [tl, setTl] = useState(gsap.timeline());

  const delay = 2.4;

  useLayoutEffect(() => {
    const tl = gsap.timeline();

    Animations.appearAnimation(Direction.Up, logoRef.current, 1.2, 0.55, "power4");

    setTimeout(() => {
      Animations.exitAnimation(Direction.Down, logoRef.current, 2.2, 0, "power4");
    }, 1500);

    const ctx = gsap.context(() => {
      tl.to(preloader_2.current, {
        delay: delay,
        y: "-100%",
        duration: 1.8,
        ease: "power2",
      });
    }, container);

    const onPageLoad = () => {
      updateLoaded(true);
      tl.play();
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      return () => {
        window.removeEventListener("load", onPageLoad);
      };
    }

    setTl(tl);

    return function () {
      ctx.revert();
    };
  }, [isLoaded]);

  let value = useMemo(() => ({ tl, isLoaded }), [tl, isLoaded]);

  return (
    <Preloader.Provider value={value}>
      <div className="preloader" id="second-slide" ref={preloader_2}>
        <div className="wrapper-hidden preloader-logo-container">
          <div className="preloader-logo" ref={logoRef}>
            <div
              className="s-128"
              style={{
                fontFamily: "condensed",
                lineHeight: "95px",
                color: "white",
              }}
            >
              HA TRUNG
            </div>
          </div>
        </div>
      </div>
      {children}
    </Preloader.Provider>
  );
}
