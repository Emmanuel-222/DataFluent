import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  About,
  Navbar,
  Contact,
  Academy,
  Services,
  Home,
  Projects,
  ScrollToTop,
  DataScience,
} from "./components";

const App = () => {
  return (
    <div className="h-screen w-full overflow-x-hidden app">
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/course/data-science" element={<DataScience />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
