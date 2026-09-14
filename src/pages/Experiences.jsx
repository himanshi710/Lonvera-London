import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollToTop from "../components/ScrollToTop";
import SectionTitle from "../components/SectionTitle";
import ExperienceCard from "../components/ExperienceCard";

import "./Experiences.css";

/* =========================================================
   EXPERIENCES DATA
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
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=85",
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
   TABS
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
   PAGE
========================================================= */

function Experiences() {
  const [activeTab, setActiveTab] = useState("ALL");

  /* =======================================================
     FILTER CARDS
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
     CHANGE TAB
  ======================================================= */

  const handleTabChange = (tab) => {
    setActiveTab(tab);

    setTimeout(() => {
      const section = document.getElementById("experience-cards");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 50);
  };

  return (
    <div className="lonvera-experiences">

      {/* ===================================================
          NAVBAR
      =================================================== */}

      <Navbar />

      {/* ===================================================
          HERO
      =================================================== */}

      <section className="lonvera-experiences-hero">

        <img
          src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=2200&q=90"
          alt="London"
        />

        <div className="lonvera-experiences-hero-overlay"></div>

        <div className="container">

          <div className="lonvera-experiences-hero-content">

            <span className="lonvera-experiences-eyebrow">
              <i></i>
              THE LONVÉRA EXPERIENCE
            </span>

            <h1>
              London,
              <br />
              <em>experienced.</em>
            </h1>

            <p>
              Curated moments, local stories and
              <br />
              experiences beyond the ordinary.
            </p>

            <a
              href="#experience-cards"
              className="lonvera-experience-scroll"
            >
              Explore Experiences
              <i className="bi bi-arrow-down"></i>
            </a>

          </div>

        </div>
      </section>

      {/* ===================================================
          INTRO
      =================================================== */}

      <section className="section lonvera-experiences-intro">

        <div className="container">

          <div className="lonvera-experiences-intro-grid">

            <div>
              <span className="lonvera-experiences-label">
                NOT JUST A TOUR
              </span>

              <h2>
                Moments you'll
                <br />
                <em>remember.</em>
              </h2>
            </div>

            <div className="lonvera-experiences-intro-copy">

              <p className="lead">
                The best way to know London is to experience it slowly,
                personally and with curiosity.
              </p>

              <p>
                Our experiences are designed around the details that make
                the city special — its neighbourhoods, food, architecture,
                stories and people.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================
          EXPERIENCE CARDS
      =================================================== */}

      <section
        className="section lonvera-experience-list"
        id="experience-cards"
      >

        <div className="container">

          {/* HEADER */}

          <div className="lonvera-experience-list-heading">

            <div>

              <span className="lonvera-experiences-label">
                CURATED FOR YOU
              </span>

              <h2>
                Choose your
                <br />
                <em>London moment.</em>
              </h2>

            </div>

            <p>
              From private walks to unforgettable evenings,
              <br />
              discover London your way.
            </p>

          </div>

          {/* =================================================
              TABS
          ================================================= */}

          <div className="lonvera-experience-tabs-wrapper">

            <div className="lonvera-experience-tabs">

              {experienceTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  className={`lonvera-experience-tab ${
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

          {/* RESULT COUNT */}

          <div className="lonvera-experience-result">

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

          {/* =================================================
              FILTERED CARDS
          ================================================= */}

          <div
            className={`lonvera-experience-grid ${
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

      {/* ===================================================
          FEATURE EXPERIENCE
      =================================================== */}

      <section className="lonvera-feature-experience">

        <div className="container">

          <div className="lonvera-feature-experience-card">

            <div className="lonvera-feature-experience-image">

              <img
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1500&q=85"
                alt="London after hours"
                loading="lazy"
              />

              <div className="lonvera-feature-experience-overlay"></div>

              <span className="lonvera-feature-experience-badge">
                LONVÉRA SIGNATURE
              </span>

            </div>

            <div className="lonvera-feature-experience-content">

              <span className="lonvera-feature-small-label">
                OUR SIGNATURE EXPERIENCE
              </span>

              <h2>
                London
                <br />
                <em>after hours.</em>
              </h2>

              <p>
                When the crowds disappear and the city begins to glow,
                London reveals another personality. Discover hidden
                streets, atmospheric rooftops and beautifully lit
                landmarks with a local who knows the city after dark.
              </p>

              <div className="lonvera-feature-details">

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
                className="lonvera-rounded-btn"
              >
                Enquire About This
                <i className="bi bi-arrow-up-right"></i>
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================
          WHY LONVÉRA
      =================================================== */}

      <section className="section lonvera-experience-values">

        <div className="container">

          <div className="lonvera-experience-values-heading">

            <span>THE LONVÉRA DIFFERENCE</span>

            <h2>
              London,
              <br />
              <em>our way.</em>
            </h2>

          </div>

          <div className="lonvera-experience-values-grid">

            <div className="lonvera-experience-value">

              <span>01</span>

              <div>
                <h3>Local Perspective</h3>

                <p>
                  Discover the places and stories that
                  guidebooks often miss.
                </p>
              </div>

            </div>

            <div className="lonvera-experience-value">

              <span>02</span>

              <div>
                <h3>Thoughtfully Curated</h3>

                <p>
                  Every experience is designed with
                  atmosphere, pace and detail in mind.
                </p>
              </div>

            </div>

            <div className="lonvera-experience-value">

              <span>03</span>

              <div>
                <h3>Made Personal</h3>

                <p>
                  Your London should feel personal,
                  flexible and completely yours.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================
          CTA
      =================================================== */}

     

      {/* ===================================================
          FOOTER
      =================================================== */}

      <Footer />

      <WhatsAppButton />

      <ScrollToTop />

    </div>
  );
}

export default Experiences;