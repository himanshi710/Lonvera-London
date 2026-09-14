import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollToTop from "../components/ScrollToTop";
import ExperienceCard from "../components/ExperienceCard";

import "./Home.css";

/* =========================================================
   HERO IMAGES
========================================================= */

const heroImages = [
  "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=2200&q=90",
  "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=2200&q=90",
  "https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&w=2200&q=90",
  "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=2200&q=90",
];

/* =========================================================
   EXPERIENCES
========================================================= */

const experiences = [
  {
    id: "private-london-walk",
    title: "Private London Walk",
    category: "CITY STORIES",
    location: "Central London",
    duration: "3 Hours",
    price: "From £95",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=85",
    description:
      "See London differently through a beautifully paced private walk filled with stories, hidden corners and local character.",
  },
  {
    id: "royal-london",
    title: "Royal London",
    category: "HERITAGE",
    location: "Westminster",
    duration: "4 Hours",
    price: "From £140",
    image:
      "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&w=1200&q=85",
    description:
      "Walk through royal London, discovering palaces, grand avenues, historic landmarks and centuries of British tradition.",
  },
  {
    id: "thames-sunset",
    title: "Thames at Sunset",
    category: "RIVERSIDE",
    location: "South Bank",
    duration: "2.5 Hours",
    price: "From £120",
    image:
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=85",
    description:
      "A relaxed riverside evening combining London landmarks, beautiful views and the changing colours of the Thames.",
  },
  {
    id: "notting-hill-discovery",
    title: "Notting Hill Discovery",
    category: "NEIGHBOURHOODS",
    location: "Notting Hill",
    duration: "3 Hours",
    price: "From £110",
    image:
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=1200&q=85",
    description:
      "Explore colourful streets, independent boutiques, elegant homes and the local stories behind one of London's most-loved neighbourhoods.",
  },
  {
    id: "london-food-journey",
    title: "London Food Journey",
    category: "FOOD & CULTURE",
    location: "Central London",
    duration: "4 Hours",
    price: "From £155",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85",
    description:
      "Taste London's diverse food culture through intimate markets, neighbourhood favourites and memorable local discoveries.",
  },
  {
    id: "shoreditch-after-dark",
    title: "Shoreditch After Dark",
    category: "NIGHTLIFE",
    location: "East London",
    duration: "3.5 Hours",
    price: "From £135",
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=85",
    description:
      "Discover London's creative side after dark with hidden bars, street art, independent spaces and East London's electric atmosphere.",
  },
];

/* =========================================================
   EXPERIENCE TABS
========================================================= */

const experienceTabs = [
  {
    id: "ALL",
    label: "All Experiences",
    icon: "bi-stars",
  },
  {
    id: "CITY STORIES",
    label: "City Stories",
    icon: "bi-buildings",
  },
  {
    id: "HERITAGE",
    label: "Heritage",
    icon: "bi-bank",
  },
  {
    id: "RIVERSIDE",
    label: "Riverside",
    icon: "bi-water",
  },
  {
    id: "NEIGHBOURHOODS",
    label: "Neighbourhoods",
    icon: "bi-map",
  },
  {
    id: "FOOD & CULTURE",
    label: "Food & Culture",
    icon: "bi-cup-hot",
  },
  {
    id: "NIGHTLIFE",
    label: "Nightlife",
    icon: "bi-moon-stars",
  },
];

/* =========================================================
   HOME
========================================================= */

