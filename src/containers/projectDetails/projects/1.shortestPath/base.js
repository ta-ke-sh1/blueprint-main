import { useEffect, useState } from "react"
import TextField from '@mui/material/TextField';
import IconButton from "@mui/material/IconButton"
import Grid from "@mui/material/Grid"
import { Grid3x3, Start } from "@mui/icons-material";
import Cell from "./cell";

const normalizeRange = (i, min, max) => {
    return i < min ? min : i > max ? max : i
}

export default function ShortestPathProject() {

    const [grid, setGrid] = useState([[]])

    const [gridData, setGridData] = useState([[]])

    const [colSize, setXSize] = useState(20)
    const [rowSize, setYSize] = useState(20)

    const [start, setStart] = useState({
        col: 0,
        row: 0,
    })

    const [end, setEnd] = useState({
        col: 5,
        row: 5,
    })

    useEffect(() => {
        createGrid();
    }, [])

    function createGrid() {
        let grid = [];
        let gridData = [];
        for (let i = 0; i < rowSize; i++) {
            let row = []
            let rowData = [];
            for (let j = 0; j < colSize; j++) {
                row.push(
                    <Cell
                        col={j}
                        row={i}
                        isVisited={false}
                        isWall={false}
                        isStart={start.row === i && start.col === j}
                        isEnd={end.row === i && end.col === j}
                        onMouseEnter={onMouseEnterCell}
                        onMouseLeave={onMouseLeaveCell}
                        onMouseDown={onMouseDownCell}
                        onMouseUp={onMouseUpCell}
                        weight={1}
                    />
                )

                rowData.push({
                    col: j,
                    row: i,
                    isWall: false,
                    isStart: start.row === i && start.col === j,
                    isEnd: end.row === i && end.col === j,
                    weight: 1,
                    isVisited: false,
                    f: Infinity,
                    distance: Infinity,
                    previousNode: null,
                })
            }

            grid.push(row)
            gridData.push(rowData)
        }

        setGrid(grid);
        setGridData(gridData)
    }

    function onMouseEnterCell(row, col) {

    }

    function onMouseLeaveCell(row, col) {

    }

    function onMouseDownCell(row, col) {

    }

    function onMouseUpCell(row, col) {

    }

    function startAnimation() {
        const visitedNodes = ShortestPath(gridData, gridData[start.row][start.col], gridData[end.row][end.col])
        const shortestPath = getNodesShortestPath(gridData[end.row][end.col])
        animateAlgorithm(visitedNodes, shortestPath);
    }

    function animateAlgorithm(visitedNodes, shortestPath) {
        for (let i = 0; i <= visitedNodes.length; i++) {
            if (i === visitedNodes.length) {
                setTimeout(() => {
                    animatePath(shortestPath);
                }, 10 * i);
                return;
            }
            setTimeout(() => {
                const node = visitedNodes[i];

                document.getElementById(
                    `cell-${node.row}-${node.col}`
                ).className = "sp-cell node-visited";
            }, 10 * i);
        }
    }

    function animatePath(path) {
        for (let i = 0; i < path.length; i++) {
            setTimeout(() => {
                const node = path[i];
                document.getElementById(
                    `cell-${node.row}-${node.col}`
                ).className = "sp-cell node-shortest-path";
            }, 40 * i);
        }
    }

    return (
        <>
            <div style={{
                position: 'relative',
                width: '100dvw',
                height: '100dvh'
            }}>
                <div style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    justifyContent: 'center',
                }}>
                    Shortest Path Visualizer
                    <div className="sp-control">
                        <Grid container spacing={4}>
                            <Grid item xs={3}>
                                <TextField value={colSize} onChange={(e) => {
                                    let value = normalizeRange(parseInt(e.target.value), 0, 40);
                                    setXSize(value)
                                }} id="standard-basic" label="X" variant="standard" />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField value={rowSize} onChange={(e) => {
                                    let value = normalizeRange(parseInt(e.target.value), 0, 40);
                                    setYSize(value)
                                }} id="standard-basic" label="Y" variant="standard" />
                            </Grid>
                            <Grid item xs={2}>
                                <IconButton onClick={() => {
                                    createGrid()
                                }}>
                                    <Grid3x3 />
                                </IconButton>
                            </Grid>
                            <Grid item xs={2}>
                                <IconButton onClick={() => {
                                    startAnimation()
                                }}>
                                    <Start />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </div>
                    <ShortestPathGrid grid={grid} onMouseDown={onMouseDownCell} onMouseUp={onMouseUpCell} onMouseEnter={onMouseEnterCell} onMouseLeave={onMouseLeaveCell} />
                </div>
            </div>
        </>

    )
}

function ShortestPathGrid(props) {
    const { grid } = props

    return (
        <div className="sp-grid">
            {
                grid.map((row) => {
                    return (
                        <div className="sp-row">
                            {
                                row.map((cell) => {
                                    return cell
                                })
                            }
                        </div>
                    )

                })
            }
        </div>
    )
}


function ShortestPath(grid, start, end) {
    const shortestPath = [];
    start.distance = 0;

    const nodeList = getAllNodes(grid);

    try {
        while (!!nodeList) {
            sortNodesByDistance(nodeList);
            const currentNode = nodeList.shift();

            if (currentNode.isWall) continue;
            if (currentNode.distance === Infinity) {
                console.log('return')
                return shortestPath;
            }
            currentNode.isVisited = true;
            shortestPath.push(currentNode)

            if (currentNode.row === end.row && currentNode.col === end.col) {
                console.log('found')
                return shortestPath;
            }

            let neighbors = getNeighbor(currentNode, grid)
            for (const neighbor of neighbors) {
                neighbor.distance = currentNode.distance + currentNode.weight;
                neighbor.previousNode = currentNode;
            }
        }
    } catch (e) {
        console.log(e.toString())
    }

    return shortestPath;
}

function getAllNodes(grid) {
    const nodes = [];
    for (const row of grid) {
        for (const node of row) {
            nodes.push(node);
        }
    }
    return nodes;
}


function getNeighbor(node, grid) {
    const neighbors = [];
    const { col, row } = node;
    if (row > 1) neighbors.push(grid[row - 1][col])
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col])
    if (col > 1) neighbors.push(grid[row][col - 1])
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1])
    return neighbors.filter((neighbor) => !neighbor.isVisited);
}

function sortNodesByDistance(unvisitedNodes) {
    unvisitedNodes.sort((nodeA, nodeB) => {
        return nodeA.distance - nodeB.distance;
    });
}

export function getNodesShortestPath(finishNode) {
    const nodesInShortestPathOrder = [];
    let currentNode = finishNode;
    while (currentNode !== null) {
        nodesInShortestPathOrder.unshift(currentNode);

        currentNode = currentNode.previousNode;
    }
    return nodesInShortestPathOrder;
}
