import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import IconButton from "@mui/material/IconButton";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Cell from "./cell";
import { Tooltip } from "@mui/material";
import { ShortestPath, getNodesShortestPath } from "./algorithms";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import FlagIcon from "@mui/icons-material/Flag";
import RecommendIcon from "@mui/icons-material/Recommend";
import RefreshIcon from "@mui/icons-material/Refresh";
import { textShuffle } from "../../../../animations/text";
import BlockIcon from "@mui/icons-material/Block";
import MazeGenerator, { ALGORITHMS } from "./mazeGenerator";
import AppsIcon from "@mui/icons-material/Apps";

const toolTipSlotProps = {
  popper: {
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [-25, -15],
        },
      },
    ],
  },
};

const statusList = {
  WAITING: "WAITING",
  SELECT_START: "SELECTING START POINT",
  SELECT_END: "SELECTING END POINT",
  SELECTE_WALL: "SELECTING WALL",
};

const STATUS_CODE = {
  none: 0,
  start: 1,
  end: 2,
  wall: 3,
};

export default function ShortestPathProject() {
  const gridRef = useRef();
  const [gridData, setGridData] = useState([[]]);

  const [selectStatus, setSelectStatus] = useState(STATUS_CODE.none);
  const [mouseDown, setMouseDown] = useState(false);

  const [status, setStatus] = useState("SELECTING START");

  const [start, setStart] = useState({
    col: -1,
    row: -1,
  });

  const [end, setEnd] = useState({
    col: -1,
    row: -1,
  });

  const [enableWeight, setEnableWeight] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", calculateGrid);
  }, []);

  useEffect(() => {
    calculateGrid();
  }, []);

  function calculateGrid() {
    let x = window.innerWidth;
    let y = window.innerHeight;

    let colCount = (x / 15) * 0.4;
    let rowCount = (y / 15) * 0.3;

    // Make row & col to be odd
    rowCount -= rowCount % 2;
    rowCount++;
    colCount -= colCount % 2;
    colCount++;

    createGrid(rowCount, colCount);

    setStart({
      col: 1,
      row: 1,
    });
    setEnd({
      col: parseInt(colCount) - 2,
      row: parseInt(rowCount) - 2,
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

  function refreshGrid() {
    for (let row = 0; row < gridData.length; row++) {
      for (let col = 0; col < gridData[0].length; col++) {
        if (gridData[row][col].isStart) {
          document.getElementById(`cell-${row}-${col}`).className = "sp-cell start-cell";
        } else if (gridData[row][col].isEnd) {
          document.getElementById(`cell-${row}-${col}`).className = "sp-cell end-cell";
        } else {
          document.getElementById(`cell-${row}-${col}`).className = "sp-cell";
        }
      }
    }

    createGrid(gridData.length, gridData[0].length);
  }

  function onMouseEnterCell(row, col) {
    if (mouseDown) {
      if (selectStatus === STATUS_CODE.wall) {
        console.log("SELECT WALL", row, col);
        handleSelect("WALL", row, col);
      } else {
        console.log("SELECT NONE", row, col);
      }
    }
  }

  function onMouseLeaveCell(row, col) {}

  function onMouseUpCell(row, col) {
    setMouseDown(false);
  }

  function onMouseDownCell(row, col) {
    setMouseDown(true);

    if (selectStatus === STATUS_CODE.start) {
      console.log("SELECT START", row, col);
      handleSelect("START", row, col);
    } else if (selectStatus === STATUS_CODE.end) {
      console.log("SELECT END", row, col);
      handleSelect("END", row, col);
    }
  }

  function handleSelect(eventName, row, col) {
    switch (eventName) {
      case "START":
        let currentStart = document.getElementById(`cell-${start.row}-${start.col}`);
        if (currentStart) {
          currentStart.classList.remove("start-cell");
        }
        let newStart = document.getElementById(`cell-${row}-${col}`);
        if (newStart) {
          newStart.classList.add("start-cell");
        }
        setStart({
          col: col,
          row: row,
        });
        break;
      case "END":
        let currentEnd = document.getElementById(`cell-${end.row}-${end.col}`);
        if (currentEnd) {
          currentEnd.classList.remove("end-cell");
        }
        let newEnd = document.getElementById(`cell-${row}-${col}`);
        if (newEnd) {
          newEnd.classList.add("end-cell");
        }
        setEnd({
          col: col,
          row: row,
        });
        break;
      case "WALL":
        if (gridData[row][col].isStart || gridData[row][col].isEnd) {
          console.log("Invalid");
          return;
        }
        let current = document.getElementById(`cell-${row}-${col}`);
        current.classList.toggle("wall-cell");
        let temp = gridData;
        temp[row][col].isWall = true;
        setGridData(temp);

        break;
      default:
        break;
    }
  }

  function startAnimation() {
    console.log(gridData);
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

  function createMaze() {
    refreshGrid();

    const mazeGenerator = new MazeGenerator(gridData, ALGORITHMS.Kruskal);
    const maze = mazeGenerator.generateMaze(start, end);
    console.log(maze);

    for (let i = 0; i < maze.length; i++) {
      for (let j = 0; j < maze[0].length; j++) {
        if (maze[i][j].isWall) {
          let current = document.getElementById(`cell-${i}-${j}`);
          current.classList.toggle("wall-cell");
          setGridData(maze);
        }
      }
    }
  }

  return (
    <>
      <ShortestPathGrid ref={gridRef} status={status} enableWeight={enableWeight} grid={gridData} onMouseDown={onMouseDownCell} onMouseUp={onMouseUpCell} onMouseEnter={onMouseEnterCell} onMouseLeave={onMouseLeaveCell} />
      <div className="sp-control">
        <div className="sp-control-button">
          <Tooltip title="Select start point" placement="left-start" slotProps={toolTipSlotProps}>
            <IconButton
              onClick={() => {
                gridRef.current.updateStatus(statusList.SELECT_START);
                setSelectStatus(STATUS_CODE.start);
              }}
            >
              <FlagIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div className="sp-control-button">
          <Tooltip title="Select end point" placement="right-start" slotProps={toolTipSlotProps}>
            <IconButton
              onClick={() => {
                gridRef.current.updateStatus(statusList.SELECT_END);
                setSelectStatus(STATUS_CODE.end);
              }}
            >
              <RecommendIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div className="sp-control-button">
          <Tooltip title="Select wall titles" placement="left-start" slotProps={toolTipSlotProps}>
            <IconButton
              onClick={() => {
                gridRef.current.updateStatus(statusList.SELECT_START);
                setSelectStatus(STATUS_CODE.wall);
              }}
            >
              <BlockIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div className="sp-control-button">
          <Tooltip title="Play" placement="right-start" slotProps={toolTipSlotProps}>
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
          <Tooltip title="Refresh Grid" placement="right-start" slotProps={toolTipSlotProps}>
            <IconButton onClick={refreshGrid}>
              <RefreshIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div className="sp-control-button">
          <Tooltip title="Generate Maze" placement="right-start" slotProps={toolTipSlotProps}>
            <IconButton onClick={createMaze}>
              <AppsIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div className="sp-control-button">
          <Tooltip title="Weight" placement="right-start" slotProps={toolTipSlotProps}>
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
    </>
  );
}

const ShortestPathGrid = forwardRef(function (props, ref) {
  const { grid } = props;

  const gridRef = useRef();
  const statusRef = useRef();

  useEffect(() => {
    gridRef.current.addEventListener("contextmenu", rightClickHandler, false);
  }, []);

  useImperativeHandle(ref, () => {
    return {
      updateStatus(status) {
        let interval;
        textShuffle(statusRef.current, status, interval, 50);
      },
    };
  });

  function rightClickHandler(e) {
    e.preventDefault();
    if (props.rightClickHandler) {
      props.rightClickHandler();
    }
  }

  return (
    <div
      draggable={false}
      onDragStart={() => {
        return false;
      }}
      onDrop={() => {
        return false;
      }}
      className="sp-grid"
      ref={gridRef}
      style={{
        position: "relative",
        padding: "0px",
      }}
    >
      <div
        className="medium"
        style={{
          fontSize: "12px",
          position: "absolute",
          bottom: "-26px",
          textAlign: "left",
          left: "-2px",
          padding: "4px 5px 2px 0px",
        }}
      >
        [STATUS: <span ref={statusRef}>PENDING</span>]
      </div>
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
});
