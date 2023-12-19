import { useEffect, useState } from "react";
import { Divider } from "@mui/material";
import axios from "axios";
import PauseIcon from "@mui/icons-material/Pause";
import StopIcon from "@mui/icons-material/Stop";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Queue from "queue";

export default function WorkingStatusTrial() {
  const [steps, setSteps] = useState([]);
  const [isPlaying, setPlaying] = useState(false);
  const [status, setStatus] = useState(-1);
  const [currentStep] = useState(0);

  useEffect(() => {
    setDefaultSteps();
  }, []);

  function addStepsToQueue() {
    const q = new Queue();
    let i = 0;
    while (steps.length < i) {
      const step = steps[i];
      console.log(step.index);
      q.push(async (cb) => {
        UpdateTask(step.index, "Processing");
        await axios.get("https://jsonplaceholder.typicode.com/todos/" + step.index).then((res) => {
          UpdateTask(step.index, getRandomInt(0, 10) < 2 ? "Failed" : "Passed");
          i++;
        });

        cb();
      });
    }

    q.timeout = 500;

    q.addEventListener("timeout", (e) => {
      console.log("job timed out:", e.detail.job.toString().replace(/\n/g, ""));
      e.detail.next();
    });

    q.start((err) => {
      if (err) throw err;
      setStatus(1);
      setPlaying(false);
    });
  }

  function getItemByIndex(index) {
    return steps.find((step) => step.index === index);
  }

  function TaskStart() {
    setPlaying(true);
    setDefaultSteps();
    setStatus(0);

    addStepsToQueue();
  }

  function UpdateTask(index, status) {
    let temp = getItemByIndex(index);
    console.log(temp);
    temp.status = status;

    setSteps([...steps]);
  }

  function fetchResult() {
    let len = steps.length;
    let res = steps.filter((step) => step.status === "Failed");
    return res.length > 0 ? (
      <span style={{ color: "crimson" }}>
        Failed {res.length}/{len} steps
      </span>
    ) : (
      <span style={{ color: "green" }}>
        Passed {len}/{len} steps
      </span>
    );
  }

  return (
    <div className="full-view-width full-view-height relative-container">
      <div className="absolute-container center-position">
        <h1 className="semi-bold">Scenario 1</h1>
        <div
          style={{
            marginLeft: "auto",
          }}
        >
          {steps.map((step) => {
            return <StepItem step={step} />;
          })}
        </div>
        <Divider />
        <div className="semi-bold" style={{ width: "400px", display: "flex", justifyContent: "space-between", padding: "20px 0" }}>
          <div>Overall Status:</div>
          <div>{status === -1 ? "" : status === 0 ? "Processing..." : fetchResult()}</div>
        </div>
        <Divider />
        <br />
        <span className="semi-bold" style={{ marginRight: "10px" }}>
          Control:
        </span>

        <Button variant="contained" color="error" onClick={TaskStart} sx={{ marginRight: "10px" }}>
          Start Task
        </Button>
        <Button
          sx={{ marginRight: "10px" }}
          variant="outlined"
          onClick={() => {
            setStatus(-1);
            setDefaultSteps();
          }}
        >
          Reset
        </Button>
        <Button
          sx={{ marginRight: "10px" }}
          variant="outlined"
          onClick={() => {
            setPlaying(!isPlaying);
          }}
        >
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            setStatus(-1);
            setDefaultSteps();
            setPlaying(false);
          }}
        >
          <StopIcon />
        </Button>
      </div>
    </div>
  );

  function setDefaultSteps() {
    setSteps([
      {
        index: 1,
        timeout: 1000,
        status: "Not Yet",
        elapsed: 0,
        action: "Config Signal",
      },
      {
        index: 2,
        timeout: 1000,
        status: "Not Yet",
        elapsed: 0,
        action: "Send Batch Signal",
      },
      {
        index: 3,
        timeout: 1000,
        status: "Not Yet",
        elapsed: 0,
        action: "Send Signal",
      },
      {
        index: 4,
        timeout: 1000,
        status: "Not Yet",
        elapsed: 0,
        action: "Read Signal",
      },
    ]);
  }
}

function StepItem(props) {
  const { step } = props;

  function getColorByState(status) {
    switch (status) {
      case "Passed":
        return "green";
      case "Failed":
        return "crimson";
      case "Processing":
        return "gray";
      case "Not Yet":
        return "gray";
      default:
        return "black";
    }
  }

  return (
    <>
      <div
        style={{
          width: "430px",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
          padding: "5px 0",
        }}
      >
        <div className="regular">
          Step {step.index}
          <br />
          <span className="semi-bold">Action:</span> {step.action} (ms)
          <br />
          <span className="semi-bold">Limit:</span> {step.timeout} (ms)
        </div>

        <div
          className="semi-bold"
          style={{
            textAlign: "right",
          }}
        >
          Status: <br />
          <span
            style={{
              color: getColorByState(step.status),
            }}
          >
            {step.status}
          </span>
        </div>
      </div>
    </>
  );
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
