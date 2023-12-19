import { Grid, Typography } from "@mui/material";

export default function TwoColumnGrid(props) {
  return (
    <Grid container spacing={props.spacing ?? 4} sx={{ ...props.sx }}>
      <Grid item xs={props.leftSize ?? 4}>
        {props.leftContent}
      </Grid>
      <Grid item xs={props.rightSize ?? 8}>
        {props.rightContent}
      </Grid>
    </Grid>
  );
}
