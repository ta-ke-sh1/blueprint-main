import { PlayArrow } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import StopIcon from "@mui/icons-material/Stop";
import { red } from "@mui/material/colors";
import gsap from "gsap";

export default function Piano() {
  const [logList, setLogList] = useState([]);

  const notes = ["A", "B", "C", "D", "E", "F", "G"];

  const noteOrder = ["C", "D", "E", "F", "G", "A", "B"];
  const blackNotesOrder = ["D", "E", "F", "G", "A", "B"];

  const [range, setRange] = useState(3);
  const [start, setStart] = useState(2);

  const [isRecording, setIsRecording] = useState(false);

  const BASE_TEMPO = 275;

  async function play() {
    try {
      for (let i = logList.length - 1; i >= 0; i--) {
        const n = document.getElementById("note-" + logList[i].key);
        if (n) {
          gsap.to(n, {
            backgroundColor: "red",
            color: "white",
            duration: 0.5,
          });
          setTimeout(() => {
            gsap.to(n, {
              backgroundColor: "#d9d9d9",
              color: "black",
              duration: 0.5,
            });
          }, BASE_TEMPO / 2 + (BASE_TEMPO * logList[i].tempo) / 2);
        }

        let audio = new Audio("/notes/" + logList[i].key + ".mp3");
        audio.play();
        await sleep(BASE_TEMPO / 2 + (BASE_TEMPO * logList[i].tempo) / 2);
      }
    } catch (e) {
      console.log(e.toString());
    }
  }

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  function handleMouseDown(key) {
    console.log(key);
    let audio = new Audio("/notes/" + key + ".mp3");
    audio.play();

    if (isRecording) {
      setLogList([
        {
          key: key,
          tempo: 1,
        },
        ...logList,
      ]);
    }
  }

  function handleRange(event) {
    if (event === "add") {
      if (range > 5) return;
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

  return (
    <>
      <div
        style={{
          zIndex: 10,
          position: "relative",
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
              {index === 0 ? (
                <div
                  style={{
                    position: "absolute",
                    bottom: "-50px",
                    left: 0,
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
                      margin: "6px 0px 0 0",
                    }}
                  >
                    Bar:
                  </div>
                  <IconButton onClick={() => handleRange("add")}>
                    <AddIcon />
                  </IconButton>
                  <div
                    className="regular"
                    style={{
                      fontSize: "24px",
                      margin: "6px 5px 0 5px",
                    }}
                  >
                    {range}
                  </div>

                  <IconButton
                    onClick={() => handleRange("subtract")}
                    sx={{
                      marginRight: "35px",
                    }}
                  >
                    <RemoveIcon />
                  </IconButton>
                </div>
              ) : (
                <></>
              )}
            </div>
          );
        })}
        <div className="piano-row">
          <div className="white-row">
            <NoteItem id={"note-C" + (range + start).toString()} isWhite={true} onMouseDown={() => handleMouseDown("C" + (start + range).toString())} note={"C" + (start + range).toString()} />
          </div>

          <div
            style={{
              position: "absolute",
              right: 0,
              bottom: "-50px",
              display: "flex",
              flexDirection: "row",
              margin: "0 auto",
              marginTop: "20px",
              width: "fit-content",
              justifyContent: "space-between",
            }}
          >
            <Tooltip arrow title={isRecording ? "Stop" : "Record"}>
              <IconButton
                onClick={() => {
                  if (!isRecording) {
                    setLogList([]);
                  }
                  setIsRecording(!isRecording);
                }}
                sx={{
                  margin: "0 15px",
                }}
              >
                {isRecording ? <StopIcon sx={{ color: red[500] }} /> : <FiberManualRecordIcon sx={{ color: red[500] }} />}
              </IconButton>
            </Tooltip>
            <Tooltip arrow title="Play">
              <IconButton onClick={play}>
                <PlayArrow />
              </IconButton>
            </Tooltip>
          </div>
        </div>
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
