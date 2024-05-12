import ScrollWrapper from "../../../../hooks/useSmoothScroll";
import Piano from "./piano";

export default function PianoBoard() {
    return (
        <>
            <ScrollWrapper>
                <div
                    style={{
                        width: "100dvw",
                        marginTop: "300px",
                        textAlign: "center",
                        justifyContent: "center",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                        }}
                    >
                        <h1
                            className="display-light-italic"
                            style={{
                                letterSpacing: "1px",
                            }}
                        >
                            Virtual Piano
                        </h1>
                        <p className="semi-bold s-16" style={{
                            marginTop: '0px',
                            marginBottom: '30px'
                        }}>May 21, 2024</p>
                    </div>
                    <Piano />
                </div>
            </ScrollWrapper>
        </>
    )
}