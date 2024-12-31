import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  About,
  Navbar,
  Contact,
  Academy,
  Services,
  Home,
  Projects,
  DataScience,
  DataEngineering,
  DataAnalysis,
  DatabaseAdmin,
  MobileDev,
  SoftwareDev,
  CyberSecurity,
  ArtificialIntel,
  ProjectMang,
  DigitalMarket,
  Devops,
} from "./components";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="h-screen w-full overflow-x-hidden app">
      <Router>
        <ScrollToTop />
        <Layout>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/course/data-science" element={<DataScience />} />
            <Route path="/course/data-eng" element={<DataEngineering />} />
            <Route path="/course/data-analysis" element={<DataAnalysis />} />
            <Route path="/course/database" element={<DatabaseAdmin />} />
            <Route path="/course/mobile" element={<MobileDev />} />
            <Route path="/course/software" element={<SoftwareDev />} />
            <Route path="/course/cyber-security" element={<CyberSecurity />} />
            <Route path="/course/ai" element={<ArtificialIntel />} />
            <Route path="/course/project-mang" element={<ProjectMang />} />
            <Route path="/course/digital-market" element={<DigitalMarket />} />
            <Route path="/course/devops" element={<Devops />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
