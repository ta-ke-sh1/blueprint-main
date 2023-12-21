export default function Chip(props) {
  return (
    <div id={props.id} className="chip relative-container primary" onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
      {props.children}
    </div>
  );
}
