import { Route, Routes } from "react-router-dom";
import ErrorPage from "./containers/error";
import Homepage from "./containers/homepage";
import AboutMe from "./containers/about";
import Playground from "./containers/playground";
import Projects from "./containers/projects";
import Test from "./containers/test";
import ContactPage from "./containers/contact";

function App() {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/test" element={<Test />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/folio" element={<AboutMe />} />
      <Route path="/playground" element={<Playground />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
