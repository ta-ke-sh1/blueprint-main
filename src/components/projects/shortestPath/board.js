import { useState, useEffect } from "react";
import Tile from "./tile";
import AStar from "./algorithms/astar";
import { getNodesShortestPath } from "./algorithms/util";

export default function Board(props) {
  const [rowCount, setRowCount] = useState(0);
  const [colCount, setColCount] = useState(0);

  const [startPos, setStartPos] = useState({
    row: 1,
    col: 1,
  });

  const [targetPos, setTargetPos] = useState({
    row: 8,
    col: 30,
  });

  const [grid, setGrid] = useState([]);
  const [mouseIsPressed, setMouseIsPressed] = useState(false);
  const [algorithm, setAlgorith] = useState(0);
  const [isSelectWall, setSelectWall] = useState(false);
  const [complexity, setComplexity] = useState(3);
  const [selectStart, setSelectStart] = useState(false);
  const [selectEnd, setSelectEnd] = useState(false);
  const [startDrag, setStartDrag] = useState(false);
  const [finishDrag, setFinishDrag] = useState(false);

  useEffect(() => {
    calculateGridSize();
    window.addEventListener("resize", calculateGridSize);

    return function () {
      window.removeEventListener("resize", calculateGridSize);
    };
  }, []);

  function calculateGridSize() {
    let width = Math.floor(window.innerWidth) / 36;
    let height = Math.floor((window.innerHeight - 36) / 36 - 1);
    const tempGrid = getGridByRowAndColCount(height, width);

    setGrid(tempGrid);
    setRowCount(height);
    setColCount(width);
  }

  function getGridByRowAndColCount(rowCount, colCount) {
    const tempGrid = [];
    for (let row = 0; row < rowCount; row++) {
      const rows = [];
      for (let col = 0; col < colCount; col++) {
        rows.push(createNode(col, row));
      }
      tempGrid.push(rows);
    }
    return tempGrid;
  }

  function createNode(col, row) {
    return {
      col,
      row,
      isStart: row === startPos.row && col === startPos.col,
      isFinish: row === targetPos.row && col === targetPos.col,
      distance: Infinity,
      isVisited: false,
      isWall: false,
      s: Infinity,
      f: Infinity,
      previousNode: null,
    };
  }

  function clearPreviousRun() {
    let temp_grid = [...grid];
    let walls = [];

    for (let row = 0; row < rowCount; row++) {
      for (let col = 0; col < colCount; col++) {
        temp_grid[row][col].isVisited = false;
        if (temp_grid[row][col].isWall) {
          walls.push([row, col]);
        } else if (temp_grid[row][col].isStart || grid[row][col].isFinish) {
          continue;
        } else {
          document.getElementById(`node-${row}-${col}`).className = "node";
        }
      }
    }

    setGrid(temp_grid);
  }

  function handleMouseDown(row, col) {
    setMouseIsPressed(true);
    if (row === startPos.row && col === startPos.col) {
      setSelectStart(true);
      setSelectEnd(false);
      setStartDrag(true);
    } else if (row === targetPos.row && col === targetPos.col) {
      setSelectStart(false);
      setSelectEnd(true);
      setStartDrag(true);
    } else if (!selectStart && !selectEnd) {
    } else if (!selectEnd) {
    } else if (!selectStart) {
    }
  }

  function handleMouseEnter(row, col) {
    if (!mouseIsPressed) return;
    else {
      console.log("Passed node-" + row + "-" + col);
      if (!selectStart && !selectEnd) {
      } else if (!selectEnd) {
        changeStart(row, col, grid);
      } else if (!selectStart) {
        changeFinish(row, col, grid);
      }
    }
  }

  function handleMouseUp(row, col) {
    setStartDrag(false);
    setFinishDrag(false);
    setMouseIsPressed(false);
  }

  function handleDrag(row, col) {}

  function changeStart(row, col, grid) {
    let oldRow = startPos.row;
    let oldCol = startPos.col;
    let g = [...grid];
    //
    grid[oldRow][oldCol].isStart = false;
    document.getElementById(`node-${oldRow}-${oldCol}`).className = "node";
    //
    grid[row][col].isStart = true;
    document.getElementById(`node-${row}-${col}`).className = "node node-start";

    setStartPos({
      row: row,
      col: col,
    });
    setGrid(g);
  }

  function changeFinish(row, col, grid) {
    let oldRow = targetPos.row;
    let oldCol = targetPos.col;
    //
    grid[oldRow][oldCol].isFinish = false;
    document.getElementById(`node-${oldRow}-${oldCol}`).className = "node";
    //
    grid[row][col].isFinish = true;
    document.getElementById(`node-${row}-${col}`).className = "node node-finish";

    setTargetPos({
      row: row,
      col: col,
    });
  }

  function visualizeAlgorithm() {
    console.log("Visualize!");
    clearPreviousRun();

    const startNode = grid[startPos.row][startPos.col];
    const endNode = grid[targetPos.row][targetPos.col];

    let shortestPath = [];
    let visitedNode = AStar(grid, startNode, endNode);

    shortestPath = getNodesShortestPath(endNode);
    animateAlgorithm(visitedNode, shortestPath);
  }

  function animateAlgorithm(visitedNodes, shortestPath) {
    for (let i = 0; i <= visitedNodes.length; i++) {
      if (i === visitedNodes.length) {
        setTimeout(() => {
          animateShortestPath(shortestPath);
        }, 10 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodes[i];
        document.getElementById(`node-${node.row}-${node.col}`).className = "node node-visited";
      }, 10 * i);
    }
  }

  function animateShortestPath(shortestPath) {
    for (let i = 0; i < shortestPath.length; i++) {
      setTimeout(() => {
        const node = shortestPath[i];
        document.getElementById(`node-${node.row}-${node.col}`).className = "node node-shortest-path";
      }, 40 * i);
    }
  }

  return (
    <>
      <button
        onClick={visualizeAlgorithm}
        style={{
          padding: "40px",
        }}
      >
        Start
      </button>
      <div className="sp-container" id="sp-container">
        <div className="sp-board">
          {grid.map((rows, r_index) => {
            return (
              <div className="row" key={"row-" + r_index}>
                {rows.map((node, c_index) => {
                  return (
                    <Tile
                      col={node.col}
                      row={node.row}
                      isFinish={node.isFinish}
                      isStart={node.isStart}
                      isWall={node.isWall}
                      key={"node-" + r_index + "-" + c_index}
                      onMouseDown={(row, col) => handleMouseDown(row, col)}
                      onMouseEnter={(row, col) => handleMouseEnter(row, col)}
                      onMouseUp={() => handleMouseUp()}
                      handleDrag={(row, col) => handleDrag(row, col)}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
