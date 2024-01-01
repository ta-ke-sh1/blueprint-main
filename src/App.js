import { Route, Routes } from "react-router-dom";
import ErrorPage from "./containers/error";
import Homepage from "./containers/homepage";
import AboutMe from "./containers/about";
import Playground from "./containers/playground";
import Projects from "./containers/projects";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";

function App() {
    const containerRef = useRef(null);

    return (
        <LocomotiveScrollProvider
            options={{
                smooth: true,
                lerp: 0.05,
                multiplier: 0.5,
            }}
            watch={[]}
            containerRef={containerRef}>
            <main data-scroll-container ref={containerRef}>
                <Routes>
                    <Route path="*" element={<ErrorPage />} />
                    <Route path="/" element={<Homepage />} />
                    <Route path="/folio" element={<AboutMe />} />
                    <Route path="/playground" element={<Playground />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </main>
        </LocomotiveScrollProvider>
    );
}

export default App;
