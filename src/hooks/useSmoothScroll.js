import { useEffect, useRef } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function ScrollWrapper(props) {
  const { children } = props;
  const containerRef = useRef(null);

  useEffect(() => {}, []);

  return (
    <>
      <ReactLenis
        root
        options={{
          syncTouch: true,
          lerp: 0.05,
          wheelMultiplier: 0.5,
          touchMultiplier: 0.4,
        }}
      >
        <main data-scroll-container ref={containerRef}>
          {children}
        </main>
      </ReactLenis>
    </>
  );
}
