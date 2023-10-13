import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Appointments, Faqs, Project } from "./pages";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
