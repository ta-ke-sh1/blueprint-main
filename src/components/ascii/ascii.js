import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

export default function Ascii(props) {

  const ascii = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      gsap.to(ascii.current, {
        letterSpacing: '-0.495px',
        duration: 2,
        ease: 'linear',
        onComplete: () => {
          setLoaded(true)
        }
      })
    }, 4000)
    
  }, [])

  const onMouseEnter = () => {
    if(!loaded) return;
    setLoaded(false);
    gsap.to(ascii.current, {
      letterSpacing: '-5px',
      duration: 0.6,
      ease: 'linear',
      onComplete: () => {
        setTimeout(() => {
          gsap.to(ascii.current, {
            letterSpacing: '-0.495px',
            duration: 0.6,
            ease: 'linear',
          })
          setLoaded(true)
        }, 100)
      }
    })
  }
 
  return (
    <>
      <div className="relative-container" style={{
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
      }}>
        <div style={{
          mixBlendMode: 'multiply',
          backgroundColor: 'orange',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '200px',
          height: '400px',
          zIndex: 100
        }} onMouseEnter={onMouseEnter}>
          
        </div> 
        <div style={{
          minWidth: '900px',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}>
          <pre 
            ref={ascii}
            style={{
              margin: '0 auto',
              fontSize: '8px',
              letterSpacing: '20.5px',
              lineHeight: '7.5px',
              color: 'black',
              whiteSpace: 'pre-wrap',
              fontFamily: "Regular",
              userSelect: 'none',
            }} id="asciiArt"></pre>
        </div>
      </div>
    </>
  );
}
