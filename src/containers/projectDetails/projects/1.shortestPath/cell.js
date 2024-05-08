import { useState } from "react";


export default function Cell(props) {
    const { col, row, isStart, isEnd, isWall, onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, weight, enableWeight } = props

    const tag = isStart ? "start-cell" : isEnd ? "end-cell" : isWall ? "wall-cell" : "";

    const [w, setW] = useState(weight ?? 1)

    return (
        <div
            onMouseEnter={() => onMouseEnter(row, col)}
            onMouseLeave={() => onMouseLeave(row, col)}
            onMouseDown={() => onMouseDown(row, col)}
            onMouseUp={() => onMouseUp(row, col)}
            id={`cell-${props.row}-${props.col}`}
            className={`sp-cell ${tag}`}>
            <div className="sp-cell-weight">
                {w}
            </div>
        </div>
    )
}