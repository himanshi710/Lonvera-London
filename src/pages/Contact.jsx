
import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollToTop from "../components/ScrollToTop";

import "./Contact.css";

function Contact() {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setFormStatus(
      "Thank you! Your enquiry has been received. We'll be in touch shortly."
    );

    event.target.reset();
  };

  return (
    <>
      <Navbar />

      <main className="lonvera-contact">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="lonvera-contact-hero">

          <img
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=2200&q=90"
            alt="London skyline"
          />

          <div className="lonvera-contact-hero-overlay"></div>

          <div className="lonvera-contact-hero-content">

            <span className="lonvera-contact-eyebrow">
              <i></i>
              GET IN TOUCH
              <i></i>
            </span>

            <h1>
              Let's plan your
              <br />
              <em>London story.</em>
            </h1>

            <p>
              Tell us what you're imagining.
              We'll help turn it into a London experience
              worth remembering.
            </p>

          </div>

          <div className="lonvera-contact-hero-bottom">
            <span>LONVÉRA / CONTACT</span>
            <span></span>
            <strong>01 — 01</strong>
          </div>

        </section>


        {/* =====================================================
            CONTACT INTRO
        ===================================================== */}

        <section className="lonvera-contact-main">

          <div className="lonvera-contact-container">

            <div className="lonvera-contact-heading">

              <div>

                <span className="lonvera-contact-label">
                  START A CONVERSATION
                </span>

                <h2>
                  Your London
                  <br />
                  starts <em>here.</em>
                </h2>

              </div>

              <p>
                Whether you're planning a weekend escape,
                a special celebration or a completely
                personalised London journey, we'd love
                to hear what you have in mind.
              </p>

            </div>


            {/* =================================================
                CONTACT GRID
            ================================================= */}

            <div className="lonvera-contact-grid">

              {/* =================================================
                  FORM
              ================================================= */}

              <div className="lonvera-contact-form-card">

                <div className="lonvera-contact-card-top">

                  <div>

                    <span>
                      01 / ENQUIRY
                    </span>

                    <h3>
                      Tell us a little
                      <br />
                      about your plans.
                    </h3>

                  </div>

                  <div className="lonvera-contact-card-icon">
                    <i className="bi bi-arrow-up-right"></i>
                  </div>

                </div>


                <form
                  onSubmit={handleSubmit}
                  className="lonvera-contact-form"
                >

                  <div className="lonvera-form-row">

                    <div className="lonvera-form-group">

                      <label htmlFor="name">
                        Your Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        required
                      />

                    </div>


                    <div className="lonvera-form-group">

                      <label htmlFor="email">
                        Email Address
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                      />

                    </div>

                  </div>


                  <div className="lonvera-form-row">

                    <div className="lonvera-form-group">

                      <label htmlFor="phone">
                        Phone Number
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+44 000 000 0000"
                      />

                    </div>


                    <div className="lonvera-form-group">

                      <label htmlFor="travellers">
                        Travellers
                      </label>

                      <select
                        id="travellers"
                        name="travellers"
                        defaultValue=""
                      >

                        <option value="" disabled>
                          Select
                        </option>

                        <option value="1">
                          1 Traveller
                        </option>

                        <option value="2">
                          2 Travellers
                        </option>

                        <option value="3-5">
                          3–5 Travellers
                        </option>

                        <option value="6-10">
                          6–10 Travellers
                        </option>

                        <option value="10+">
                          10+ Travellers
                        </option>

                      </select>

                    </div>

                  </div>


                  <div className="lonvera-form-row">

                    <div className="lonvera-form-group">

                      <label htmlFor="date">
                        Travel Date
                      </label>

                      <input
                        id="date"
                        name="date"
                        type="date"
                      />

                    </div>


                    <div className="lonvera-form-group">

                      <label htmlFor="interest">
                        I'm interested in
                      </label>

                      <select
                        id="interest"
                        name="interest"
                        defaultValue=""
                        required
                      >

                        <option value="" disabled>
                          Choose an option
                        </option>

                        <option value="tours">
                          Private Tours
                        </option>

                        <option value="experiences">
                          Experiences
                        </option>

                        <option value="hotels">
                          Hotels & Stays
                        </option>

                        <option value="food">
                          Food & Dining
                        </option>

                        <option value="shopping">
                          Shopping
                        </option>

                        <option value="vehicles">
                          Private Transport
                        </option>

                        <option value="custom">
                          Bespoke Journey
                        </option>

                      </select>

                    </div>

                  </div>


                  <div className="lonvera-form-group">

                    <label htmlFor="message">
                      Tell us more
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="What kind of London experience are you imagining?"
                      required
                    ></textarea>

                  </div>


                  <button
                    type="submit"
                    className="lonvera-contact-submit"
                  >

                    <span>
                      Send Enquiry
                    </span>

                    <i className="bi bi-arrow-up-right"></i>

                  </button>


                  {formStatus && (

                    <div className="lonvera-form-success">

                      <i className="bi bi-check-circle"></i>

                      <span>
                        {formStatus}
                      </span>

                    </div>

                  )}

                </form>

              </div>


              {/* =================================================
                  CONTACT INFO
              ================================================= */}

              <aside className="lonvera-contact-side">

                <div className="lonvera-contact-info-card">

                  <span className="lonvera-contact-card-number">
                    02
                  </span>

                  <span className="lonvera-contact-info-label">
                    EMAIL
                  </span>

                  <div className="lonvera-contact-info-icon">
                    <i className="bi bi-envelope"></i>
                  </div>

                  <h3>
                    hello@lonvera.com
                  </h3>

                  <p>
                    For enquiries, collaborations
                    and London inspiration.
                  </p>

                  <a href="mailto:hello@lonvera.com">

                    Send an email

                    <i className="bi bi-arrow-up-right"></i>

                  </a>

                </div>


                <div className="lonvera-contact-info-card dark">

                  <span className="lonvera-contact-card-number">
                    03
                  </span>

                  <span className="lonvera-contact-info-label">
                    CALL US
                  </span>

                  <div className="lonvera-contact-info-icon">
                    <i className="bi bi-telephone"></i>
                  </div>

                  <h3>
                    +44 20 0000 0000
                  </h3>

                  <p>
                    Monday — Friday
                    <br />
                    09:00 — 18:00 GMT
                  </p>

                  <a href="tel:+442000000000">

                    Call LONVÉRA

                    <i className="bi bi-arrow-up-right"></i>

                  </a>

                </div>


                <div className="lonvera-contact-location-card">

                  <div className="lonvera-location-pin">

                    <i className="bi bi-geo-alt"></i>

                  </div>

                  <div>

                    <span>
                      OUR HOME
                    </span>

                    <h4>
                      London,
                      <br />
                      United Kingdom
                    </h4>

                  </div>

                  <i className="bi bi-arrow-up-right"></i>

                </div>

              </aside>

            </div>

          </div>

        </section>


        {/* =====================================================
            LUXURY LONDON MAP
        ===================================================== */}

        <section className="lonvera-contact-map-section">

          <div className="lonvera-contact-container">

            <div className="lonvera-map-heading">

              <div>

                <span className="lonvera-contact-label">
                  FIND YOUR WAY
                </span>

                <h2>
                  Meet us in
                  <br />
                  <em>London.</em>
                </h2>

              </div>

              <p>
                From the heart of Westminster to the quiet
                corners of Notting Hill, London is where
                every LONVÉRA journey begins.
              </p>

            </div>


            <div className="lonvera-luxury-map">

              {/* MAP */}

              <div className="lonvera-map-frame">

                <iframe
                  title="LONVÉRA London Location"
                  src="https://www.google.com/maps?q=London,United%20Kingdom&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                <div className="lonvera-map-overlay"></div>


                {/* MAP BRAND CARD */}

                <div className="lonvera-map-brand-card">

                  <span>
                    LONVÉRA
                  </span>

                  <strong>
                    LONDON
                  </strong>

                  <small>
                    UNITED KINGDOM
                  </small>

                </div>


                {/* MAP PIN */}

                <div className="lonvera-map-pin">

                  <div className="lonvera-map-pin-inner">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>

                </div>

              </div>


              {/* MAP INFORMATION */}

              <div className="lonvera-map-info">

                <div className="lonvera-map-info-top">

                  <span>
                    04 / LOCATION
                  </span>

                  <div className="lonvera-map-number">
                    04
                  </div>

                </div>


                <div className="lonvera-map-info-icon">

                  <i className="bi bi-buildings"></i>

                </div>


                <h3>
                  London,
                  <br />
                  United Kingdom
                </h3>


                <p>
                  Our London-based team is here to help
                  you discover the city through a more
                  personal lens.
                </p>


                <div className="lonvera-map-details">

                  <div>

                    <span>
                      OFFICE
                    </span>

                    <strong>
                      Central London
                    </strong>

                  </div>


                  <div>

                    <span>
                      HOURS
                    </span>

                    <strong>
                      Mon — Fri · 09:00 — 18:00
                    </strong>

                  </div>

                </div>


                <a
                  href="https://www.google.com/maps/search/?api=1&query=London%2C%20United%20Kingdom"
                  target="_blank"
                  rel="noreferrer"
                  className="lonvera-map-button"
                >

                  Open in Google Maps

                  <i className="bi bi-arrow-up-right"></i>

                </a>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            WHATSAPP STRIP
        ===================================================== */}

        <section className="lonvera-contact-whatsapp">

          <div className="lonvera-contact-container">

            <div className="lonvera-contact-whatsapp-card">

              <div className="lonvera-contact-whatsapp-icon">

                <i className="bi bi-whatsapp"></i>

              </div>


              <div className="lonvera-contact-whatsapp-copy">

                <span>
                  PREFER A QUICK CHAT?
                </span>

                <h3>
                  Let's talk on WhatsApp.
                </h3>

                <p>
                  Sometimes the easiest way to start
                  planning is simply to say hello.
                </p>

              </div>


              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="lonvera-contact-whatsapp-btn"
              >

                Chat with us

                <i className="bi bi-arrow-up-right"></i>

              </a>

            </div>

          </div>

        </section>


        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="lonvera-contact-final">

          <div className="lonvera-contact-final-inner">

            <span>
              THE LONDON LOCAL
            </span>

            <h2>
              Have a question?
              <br />
              <em>We're listening.</em>
            </h2>

            <Link
              to="/destinations"
              className="lonvera-contact-final-btn"
            >

              Explore London

              <i className="bi bi-arrow-up-right"></i>

            </Link>

          </div>

        </section>

      </main>


      <Footer />

      <WhatsAppButton />

      <ScrollToTop />

    </>
  );
}

export default Contact;

