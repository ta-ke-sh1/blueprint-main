import ScrollWrapper from "../../../../hooks/useSmoothScroll";
import Piano from "./piano";
import { Grid } from "@mui/material";

export default function PianoBoard() {
  return (
    <>
      <ScrollWrapper>
        <div
          style={{
            width: "100dvw",
            marginTop: "200px",
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
            <p
              className="semi-bold s-16"
              style={{
                marginTop: "0px",
                marginBottom: "30px",
              }}
            >
              May 21, 2024
            </p>
          </div>
          <Piano />
        </div>
        <div
          style={{
            margin: "0px auto",
            padding: "50px",
            width: "100%",
            maxWidth: "750px",
          }}
        >
          <Grid spacing={5}>
            <Grid id="spp-paragraph-1" item xs={12} sx={{ marginBottom: "100px" }}>
              <h1 className="semi-bold">Story</h1>
              <div className="regular s-24" style={{ textAlign: "left" }}>
                First of all, I don't know how to play the piano but my wife does. This piano play is simple note mapping.
                We simply only have to map the keynotes with its corresponding mp3 note.
              </div>
            </Grid>
            <Grid id="spp-paragraph-1" item xs={12}>
              <h1 className="semi-bold">How does it work?</h1>
              <p className="regular s-24" style={{ textAlign: "left" }}>

              </p>
              <p className="regular s-24" style={{ textAlign: "left", marginBottom: "100px" }}>
                The problem is also sometimes called the single-pair shortest path problem, to distinguish it from the following variations:
                <ul>
                  <li>The single-source shortest path problem, in which we have to find shortest paths from a source vertex v to all other vertices in the graph.</li>
                  <li>
                    The single-destination shortest path problem, in which we have to find shortest paths from all vertices in the directed graph to a single destination vertex v. This can be reduced to the single-source shortest path problem by reversing the arcs in the directed
                    graph.
                  </li>
                  <li>The all-pairs shortest path problem, in which we have to find shortest paths between every pair of vertices v, v' in the graph.</li>
                </ul>
              </p>
            </Grid>
          </Grid>
        </div>
      </ScrollWrapper>
    </>
  );
}
