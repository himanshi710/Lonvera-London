import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollToTop from "../components/ScrollToTop";
import SectionTitle from "../components/SectionTitle";

import "./Food.css";

/* =========================================================
   FOOD DATA
========================================================= */

const foodSpots = [
  {
    number: "01",
    category: "BRITISH CLASSICS",
    filter: "CLASSICS",
    title: "Afternoon Tea",
    location: "Central London",
    duration: "2 HOURS",
    type: "CLASSIC",
    description:
      "A quintessential London ritual of delicate pastries, warm scones, tea and elegant surroundings.",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=90",
    tags: ["TEA", "BRITISH", "CLASSIC"],
  },

  {
    number: "02",
    category: "MARKETS",
    filter: "MARKETS",
    title: "Borough Market",
    location: "Southwark · London",
    duration: "3 HOURS",
    type: "LOCAL EDIT",
    description:
      "A lively food destination where independent producers, global flavours and London traditions meet.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=85",
    tags: ["MARKET", "LOCAL", "TASTING"],
  },

  {
    number: "03",
    category: "LOCAL FAVOURITES",
    filter: "LOCAL",
    title: "London Pubs",
    location: "Soho · Covent Garden",
    duration: "2.5 HOURS",
    type: "LOCAL EDIT",
    description:
      "Discover atmospheric pubs serving classic British plates, craft drinks and genuine local character.",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1400&q=85",
    tags: ["PUBS", "LOCAL", "BRITISH"],
  },

  {
    number: "04",
    category: "MODERN LONDON",
    filter: "MODERN",
    title: "Contemporary Dining",
    location: "Mayfair · Chelsea",
    duration: "3 HOURS",
    type: "DINING",
    description:
      "From creative tasting menus to beautifully designed neighbourhood restaurants.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=85",
    tags: ["DINING", "DESIGN", "FINE FOOD"],
  },

  {
    number: "05",
    category: "SWEET LONDON",
    filter: "SWEET",
    title: "Bakeries & Patisseries",
    location: "Notting Hill · Soho",
    duration: "2 HOURS",
    type: "MORNING EDIT",
    description:
      "Start the morning with beautifully baked breads, pastries, cakes and exceptional coffee.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1400&q=85",
    tags: ["BAKERY", "COFFEE", "SWEET"],
  },

  {
    number: "06",
    category: "GLOBAL FLAVOURS",
    filter: "GLOBAL",
    title: "London's Food Scene",
    location: "East London · Central",
    duration: "4 HOURS",
    type: "FOOD EDIT",
    description:
      "Explore the multicultural flavours that make London one of the world's great food cities.",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1400&q=85",
    tags: ["GLOBAL", "TASTING", "CITY"],
  },
];

/* =========================================================
   FOOD TABS
========================================================= */

const foodTabs = [
  {
    label: "ALL",
    value: "ALL",
  },
  {
    label: "BRITISH CLASSICS",
    value: "CLASSICS",
  },
  {
    label: "MARKETS",
    value: "MARKETS",
  },
  {
    label: "LOCAL FAVOURITES",
    value: "LOCAL",
  },
  {
    label: "MODERN DINING",
    value: "MODERN",
  },
  {
    label: "SWEET LONDON",
    value: "SWEET",
  },
  {
    label: "GLOBAL FLAVOURS",
    value: "GLOBAL",
  },
];

/* =========================================================
   FOOD EXPERIENCES
========================================================= */

const foodExperiences = [
  {
    number: "01",
    label: "PRIVATE",
    title: "London Food Walk",
    text: "Markets, bakeries, cafés and local favourites.",
  },
  {
    number: "02",
    label: "PRIVATE",
    title: "Market & Food Discovery",
    text: "Explore London's most atmospheric food markets.",
  },
  {
    number: "03",
    label: "CURATED",
    title: "Fine Dining Evening",
    text: "A beautifully planned evening around the table.",
  },
];

/* =========================================================
   FOOD COMPONENT
========================================================= */

