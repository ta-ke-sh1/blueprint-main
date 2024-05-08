import { useEffect, useState } from "react";
import BottomNavigation from "../../components/navigation/bottomNav";
import { usePreloader } from "../../hooks/usePreloader";
import { useParams } from "react-router-dom";
import ShortestPathProblem from "./projects/1.shortestPath/main";
import Contacts from "../contacts";

export default function ProjectDetails(props) {
    const { openAnimation } = usePreloader();

    const { id } = useParams();

    const components = [
        <ShortestPathProblem />,

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