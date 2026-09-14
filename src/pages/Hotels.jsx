import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollToTop from "../components/ScrollToTop";

import "./Hotels.css";

/* =========================================================
   HOTEL DATA
========================================================= */

const hotels = [
  {
    name: "The Savoy",
    area: "Strand · Central London",
    category: "ICONIC LUXURY",
    filter: "LUXURY",
    price: "From £420 / night",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=90",
    description:
      "Historic glamour, exceptional service and an unmistakably London address.",
    tags: ["5 STAR", "HERITAGE", "FINE DINING"],
  },

  {
    name: "Claridge's",
    area: "Mayfair · West London",
    category: "TIMELESS ELEGANCE",
    filter: "LUXURY",
    price: "From £560 / night",
    image:
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1600&q=90",
    description:
      "A refined Mayfair retreat where Art Deco character meets modern hospitality.",
    tags: ["5 STAR", "MAYFAIR", "WELLNESS"],
  },

  {
    name: "The Hoxton",
    area: "Holborn · Central London",
    category: "MODERN LONDON",
    filter: "MODERN",
    price: "From £210 / night",
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1600&q=90",
    description:
      "Relaxed interiors, lively spaces and a neighbourhood-first London experience.",
    tags: ["DESIGN", "CITY", "SOCIAL"],
  },

  {
    name: "The Ned",
    area: "City of London",
    category: "CITY ICON",
    filter: "LUXURY",
    price: "From £390 / night",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1600&q=90",
    description:
      "A spectacular city stay surrounded by restaurants, bars and classic London energy.",
    tags: ["LUXURY", "DINING", "NIGHTLIFE"],
  },

  {
    name: "The Langham",
    area: "Marylebone · Central London",
    category: "BRITISH CLASSIC",
    filter: "HERITAGE",
    price: "From £340 / night",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=90",
    description:
      "Classic British hospitality paired with beautifully considered contemporary rooms.",
    tags: ["HERITAGE", "5 STAR", "AFTERNOON TEA"],
  },

  {
    name: "The Standard",
    area: "King's Cross",
    category: "CREATIVE STAY",
    filter: "BOUTIQUE",
    price: "From £250 / night",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=90",
    description:
      "Bold design, rooftop views and a creative pulse in one of London's evolving districts.",
    tags: ["DESIGN", "ROOFTOP", "CITY"],
  },
];


/* =========================================================
   HOTEL FILTER TABS
========================================================= */

const hotelTabs = [
  "ALL",
  "LUXURY",
  "HERITAGE",
  "MODERN",
  "BOUTIQUE",
];


/* =========================================================
   HOTEL STYLES
========================================================= */

const hotelStyles = [
  {
    number: "01",
    title: "Classic London",
    text:
      "Grand entrances, heritage interiors and the kind of service that never feels rushed.",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=90",
  },

  {
    number: "02",
    title: "Modern London",
    text:
      "Design-led stays for travellers who prefer personality, creativity and a local feel.",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=90",
  },

  {
    number: "03",
    title: "Boutique Escapes",
    text:
      "Smaller properties, intimate details and neighbourhoods worth getting lost in.",
    image:
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=90",
  },
];


/* =========================================================
   HOTELS COMPONENT
========================================================= */

