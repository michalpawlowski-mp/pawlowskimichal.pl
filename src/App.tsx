import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.tsx";
import Main from "./components/Main/Main.tsx";
import About from "./components/About/About.tsx";
import Contact from "./components/Contact/Contact.tsx";
import Portfolio from "./components/Portfolio/Portfolio.tsx";
import CurriculumVitae from "./components/CurriculumVitae/CurriculumVitae.tsx";
import Footer from "./components/Footer/Footer.tsx";
import "./style/style.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/CurriculumVitae" element={<CurriculumVitae />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
