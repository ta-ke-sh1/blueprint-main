import { useEffect, useRef } from "react"
import locomotiveScroll from "locomotive-scroll";

export default function ScrollWrapper(props) {
    const { children } = props
    const containerRef = useRef(null)

    useEffect(() => {
        const scroll = new locomotiveScroll({
            el: containerRef.current,
            smooth: props.isSmooth ?? true,
            lerp: props.lerp ?? 0.05,
            multiplier: props.multiplier ?? 0.4,
        });

        return function () {
            scroll.destroy();
        }
    }, [])

    return (
        <>
            <main data-scroll-container ref={containerRef}>
                {children}
            </main>
        </>
    )
}