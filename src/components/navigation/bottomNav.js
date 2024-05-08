import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Animations, { Direction } from "../../animations/animations";
import { usePreloader } from "../../hooks/usePreloader";
import { useNavigate } from "react-router-dom";
import { useMouse } from "@uidotdev/usehooks";

export default function BottomNavigation(props) {
  const preloader = usePreloader();
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  const [mouse] = useMouse();

  useEffect(() => {
    if (props.current) {
      onMouseEnterNav(props.current);
    }
    const timer = setInterval(() => {
      setDate(new Date());
    }, 30000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const routes = ["", "folio", "playground", "contact"];

  useEffect(() => {
    setTimeout(() => {
      let elements = document.querySelectorAll(".item-container");
      elements.forEach((element) => {
        Animations.appearAnimation(Direction.Up, element, 2, 3.55, "power4");
      });
    }, 1500);
  }, []);

  function onMouseEnterNav(index) {
    const navItems = document.querySelectorAll(".nav--item");
    for (let i = 0; i < navItems.length; i++) {
      navItems[i].classList.remove("active");
    }
    navItems[index].classList.add("active");
    if (props.onMouseEnterNav) {
      props.onMouseEnterNav(index);
    }
  }

  function handleMouseLeaveNavigation() {
    const navItems = document.querySelectorAll(".nav--item");
    for (let i = 0; i < navItems.length; i++) {
      navItems[i].classList.remove("active");
    }
  }

  function navigatePage(index) {
    if (props.onExit) {
      props.onExit();
    }

    setTimeout(() => {
      preloader.closeAnimation();
      setTimeout(() => {
        navigate("/" + routes[index]);
      }, 1500);
    }, 1000);
  }

  return (
    <>
      <div
        className="medium fixed-container"
        style={{
          left: 0,
          top: 0,
          width: "100dvw",
          height: "100dvh",
          outline: "20px solid white",
          outlineOffset: "-15px",
          zIndex: 10,
          pointerEvents: "none",
        }}
      >
        <div
          className="medium absolute-container"
          style={{
            left: "10px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <div>
            <span className="primary-text"> X: {mouse.x}</span>
            <br />
            <span className="primary-text">Y: {mouse.y}</span>
          </div>
        </div>
        <div
          className="medium absolute-container"
          style={{
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <div
            style={{
              textAlign: "right",
            }}
          >
            <span className="primary-text">ALWAYS READY TO</span>
            <br />
            <span className="primary-text">MATERIALIZE YOUR VISION</span>
          </div>
        </div>
        <div
          className="medium absolute-container"
          style={{
            left: "10px",
            top: "10px",
          }}
        >
          <div
            style={{
              textAlign: "left",
            }}
          >
            <span className="primary-text">GOT SOMETHING</span>
            <br />
            <span className="primary-text">IN MIND?</span>
          </div>
        </div>
        <div
          className="medium absolute-container"
          style={{
            right: "10px",
            top: "10px",
          }}
        >
          <div
            style={{
              textAlign: "right",
            }}
          >
            <span className="primary-text">HANOI,VIETNAM</span>
            <br />
            <span className="primary-text">{date.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true })}</span>
          </div>
        </div>
      </div>
      <Box
        className="medium fixed-container"
        sx={{
          display: "flex",
          alignItems: "flex-end",
          left: "50%",
          transform: "translateX(-50%)",
          bottom: "5px",
          zIndex: 900,
        }}
        onMouseLeave={() => { handleMouseLeaveNavigation() }}
      >
        <div
          className="wrapper-hidden"
          style={{
            margin: "0 10px",
          }}
        >
          <div className="item-container">
            <Box
              className=" medium s-16"
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                backgroundColor: "white",
              }}
            >
              <div className="nav--item active" onMouseEnter={() => onMouseEnterNav(0)} onClick={() => navigatePage(0)}>
                HOME(H)
              </div>
              <div className="spacing-slash">/</div>
              <div className="nav--item" onMouseEnter={() => onMouseEnterNav(1)} onClick={() => navigatePage(1)}>
                BLOG(B)
              </div>
              <div className="spacing-slash">/</div>
              <div className="nav--item" onMouseEnter={() => onMouseEnterNav(2)} onClick={() => navigatePage(0)}>
                PLAYGROUND(P)
              </div>
              <div className="spacing-slash">/</div>
              <div className="nav--item" onMouseEnter={() => onMouseEnterNav(3)} onClick={() => navigatePage(0)}>
                CONTACT(C)
              </div>
            </Box>
          </div>
        </div>
      </Box>
    </>
  );
}
