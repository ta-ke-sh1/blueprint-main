export default function Tile(props) {
  const { row, col, isFinish, isStart, isWall, onMouseDown, onMouseEnter, onMouseUp, handleDrag } = props;

  const class_tag = isFinish ? "node-finish" : isStart ? "node-start" : isWall ? "node-wall" : "";

  return (
    <div id={`node-${row}-${col}`} className={`node ${class_tag}`} onMouseDown={() => onMouseDown(row, col)} onMouseEnter={() => onMouseEnter(row, col)} onMouseUp={onMouseUp} onDrag={() => handleDrag(row, col)}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", userSelect: "none" }}>+</div>
    </div>
  );
}
