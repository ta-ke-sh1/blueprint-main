import { useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import { Grid, Typography, Box } from "@mui/material";
import Chip from "../components/chip";

const text_title_style = {
  fontSize: "12.55vw",
  fontFamily: "SemiBold",
  margin: "0 1.5vw",
  color: "#F4F4F4",
};

export default function Homepage(props) {
  return (
    <div>
      <div className="absolute-container center-position">
        <div className="relative-container full-width">
          <div
            className="row"
            style={{
              width: "100vw",
              justifyContent: "space-between",
            }}
          >
            <Chip>+ Folio</Chip>
            <Chip>+ Projects</Chip>
            <Chip>+ Playground</Chip>
            <Chip>+ Contact</Chip>
          </div>
        </div>
      </div>
      <div
        className="absolute-container"
        style={{
          maxWidth: "100vw",
          width: "100%",
          bottom: "0px",
        }}
      >
        <div
          className="row user-select-none"
          style={{
            justifyContent: "space-between",
          }}
        >
          <div style={{ ...text_title_style }}>HA</div>
          <div style={{ ...text_title_style }}>THE</div>
          <div style={{ ...text_title_style }}>TRUNG</div>
        </div>
      </div>
      <div
        className="absolute-container"
        style={{
          maxWidth: "100vw",
          width: "100vw",
          bottom: "2.5vw",
        }}
      >
        <Box sx={{ width: "100%", padding: "0 2vw" }}>
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <Typography>
                <span className="semi-bold">Writing spaghetti code.</span>

              </Typography>
              <Typography>
                <span className="semi-bold">Currently playing Baldur's Gate 3.</span>

              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography> <span className="semi-bold">Currently based in Hanoi.</span></Typography>
              <Typography> <span className="semi-bold">12:44 PM - GMT+7</span></Typography>
            </Grid>
            <Grid item xs={4}>
              <Box display="flex" justifyContent="flex-end">
                <Typography>
                  <br /><span className="semi-bold">©2024</span>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}
