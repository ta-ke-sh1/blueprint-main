export default function CenterContainer(props) {
  return (
    <div
      className="absolute-container"
      style={{
        top: props.top ?? '50%',
        left: props.left ?? '50%',
        transform: 'translate(-50%, -50%)',
        ...props.style
      }}
    >
      {props.children}
    </div>
  )
}