function Food() {
  const [activeTab, setActiveTab] = useState("ALL");

  const filteredFood = useMemo(() => {
    if (activeTab === "ALL") {
      return foodSpots;
    }

    return foodSpots.filter((spot) => spot.filter === activeTab);
  }, [activeTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);

    setTimeout(() => {
      document.getElementById("food-guide")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  return (
    <>
      <Navbar />

      <main className="lonvera-food">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="lonvera-food-hero">

          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=90"
            alt="London dining experience"
          />

          <div className="lonvera-food-hero-overlay"></div>

          <div className="container">

            <div className="lonvera-food-hero-content">

              <span className="lonvera-food-eyebrow">
                <i></i>
                LONVÉRA / FOOD & DINING
              </span>

              <h1 className="text-light">
                Taste
                <br />
                <em>London.</em>
              </h1>

              <p>
                From historic pubs to modern dining rooms,
                <br />
                discover the flavours behind the city.
              </p>

              <a
                href="#food-guide"
                className="lonvera-food-scroll"
              >
                Explore the food guide
                <i className="bi bi-arrow-down"></i>
              </a>

            </div>

          </div>

        </section>


        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="lonvera-food-intro section">

          <div className="container">

            <div className="lonvera-food-intro-grid">

              <div>

                <span className="lonvera-food-label">
                  THE LONDON TABLE
                </span>

                <h2>
                  Come hungry.
                  <br />
                  Leave with a
                  <em> story.</em>
                </h2>

              </div>

              <div className="lonvera-food-intro-copy">

                <p className="lead">
                  London's food scene is as diverse and layered
                  as the city itself.
                </p>

                <p>
                  Traditional British favourites sit alongside
                  some of the world's most exciting international
                  cuisines. We help you discover the places that
                  locals genuinely love.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            FOOD GUIDE
        ===================================================== */}

        <section
          className="lonvera-food-guide section"
          id="food-guide"
        >

          <div className="container">

            <SectionTitle
              eyebrow="EAT LIKE A LOCAL"
              title="A taste of"
              highlight="London."
              description="Our guide to the flavours, rituals and places worth making time for."
            />


            {/* =================================================
                TABS
            ================================================= */}

            <div className="lonvera-food-tabs">

              <div className="lonvera-food-tabs-scroll">

                {foodTabs.map((tab) => (

                  <button
                    type="button"
                    key={tab.value}
                    className={`lonvera-food-tab ${
                      activeTab === tab.value ? "active" : ""
                    }`}
                    onClick={() => handleTabChange(tab.value)}
                    aria-pressed={activeTab === tab.value}
                  >

                    <span>
                      {tab.label}
                    </span>

                    {activeTab === tab.value && (
                      <i className="bi bi-arrow-up-right"></i>
                    )}

                  </button>

                ))}

              </div>

            </div>


            {/* =================================================
                RESULT INFO
            ================================================= */}

            <div className="lonvera-food-results">

              <span>
                <strong>
                  {String(filteredFood.length).padStart(2, "0")}
                </strong>{" "}
                EXPERIENCES
              </span>

              <span>
                {activeTab === "ALL"
                  ? "SHOWING ALL FOOD EXPERIENCES"
                  : `FILTERED BY / ${
                      foodTabs.find(
                        (tab) => tab.value === activeTab
                      )?.label
                    }`}
              </span>

            </div>


            {/* =================================================
                FOOD CARDS
            ================================================= */}

            <div className="lonvera-food-grid">

              {filteredFood.map((spot) => (

                <article
                  className="lonvera-food-card"
                  key={spot.number}
                >

                  {/* IMAGE */}

                  <div className="lonvera-food-card-image">

                    <img
                      src={spot.image}
                      alt={spot.title}
                      loading="lazy"
                    />

                    <div className="lonvera-food-card-overlay"></div>

                    <span className="lonvera-food-card-number">
                      {spot.number}
                    </span>

                    <span className="lonvera-food-card-category">
                      {spot.category}
                    </span>

                    <span className="lonvera-food-card-arrow">
                      <i className="bi bi-arrow-up-right"></i>
                    </span>

                    <div className="lonvera-food-card-image-bottom">

                      <span>
                        <i className="bi bi-clock"></i>
                        {spot.duration}
                      </span>

                      <span>
                        {spot.type}
                      </span>

                    </div>

                  </div>


                  {/* CONTENT */}

                  <div className="lonvera-food-card-content">

                    <div className="lonvera-food-card-location">
                      <i className="bi bi-geo-alt"></i>
                      {spot.location}
                    </div>

                    <h3>
                      {spot.title}
                    </h3>

                    <p>
                      {spot.description}
                    </p>


                    {/* TAGS */}

                    <div className="lonvera-food-card-tags">

                      {spot.tags.map((tag) => (

                        <span key={tag}>
                          {tag}
                        </span>

                      ))}

                    </div>


                    {/* DIVIDER */}

                    <div className="lonvera-food-card-divider"></div>


                    {/* BOTTOM */}

                    <div className="lonvera-food-card-bottom">

                      <div>

                        <small>
                          LONVÉRA EDIT
                        </small>

                        <strong>
                          {spot.duration}
                        </strong>

                      </div>

                      <Link
                        to="/contact"
                        className="lonvera-food-card-btn"
                      >
                        Ask us about it
                        <i className="bi bi-arrow-right"></i>
                      </Link>

                    </div>

                  </div>

                </article>

              ))}

            </div>


            {/* EMPTY */}

            {filteredFood.length === 0 && (

              <div className="lonvera-food-empty">

                <i className="bi bi-compass"></i>

                <h3>
                  More food stories coming soon.
                </h3>

                <p>
                  Contact us and we'll create a completely
                  personal food experience for you.
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
            FEATURE
        ===================================================== */}

        <section className="lonvera-food-feature">

          <div className="container">

            <div className="lonvera-food-feature-card">

              <div className="lonvera-food-feature-image">

                <img
                  src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1800&q=90"
                  alt="Afternoon tea in London"
                  loading="lazy"
                />

                <div className="lonvera-food-feature-overlay"></div>

                <span className="lonvera-food-feature-badge">
                  LONVÉRA SIGNATURE
                </span>

              </div>


              <div className="lonvera-food-feature-content">

                <span>
                  A BRITISH RITUAL
                </span>

                <h2>
                  Afternoon
                  <br />
                  <em>Tea.</em>
                </h2>

                <p>
                  Slow down for one of London's most elegant
                  traditions. Beautiful surroundings, delicate
                  sandwiches, warm scones and perfectly brewed tea.
                </p>

                <div className="lonvera-food-feature-meta">

                  <span>
                    <i className="bi bi-cup-hot"></i>
                    TEA
                  </span>

                  <span>
                    <i className="bi bi-clock"></i>
                    2 HOURS
                  </span>

                  <span>
                    <i className="bi bi-stars"></i>
                    CLASSIC
                  </span>

                </div>

                <Link
                  to="/contact"
                  className="lonvera-rounded-btn"
                >
                  Plan afternoon tea
                  <i className="bi bi-arrow-up-right"></i>
                </Link>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            FOOD EXPERIENCES
        ===================================================== */}

        <section className="lonvera-food-experiences section">

          <div className="container">

            <div className="lonvera-food-experiences-heading">

              <div>

                <span>
                  CURATED FOOD EXPERIENCES
                </span>

                <h2>
                  Taste it
                  <br />
                  <em>your way.</em>
                </h2>

              </div>

              <p>
                Looking for something more personal? Let us
                arrange a food-focused London day around your
                favourite flavours and interests.
              </p>

            </div>


            <div className="lonvera-food-experience-list">

              {foodExperiences.map((experience) => (

                <div
                  className="lonvera-food-experience-item"
                  key={experience.number}
                >

                  <span>
                    {experience.number}
                  </span>

                  <div>

                    <small>
                      {experience.label}
                    </small>

                    <h3>
                      {experience.title}
                    </h3>

                    <p>
                      {experience.text}
                    </p>

                  </div>

                  <Link to="/contact">
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>

                </div>

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

        <section className="lonvera-food-cta section">

          <div className="container">

            <div className="lonvera-food-cta-card">

              <div>

                <span>
                  YOUR TABLE AWAITS
                </span>

                <h2 className="text-light">
                  Let's plan your
                  <br />
                  <em>London feast.</em>
                </h2>

              </div>

              <div>

                <p>
                  Tell us what you love to eat and we'll
                  help you discover London's best tables,
                  markets and food experiences.
                </p>

                <Link
                  to="/contact"
                  className="lonvera-rounded-btn light"
                >
                  Plan my food experience
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

export default Food;