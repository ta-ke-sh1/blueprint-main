import { useEffect, useState } from "react"
import TextField from '@mui/material/TextField';
import IconButton from "@mui/material/IconButton"
import Grid from "@mui/material/Grid"
import { Grid3x3, Start } from "@mui/icons-material";

const normalizeRange = (i, min, max) => {
    return i < min ? min : i > max ? max : i
}

export default function InvoiceMaker() {

    const [grid, setGrid] = useState([[]])

    const [gridData, setGridData] = useState([[]])

    const [xSize, setXSize] = useState(15)
    const [ySize, setYSize] = useState(15)

    const [start, setStart] = useState({
        x: 0,
        y: 0,
    })

    const [end, setEnd] = useState({
        x: 14,
        y: 14
    })

    useEffect(() => {
        createGrid();
    }, [])

    function createGrid() {
        let grid = [];
        let gridData = [];
        for (let i = 0; i < ySize; i++) {
            let row = []
            let rowData = [];
            for (let j = 0; j < xSize; j++) {
                row.push(
                    <Cell
                        x={j}
                        y={i}
                        isVisited={false}
                        isWall={false}
                        isStart={start.x === i && start.y === j}
                        isEnd={end.x === i && end.y === j}
                        onMouseEnter={onMouseEnterCell}
                        onMouseLeave={onMouseLeaveCell}
                        onMouseDown={onMouseDownCell}
                        onMouseUp={onMouseUpCell}
                        weight={1}
                    />
                )

                rowData.push({
                    x: j,
                    y: i,
                    isWall: false,
                    isStart: start.x === i && start.y === j,
                    isEnd: end.x === i && end.y === j,
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

    function onMouseEnterCell(x, y) {

    }

    function onMouseLeaveCell(x, y) {

    }

    function onMouseDownCell(x, y) {
        console.log("x: " + x, "y: " + y)
    }

    function onMouseUpCell(x, y) {

    }

    function startAnimation() {
        const path = ShortestPath(gridData, start, end)
        console.log(path)
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
                                <TextField value={xSize} onChange={(e) => {
                                    let value = normalizeRange(parseInt(e.target.value), 0, 40);
                                    setXSize(value)
                                }} id="standard-basic" label="X" variant="standard" />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField value={ySize} onChange={(e) => {
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

function Cell(props) {
    const { x, y, isStart, isEnd, isWall, onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, weight, enableWeight } = props

    const tag = isStart ? "start-cell" : isEnd ? "end-cell" : isWall ? "wall-cell" : "";

    const [w, setW] = useState(weight ?? 1)

    return (
        <div
            onMouseEnter={() => onMouseEnter(x, y)}
            onMouseLeave={() => onMouseLeave(x, y)}
            onMouseDown={() => onMouseDown(x, y)}
            onMouseUp={() => onMouseUp(x, y)}
            id={`cell-${props.x}-${props.y}`}
            className={`sp-cell ${tag}`}>
            <div className="sp-cell-weight">
                {w}
            </div>
        </div>
    )
}

function ShortestPath(grid, start, end) {
    const shortestPath = [];
    start.f = 0;
    start.distance = 0;

    const nodeList = getAllNodes(grid);

    try {
        while (!!nodeList) {
            sortNodesByDistance(nodeList);
            const currentNode = nodeList.shift();

            if (currentNode.isWall) continue;
            if (currentNode.f === Infinity) return shortestPath;
            currentNode.isVisited = true;
            shortestPath.push(currentNode)

            if (currentNode.x === end.x && currentNode.y === end.y) return shortestPath;

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
    const x = node.x;
    const y = node.y;
    if (x > 1) neighbors.push(grid[x - 1][y])
    if (x < grid.length - 1) neighbors.push(grid[x + 1][y])
    if (y > 1) neighbors.push(grid[x][y - 1])
    if (y < grid[0].length - 1) neighbors.push(grid[x][y + 1])
    return neighbors.filter((neighbor) => !neighbor.isVisited);
}

function sortNodesByDistance(unvisitedNodes) {
    unvisitedNodes.sort((nodeA, nodeB) => {
        return nodeA.distance - nodeB.distance;
    });
}
