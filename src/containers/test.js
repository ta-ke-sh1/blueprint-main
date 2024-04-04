
import { useEffect, useRef, useState } from "react"
import AsciiItems, { AsciiMorph } from "../components/ascii/asciiMorph";

export default function Ascii(props) {


  useEffect(() => {
    setTimeout(() => {
      const canvas = document.getElementById('asciiArt')
      const item = AsciiItems.asciis[0];
      console.log(canvas)
      console.log(item)
      AsciiMorph(canvas, { x: 30, y: 30 })
      AsciiMorph.morph(item)
    }, 3750)

  }, [])

  return (
    <>
      <div className="relative-container" style={{
        height: '100vh',
        width: '100vw',

      }}>
        <div style={{
          minWidth: '900px',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center'
        }}>
          <pre style={{
            margin: '0 auto',
            fontSize: '8px',
            letterSpacing: '-0.5px',
            lineHeight: '7.5px',
            color: 'black',
            whiteSpace: 'pre-wrap',
            fontFamily: "Regular",
            userSelect: 'none',
          }} id="asciiArt" className="asciiArt" >
          </pre>
        </div>
      </div>
    </>
  );
}

