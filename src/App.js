import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import ThankYou from "./components/ThankYou";
import { HelmetProvider } from "react-helmet-async";

const ScrollToSection = () => {
  const location = useLocation();

  React.useEffect(() => {
    const sectionId = location.pathname.replace("/", ""); // ✅ Extract section name from URL
    if (sectionId) {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToSection /> {/* ✅ Handles scrolling */}
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<Home section="about-us" />} />
              <Route
                path="/services"
                element={<Home section="services_section" />}
              />
              <Route path="/services" element={<Home showServices />} />
              <Route
                path="/services/:serviceName"
                element={<Home showServices />}
              />
              <Route path="/contact-us" element={<Home section="contact" />} />
              <Route path="/thank-you" element={<ThankYou />} />
            </Routes>
          </main>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
