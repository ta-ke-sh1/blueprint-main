import { Route, Routes } from "react-router-dom";
import ErrorPage from "./containers/error";
import Homepage from "./containers/homepage";
import AboutMe from "./containers/about";
import Playground from "./containers/playground";
import Projects from "./containers/projects";

function App() {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/folio" element={<AboutMe />} />
      <Route path="/playground" element={<Playground />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default App;