function Hotels() {
  const [activeTab, setActiveTab] = useState("ALL");


  /* =======================================================
     FILTER HOTELS
  ======================================================= */

  const filteredHotels = useMemo(() => {
    if (activeTab === "ALL") {
      return hotels;
    }

    return hotels.filter((hotel) => hotel.filter === activeTab);
  }, [activeTab]);


  /* =======================================================
     TAB CHANGE
  ======================================================= */

  const handleTabChange = (tab) => {
    setActiveTab(tab);

    setTimeout(() => {
      document
        .getElementById("hotel-collection")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 50);
  };


  return (
    <>
      <Navbar />

      <main className="lonvera-hotels">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="lonvera-hotels-hero">

          <div className="lonvera-hotels-hero-image">
            <img
              src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=2200&q=90"
              alt="Luxury London hotel"
            />
          </div>

          <div className="lonvera-hotels-hero-overlay"></div>

          <div className="container">

            <div className="lonvera-hotels-hero-content">

              <span className="lonvera-hotels-eyebrow">
                <i></i>
                LONVÉRA / STAY
              </span>

              <h1 className="text-light">
                Stay
                <br />
                <em>beautifully.</em>
              </h1>

              <p>
                Carefully selected hotels, boutique stays
                <br />
                and London addresses worth knowing.
              </p>

              <a
                href="#hotel-collection"
                className="lonvera-hotels-scroll"
              >
                Explore stays
                <i className="bi bi-arrow-down"></i>
              </a>

            </div>

          </div>

        </section>


        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="lonvera-hotels-intro section">

          <div className="container">

            <div className="lonvera-hotels-intro-grid">

              <div>

                <span className="lonvera-hotels-label">
                  WHERE YOU STAY MATTERS
                </span>

                <h2>
                  The right address
                  <br />
                  changes
                  <em> everything.</em>
                </h2>

              </div>

              <div className="lonvera-hotels-intro-copy">

                <p className="lead">
                  Your hotel should feel like part of the journey.
                </p>

                <p>
                  We look beyond the room. Location, atmosphere,
                  design, service and the little details all shape
                  how London feels when you wake up, step outside
                  and return at the end of the day.
                </p>

                <div className="lonvera-hotels-intro-note">
                  <span>OUR APPROACH</span>

                  <strong>
                    Personal recommendations.
                    <br />
                    Never a generic list.
                  </strong>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            HOTEL COLLECTION
        ===================================================== */}

        <section
          className="lonvera-hotel-collection section"
          id="hotel-collection"
        >

          <div className="container">

            <div className="lonvera-hotels-heading">

              <div>

                <span>THE LONVÉRA EDIT</span>

                <h2>
                  Places worth
                  <br />
                  <em>checking in.</em>
                </h2>

              </div>

              <p>
                From legendary five-star icons to characterful
                boutique addresses, these are the kinds of places
                we'd happily recommend to a friend.
              </p>

            </div>


            {/* =================================================
                FILTER TABS
            ================================================= */}

            <div className="lonvera-hotel-tabs">

              <div className="lonvera-hotel-tabs-inner">

                {hotelTabs.map((tab) => (

                  <button
                    type="button"
                    key={tab}
                    className={`lonvera-hotel-tab ${
                      activeTab === tab ? "active" : ""
                    }`}
                    onClick={() => handleTabChange(tab)}
                    aria-pressed={activeTab === tab}
                  >

                    <span>
                      {tab === "ALL" ? "ALL STAYS" : tab}
                    </span>

                    {activeTab === tab && (
                      <i className="bi bi-arrow-up-right"></i>
                    )}

                  </button>

                ))}

              </div>

            </div>


            {/* =================================================
                FILTER RESULT INFO
            ================================================= */}

            <div className="lonvera-hotel-results">

              <span>
                <strong>
                  {String(filteredHotels.length).padStart(2, "0")}
                </strong>

                STAYS AVAILABLE
              </span>

              <span>
                {activeTab === "ALL"
                  ? "SHOWING ALL LONVÉRA STAYS"
                  : `FILTERED BY / ${activeTab}`}
              </span>

            </div>


            {/* =================================================
                HOTEL CARDS
            ================================================= */}

            <div className="lonvera-hotels-grid">

              {filteredHotels.map((hotel, index) => (

                <article
                  className="lonvera-hotel-card"
                  key={hotel.name}
                >

                  {/* IMAGE */}

                  <div className="lonvera-hotel-image">

                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      loading="lazy"
                    />

                    <div className="lonvera-hotel-overlay"></div>

                    <span className="lonvera-hotel-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="lonvera-hotel-category">
                      {hotel.category}
                    </span>

                    <span className="lonvera-hotel-view">
                      <i className="bi bi-arrow-up-right"></i>
                    </span>

                    <div className="lonvera-hotel-image-bottom">

                      <span>
                        <i className="bi bi-star-fill"></i>
                        LONVÉRA SELECT
                      </span>

                      <span>
                        <i className="bi bi-building"></i>
                        LONDON
                      </span>

                    </div>

                  </div>


                  {/* CONTENT */}

                  <div className="lonvera-hotel-content">

                    <div className="lonvera-hotel-card-top">

                      <span>
                        HOTEL / {String(index + 1).padStart(2, "0")}
                      </span>

                      <span>
                        {hotel.filter}
                      </span>

                    </div>


                    <div className="lonvera-hotel-location">
                      <i className="bi bi-geo-alt"></i>
                      {hotel.area}
                    </div>


                    <h3>{hotel.name}</h3>


                    <p>{hotel.description}</p>


                    {/* TAGS */}

                    <div className="lonvera-hotel-tags">

                      {hotel.tags.map((tag) => (

                        <span key={tag}>
                          {tag}
                        </span>

                      ))}

                    </div>


                    {/* DETAILS */}

                    <div className="lonvera-hotel-details">

                      <div>
                        <i className="bi bi-building"></i>

                        <span>
                          <small>STYLE</small>
                          {hotel.category}
                        </span>
                      </div>

                      <div>
                        <i className="bi bi-geo-alt"></i>

                        <span>
                          <small>LOCATION</small>
                          {hotel.area.split(" · ")[0]}
                        </span>
                      </div>

                    </div>


                    {/* BOTTOM */}

                    <div className="lonvera-hotel-bottom">

                      <div className="lonvera-hotel-price-wrap">

                        <small>STARTING FROM</small>

                        <strong>
                          {hotel.price.replace("From ", "")}
                        </strong>

                      </div>

                      <Link
                        to="/contact"
                        className="lonvera-hotel-enquire"
                      >
                        <span>Enquire</span>
                        <i className="bi bi-arrow-up-right"></i>
                      </Link>

                    </div>

                  </div>

                </article>

              ))}

            </div>


            {/* =================================================
                EMPTY STATE
            ================================================= */}

            {filteredHotels.length === 0 && (

              <div className="lonvera-hotel-empty">

                <i className="bi bi-buildings"></i>

                <h3>
                  More stays are coming soon.
                </h3>

                <p>
                  Tell us your preferred style, location and budget
                  and we'll find something personal for you.
                </p>

                <Link to="/contact">
                  Find my stay
                  <i className="bi bi-arrow-up-right"></i>
                </Link>

              </div>

            )}

          </div>

        </section>


        {/* =====================================================
            HOTEL STYLES
        ===================================================== */}

        <section className="lonvera-hotel-styles section">

          <div className="container">

            <div className="lonvera-hotel-styles-heading">

              <span>FIND YOUR STYLE</span>

              <h2>
                London has a stay
                <br />
                for <em>every mood.</em>
              </h2>

            </div>


            <div className="lonvera-hotel-style-grid">

              {hotelStyles.map((style) => (

                <article
                  className="lonvera-hotel-style-card"
                  key={style.number}
                >

                  <div className="lonvera-hotel-style-image">

                    <img
                      src={style.image}
                      alt={style.title}
                      loading="lazy"
                    />

                    <div></div>

                  </div>

                  <div className="lonvera-hotel-style-content">

                    <span>{style.number}</span>

                    <h3>{style.title}</h3>

                    <p>{style.text}</p>

                    <Link to="/contact">
                      Find my stay
                      <i className="bi bi-arrow-up-right"></i>
                    </Link>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            HOTEL EXPERIENCE
        ===================================================== */}

        <section className="lonvera-hotel-feature section">

          <div className="container">

            <div className="lonvera-hotel-feature-card">

              <div className="lonvera-hotel-feature-image">

                <img
                  src="https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1800&q=90"
                  alt="Elegant hotel interior"
                  loading="lazy"
                />

                <div></div>

              </div>


              <div className="lonvera-hotel-feature-content">

                <span>
                  MORE THAN A ROOM
                </span>

                <h2 className="text-light">
                  Make your hotel
                  <br />
                  part of the
                  <em> experience.</em>
                </h2>

                <p>
                  Wake up near the places you want to explore.
                  Walk to breakfast. Return for an afternoon
                  pause. Finish the evening somewhere beautiful.
                </p>

                <ul>

                  <li>
                    <i className="bi bi-check2"></i>
                    Best neighbourhood for your itinerary
                  </li>

                  <li>
                    <i className="bi bi-check2"></i>
                    Room style matched to your preferences
                  </li>

                  <li>
                    <i className="bi bi-check2"></i>
                    Dining, transport and experiences nearby
                  </li>

                  <li>
                    <i className="bi bi-check2"></i>
                    Personalised recommendations
                  </li>

                </ul>

                <Link
                  to="/contact"
                  className="lonvera-rounded-btn lonvera-hotel-feature-btn"
                >
                  Talk to a London local
                  <i className="bi bi-arrow-up-right"></i>
                </Link>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            QUOTE
        ===================================================== */}

        <section className="lonvera-hotel-quote">

          <div className="container">

            <div className="lonvera-hotel-quote-inner">

              <span>
                THE LONVÉRA PHILOSOPHY
              </span>

              <blockquote>
                “A beautiful stay is not
                <br />
                <em>where you sleep.</em>
                <br />
                It's how London feels.”
              </blockquote>

              <div></div>

              <p>
                LONVÉRA / THE LONDON LOCAL
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="lonvera-hotels-cta section">

          <div className="container">

            <div className="lonvera-hotels-cta-card">

              <div className="lonvera-hotels-cta-content">

                <span>
                  LET'S FIND YOUR ADDRESS
                </span>

                <h2>
                  Your perfect
                  <br />
                  London stay
                  <br />
                  <em>starts here.</em>
                </h2>

                <p>
                  Tell us how you want London to feel and we'll
                  help you find the right place to call home while
                  you're here.
                </p>

                <Link
                  to="/contact"
                  className="lonvera-rounded-btn"
                >
                  Find my hotel
                  <i className="bi bi-arrow-up-right"></i>
                </Link>

              </div>


              <div className="lonvera-hotels-cta-image">

                <img
                  src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1800&q=90"
                  alt="Luxury hotel room in London"
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

export default Hotels;