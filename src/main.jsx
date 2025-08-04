import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import About from "./pages/About.jsx";
import Teacher from "./pages/Teacher.jsx";
import Facilities from "./pages/Facilities.jsx";
import Location from "./pages/location.jsx";
import Curriculum01 from "./pages/curriculum01.jsx";
import Curriculum02 from "./pages/curriculum02.jsx";
import Curriculum03 from "./pages/curriculum03.jsx";
import Curriculum04 from "./pages/curriculum04.jsx";
import Language01 from "./pages/language01.jsx";
import Language02 from "./pages/language02.jsx";
import Course from "./pages/course.jsx";
import Career from "./pages/career.jsx";
import Support from "./pages/support.jsx";
import "./index.css";
import "./assets/css/responsive.css";
import "./assets/css/common.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";


createRoot(document.getElementById("root")).render(
 <BrowserRouter>
  <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About/>} />
      <Route path="/teacher" element={<Teacher/>} />
      <Route path="/facilities" element={<Facilities/>} />
      <Route path="/location" element={<Location/>} />
      <Route path="/curriculum01" element={<Curriculum01/>} />
      <Route path="/curriculum02" element={<Curriculum02/>} />
      <Route path="/curriculum03" element={<Curriculum03/>} />
      <Route path="/curriculum04" element={<Curriculum04/>} />
      <Route path="/language01" element={<Language01/>} />
      <Route path="/language02" element={<Language02/>} />
      <Route path="/course" element={<Course/>} />
      <Route path="/career" element={<Career/>} />
      <Route path="/support" element={<Support/>} />
  </Routes>
 </BrowserRouter>
);
