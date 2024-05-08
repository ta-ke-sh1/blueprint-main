import { useEffect, useState } from "react";
import BottomNavigation from "../../components/navigation/bottomNav";
import { usePreloader } from "../../hooks/usePreloader";
import ShortestPathProject from "./projects/1.shortestPath/base";

export default function ProjectDetails(props) {
    const { openAnimation } = usePreloader();

    const components = [
        <ShortestPathProject />
    ]

    const [current, setCurrent] = useState(0)

    useEffect(() => {
        openAnimation();
    }, [])

    return (
        <>
            <BottomNavigation />
            <div>
                {
                    components[current]
                }
            </div>
        </>
    )
}