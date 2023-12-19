import { Grid, Divider } from "@mui/material";

export default function NavigationContent() {
  return (
    <div className="content-container">
      <h1 className="regular s-64">Adios</h1>
      <Grid container>
        <Grid item xs={12} sm={12} md={6}>
          <p>Hanoi</p>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <p>
            {new Date().toLocaleString("en-US", {
              timeZone: "Asia/Bangkok",
            })}
          </p>
        </Grid>
      </Grid>
      <br />
      <Divider
        sx={{
          border: "0.5px solid #d6ff0a",
          marginBottom: "20px",
        }}
      />
      <h1 className="display-font s-64">Contact</h1>
      <Grid container>
        <Grid item xs={12} sm={12} md={6}>
          <p>ha.the.trung.1698@gmail.com</p>
        </Grid>

        <Grid item xs={12} sm={12} md={3}>
          <p>(+84) 818 16 1998</p>
        </Grid>
      </Grid>
      <br />
      <Divider
        sx={{
          border: "0.5px solid #d6ff0a",
          marginBottom: "20px",
        }}
      />
      <h1 className="display-font s-64">Social</h1>
      <Grid container>
        <Grid item xs={12} sm={12} md={3}>
          <p>Facebook</p>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <p>GitHub</p>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <p>LinkedIn</p>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <p>Behance</p>
        </Grid>
      </Grid>
    </div>
  );
}
