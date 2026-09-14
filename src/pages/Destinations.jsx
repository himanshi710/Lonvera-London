import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollToTop from "../components/ScrollToTop";
import SectionTitle from "../components/SectionTitle";

import "./Destinations.css";

const destinations = [
  {
    id: "central-london",
    number: "01",
    title: "Central London",
    location: "Central London",
    category: "ICONIC",
    filter: "ICONIC",
    description:
      "Royal landmarks, grand avenues, historic squares and the timeless energy of London's centre.",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=90",
  },
  {
    id: "notting-hill",
    number: "02",
    title: "Notting Hill",
    location: "West London",
    category: "COLOURFUL",
    filter: "WEST",
    description:
      "Pastel streets, independent boutiques, beautiful cafés and unmistakable neighbourhood character.",
    image:
      "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=1400&q=90",
  },
  {
    id: "south-bank",
    number: "03",
    title: "South Bank",
    location: "Central London",
    category: "RIVERSIDE",
    filter: "RIVERSIDE",
    description:
      "A cultural riverside district filled with art, architecture, food and spectacular Thames views.",
    image:
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1400&q=90",
  },
  {
    id: "shoreditch",
    number: "04",
    title: "Shoreditch",
    location: "East London",
    category: "CREATIVE",
    filter: "CREATIVE",
    description:
      "Street art, independent design, hidden cafés and the experimental spirit of East London.",
    image:
      "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=1400&q=90",
  },
  {
    id: "kensington-chelsea",
    number: "05",
    title: "Kensington & Chelsea",
    location: "West London",
    category: "ELEGANT",
    filter: "WEST",
    description:
      "Elegant streets, royal parks, world-class museums and sophisticated London living.",
    image:
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=1400&q=90",
  },
  {
    id: "greenwich",
    number: "06",
    title: "Greenwich",
    location: "South East London",
    category: "HERITAGE",
    filter: "HERITAGE",
    description:
      "Maritime history, beautiful green spaces and one of London's most memorable skyline views.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdyhxvA8ThSpm-BwASGkNNLdSgFbpqxHVZciA4k8IRSw&s=10",
  },
  {
    id: "covent-garden",
    number: "07",
    title: "Covent Garden",
    location: "Central London",
    category: "ICONIC",
    filter: "ICONIC",
    description:
      "Elegant arcades, lively performers, beautiful restaurants and London's theatrical heart.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyxaZVjqAjPdxtybazmvcqXFRVaqHZ1pTrICLk6OJ9H3mDfS8PPI_77mxc&s=10",
  },
  {
    id: "camden",
    number: "08",
    title: "Camden",
    location: "North London",
    category: "CREATIVE",
    filter: "CREATIVE",
    description:
      "Eclectic markets, bold street culture, live music and one of London's most energetic neighbourhoods.",
    image:
      "https://images.unsplash.com/photo-1520986606214-8b456906c813?auto=format&fit=crop&w=1400&q=90",
  },
];

const tabs = [
  { id: "ALL", label: "All Places", icon: "bi-stars" },
  { id: "ICONIC", label: "Iconic London", icon: "bi-gem" },
  { id: "WEST", label: "West London", icon: "bi-buildings" },
  { id: "RIVERSIDE", label: "Riverside", icon: "bi-water" },
  { id: "CREATIVE", label: "Creative", icon: "bi-palette" },
  { id: "HERITAGE", label: "Heritage", icon: "bi-bank" },
];

