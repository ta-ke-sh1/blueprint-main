import Board from "./board";

export default function ShortestPath(props) {
  return (
    <div
      className="shortest-path-container"
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Board />
    </div>
  );
}
