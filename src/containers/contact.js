import BottomNavigation from "../components/navigation/bottomNav";
import { Grid, Box } from "@mui/material";

const text_title_style = {
  fontFamily: "SemiBold",
  margin: "0 10px",
  zIndex: 100,
  color: "black",
};

export default function ContactPage(props) {
  return (
    <>
      <BottomNavigation />
      <div
        className="relative-container"
        style={{
          width: "100dvw",
          height: "100dvh",
          overflow: "hidden",
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
              className="display-light-italic"
              style={{
                fontSize: "calc(20px + 7vmin)",
                marginBottom: "20px",
              }}
            >
              Feel free to say hi!
            </div>
            <div className="regular s-16">contact@trungha.com</div>
          </div>
        </div>
      </div>
    </>
  );
}
