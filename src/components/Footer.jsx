import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <footer className="lonvera-footer">

      {/* =========================================
          FOOTER TOP
      ========================================= */}
      <div className="lonvera-footer-top">

        <div className="lonvera-footer-container">

          {/* BRAND */}
          <div className="lonvera-footer-brand">

            <Link to="/" className="lonvera-footer-logo">

              <span className="lonvera-footer-mark">
                LV
              </span>

              <span className="lonvera-footer-logo-text">
                <strong>LONVÉRA</strong>
                <small>THE LONDON LOCAL</small>
              </span>

            </Link>

            <p>
              Discover London beyond the landmarks.
              From hidden corners to unforgettable
              experiences, we help you experience the
              city like a local.
            </p>

            <div className="lonvera-footer-location">
              <i className="bi bi-geo-alt"></i>
              <span>London, United Kingdom</span>
            </div>

          </div>

          {/* EXPLORE */}
          <div className="lonvera-footer-column">

            <span className="lonvera-footer-label">
              Explore
            </span>

            <h3>London Your Way</h3>

            <div className="lonvera-footer-links">

              <Link to="/">
                Home
              </Link>

              <Link to="/about">
                About
              </Link>

              <Link to="/destinations">
                Destinations
              </Link>

              <Link to="/experiences">
                Experiences
              </Link>

              <Link to="/tours">
                Tours
              </Link>

            </div>

          </div>

          {/* DISCOVER */}
          <div className="lonvera-footer-column">

            <span className="lonvera-footer-label">
              Discover
            </span>

            <h3>More London</h3>

            <div className="lonvera-footer-links">

              <Link to="/hotels">
                Hotels
              </Link>

              <Link to="/food">
                Food & Dining
              </Link>

              <Link to="/shopping">
                Shopping
              </Link>

              <Link to="/gallery">
                Gallery
              </Link>

              <Link to="/vehicles">
                Vehicles
              </Link>

            </div>

          </div>

          {/* CONTACT */}
          <div className="lonvera-footer-contact">

            <span className="lonvera-footer-label">
              Get In Touch
            </span>

            <h3>
              Let's plan your
              <em> London story.</em>
            </h3>

            <p>
              Have a question or planning something
              special? Our team is here to help.
            </p>

            <Link
              to="/contact"
              className="lonvera-footer-cta"
            >
              <span>Start Planning</span>
              <i className="bi bi-arrow-up-right"></i>
            </Link>

          </div>

        </div>

      </div>

      {/* =========================================
          NEWSLETTER / SOCIAL STRIP
      ========================================= */}
      <div className="lonvera-footer-middle">

        <div className="lonvera-footer-container">

          <div className="lonvera-footer-newsletter">

            <div>
              <span className="lonvera-footer-label">
                Stay Inspired
              </span>

              <h4>
                London, delivered differently.
              </h4>
            </div>

            <div className="lonvera-footer-email">
              <input
                type="email"
                placeholder="Your email address"
                aria-label="Email address"
              />

              <button type="button">
                <i className="bi bi-arrow-up-right"></i>
              </button>
            </div>

          </div>

          <div className="lonvera-footer-social">

            <a
              href="#"
              aria-label="Instagram"
              title="Instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>

            <a
              href="#"
              aria-label="Facebook"
              title="Facebook"
            >
              <i className="bi bi-facebook"></i>
            </a>

            <a
              href="#"
              aria-label="YouTube"
              title="YouTube"
            >
              <i className="bi bi-youtube"></i>
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </a>

          </div>

        </div>

      </div>

      {/* =========================================
          FOOTER BOTTOM
      ========================================= */}
      <div className="lonvera-footer-bottom">

        <div className="lonvera-footer-container">

          <p>
            © {new Date().getFullYear()} LONVÉRA.
            All rights reserved.
          </p>

          <div className="lonvera-footer-bottom-links">

            <Link to="/contact">
              Privacy
            </Link>

            <Link to="/contact">
              Terms
            </Link>

            <Link to="/contact">
              Contact
            </Link>

          </div>

          <span className="lonvera-footer-made">
            Made for
            <i className="bi bi-heart-fill"></i>
            London
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;