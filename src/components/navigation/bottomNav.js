import { Box } from "@mui/material"
import { useEffect } from "react";
import Animations, { Direction } from "../../animations/animations";


export default function BottomNavigation(props) {

    useEffect(() => {
        let elements = document.querySelectorAll(".item-container");
        elements.forEach((element) => {
            Animations.appearAnimation(Direction.Up, element, 2, 3.55, "power4");
        });

    }, [])

    function onMouseEnterNav(index) {
        const navItems = document.querySelectorAll(".nav--item");
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].classList.remove("active")
        }
        navItems[index].classList.add("active")
        props.onMouseEnterNav(index);
    }

    useEffect(() => {
        window.addEventListener(
            "keydown",
            function (event) {
                if (event.preventDefault()) {
                    return;
                }

                switch (event.key) {
                    case "h":
                        onMouseEnterNav(0);
                        break;
                    case "c":
                        onMouseEnterNav(3);
                        break;
                    case "p":
                        onMouseEnterNav(2);
                        break;
                    case "w":
                        onMouseEnterNav(1);
                        break;
                    default:
                        return;
                }

                event.preventDefault();
            },
            true
        );
    }, []);

    return (
        <>
            <div className="medium fixed-container" style={{
                left: 0,
                top: 0,
                width: '100dvw',
                height: '100dvh',
                outline: '20px solid white',
                outlineOffset: '-15px',
                zIndex: -1
            }}>

            </div>
            <Box
                className="medium fixed-container"
                sx={{
                    borderTop: '8px solid white',
                    display: "flex",
                    alignItems: "flex-end",
                    left: "50%",
                    transform: 'translateX(-50%)',
                    bottom: '10px',
                    zIndex: 900,
                    backgroundColor: 'white'
                }}
            >
                <div className="wrapper-hidden" style={{
                    margin: '0 8px',

                }}>
                    <div className="item-container">
                        <Box className=" medium s-16" sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            backgroundColor: 'white'
                        }}>
                            <div className="nav--item active" onMouseEnter={() => onMouseEnterNav(0)}>
                                HOME(H)
                            </div>
                            <div className="spacing-slash">/</div>
                            <div className="nav--item" onMouseEnter={() => onMouseEnterNav(1)}>
                                WORKS(W)
                            </div>
                            <div className="spacing-slash">/</div>
                            <div className="nav--item" onMouseEnter={() => onMouseEnterNav(2)}>
                                PLAYGROUND(P)
                            </div>
                            <div className="spacing-slash">/</div>
                            <div className="nav--item" onMouseEnter={() => onMouseEnterNav(3)}>
                                CONTACT(C)
                            </div>
                        </Box>
                    </div>
                </div>
            </Box>
        </>

    )
}