function Home() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("ALL");

  /* =======================================================
     HERO IMAGE CHANGE — EVERY 3 SECONDS
  ======================================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  /* =======================================================
     FILTER EXPERIENCES
  ======================================================= */

  const filteredExperiences = useMemo(() => {
    if (activeTab === "ALL") {
      return experiences;
    }

    return experiences.filter(
      (experience) => experience.category === activeTab
    );
  }, [activeTab]);

  /* =======================================================
     TAB CHANGE
  ======================================================= */

  const handleTabChange = (tab) => {
    setActiveTab(tab);

    setTimeout(() => {
      const section = document.getElementById(
        "lonvera-home-experiences"
      );

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 50);
  };

  return (
    <div className="lonvera-home-page">

      <Navbar />

      <main>

        {/* =================================================
            HERO
        ================================================= */}

        <section className="lonvera-home-hero">

          {heroImages.map((image, index) => (
            <img
              key={image}
              src={image}
              alt="London"
              className={`lonvera-home-hero-image ${
                index === heroIndex ? "active" : ""
              }`}
            />
          ))}

          <div className="lonvera-home-hero-overlay"></div>

          {/* HERO CONTENT — TEXT REMAINS SAME */}

          <div className="lonvera-home-hero-content">

            <div className="lonvera-home-hero-eyebrow">
              <span></span>
              THE LONDON LOCAL
              <span></span>
            </div>

            <h1>
              London,
              <br />
              <em>your way.</em>
            </h1>

            <p>
              A more personal way to discover one of
              the world's greatest cities.
            </p>

            <div className="lonvera-home-hero-buttons">

              <Link
                to="/destinations"
                className="lonvera-home-primary-btn"
              >
                Explore London
                <i className="bi bi-arrow-up-right"></i>
              </Link>

              <Link
                to="/contact"
                className="lonvera-home-secondary-btn"
              >
                Plan Your Journey
                <i className="bi bi-arrow-right"></i>
              </Link>

            </div>

          </div>

          {/* HERO BOTTOM */}

          <div className="lonvera-home-hero-bottom">

            <span>51°30′ N</span>

            <span className="lonvera-home-hero-line"></span>

            <span>0°07′ W</span>

            <span className="lonvera-home-scroll">
              SCROLL TO DISCOVER
              <i className="bi bi-arrow-down"></i>
            </span>

          </div>

          {/* SLIDER INDICATORS */}

          <div className="lonvera-home-hero-dots">

            {heroImages.map((_, index) => (
              <button
                key={index}
                type="button"
                className={index === heroIndex ? "active" : ""}
                onClick={() => setHeroIndex(index)}
                aria-label={`Show image ${index + 1}`}
              />
            ))}

          </div>

        </section>


        {/* =================================================
            MARQUEE
        ================================================= */}

     <section className="lonvera-marquee">
  <div className="lonvera-marquee-track">

    <div className="lonvera-marquee-group">

      <span className="lonvera-marquee-item">
        LONVÉRA
        <span className="lonvera-marquee-dot"></span>
        EXPLORE LONDON
      </span>

      <span className="lonvera-marquee-item">
        <em>PRIVATE EXPERIENCES</em>
        <span className="lonvera-marquee-dot"></span>
        LOCAL STORIES
      </span>

      <span className="lonvera-marquee-item">
        LONDON YOUR WAY
        <span className="lonvera-marquee-dot"></span>
        DISCOVER MORE
      </span>

    </div>

    <div className="lonvera-marquee-group">

      <span className="lonvera-marquee-item">
        LONVÉRA
        <span className="lonvera-marquee-dot"></span>
        EXPLORE LONDON
      </span>

      <span className="lonvera-marquee-item">
        <em>PRIVATE EXPERIENCES</em>
        <span className="lonvera-marquee-dot"></span>
        LOCAL STORIES
      </span>

      <span className="lonvera-marquee-item">
        LONDON YOUR WAY
        <span className="lonvera-marquee-dot"></span>
        DISCOVER MORE
      </span>

    </div>

  </div>
</section>


        {/* =================================================
            INTRO
        ================================================= */}

        <section className="lonvera-home-intro">

          <div className="lonvera-home-container">

            <div className="lonvera-home-intro-label">
              <span>01</span>
              <b></b>
              ABOUT LONVÉRA
            </div>

            <div className="lonvera-home-intro-grid">

              <div>

                <h2>
                  London is not
                  <br />
                  <em>one experience.</em>
                </h2>

              </div>

              <div className="lonvera-home-intro-copy">

                <p className="lead">
                  It is a collection of stories, streets,
                  flavours, people and moments waiting
                  to be discovered.
                </p>

                <p>
                  LONVÉRA brings them together to help
                  you experience London with curiosity,
                  character and a little more intention.
                </p>

                <Link
                  to="/about"
                  className="lonvera-home-under-link"
                >
                  Discover LONVÉRA
                  <i className="bi bi-arrow-up-right"></i>
                </Link>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            EXPERIENCE SECTION
        ================================================= */}

        <section
          className="lonvera-home-experiences"
          id="lonvera-home-experiences"
        >

          <div className="lonvera-home-container">

            {/* HEADING */}

            <div className="lonvera-home-experience-heading">

              <div>

                <span className="lonvera-home-mini-label">
                  CURATED FOR YOU
                </span>

                <h2>
                  Choose your
                  <br />
                  <em>London moment.</em>
                </h2>

              </div>

              <div className="lonvera-home-experience-heading-copy">

                <span>THE LONVÉRA EDIT</span>

                <p>
                  From quiet neighbourhood walks to
                  unforgettable evenings, discover
                  London your way.
                </p>

              </div>

            </div>


            {/* TABS */}

            <div className="lonvera-home-tabs-wrapper">

              <div className="lonvera-home-tabs">

                {experienceTabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    className={`lonvera-home-tab ${
                      activeTab === tab.id ? "active" : ""
                    }`}
                    onClick={() => handleTabChange(tab.id)}
                  >
                    <i className={`bi ${tab.icon}`}></i>
                    <span>{tab.label}</span>
                  </button>
                ))}

              </div>

            </div>


            {/* RESULT BAR */}

            <div className="lonvera-home-result">

              <span>
                <strong>{filteredExperiences.length}</strong>{" "}
                {filteredExperiences.length === 1
                  ? "experience"
                  : "experiences"}
              </span>

              <span>
                {activeTab === "ALL"
                  ? "ALL LONDON MOMENTS"
                  : activeTab}
              </span>

            </div>


            {/* CARDS */}

            <div
              className={`lonvera-home-experience-grid ${
                filteredExperiences.length === 1
                  ? "single-result"
                  : ""
              }`}
            >

              {filteredExperiences.map((experience) => (
                <ExperienceCard
                  key={experience.id}
                  {...experience}
                />
              ))}

            </div>

          </div>

        </section>


        {/* =================================================
            SIGNATURE EXPERIENCE
        ================================================= */}

        <section className="lonvera-home-signature">

          <div className="lonvera-home-container">

            <div className="lonvera-home-signature-card">

              <div className="lonvera-home-signature-image">

                <img
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=90"
                  alt="London after hours"
                />

                <div className="lonvera-home-signature-overlay"></div>

                <span>
                  LONVÉRA SIGNATURE
                </span>

              </div>

              <div className="lonvera-home-signature-content">

                <small>
                  OUR SIGNATURE EXPERIENCE
                </small>

                <h2>
                  London
                  <br />
                  <em>after hours.</em>
                </h2>

                <p>
                  When the crowds disappear and the city
                  begins to glow, London reveals another
                  personality. Discover hidden streets,
                  atmospheric rooftops and beautifully lit
                  landmarks with a local who knows the city
                  after dark.
                </p>

                <div className="lonvera-home-signature-details">

                  <span>
                    <i className="bi bi-clock"></i>
                    3.5 HOURS
                  </span>

                  <span>
                    <i className="bi bi-people"></i>
                    PRIVATE
                  </span>

                  <span>
                    <i className="bi bi-moon-stars"></i>
                    NIGHT
                  </span>

                </div>

                <Link
                  to="/contact"
                  className="lonvera-home-dark-btn"
                >
                  Enquire About This
                  <i className="bi bi-arrow-up-right"></i>
                </Link>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            LONDON MAP
        ================================================= */}

        <section className="lonvera-home-map-section">

          <div className="lonvera-home-container">

            <div className="lonvera-home-map-heading">

              <div>

                <span className="lonvera-home-mini-label">
                  FIND YOUR WAY
                </span>

                <h2>
                  London,
                  <br />
                  <em>chapter by chapter.</em>
                </h2>

              </div>

              <p>
                From royal Westminster to the creative
                energy of East London, every neighbourhood
                tells a different story.
              </p>

            </div>


            <div className="lonvera-home-map-card">

              {/* MAP */}

              <div className="lonvera-home-map">

                <iframe
                  title="London Map"
                  src="https://www.google.com/maps?q=London,UK&output=embed"
                  loading="lazy"
                  allowFullScreen
                ></iframe>

                <div className="lonvera-home-map-overlay"></div>

                <div className="lonvera-home-map-pin">

                  <div className="lonvera-home-map-pin-dot">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>

                  <span>LONVÉRA</span>

                </div>

              </div>


              {/* MAP CONTENT */}

              <div className="lonvera-home-map-content">

                <span className="lonvera-home-map-kicker">
                  51°30′ N · 0°07′ W
                </span>

                <h3>
                  Your London
                  <br />
                  starts here.
                </h3>

                <p>
                  Explore the city with a local perspective.
                  We help you connect the landmarks with
                  the neighbourhoods, stories and experiences
                  that make London unforgettable.
                </p>

                <div className="lonvera-home-map-details">

                  <span>
                    <i className="bi bi-geo-alt"></i>
                    CENTRAL LONDON
                  </span>

                  <span>
                    <i className="bi bi-compass"></i>
                    LOCAL EDIT
                  </span>

                </div>

                <Link
                  to="/destinations"
                  className="lonvera-home-map-btn"
                >
                  Explore Destinations
                  <i className="bi bi-arrow-up-right"></i>
                </Link>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            FINAL IMAGE CTA
        ================================================= */}

        <section className="lonvera-home-final">

          <img
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=2200&q=90"
            alt="London at night"
          />

          <div className="lonvera-home-final-overlay"></div>

          <div className="lonvera-home-final-content">

            <span>
              YOUR LONDON AWAITS
            </span>

            <h2>
              Let's make it
              <br />
              <em>worth remembering.</em>
            </h2>

            <p>
              Tell us what kind of London you want
              to experience. We'll help you build
              the rest.
            </p>

            <Link
              to="/contact"
              className="lonvera-home-final-btn"
            >
              Start Planning
              <i className="bi bi-arrow-up-right"></i>
            </Link>

          </div>

        </section>

      </main>

      <Footer />

      <WhatsAppButton />

      <ScrollToTop />

    </div>
  );
}

export default Home;