import gsap from "gsap";
import { useEffect, useRef, useState, useContext, createContext, useMemo } from "react";

const Preloader = createContext();

export function usePreloader() {
  return useContext(Preloader);
}

export function PreloaderWrapper({ children }) {
  const preloader = useRef(null);
  const preloader_2 = useRef(null);
  const preloader_3 = useRef(null);
  const preloader_4 = useRef(null);
  const titleText = useRef(null);
  const [isLoaded, updateLoaded] = useState(false);

  const [tl, setTl] = useState(gsap.timeline())

  const delay = 2;

  useEffect(() => {
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

    setTl(gsap
      .timeline()
      .to(preloader.current, {
        delay: delay,
        top: "-120vh",
        duration: 1,
        ease: "power2",
      })
      .to(preloader_2.current, {
        delay: -0.8,
        top: "-120vh",
        duration: 1,
        ease: "power2",
      })
      .to(preloader_3.current, {
        delay: -0.8,
        top: "-120vh",
        duration: 1,
        ease: "power2",
      })
      .to(preloader_4.current, {
        delay: -0.8,
        top: "-120vh",
        duration: 1,
        ease: "power2",
      })
      .to(titleText.current, {
        delay: -2.2,
        opacity: 0,
        duration: 0.4,
        ease: "power2",
      })
    )

  }, [isLoaded]);

  let value = useMemo(() => ({ tl, isLoaded }), [tl, isLoaded]);

  return (
    <Preloader.Provider value={value}>
      <div
        style={{
          opacity: 1,
        }}
      >
        <div className="preloader" id="first-slide" ref={preloader}></div>
        <div className="preloader" id="second-slide" ref={preloader_2}></div>
        <div className="preloader" id="third-slide" ref={preloader_3}></div>
        <div className="preloader" id="fourth-slide" ref={preloader_4}></div>
        <div ref={titleText} className="text-title medium">
          + Space. <span className="reg">01</span>
        </div>
      </div>
      {children}
    </Preloader.Provider>
  );
}
