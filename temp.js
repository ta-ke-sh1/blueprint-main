import { useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";

const base_url = "http://localhost:7001/api4testope/";

const test_state = {
  status: "Processing",
  timeout: 4000,
  steps: [
    {
      step: 1,
      timeout: 1000,
      status: "Passed",
    },
    {
      step: 2,
      timeout: 1000,
      status: "Failed",
    },
    {
      step: 3,
      timeout: 1000,
      status: "Processing",
    },
    {
      step: 4,
      timeout: 1000,
      status: "Not Yet",
    },
  ],
};

export default function Temp(props) {
  const [counter, setCounter] = useState(0);
  const [error, setError] = useState("");

  const [isPlaying, setPlaying] = useState(false);

  async function heavyTask() {
    await axios.get(base_url + "testCmd").then((res) => {
      console.log(res);
    });
  }

  return c;
}
