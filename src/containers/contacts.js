import { useState } from "react";
import { Grid, TextField, FormControl, InputLabel, Button } from "@mui/material";

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
    <div className="contact-container">
      <Grid container>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={6}>
              <FormControl>
                <InputLabel id="first-name-label">First Name</InputLabel>
                <TextField name="firstName" fullWidth value={formData.firstName} onChange={handleChange} id="form-first-name" label="First Name" variant="outlined" />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl>
                <InputLabel id="last-name-label">Last Name</InputLabel>
                <TextField name="lastName" fullWidth value={formData.lastName} onChange={handleChange} id="form-last-name" label="Last Name" variant="outlined" />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <InputLabel id="email-label">Email</InputLabel>
                <TextField name="email" fullWidth value={formData.email} onChange={handleChange} id="form-email" label="Email" variant="outlined" />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <InputLabel id="message-label">Message</InputLabel>
                <TextField name="message" fullWidth value={formData.message} onChange={handleChange} id="form-message" label="Message" variant="outlined" />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button onClick={handleSaveRequestToFirestore} fullWidth variant="outlined" sx={{ padding: "15px 30px" }}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
