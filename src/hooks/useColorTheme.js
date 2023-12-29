import { useState } from "react";
import { gsap } from "gsap";
import $ from "jquery";

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
    bg_color: "#101010",
    text_color: "#FFD600",
    primary_color: "#212121",
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

export function useColorTheme() {
  const [current, setCurrent] = useState(0);

  function changeColor() {
    let next = normalizeRange(current + 1, 0, themeList.length);
    shiftColorMode(next);
    localStorage.setItem("theme", next);
    setCurrent(next);
  }

  function fetchSavedPallete() {
    const savedPallete = parseInt(localStorage.getItem("theme")) || 0;
    console.log(savedPallete);

    setCurrent(savedPallete);
    const theme = themeList[savedPallete];
    shiftDocumentColor(0, theme.bg_color, theme.text_color, theme.primary_color, theme.secondary_color, theme.tertiary_color);
  }

  function shiftColorMode(index) {
    const theme = themeList[index];
    shiftDocumentColor(0.4, theme.bg_color, theme.text_color, theme.primary_color, theme.secondary_color, theme.tertiary_color);
  }

  const shiftDocumentColor = (duration, bg_color, text_color, primary_color, secondary_color, tertiary_color) => {
    const tl = gsap.timeline();

    tl.to("body", {
      ease: "power1",
      backgroundColor: bg_color,
      color: text_color,
      duration: duration,
    });

    const primary = document.querySelector(".primary");
    if (primary) {
      tl.to($(".primary"), {
        ease: "power1",
        color: primary_color,
        duration: duration,
        delay: -duration,
      });
    }

    const secondary = document.querySelector(".secondary");
    if (secondary) {
      tl.to($(".secondary"), {
        ease: "power1",
        color: secondary_color,
        duration: duration,
        delay: -duration,
      });
    }

    const tertiary = document.querySelector(".tertiary");
    if (tertiary) {
      tl.to($(".tertiary"), {
        ease: "power1",
        color: tertiary_color,
        duration: duration,
        delay: -duration,
      });
    }

    const chip = document.querySelector(".chip");
    if (chip) {
      tl.to($(".chip"), {
        ease: "power1",
        backgroundColor: text_color,
        duration: duration,
        delay: -duration,
      });
    }

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
    fetchSavedPallete,
  };
}