function Destinations() {
  const [activeTab, setActiveTab] = useState("ALL");

  const filteredDestinations = useMemo(() => {
    if (activeTab === "ALL") {
      return destinations;
    }

    return destinations.filter(
      (destination) => destination.filter === activeTab
    );
  }, [activeTab]);

  return (
    <>
      <Navbar />

      <main className="lonvera-destinations">

        {/* ================= HERO ================= */}

        <section className="lonvera-destinations-hero">
          <img
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=2200&q=90"
            alt="London skyline"
          />

          <div className="lonvera-destinations-hero-overlay"></div>

          <div className="container">
            <div className="lonvera-destinations-hero-content">

              <span className="lonvera-destinations-eyebrow">
                <i></i>
                LONVÉRA / LONDON
              </span>

              <h1>
                Discover
                <br />
                <em>London.</em>
              </h1>

              <p>
                Not just the landmarks.
                <br />
                The places that make the city feel alive.
              </p>

              <a
                href="#destination-list"
                className="lonvera-destination-scroll"
              >
                Explore destinations
                <span>
                  <i className="bi bi-arrow-down"></i>
                </span>
              </a>

            </div>
          </div>
        </section>


        {/* ================= INTRO ================= */}

        <section className="lonvera-destinations-intro">

          <div className="container">

            <div className="lonvera-destinations-intro-grid">

              <div>
                <span className="lonvera-destinations-label">
                  THE LONDON LOCAL
                </span>

                <h2>
                  Every neighbourhood
                  <br />
                  tells a <em>story.</em>
                </h2>
              </div>

              <div className="lonvera-destinations-intro-copy">

                <p>
                  London isn't one destination. It's a collection of
                  neighbourhoods, each with its own rhythm, character
                  and hidden corners.
                </p>

                <p>
                  From royal avenues to creative East London,
                  LONVÉRA helps you experience the city beyond
                  the obvious.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= DESTINATIONS ================= */}

        <section
          className="lonvera-destination-list"
          id="destination-list"
        >

          <div className="container">

            <SectionTitle
              eyebrow="EXPLORE LONDON"
              title="Places"
              highlight="worth knowing."
              description="A carefully selected collection of London's most distinctive neighbourhoods."
            />


            {/* ================= TABS ================= */}

            <div className="lonvera-destination-tabs">

              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`lonvera-destination-tab ${
                    activeTab === tab.id ? "active" : ""
                  }`}
                >
                  <i className={`bi ${tab.icon}`}></i>

                  <span>{tab.label}</span>

                  {activeTab === tab.id && (
                    <b>
                      <i className="bi bi-arrow-up-right"></i>
                    </b>
                  )}
                </button>
              ))}

            </div>


            {/* ================= RESULTS ================= */}

            <div className="lonvera-destination-results">

              <div className="lonvera-result-count">
                <strong>
                  {String(filteredDestinations.length).padStart(2, "0")}
                </strong>

                <span>DESTINATIONS</span>
              </div>

              <span className="lonvera-result-line"></span>

              <span className="lonvera-result-area">
                LONDON /{" "}
                {activeTab === "ALL" ? "ALL AREAS" : activeTab}
              </span>

            </div>


            {/* ================= CARD GRID ================= */}

            <div className="lonvera-destination-grid">

              {filteredDestinations.map((destination) => (

                <Link
                  key={destination.id}
                  to={`/destinations/${destination.id}`}
                  className="lonvera-destination-card"
                >

                  {/* IMAGE */}

                  <div className="lonvera-destination-card-image">

                    <img
                      src={destination.image}
                      alt={destination.title}
                      loading="lazy"
                    />

                    <div className="lonvera-card-gradient"></div>

                    <span className="lonvera-card-number">
                      {destination.number}
                    </span>

                    <span className="lonvera-card-category">
                      {destination.category}
                    </span>


                    <span className="lonvera-card-arrow">
                      <i className="bi bi-arrow-up-right"></i>
                    </span>


                    {/* IMAGE CONTENT */}

                    <div className="lonvera-card-image-content">

                      <span className="lonvera-card-location">
                        <i className="bi bi-geo-alt"></i>
                        {destination.location}
                      </span>

                      <h3>{destination.title}</h3>

                      <p>{destination.description}</p>

                    </div>

                  </div>


                  {/* BOTTOM BAR */}

                  <div className="lonvera-card-bottom">

                    <span>
                      Explore place
                      <i className="bi bi-arrow-right"></i>
                    </span>

                    <small>
                      LONVÉRA
                    </small>

                  </div>

                </Link>

              ))}

            </div>

          </div>

        </section>


        {/* ================= EDITORIAL ================= */}

        <section className="lonvera-destinations-editorial">

          <div className="container">

            <div className="lonvera-editorial-card">

              <div className="lonvera-editorial-image">
                <img
                  src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=1600&q=90"
                  alt="London street"
                  loading="lazy"
                />
              </div>

              <div className="lonvera-editorial-content">

                <span>BEYOND THE GUIDEBOOK</span>

                <h2>
                  See London
                  <br />
                  <em>differently.</em>
                </h2>

                <p>
                  We believe the best memories are often found
                  between the famous places — a quiet street,
                  a local table, a beautiful view or a spontaneous
                  turn you didn't plan.
                </p>

                <Link
                  to="/experiences"
                  className="lonvera-rounded-btn"
                >
                  Explore experiences
                  <i className="bi bi-arrow-up-right"></i>
                </Link>

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

export default Destinations;