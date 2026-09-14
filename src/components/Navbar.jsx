import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setMoreOpen(false);
  };

  const navClass = ({ isActive }) =>
    `lonvera-nav-link ${isActive ? "active" : ""}`;

  return (
    <header className="lonvera-navbar">

      {/* TOP INFORMATION BAR */}
      <div className="lonvera-topbar">
        <div className="lonvera-topbar-inner">

          <div className="lonvera-location">
            <i className="bi bi-geo-alt"></i>
            <span>London, United Kingdom</span>
          </div>

          <div className="lonvera-top-center">
            <span>EXPLORE</span>
            <b>◆</b>
            <span>EXPERIENCE</span>
            <b>◆</b>
            <span>DISCOVER</span>
          </div>

          <div className="lonvera-top-tagline">
            Your London Journey Starts Here
          </div>

        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="lonvera-nav-wrap">
        <div className="lonvera-nav-inner">

          {/* LOGO */}
          <Link
            to="/"
            className="lonvera-logo"
            onClick={closeMenu}
          >
            <span className="lonvera-logo-mark">
              <span>LV</span>
            </span>

            <span className="lonvera-logo-content">
              <strong>LONVÉRA</strong>
              <small>THE LONDON LOCAL</small>
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="lonvera-desktop-nav">

            <NavLink
              to="/"
              end
              className={navClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={navClass}
            >
              About
            </NavLink>

            <NavLink
              to="/destinations"
              className={navClass}
            >
              Destinations
            </NavLink>

            <NavLink
              to="/experiences"
              className={navClass}
            >
              Experiences
            </NavLink>

            {/* MORE */}
            <div className="lonvera-more-wrapper">

              <button
                type="button"
                className={`lonvera-nav-link lonvera-more-btn ${
                  moreOpen ? "active" : ""
                }`}
                onClick={() => setMoreOpen(!moreOpen)}
              >
                <span>More</span>

                <i
                  className={`bi ${
                    moreOpen
                      ? "bi-chevron-up"
                      : "bi-chevron-down"
                  }`}
                ></i>
              </button>

              {/* DROPDOWN */}
              <div
                className={`lonvera-dropdown ${
                  moreOpen ? "show" : ""
                }`}
              >

                <div className="lonvera-dropdown-links">

                  <Link to="/tours" onClick={closeMenu}>
                    <i className="bi bi-map"></i>
                    <span>Tours</span>
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>

                  <Link to="/hotels" onClick={closeMenu}>
                    <i className="bi bi-building"></i>
                    <span>Hotels</span>
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>

                  <Link to="/food" onClick={closeMenu}>
                    <i className="bi bi-cup-hot"></i>
                    <span>Food & Dining</span>
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>

                  <Link to="/shopping" onClick={closeMenu}>
                    <i className="bi bi-bag"></i>
                    <span>Shopping</span>
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>

                  <Link to="/gallery" onClick={closeMenu}>
                    <i className="bi bi-images"></i>
                    <span>Gallery</span>
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>

                  <Link to="/vehicles" onClick={closeMenu}>
                    <i className="bi bi-car-front"></i>
                    <span>Vehicles</span>
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>

                  {/* CONTACT */}
                  <Link
                    to="/contact"
                    onClick={closeMenu}
                  >
                    <i className="bi bi-envelope"></i>
                    <span>Contact</span>
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>

                </div>

                {/* DROPDOWN IMAGE */}
                <div className="lonvera-dropdown-image">

                  <img
                    src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=700&q=85"
                    alt="London"
                  />

                  <div className="lonvera-dropdown-overlay">
                    <small>EXPLORE</small>

                    <h3>
                      More
                      <br />
                      in London
                    </h3>

                    <span>
                      Discover the city differently
                    </span>
                  </div>

                </div>

              </div>
            </div>

          </nav>

          {/* RIGHT ACTIONS */}
          <div className="lonvera-nav-actions">

            {/* CALL */}
            <a
              href="tel:+919876543210"
              className="lonvera-contact-action"
              aria-label="Call us"
            >
              <span className="lonvera-action-icon">
                <i className="bi bi-telephone"></i>
              </span>

              <span className="lonvera-action-text">
                <strong>Call Us</strong>
                <small>+91 98765 43210</small>
              </span>
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="lonvera-contact-action"
              aria-label="WhatsApp us"
            >
              <span className="lonvera-action-icon">
                <i className="bi bi-whatsapp"></i>
              </span>

              <span className="lonvera-action-text">
                <strong>WhatsApp</strong>
                <small>Chat with us</small>
              </span>
            </a>

            {/* PLAN YOUR LONDON → CONTACT PAGE */}
            <Link
              to="/contact"
              className="lonvera-nav-cta"
              onClick={closeMenu}
            >
              <span>Plan Your London</span>
              <i className="bi bi-arrow-up-right"></i>
            </Link>

          </div>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            className="lonvera-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open navigation"
          >
            <i
              className={`bi ${
                menuOpen
                  ? "bi-x-lg"
                  : "bi-list"
              }`}
            ></i>
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lonvera-mobile-menu ${
          menuOpen ? "open" : ""
        }`}
      >

        <div className="lonvera-mobile-inner">

          <div className="lonvera-mobile-logo">

            <span className="lonvera-logo-mark">
              <span>LV</span>
            </span>

            <span className="lonvera-logo-content">
              <strong>LONVÉRA</strong>
              <small>THE LONDON LOCAL</small>
            </span>

          </div>

          <div className="lonvera-mobile-links">

            <NavLink
              to="/"
              end
              onClick={closeMenu}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={closeMenu}
            >
              About
            </NavLink>

            <NavLink
              to="/destinations"
              onClick={closeMenu}
            >
              Destinations
            </NavLink>

            <NavLink
              to="/experiences"
              onClick={closeMenu}
            >
              Experiences
            </NavLink>

            {/* MOBILE MORE */}
            <button
              type="button"
              className="lonvera-mobile-more"
              onClick={() => setMoreOpen(!moreOpen)}
            >
              <span>More</span>

              <i
                className={`bi ${
                  moreOpen
                    ? "bi-chevron-up"
                    : "bi-chevron-down"
                }`}
              ></i>
            </button>

            <div
              className={`lonvera-mobile-submenu ${
                moreOpen ? "show" : ""
              }`}
            >

              <Link to="/tours" onClick={closeMenu}>
                Tours
              </Link>

              <Link to="/hotels" onClick={closeMenu}>
                Hotels
              </Link>

              <Link to="/food" onClick={closeMenu}>
                Food & Dining
              </Link>

              <Link to="/shopping" onClick={closeMenu}>
                Shopping
              </Link>

              <Link to="/gallery" onClick={closeMenu}>
                Gallery
              </Link>

              <Link to="/vehicles" onClick={closeMenu}>
                Vehicles
              </Link>

              {/* CONTACT */}
             <Link
  to="/contact"
  className="lonvera-nav-cta"
  onClick={closeMenu}
>
              </Link>

            </div>

          </div>

          {/* MOBILE CONTACT */}
          <div className="lonvera-mobile-contact-row">

            <a href="tel:+919876543210">
              <span>
                <i className="bi bi-telephone"></i>
              </span>
              <strong>Call Us</strong>
            </a>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <i className="bi bi-whatsapp"></i>
              </span>
              <strong>WhatsApp</strong>
            </a>

          </div>

          {/* MOBILE PLAN YOUR LONDON → CONTACT PAGE */}
          <Link
            to="/contact"
            className="lonvera-mobile-cta"
            onClick={closeMenu}
          >
            <span>Plan Your London</span>
            <i className="bi bi-arrow-up-right"></i>
          </Link>

        </div>

      </div>

    </header>
  );
}

export default Navbar;