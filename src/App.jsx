import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Experience from "./components/pages/Experience";
import Skill from "./components/pages/Skill";
import Interest from "./components/pages/Interest";
import Award from "./components/pages/Award";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/interest" element={<Interest />} />
        <Route path="/award" element={<Award />} />
      </Routes>
    </div>
  );
}

export default App;
