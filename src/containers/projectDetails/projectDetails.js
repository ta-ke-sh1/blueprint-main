import { useEffect, useState } from "react";
import BottomNavigation from "../../components/navigation/bottomNav";
import { usePreloader } from "../../hooks/usePreloader";
import { useParams } from "react-router-dom";
import ShortestPathProblem from "./projects/1.shortestPath/main";
import Contacts from "../contacts";
import PianoBoard from "./projects/2.piano/main";
import PosterAnthologyVol1 from "./projects/3.poster anthology vol 1/main";

export default function ProjectDetails(props) {
    const { openAnimation } = usePreloader();

    const { id } = useParams();

    const components = [
        <ShortestPathProblem />,
        <PianoBoard />,
        <PosterAnthologyVol1 />
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
                    components[id]
                }
            </div>
            <Contacts />
        </>
    )
}