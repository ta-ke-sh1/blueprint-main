import { PlayArrow } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function Piano() {
  const [noteList, setNoteList] = useState([]);

  const [logList, setLogList] = useState([]);

  const notes = ["A", "B", "C", "D", "E", "F", "G"];

  const noteOrder = ["C", "D", "E", "F", "G", "A", "B"];
  const blackNotesOrder = ["D", "E", "F", "G", "A", "B"];

  const [range, setRange] = useState(3);
  const [start, setStart] = useState(2);

  const ballade_pour_adeline = [
    "C4/1",
    "G4/1",
    "C5/1",
    "D5/1",
    "C4/1",
    "G4/1",
    "C5/1",
    "D5/1",
    "C4/1",
    "G4/1",
    "C5/1",
    "D5/1",
    "C4/1",
    "G4/1",
    "C5/1",
    "D5/1",

    "C4/1",
    "G4/1",
    "E5/1",
    "G4/1",
    "C4/1",
    "G4/1",
    "E5/1",
    "G4/1",
    "C4/1",
    "G4/1",
    "E5/1",
    "G4/1",
    "C4/1",
    "G4/1",
    "E5/1",
    "G4/1",

    "E5+C3/2",
    "G3/1",
    "C4+E5/2",
    "G3/1",
    "E4/1",
    "G3/1",
    "E4+E5+G4/3",
    "G3/1",
    "A4+F5/1",
    "A4+F5+D3/3",
    "A3/1",
    "A4+F5+F4/3",
    "A3/1.5",

    "F4/1",
    "F5+A4/0.75",
    "F5+A4+A3/0.75",
    "F5+A4/0.75",
    "F4+F5+A4/0.75",
    "F5+A4/0.75",
    "F5+A4+A3/0.75",
    "B4+G5/0.85",

    "B4+G5+G3/1",
    "D4/1",
    "B4+G5/1",
    "D4/1",
    "B4/1",
    "D4/1",
    "B4+G5/1",
    "A5+C5/1",
    "E5+G4+C3/1",
    "G3/1",
    "E4/1",
    "G3/1",
    "E4/1",
    "G2/1",

    "E5+G4+C2/1",
    "G3/1",
    "E4+G4+E5/1",
    "G3/1",
    "C3/1",
    "G4+E5/0.95",
    "G3+G4+E5/0.95",
    "G4+E5/0.95",
    "E4+G4+E5/0.95",
    "G4+E5/0.95",
    "G4+E5+G3/0.95",
    "F5+A4/0.95",

    "D2+F5+A4/1",
    "A3/1",
    "F5+A4+F4/1",
    "A3/1",

    "D3/1",

    "F5+A4/0.95",
    "F5+A4+A3/0.95",
    "F5+A4/0.95",
    "F5+A4+F4/0.95",
    "F5+A4/0.95",
    "F5+A4+A3/0.95",
    "G5+B4/0.95",

    "G5+B4+G3/1",
    "D4/1",
    "G5+B4/1",
    "D4/1",
    "B4/1",
    "D5/1",
    "B4+G5/1",
    "C5/1",

    "E5+G4+C3/1",
    "G3/1",
    "E4/1",
    "G3/1",
    "C3/1",
    "G3/1",
    "C4+E4/1",
    "B3/1",

    "A3/1",
    "E4/1",
    "E4+C5+E5/1",
    "E5/1",
    "C5+D5+B5/1",
    "E5/1",
    "A5+C5/1",
    "E5/1",

    "E3/0.95",
    "B3/0.95",

    "B3+G5+B5/0.95",
    "B4/1",
    "G4+F5+A5/1",
    "B4/1",
    "E5+G5/1",
    "B4/1",

    "C5+A5+F3/0.95",
    "C4/0.95",
    "F4/0.95",
    "C4/0.95",

    "G3+B4+G5/0.95",
    "D4/0.95",
    "G4+F5/0.95",
    "D4/0.95",

    "C3+E5/0.2",
    "G4+E4/0.2",

    "C4+G4/0.2",
    "D4/0.2",
    "G4/0.2",

    "C4+G4/0.2",
    "C4/0.2",
    "E4/0.2",
    "G3/0.2",

    "B2+G3+G4/0.2",
    "D4/0.2",
    "G3/0.2",

    "A2/1",
    "E3/1",
    "E3+E5+C5/1",
    "E4/1",

    "D5+B4+C4/1",
    "E4/1",
    "C5+A4/1",
    "E4/1",

    "E2/1",
    "B2/1",
    "B2+G4+B4/1",
    "B3/1",

    "F4+A4+G3/1",
    "B3/1",
    "E4+G4/1",
    "B3/1",

    "F4+A4+C4+F2/1",
    "G4/1",
    "F3/1",
    "G4/1",
    "G4+G2/1",
    "G3/1",

    "C4/0.1",
    "D4/0.1",
    "G3/0.1",

    "C4/0.1",
    "D4/0.1",
    "F4/0.1",

    "G3/0.1",
    "D4/0.1",
    "F4/0.1",
    "G4/0.1",

    "G3/0.1",
    "D4/0.1",
    "F4/0.1",
    "G4/0.1",

    "G2+D4/0.1",
    "D4/0.1",
    "F4/0.1",
    "G4/0.1",

    "G3+D4/0.1",
    "D4/0.1",
    "F4/0.1",
    "G4/0.1",

    "G2+G4/0.1",
    "D5/0.1",
    "F5/0.1",
    "G5/0.1",

    "G3+G4/0.1",
    "D5/0.1",
    "F5/0.1",
    "G5/0.1",

    "G2+D5/0.1",
    "F5/0.1",
    "G5/0.1",
    "D6/0.1",

    "G3+D5/0.1",
    "F5/0.1",
    "G5/0.1",
    "D6/0.1",

    "G2+G4/0.1",
    "D5/0.1",
    "F5/0.1",
    "G5/0.1",

    "G3+G4/0.1",
    "D5/0.1",
    "F5/0.1",
    "G5/0.1",

    "G2+G4/0.3",
    "D5/0.3",
    "F5/0.3",
    "G5/0.3",

    "G1+G4/0.5",
    "D5/0.5",
    "F5/0.5",
    "G5/0.5",

    "C2+G4+E5/3",
    "G3/2",
    "E4+G4+E5/3",
    "E5/1.5",
    "E4/1",
    "G3/1.5",
    "E4+G4+E5/3",
    "G3/1.5",
    "A4+F5/1",
    "A4+F5+D2/3",
    "A3/1",
    "E4+F5+A4/3",
    "A3/1.25",

    "F4/0.85",
    "F5+A4/0.75",
    "F5+A4+A3/0.55",
    "F5+A4/0.55",
    "F5+A4+F4/0.55",
    "F5+A4/0.55",
    "F5+A4+A3/0.85",
    "B4+G5/1",

    "G2+B4+G5/3",
    "B2/1",
    "B3+B4+G5/3",
    "D3/1",
  ];

  useEffect(() => {
    let noteList = JSON.parse(localStorage.getItem("notesList"));
    if (Array.isArray(noteList)) {
      if (noteList.length > 0) {
        setNoteList(noteList);
      } else {
        getNoteList();
      }
    } else {
      getNoteList();
    }
  }, []);

  const BASE_TEMPO = 275;

  async function play() {
    try {
      for (let i = 0; i < ballade_pour_adeline.length; i++) {
        let value = ballade_pour_adeline[i].split("/");
        let notes = value[0].split("+");

        for (let j = 0; j < notes.length; j++) {
          const n = document.getElementById("note-" + notes[j]);
          console.log(notes[j]);

          if (n) {
            n.classList.toggle("down-key");

            setTimeout(() => {
              n.classList.remove("down-key");
            }, BASE_TEMPO / 2 + (BASE_TEMPO * value[1]) / 2);
          }

          let audio = new Audio("/notes/" + notes[j] + ".mp3");
          audio.play();
        }
        await sleep(BASE_TEMPO / 2 + (BASE_TEMPO * value[1]) / 2);
      }
    } catch (e) {
      console.log(e.toString());
    }
  }

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  function getNoteList() {
    const noteLists = [];
    for (let i = 0; i < notes.length; i++) {
      for (let j = 1; j <= 7; j++) {
        noteLists.push({ key: notes[i] + j.toString() });
      }

      for (let j = 1; j <= 7; j++) {
        if (notes[i] !== "F" && notes[i] !== "C") {
          noteLists.push({ key: notes[i] + "b" + j.toString() });
        }
      }
    }

    setNoteList(noteLists);
    localStorage.setItem("notesList", JSON.stringify(noteLists));
  }

  function handleMouseDown(key) {
    console.log(key);
    let audio = new Audio("/notes/" + key + ".mp3");
    audio.play();

    setLogList([
      {
        key: key,
        tempo: 1,
      },
      ...logList,
    ]);
  }

  function handleRange(event) {
    if (event === "add") {
      if (range > 6) return;
      else {
        setRange(range + 1);
      }
    } else {
      if (range < 2) return;
      else {
        setRange(range - 1);
      }
    }
  }

  function handleStart(event) {
    if (event === "add") {
      if (start > 5) return;
      else {
        setStart(start + 1);
      }
    } else {
      if (start < 2) return;
      else {
        setStart(start - 1);
      }
    }
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "0 auto",
          width: "fit-content",
          border: "1px solid black",
          borderTop: "7px solid red",
          borderRight: "3px solid red",
          borderLeft: "3px solid red",
        }}
      >
        {[...Array(range).keys()].map((index) => {
          return (
            <div className="piano-row">
              <div className="black-row">
                {blackNotesOrder.map((note) => {
                  return note !== "F" ? (
                    <NoteItem isWhite={false} isBlank={false} onMouseDown={() => handleMouseDown(note + "b" + (index + start))} note={""} />
                  ) : (
                    <NoteItem isWhite={false} isBlank={true} onMouseDown={() => handleMouseDown(note + "b" + (index + start))} note={""} />
                  );
                })}
              </div>
              <div className="white-row">
                {noteOrder.map((note) => {
                  return <NoteItem id={"note-" + note + (index + start)} isWhite={true} onMouseDown={() => handleMouseDown(note + (index + start))} note={note + (index + start)} />;
                })}
              </div>
            </div>
          );
        })}
        <div className="piano-row">
          <div className="white-row">
            <NoteItem id={"note-C" + (range + start).toString()} isWhite={true} onMouseDown={() => handleMouseDown("C" + (start + range).toString())} note={"C" + (start + range).toString()} />
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "100px",
          left: 100,
          height: "400px",
          width: "200px",
          border: "4px solid black",
          overflow: "scroll",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {logList.reverse().map((note, index) => {
          console.log(note);
          return (
            <div
              className="regular"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                padding: "5px 10px",
              }}
            >
              <div>{index}</div>
              <div
                style={{
                  margin: "0 10px",
                }}
              >
                {note.key}
              </div>

              <div>{note.tempo}</div>
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "0 auto",
          marginTop: "20px",
          width: "fit-content",
        }}
      >
        <IconButton
          onClick={play}
          sx={{
            margin: "0 15px",
          }}
        >
          <PlayArrow />
        </IconButton>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "0 auto",
          marginTop: "10px",
          width: "fit-content",
        }}
      >
        <div
          className="regular"
          style={{
            fontSize: "24px",
            margin: "6px 15px 0 0",
          }}
        >
          Bar range:
        </div>
        <IconButton onClick={() => handleRange("add")}>
          <AddIcon />
        </IconButton>
        <div
          className="regular"
          style={{
            fontSize: "24px",
            margin: "6px 0 0 15px",
          }}
        >
          {range}
        </div>

        <IconButton
          onClick={() => handleRange("subtract")}
          sx={{
            marginLeft: "15px",
          }}
        >
          <RemoveIcon />
        </IconButton>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "0 auto",
          marginTop: "10px",
          width: "fit-content",
        }}
      >
        <div
          className="regular"
          style={{
            fontSize: "24px",
            margin: "6px 15px 0 0",
          }}
        >
          Start range:
        </div>
        <IconButton
          onClick={() => handleStart("add")}
          sx={{
            marginRight: "15px",
          }}
        >
          <AddIcon />
        </IconButton>
        <div
          className="regular"
          style={{
            fontSize: "24px",
            margin: "6px 15px 0 0",
          }}
        >
          {start}
        </div>
        <IconButton onClick={() => handleStart("subtract")}>
          <RemoveIcon />
        </IconButton>
      </div>
    </>
  );
}

function NoteItem(props) {
  return (
    <div id={props.id} className={props.isWhite ? "note-item" : props.isBlank ? "blank-black-note-item" : "black-note-item"} onMouseDown={props.onMouseDown}>
      <div className="content">{props.note}</div>
      <div className="btm-line"></div>
    </div>
  );
}
