import { BrowserRouter, Routes, Route } from "react-router-dom";

// ==========================================
// MAIN PAGES
// ==========================================
import Home from "./pages/Home";
import About from "./pages/About";
import Destinations from "./pages/Destinations";
import Experiences from "./pages/Experiences";

// ==========================================
// MORE PAGES
// ==========================================
import Tours from "./pages/Tours";
import Hotels from "./pages/Hotels";
import Food from "./pages/Food";
import Shopping from "./pages/Shopping";
import Gallery from "./pages/Gallery";
import Vehicles from "./pages/Vehicles";
import Contact from "./pages/Contact";

// ==========================================
// DETAIL PAGES
// ==========================================
import DestinationDetails from "./pages/DestinationDetails";
import ExperienceDetails from "./pages/ExperienceDetails";

// ==========================================
// GLOBAL APP CSS
// ==========================================
import "./App.css";


function App() {
  return (
    <BrowserRouter basename="/Lonvera-London">

      <div className="lonvera-app">

        <Routes>

          {/* ========================================
              HOME
          ======================================== */}
          <Route
            path="/"
            element={<Home />}
          />


          {/* ========================================
              ABOUT
          ======================================== */}
          <Route
            path="/about"
            element={<About />}
          />


          {/* ========================================
              DESTINATIONS
          ======================================== */}
          <Route
            path="/destinations"
            element={<Destinations />}
          />


          {/* ========================================
              DESTINATION DETAILS
          ======================================== */}
          <Route
            path="/destinations/:id"
            element={<DestinationDetails />}
          />


          {/* ========================================
              EXPERIENCES
          ======================================== */}
          <Route
            path="/experiences"
            element={<Experiences />}
          />


          {/* ========================================
              EXPERIENCE DETAILS
          ======================================== */}
          <Route
            path="/experiences/:id"
            element={<ExperienceDetails />}
          />


          {/* ========================================
              TOURS
          ======================================== */}
          <Route
            path="/tours"
            element={<Tours />}
          />


          {/* ========================================
              HOTELS
          ======================================== */}
          <Route
            path="/hotels"
            element={<Hotels />}
          />


          {/* ========================================
              FOOD & DINING
          ======================================== */}
          <Route
            path="/food"
            element={<Food />}
          />


          {/* ========================================
              SHOPPING
          ======================================== */}
          <Route
            path="/shopping"
            element={<Shopping />}
          />


          {/* ========================================
              GALLERY
          ======================================== */}
          <Route
            path="/gallery"
            element={<Gallery />}
          />


          {/* ========================================
              VEHICLES
          ======================================== */}
          <Route
            path="/vehicles"
            element={<Vehicles />}
          />


          {/* ========================================
              CONTACT
              Plan Your London → /contact
          ======================================== */}
          <Route
            path="/contact"
            element={<Contact />}
          />


          {/* ========================================
              404 PAGE
          ======================================== */}
          <Route
            path="*"
            element={
              <div className="lonvera-not-found">

                <span>404</span>

                <h1>
                  Page not found.
                </h1>

                <p>
                  The London you're looking for
                  seems to have taken a different turn.
                </p>

                <a href="/Lonvera-London/">
                  Return Home
                  <i className="bi bi-arrow-up-right"></i>
                </a>

              </div>
            }
          />

        </Routes>

      </div>

    </BrowserRouter>
  );
}


export default App;