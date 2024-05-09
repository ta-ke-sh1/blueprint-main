import { useEffect, useRef, useState } from "react";
import IconButton from "@mui/material/IconButton";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Cell from "./cell";
import { Tooltip } from "@mui/material";
import { ShortestPath, getNodesShortestPath } from "./algorithms";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import FlagIcon from "@mui/icons-material/Flag";
import RecommendIcon from "@mui/icons-material/Recommend";
import RefreshIcon from "@mui/icons-material/Refresh";

export default function ShortestPathProject() {
  const [gridData, setGridData] = useState([[]]);

  const [isSelectStart, setSelectStart] = useState(false);
  const [isSelectEnd, setSelectEnd] = useState(false);

  const [start, setStart] = useState({
    col: 0,
    row: 0,
  });

  const [end, setEnd] = useState({
    col: 5,
    row: 5,
  });

  const [enableWeight, setEnableWeight] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", calculateGrid);
    return function () {
      window.removeEventListener("resize", calculateGrid);
    };
  }, []);

  useEffect(() => {
    calculateGrid();
  }, []);

  function calculateGrid() {
    let x = window.innerWidth;
    let y = window.innerHeight;

    let colCount = (x / 30) * 0.7;
    let rowCount = (y / 30) * 0.4;
    createGrid(rowCount, colCount);

    setStart({
      col: 1,
      row: 1,
    });
    setEnd({
      col: parseInt(colCount) - 1,
      row: parseInt(rowCount) - 1,
    });
  }

  function createGrid(rowSize, colSize) {
    let gridData = [];
    for (let i = 0; i < rowSize; i++) {
      let rowData = [];
      for (let j = 0; j < colSize; j++) {
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
        });
      }

      gridData.push(rowData);
    }

    setGridData(gridData);
  }

  function onMouseEnterCell(row, col) {}

  function onMouseLeaveCell(row, col) {}

  function onMouseDownCell(row, col) {}

  function onMouseUpCell(row, col) {}

  function startAnimation() {
    const visitedNodes = ShortestPath(gridData, gridData[start.row][start.col], gridData[end.row][end.col]);
    const shortestPath = getNodesShortestPath(gridData[end.row][end.col]);
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

        document.getElementById(`cell-${node.row}-${node.col}`).className = "sp-cell node-visited";
      }, 10 * i);
    }
  }

  function animatePath(path) {
    for (let i = 0; i < path.length; i++) {
      setTimeout(() => {
        const node = path[i];
        document.getElementById(`cell-${node.row}-${node.col}`).className = "sp-cell node-shortest-path";
      }, 40 * i);
    }
  }

  return (
    <>
      <div className="sp-control">
        <div className="sp-control-button">
          <Tooltip arrow title="Select start point">
            <IconButton
              onClick={() => {
                startAnimation();
              }}
            >
              <FlagIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div className="sp-control-button">
          <Tooltip arrow title="Select end point">
            <IconButton
              onClick={() => {
                startAnimation();
              }}
            >
              <RecommendIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div className="sp-control-button">
          <Tooltip arrow title="Play">
            <IconButton
              onClick={() => {
                startAnimation();
              }}
            >
              <PlayCircleIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div className="sp-control-button">
          <Tooltip arrow title="Refresh Grid">
            <IconButton
              onClick={() => {
                startAnimation();
              }}
            >
              <RefreshIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div className="sp-control-button">
          <Tooltip arrow title="Weight">
            <IconButton
              onClick={() => {
                setEnableWeight(!enableWeight);
              }}
            >
              <FitnessCenterIcon />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <ShortestPathGrid enableWeight={enableWeight} grid={gridData} onMouseDown={onMouseDownCell} onMouseUp={onMouseUpCell} onMouseEnter={onMouseEnterCell} onMouseLeave={onMouseLeaveCell} />
    </>
  );
}

function ShortestPathGrid(props) {
  const { grid } = props;

  const gridRef = useRef();

  useEffect(() => {
    gridRef.current.addEventListener("contextmenu", rightClickHandler, false);

    return function () {
      gridRef.current.removeEventListener("contextmenu", rightClickHandler, false);
    };
  }, []);

  function rightClickHandler(e) {
    e.preventDefault();
    if (props.rightClickHandler) {
      props.rightClickHandler();
    }
  }

  return (
    <div className="sp-grid" ref={gridRef}>
      {grid.map((row) => {
        return (
          <div className="sp-row">
            {row.map((cell) => {
              return (
                <Cell
                  col={cell.col}
                  row={cell.row}
                  isVisited={cell.isVisited}
                  isWall={cell.isWall}
                  isStart={cell.isStart}
                  isEnd={cell.isEnd}
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                  onMouseDown={props.onMouseDown}
                  onMouseUp={props.onMouseUp}
                  weight={cell.weight}
                  enableWeight={props.enableWeight}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
