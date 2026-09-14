import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollToTop from "../components/ScrollToTop";

import "./Vehicles.css";

/* =========================================================
   VEHICLE DATA
========================================================= */

const vehicles = [
  {
    id: "01",
    category: "EXECUTIVE",
    title: "Executive Sedan",
    subtitle: "Quiet luxury for city days",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=90",
    seats: "3 PASSENGERS",
    luggage: "2 CASES",
    ideal: "Airport · Business · City",
    price: "From £95",
  },
  {
    id: "02",
    category: "PREMIUM",
    title: "Luxury SUV",
    subtitle: "Space with a little more presence",
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1800&q=90",
    seats: "5 PASSENGERS",
    luggage: "4 CASES",
    ideal: "Families · Groups · Shopping",
    price: "From £125",
  },
  {
    id: "03",
    category: "FIRST CLASS",
    title: "Luxury Saloon",
    subtitle: "Arrive beautifully",
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1800&q=90",
    seats: "3 PASSENGERS",
    luggage: "3 CASES",
    ideal: "Private Tours · Events · Dining",
    price: "From £140",
  },
  {
    id: "04",
    category: "GROUP TRAVEL",
    title: "Premium Minivan",
    subtitle: "More room for the whole party",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1800&q=90",
    seats: "7 PASSENGERS",
    luggage: "6 CASES",
    ideal: "Families · Groups · Day Trips",
    price: "From £150",
  },
];

