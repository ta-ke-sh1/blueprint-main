import { useState } from "react";
import { Grid } from "@mui/material";
import HelloSvg from "../components/svgs/helloSvg";
import { Box } from "@mui/system";

const text_title_style = {
  fontSize: "12.55vw",
  fontFamily: "SemiBold",
  margin: "0 1.5vw",
  color: "#F4F4F4",
};

export default function Contacts() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    reason: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  function handleSaveRequestToFirestore() {
    console.log(formData);
  }

  return (
    <div
      className="contact-container"
      style={{
        height: "100vh",
        position: "relative",
        width: "100vw",
      }}
    >
      <div className="absolute-container center-position">
        <div
          style={{
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div
            className="serif-light-italic s-100"
            style={{
              marginBottom: "20px",
            }}
          >
            Say Hi!
          </div>
          <div className="semi-bold s-16">contact@trungha.com</div>
        </div>
      </div>
      <div
        className="absolute-container"
        style={{
          maxWidth: "100vw",
          width: "100%",
          bottom: "2vw",
          padding: "0 2vw",
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={2}>
            <div className="regular">Facebook</div>
          </Grid>
          <Grid item xs={2}>
            <div className="regular">Instagram</div>
          </Grid>
          <Grid item xs={2}>
            <div className="regular">GitHub</div>
          </Grid>
          <Grid item xs={6}>
            <Box display="flex" justifyContent="flex-end">
              <div className="regular">From Hanoi, Vietnam with love.</div>
            </Box>
          </Grid>
        </Grid>
      </div>

      <div
        className="absolute-container"
        style={{
          maxWidth: "100vw",
          width: "100%",
          bottom: "-15px",
          zIndex: -20,
        }}
      >
        <div
          className="row user-select-none"
          style={{
            justifyContent: "space-between",
          }}
        >
          <div style={{ ...text_title_style }} className="primary">
            HA
          </div>
          <div style={{ ...text_title_style }} className="primary">
            THE
          </div>
          <div style={{ ...text_title_style }} className="primary">
            TRUNG
          </div>
        </div>
      </div>
    </div>
  );
}
