export default function HeadingText(props) {
    return (
        <div style={{ ...props.style }}>
            <p style={{
                display: 'flex',
                flexDirection: 'row',
                verticalAlign: 'center',

            }}>
                <div style={{ fontSize: '28px', marginRight: '20px' }}>▒</div>
                <span className="display-italic" style={{
                    fontSize: '32px',
                    marginTop: '8px'
                }}>{props.title}</span>
            </p>
        </div>
    )
}