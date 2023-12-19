import { useState } from "react";
import { gsap } from "gsap";

export function useColorTheme() {
  const [current, setCurrent] = useState(0);

  const themeList = [
    {
      name: "light",
      bg_color: "#EBEBEB",
      text_color: "black",
      primary_color: "#F4F4F4",
      secondary_color: "",
      tertiary_color: "",
    },
    {
      name: "dark",
      bg_color: "#1F1717",
      text_color: "#FCF5ED",
      primary_color: "#4F4A45",
      secondary_color: "",
      tertiary_color: "",
    },
    {
      name: "future",
      bg_color: "#607274",
      text_color: "#FAEED1",
      primary_color: "#B2A59B",
      secondary_color: "",
      tertiary_color: "",
    },
    {
      name: "retro",
      bg_color: "#C63D2F",
      text_color: "#E2C799",
      primary_color: "#E25E3E",
      secondary_color: "",
      tertiary_color: "",
    },
  ];

  function changeColor() {
    let next = normalizeRange(current + 1, 0, themeList.length);
    shiftColorMode(next);
    localStorage.setItem("theme", themeList[next].name);
    setCurrent(next);
  }

  function shiftColorMode(index) {
    const theme = themeList[index];
    shiftDocumentColor(theme.bg_color, theme.text_color, theme.primary_color, theme.secondary_color, theme.tertiary_color);
  }

  const shiftDocumentColor = (bg_color, text_color, primary_color, secondary_color, tertiary_color) => {
    const tl = gsap.timeline();
    tl.to("body", {
      ease: "power1",
      backgroundColor: bg_color,
      color: text_color,
      duration: 0.3,
    })
      .to(".primary", {
        ease: "power1",
        color: primary_color,
        duration: 0.3,
        delay: -0.3,
      })
      .to(".secondary", {
        ease: "power1",
        color: secondary_color,
        duration: 0.3,
        delay: -0.3,
      })
      .to(".tertiary", {
        ease: "power1",
        color: tertiary_color,
        duration: 0.3,
        delay: -0.3,
      });

    tl.play();
  };

  function normalizeRange(value, min, max) {
    if (value == max) {
      return min;
    }

    var tmp = Math.min(value, max);
    return Math.max(tmp, min);
  }

  return {
    changeColor,
  };
}
