import TwoColumnGrid from "../components/container/twoColumn";

export default function AboutMe() {
  return (
    <div
      style={{
        padding: "150px 1.5vw",
      }}
    >
      <LandingImage />
      <Folio />
      <WorkExperiences />
      <AcademicResults />
      <AcademicAchievements />
    </div>
  );
}

function LandingImage(props) {
  return (
    <>
      <TwoColumnGrid
        sx={{
          marginBottom: "60px",
        }}
        rightContent={
          <div
            style={{
              height: "364px",
              backgroundColor: "#D9D9D9",
            }}
          ></div>
        }
      />
    </>
  );
}

function Folio() {
  return (
    <TwoColumnGrid
      sx={{ marginBottom: "120px" }}
      leftContent={<div className="s-120 display-medium">Folio</div>}
      rightContent={
        <>
          <div className="s-24 regular">
            Hello, my name is Ha The Trung, a fresh developer based in Hanoi. I'm working at Toshiba Software Development Vietnam as a virtualization and simulation back-end developer. However, playing with web technologies and making products is what really piques my interest.
          </div>
          <br />
          <div className="s-24 regular">This site also serves as my playground where I try out and replicate different flashy and dope effects around the Internet.</div>
          <br />
          <div className="s-24 regular">
            Hello, my name is Ha The Trung, a fresh developer based in Hanoi. I'm working at Toshiba Software Development Vietnam as a virtualization and simulation back-end developer. However, playing with web technologies and making products is what really piques my interest.
          </div>{" "}
        </>
      }
    />
  );
}

function WorkExperiences() {
  return <TwoColumnGrid sx={{ marginBottom: "120px" }} leftContent={<div className="s-48 display-medium">Work Experiences</div>} rightContent={<></>} />;
}

function AcademicResults() {
  return <TwoColumnGrid sx={{ marginBottom: "120px" }} leftContent={<div className="s-48 display-medium">Academic Results</div>} rightContent={<></>} />;
}

function AcademicAchievements() {
  return <TwoColumnGrid sx={{ marginBottom: "120px" }} leftContent={<div className="s-48 display-medium">Academic Achievements</div>} rightContent={<></>} />;
}
