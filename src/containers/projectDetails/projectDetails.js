import { useEffect, useState } from "react";
import BottomNavigation from "../../components/navigation/bottomNav";
import InvoiceMaker from "./projects/1/1";

export default function ProjectDetails(props) {

    const components = [
        <InvoiceMaker />
    ]

    const [current, setCurrent] = useState(0)

    useEffect(() => {

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