const vehicleTabs = [
  "ALL",
  "EXECUTIVE",
  "PREMIUM",
  "FIRST CLASS",
  "GROUP TRAVEL",
];

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    number: "01",
    icon: "bi-airplane",
    title: "Airport Transfers",
    text:
      "A smooth welcome to London with private collection from Heathrow, Gatwick, Stansted or Luton.",
  },
  {
    number: "02",
    icon: "bi-car-front",
    title: "Private Chauffeur",
    text:
      "A dedicated vehicle and driver for a full day of sightseeing, shopping, dining or business.",
  },
  {
    number: "03",
    icon: "bi-calendar2-check",
    title: "Event Travel",
    text:
      "Elegant point-to-point transport for weddings, celebrations, corporate events and special evenings.",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

function Vehicles() {
  const [activeTab, setActiveTab] = useState("ALL");

  const filteredVehicles = useMemo(() => {
    if (activeTab === "ALL") {
      return vehicles;
    }

    return vehicles.filter(
      (vehicle) => vehicle.category === activeTab
    );
  }, [activeTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);

    setTimeout(() => {
      document
        .getElementById("vehicle-collection")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 80);
  };

  return (
    <>
      <Navbar />

      <main className="lonvera-vehicles">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="lonvera-vehicles-hero">

          <div className="lonvera-vehicles-hero-image">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2200&q=90"
              alt="Luxury vehicle in London"
            />
          </div>

          <div className="lonvera-vehicles-hero-overlay"></div>

          <div className="container">

            <div className="lonvera-vehicles-hero-content">

              <span className="lonvera-vehicles-eyebrow">
                <i></i>
                LONVÉRA / PRIVATE MOBILITY
              </span>

              <h1>
                Travel
                <br />
                <em>beautifully.</em>
              </h1>

              <p>
                Private cars, thoughtful chauffeurs
                <br />
                and effortless journeys across London.
              </p>

              <a
                href="#vehicle-collection"
                className="lonvera-vehicles-scroll"
              >
                Explore vehicles
                <i className="bi bi-arrow-down"></i>
              </a>

            </div>

          </div>

        </section>


        {/* =====================================================
            INTRO
        ===================================================== */}

      

<section className="lonvera-vehicle-collection">
  <div className="container">

    {/* REQUEST FORM */}
    <div className="lonvera-vehicle-request">

      <div className="lonvera-vehicle-request-main">

        <div className="lonvera-vehicle-request-heading">
          <div>
            <span className="lonvera-request-label">
              PRIVATE MOBILITY / ENQUIRE
            </span>

            <h3>
              Request a <em>vehicle.</em>
            </h3>
          </div>

          <p>
            Tell us your route, date and passenger count. We'll recommend
            the right vehicle and create a private travel quote around
            your plans.
          </p>
        </div>

        <form
          className="lonvera-vehicle-request-form"
          onSubmit={(e) => e.preventDefault()}
        >

          <div className="lonvera-form-grid">

            <div className="lonvera-form-field">
              <label>
                FULL NAME <span>*</span>
              </label>

              <input
                type="text"
                placeholder="Your name"
                required
              />
            </div>

            <div className="lonvera-form-field">
              <label>
                PHONE NUMBER <span>*</span>
              </label>

              <input
                type="tel"
                placeholder="10 digit mobile number"
                required
              />
            </div>

            <div className="lonvera-form-field">
              <label>
                PICKUP LOCATION <span>*</span>
              </label>

              <input
                type="text"
                placeholder="London / Heathrow / Hotel"
                required
              />
            </div>

            <div className="lonvera-form-field">
              <label>
                DROP LOCATION <span>*</span>
              </label>

              <input
                type="text"
                placeholder="e.g. Mayfair"
                required
              />
            </div>

            <div className="lonvera-form-field">
              <label>
                PICKUP DATE <span>*</span>
              </label>

              <div className="lonvera-input-icon">
                <input type="date" required />
                <i className="bi bi-calendar3"></i>
              </div>
            </div>

            <div className="lonvera-form-field">
              <label>
                PICKUP TIME
              </label>

              <div className="lonvera-input-icon">
                <input type="time" />
                <i className="bi bi-clock"></i>
              </div>
            </div>

            <div className="lonvera-form-field">
              <label>
                NUMBER OF PASSENGERS <span>*</span>
              </label>

              <div className="lonvera-select-wrap">
                <select defaultValue="2" required>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5+</option>
                </select>

                <i className="bi bi-chevron-down"></i>
              </div>
            </div>

            <div className="lonvera-form-field">
              <label>
                TRIP TYPE
              </label>

              <div className="lonvera-select-wrap">
                <select defaultValue="">
                  <option value="" disabled>
                    Select trip type
                  </option>
                  <option>Airport Transfer</option>
                  <option>City Transfer</option>
                  <option>Day Trip</option>
                  <option>Chauffeur Service</option>
                  <option>Multi-City Journey</option>
                </select>

                <i className="bi bi-chevron-down"></i>
              </div>
            </div>

          </div>

          <div className="lonvera-form-field lonvera-form-message">
            <label>
              ANYTHING ELSE WE SHOULD KNOW?
            </label>

            <textarea
              rows="4"
              placeholder="Hotel preference, luggage, accessibility needs, flight details, special requests..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="lonvera-vehicle-request-btn"
          >
            <span>Request Vehicle Quote</span>
            <i className="bi bi-arrow-up-right"></i>
          </button>

          <p className="lonvera-form-note">
            <i className="bi bi-shield-check"></i>
            We'll reply with a personalised quote. Your details are kept
            private.
          </p>

        </form>
      </div>


      {/* POPULAR ROUTES */}
      <aside className="lonvera-vehicle-routes">

        <div className="lonvera-routes-heading">
          <span>LONVÉRA / POPULAR ROUTES</span>

          <h3>
            Popular routes
            <br />
            from <em>London.</em>
          </h3>
        </div>

        <div className="lonvera-routes-list">

          <div className="lonvera-route-item">
            <span>London → Heathrow</span>
            <small>25 mi</small>
          </div>

          <div className="lonvera-route-item">
            <span>London → Windsor</span>
            <small>25 mi</small>
          </div>

          <div className="lonvera-route-item">
            <span>London → Oxford</span>
            <small>55 mi</small>
          </div>

          <div className="lonvera-route-item">
            <span>London → Cambridge</span>
            <small>65 mi</small>
          </div>

          <div className="lonvera-route-item">
            <span>London → Stonehenge</span>
            <small>90 mi</small>
          </div>

          <div className="lonvera-route-item">
            <span>London → Cotswolds</span>
            <small>90 mi</small>
          </div>

        </div>

        <div className="lonvera-route-note">

          <div className="lonvera-route-note-icon">
            <i className="bi bi-stars"></i>
          </div>

          <div>
            <span>PRIVATE TRAVEL</span>

            <h4>
              Need something
              <br />
              <em>more personal?</em>
            </h4>

            <p>
              Tell us your complete itinerary and we'll recommend a vehicle,
              timing and chauffeur service around your day.
            </p>

            <Link to="/contact">
              Speak with us
              <i className="bi bi-arrow-up-right"></i>
            </Link>
          </div>

        </div>

      </aside>

    </div>

    {/* YOUR FILTER TABS MUST COME AFTER FORM */}
    <div className="lonvera-vehicle-tabs">
      {/* existing tabs */}
    </div>

  </div>
</section>

        {/* =====================================================
            VEHICLE COLLECTION
        ===================================================== */}

        <section
          className="lonvera-vehicle-collection section"
          id="vehicle-collection"
        >

          <div className="container">

            <div className="lonvera-vehicle-heading">

              <div>

                <span>THE LONVÉRA FLEET</span>

                <h2>
                  Choose your
                  <br />
                  <em>ride.</em>
                </h2>

              </div>

              <p>
                From discreet executive cars to spacious private
                vehicles, every option is selected for comfort,
                presentation and London travel.
              </p>

            </div>


            {/* =================================================
                VEHICLE FILTER TABS
            ================================================= */}

            <div className="lonvera-vehicle-tabs">

              <div className="lonvera-vehicle-tabs-track">

                {vehicleTabs.map((tab) => (

                  <button
                    key={tab}
                    type="button"
                    className={`lonvera-vehicle-tab ${
                      activeTab === tab ? "active" : ""
                    }`}
                    onClick={() => handleTabChange(tab)}
                    aria-pressed={activeTab === tab}
                  >

                    <span>
                      {tab === "ALL" ? "ALL VEHICLES" : tab}
                    </span>

                    {activeTab === tab && (
                      <i className="bi bi-arrow-up-right"></i>
                    )}

                  </button>

                ))}

              </div>

            </div>


            {/* =================================================
                RESULT INFO
            ================================================= */}

            <div className="lonvera-vehicle-results">

              <span>
                <strong>
                  {String(filteredVehicles.length).padStart(2, "0")}
                </strong>
                VEHICLES AVAILABLE
              </span>

              <span>
                {activeTab === "ALL"
                  ? "SHOWING COMPLETE FLEET"
                  : `FILTERED BY / ${activeTab}`}
              </span>

            </div>


            {/* =================================================
                VEHICLE CARDS
            ================================================= */}

            <div className="lonvera-vehicle-grid">

              {filteredVehicles.map((vehicle) => (

                <article
                  className="lonvera-vehicle-card"
                  key={vehicle.id}
                >

                  {/* IMAGE */}

                  <div className="lonvera-vehicle-image">

                    <img
                      src={vehicle.image}
                      alt={vehicle.title}
                      loading="lazy"
                    />

                    <div className="lonvera-vehicle-overlay"></div>

                    <span className="lonvera-vehicle-number">
                      {vehicle.id}
                    </span>

                    <span className="lonvera-vehicle-category">
                      {vehicle.category}
                    </span>

                    <span className="lonvera-vehicle-arrow">
                      <i className="bi bi-arrow-up-right"></i>
                    </span>

                  </div>


                  {/* CONTENT */}

                  <div className="lonvera-vehicle-content">

                    <div className="lonvera-vehicle-location">
                      <i className="bi bi-geo-alt"></i>
                      <span>LONDON / PRIVATE TRAVEL</span>
                    </div>

                    <h3>
                      {vehicle.title}
                    </h3>

                    <span className="lonvera-vehicle-subtitle">
                      {vehicle.subtitle}
                    </span>


                    <div className="lonvera-vehicle-specs">

                      <div className="lonvera-vehicle-spec">

                        <i className="bi bi-people"></i>

                        <div>
                          <small>CAPACITY</small>
                          <strong>
                            {vehicle.seats}
                          </strong>
                        </div>

                      </div>


                      <div className="lonvera-vehicle-spec">

                        <i className="bi bi-briefcase"></i>

                        <div>
                          <small>LUGGAGE</small>
                          <strong>
                            {vehicle.luggage}
                          </strong>
                        </div>

                      </div>

                    </div>


                    <div className="lonvera-vehicle-ideal">

                      <div>
                        <small>IDEAL FOR</small>
                        <strong>
                          {vehicle.ideal}
                        </strong>
                      </div>

                    </div>


                    <div className="lonvera-vehicle-card-footer">

                      <div className="lonvera-vehicle-price">

                        <small>PRIVATE HIRE</small>

                        <strong>
                          {vehicle.price}
                        </strong>

                      </div>

                      <Link
                        to="/contact"
                        className="lonvera-vehicle-enquire"
                      >
                        <span>Enquire</span>
                        <i className="bi bi-arrow-up-right"></i>
                      </Link>

                    </div>

                  </div>

                </article>

              ))}

            </div>


            {/* EMPTY */}

            {filteredVehicles.length === 0 && (

              <div className="lonvera-vehicle-empty">

                <i className="bi bi-car-front"></i>

                <h3>
                  More vehicles coming soon.
                </h3>

                <p>
                  Contact us and we'll recommend the
                  right vehicle for your journey.
                </p>

                <Link to="/contact">
                  Talk to us
                  <i className="bi bi-arrow-up-right"></i>
                </Link>

              </div>

            )}

          </div>

        </section>


        {/* =====================================================
            CHAUFFEUR FEATURE
        ===================================================== */}

        <section className="lonvera-chauffeur section">

          <div className="container">

            <div className="lonvera-chauffeur-card">

              <div className="lonvera-chauffeur-image">

                <img
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1900&q=90"
                  alt="Luxury chauffeur car"
                  loading="lazy"
                />

                <div></div>

              </div>


              <div className="lonvera-chauffeur-content">

                <span>
                  PRIVATE CHAUFFEUR SERVICE
                </span>

                <h2>
                  Your car.
                  <br />
                  Your pace.
                  <br />
                  <em>Your London.</em>
                </h2>

                <p>
                  Keep the vehicle with you for the day and
                  forget about parking, directions and changing
                  plans. Your chauffeur stays close while you
                  experience London your way.
                </p>

                <div className="lonvera-chauffeur-features">

                  <div>
                    <i className="bi bi-clock-history"></i>

                    <span>
                      <strong>Flexible timing</strong>
                      <small>Built around your itinerary</small>
                    </span>
                  </div>

                  <div>
                    <i className="bi bi-geo-alt"></i>

                    <span>
                      <strong>Door-to-door</strong>
                      <small>Collection wherever you need</small>
                    </span>
                  </div>

                  <div>
                    <i className="bi bi-stars"></i>

                    <span>
                      <strong>Personal service</strong>
                      <small>Professional & discreet</small>
                    </span>
                  </div>

                </div>

                <Link
                  to="/contact"
                  className="lonvera-rounded-btn"
                >
                  Request a chauffeur
                  <i className="bi bi-arrow-up-right"></i>
                </Link>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            SERVICES
        ===================================================== */}

        <section className="lonvera-vehicle-services section">

          <div className="container">

            <div className="lonvera-services-heading">

              <span>MOVE WITH EASE</span>

              <h2>
                Whatever the
                <br />
                <em>occasion.</em>
              </h2>

            </div>


            <div className="lonvera-services-grid">

              {services.map((service) => (

                <article
                  className="lonvera-service-card"
                  key={service.number}
                >

                  <div className="lonvera-service-top">

                    <span>
                      {service.number}
                    </span>

                    <i
                      className={`bi ${service.icon}`}
                    ></i>

                  </div>

                  <div className="lonvera-service-line"></div>

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.text}
                  </p>

                  <Link to="/contact">
                    Find out more
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            QUOTE
        ===================================================== */}

       


        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="lonvera-vehicles-cta section">

          <div className="container">

            <div className="lonvera-vehicles-cta-card">

              <div className="lonvera-vehicles-cta-content">

                <span>
                  READY TO RIDE
                </span>

                <h2>
                  Let's make
                  <br />
                  getting around
                  <br />
                  <em>the easy part.</em>
                </h2>

                <p>
                  Tell us your dates, group size and plans.
                  We'll recommend the right vehicle for your
                  London journey.
                </p>

                <Link
                  to="/contact"
                  className="lonvera-rounded-btn"
                >
                  Arrange my vehicle
                  <i className="bi bi-arrow-up-right"></i>
                </Link>

              </div>


              <div className="lonvera-vehicles-cta-image">

                <img
                  src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1900&q=90"
                  alt="Premium SUV"
                  loading="lazy"
                />

                <div></div>

              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}

export default Vehicles;