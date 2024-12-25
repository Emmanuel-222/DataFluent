import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Navbar, Contact, Academy, Services, Home, Projects } from "./components";

const App = () => {
  return (
    <div className="h-screen w-full overflow-x-hidden app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
