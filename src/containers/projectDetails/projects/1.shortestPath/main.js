import { Grid } from "@mui/material";
import ShortestPathProject from "./base";
import ScrollWrapper from "../../../../hooks/useSmoothScroll";

export default function ShortestPathProblem() {
    return (
        <ScrollWrapper>
            <div style={{
                width: '100dvw',
                marginTop: '200px',
                textAlign: 'center',
                justifyContent: 'center',
            }}>
                <div>
                    <h1 className="display-light-italic" style={{
                        letterSpacing: "1px"
                    }}>
                        Shortest Path Problem
                    </h1>
                    <p className="semi-bold s-16">
                        May 21, 2024
                    </p>
                </div>
                <div style={{
                    margin: '0 auto',
                    width: 'fit-content'
                }}>
                    <ShortestPathProject />
                </div>
                <div style={{
                    margin: '50px auto',
                    padding: '50px',
                    width: '100%',
                    maxWidth: '750px'
                }}>
                    <Grid spacing={5}>
                        <Grid id="spp-paragraph-1" item xs={12} sx={{ marginBottom: '100px' }}>
                            <h1 className="semi-bold">
                                History
                            </h1>
                            <div className="regular s-24" style={{ textAlign: 'left' }}>
                                In graph theory, the shortest path problem is the problem of finding a path between two vertices (or nodes) in a graph such that the sum of the weights of its constituent edges is minimized.
                                The problem of finding the shortest path between two intersections on a road map may be modeled as a special case of the shortest path problem in graphs, where the vertices correspond to intersections and the edges correspond to road segments, each weighted by the length of the segment.
                            </div>
                        </Grid>
                        <Grid id="spp-paragraph-1" item xs={12}>
                            <h1 className="semi-bold">
                                How does it work?
                            </h1>
                            <p className="regular s-24" style={{ textAlign: 'left' }}>
                                The shortest path problem can be defined for graphs whether undirected, directed, or mixed. It is defined here for undirected graphs; for directed graphs the definition of path requires that consecutive vertices be connected by an appropriate directed edge.</p>
                            <p className="regular s-24" style={{ textAlign: 'left', marginBottom: '100px' }}>
                                The problem is also sometimes called the single-pair shortest path problem, to distinguish it from the following variations:
                                <ul>
                                    <li>
                                        The single-source shortest path problem, in which we have to find shortest paths from a source vertex v to all other vertices in the graph.
                                    </li>
                                    <li>
                                        The single-destination shortest path problem, in which we have to find shortest paths from all vertices in the directed graph to a single destination vertex v. This can be reduced to the single-source shortest path problem by reversing the arcs in the directed graph.
                                    </li>
                                    <li>
                                        The all-pairs shortest path problem, in which we have to find shortest paths between every pair of vertices v, v' in the graph.
                                    </li>
                                </ul>

                            </p>
                        </Grid>
                        <Grid id="spp-paragraph-1" item xs={12} >
                            <h1 className="semi-bold">
                                Algorithms
                            </h1>
                            <div className="regular s-24" style={{ textAlign: 'left' }}>
                                <p>
                                    Several well known algorithms exist for solving this problem and its variants:
                                    <ul>
                                        <li>Dijkstra's algorithm solves the single-source shortest path problem with non-negative edge weight.</li>
                                        <li>Bellman–Ford algorithm solves the single-source problem if edge weights may be negative.</li>
                                        <li>A* search algorithm solves for single-pair shortest path using heuristics to try to speed up the search.</li>
                                    </ul>
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </ScrollWrapper >
    )
}