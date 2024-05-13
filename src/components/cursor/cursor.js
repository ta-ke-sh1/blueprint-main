import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import $ from "jquery";

export default function CustomCursor(ref) {
  const vertical = useRef(null);
  const horizontal = useRef(null);

  useEffect(() => {
    $(function () {
      $(document).on("mousemove", (e) => {
        onMouseMove(e);
      });
      $(document).on("mouseleave", () => {
        onMouseLeave();
      });
      $(document).on("mouseenter", () => {
        onMouseEnter();
      });
    });
  }, []);

  function onMouseMove(event) {
    if (vertical.current) {
      gsap.to(vertical.current, {
        left: event.clientX,
        top: event.clientY,
        duration: 0.5,
        ease: "power",
      });
    }
    if (horizontal.current) {
      gsap.to(horizontal.current, {
        left: event.clientX,
        top: event.clientY,
        duration: 0.5,
        ease: "power",
      });
    }
  }

  const onMouseLeave = () => {
    if (horizontal.current) {
      gsap.to(horizontal.current, {
        opacity: 0,
        duration: 0.3,
        ease: "none",
      });
    }

    if (vertical.current) {
      gsap.to(vertical.current, {
        opacity: 0,
        duration: 0.3,
        ease: "none",
      });
    }
  };

  const onMouseEnter = () => {
    if (vertical.current) {
      gsap.to(vertical.current, {
        opacity: 1,
        duration: 0.3,
        ease: "none",
      });
    }
    if (horizontal.current) {
      gsap.to(horizontal.current, {
        opacity: 1,
        duration: 0.3,
        ease: "none",
      });
    }
  };

  return (
    <div>
      <div id="horizontal cursor" className="horizontal" ref={horizontal}></div>
      <div id="vertical cursor" className="vertical" ref={vertical}></div>
    </div>
  );
}
