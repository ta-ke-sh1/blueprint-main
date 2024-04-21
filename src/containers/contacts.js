import { useState } from "react";
import { Grid } from "@mui/material";

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
            width: '40vw'
          }}
        >
          <div
            className="display-light-italic s-100"
            style={{
              marginBottom: "20px",
            }}
          >
            Say Hi!
          </div>
          <div className="semi-bold s-16">contact@trungha.com</div>
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
          </Grid>
        </div>
      </div>
      <div
        className="absolute-container"
        style={{
          bottom: "10px",
          right: "10px",
          zIndex: 1000
        }}
      >
        <div className="regular">From Hanoi, Vietnam with love.</div>
      </div>
    </div >
  );
}
