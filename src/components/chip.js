export default function Chip(props) {
  return (
    <div className="chip relative-container" onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
      {props.children}
    </div>
  );
}
