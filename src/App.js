// CSS
import "./App.css";

// React Router DOM
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import TopRatedResume from "./pages/TopRatedResume";
import Resume from "./pages/Resume";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/resume-builder" exact element={<Resume />} />
        <Route path="/top-rated-resume" exact element={<TopRatedResume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
