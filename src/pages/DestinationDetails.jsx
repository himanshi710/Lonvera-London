import { Link, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollToTop from "../components/ScrollToTop";

import "./DestinationDetails.css";

const destinations = {
  "central-london": {
    title: "Central London",
    location: "London, United Kingdom",
    category: "THE HEART OF LONDON",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1800&q=85",
    intro:
      "Where London's grandest landmarks, elegant streets and timeless energy come together. Central London is the perfect starting point for discovering the city.",
    description:
      "From historic squares and royal residences to iconic shopping streets and celebrated cultural institutions, Central London gives you an effortless introduction to the capital. Wander at your own pace or let LONVÉRA shape a private day around the places you want to experience.",
    highlights: [
      "Buckingham Palace",
      "Westminster",
      "Covent Garden",
      "St James's",
      "Trafalgar Square",
      "Piccadilly",
    ],
    experiences: [
      "Private Westminster Walk",
      "Royal London Experience",
      "Curated Central London Shopping",
    ],
  },

  "notting-hill": {
    title: "Notting Hill",
    location: "West London, United Kingdom",
    category: "COLOUR & CHARACTER",
    image:
      "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=1800&q=85",
    intro:
      "Pastel façades, independent boutiques, beautiful cafés and a distinctly creative London spirit.",
    description:
      "Notting Hill is one of London's most recognisable neighbourhoods, but beyond its famous streets lies a softer, more local side of the city. Discover colourful architecture, independent stores, relaxed cafés and elegant residential lanes.",
    highlights: [
      "Portobello Road",
      "Ladbroke Grove",
      "Westbourne Grove",
      "Independent Boutiques",
      "Local Cafés",
      "Colourful Mews",
    ],
    experiences: [
      "Notting Hill Neighbourhood Walk",
      "Portobello Market Discovery",
      "West London Café Trail",
    ],
  },

  "south-bank": {
    title: "South Bank",
    location: "Central London, United Kingdom",
    category: "RIVERFRONT LONDON",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1800&q=85",
    intro:
      "A riverside perspective of London filled with culture, architecture, food and unforgettable views.",
    description:
      "Following the Thames reveals a different rhythm of London. South Bank connects some of the city's most loved cultural spaces with riverside restaurants, bridges and spectacular views across the skyline.",
    highlights: [
      "River Thames",
      "London Eye",
      "Tate Modern",
      "Millennium Bridge",
      "Borough Market",
      "Shakespeare's Globe",
    ],
    experiences: [
      "Private Thames Riverside Walk",
      "South Bank Food Journey",
      "London Skyline Photography Walk",
    ],
  },

  "shoreditch": {
    title: "Shoreditch",
    location: "East London, United Kingdom",
    category: "CREATIVE LONDON",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1800&q=85",
    intro:
      "Street art, independent design, hidden bars and London's endlessly creative East.",
    description:
      "Shoreditch is where contemporary London feels most experimental. Explore colourful street art, independent fashion, design studios, coffee spots and some of the city's most interesting evening venues.",
    highlights: [
      "Brick Lane",
      "Street Art",
      "Spitalfields",
      "Independent Design",
      "Old Street",
      "Local Food",
    ],
    experiences: [
      "Street Art Discovery",
      "East London Food Walk",
      "Independent Shopping Trail",
    ],
  },

  "kensington-chelsea": {
    title: "Kensington & Chelsea",
    location: "West London, United Kingdom",
    category: "ELEGANT LONDON",
    image:
      "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=1800&q=85",
    intro:
      "Elegant architecture, royal parks, galleries and some of London's most refined neighbourhoods.",
    description:
      "Kensington and Chelsea offer a polished side of London defined by beautiful architecture, museums, gardens and sophisticated dining. It is ideal for travellers looking for a slower, more refined city experience.",
    highlights: [
      "Kensington Palace",
      "Hyde Park",
      "Royal Albert Hall",
      "V&A Museum",
      "King's Road",
      "Chelsea Streets",
    ],
    experiences: [
      "Kensington Museum Day",
      "Chelsea Design & Shopping",
      "Private Royal Parks Walk",
    ],
  },

  "greenwich": {
    title: "Greenwich",
    location: "South East London, United Kingdom",
    category: "HERITAGE & HORIZONS",
    image:
      "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=1800&q=85",
    intro:
      "Maritime heritage, open green spaces and one of the most memorable views across London.",
    description:
      "Greenwich feels wonderfully removed from central London while remaining part of the capital. Explore historic maritime landmarks, beautiful parkland and panoramic views before returning to the city by river.",
    highlights: [
      "Greenwich Park",
      "Royal Observatory",
      "Cutty Sark",
      "Old Royal Naval College",
      "Thames Riverside",
      "London Skyline",
    ],
    experiences: [
      "Greenwich Heritage Walk",
      "Thames Boat Journey",
      "Royal Observatory Experience",
    ],
  },
};

function DestinationDetails() {
  const { id } = useParams();

  const destination = destinations[id];

  if (!destination) {
    return (
      <>
        <Navbar />

        <main className="lonvera-destination-not-found">
          <span>404</span>
          <h1>Destination not found.</h1>
          <p>
            This London story seems to have taken a different turn.
          </p>

          <Link to="/destinations" className="lonvera-rounded-btn">
            Back to destinations
            <i className="bi bi-arrow-right"></i>
          </Link>
        </main>

        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="lonvera-destination-details">

        {/* =========================================
            HERO
        ========================================= */}

        <section className="lonvera-details-hero">
          <img
            src={destination.image}
            alt={destination.title}
          />

          <div className="lonvera-details-hero-overlay"></div>

          <div className="container">
            <div className="lonvera-details-hero-content">

              <Link
                to="/destinations"
                className="lonvera-details-back"
              >
                <i className="bi bi-arrow-left"></i>
                All destinations
              </Link>

              <span className="lonvera-details-eyebrow">
                <i></i>
                {destination.category}
              </span>

              <h1>{destination.title}</h1>

              <p>
                <i className="bi bi-geo-alt"></i>
                {destination.location}
              </p>

            </div>
          </div>
        </section>


        {/* =========================================
            INTRO
        ========================================= */}

        <section className="lonvera-details-intro section">
          <div className="container">

            <div className="lonvera-details-intro-grid">

              <div>
                <span className="lonvera-details-small-label">
                  LONVÉRA / DESTINATION
                </span>

                <h2>
                  A different side of
                  <em> London.</em>
                </h2>
              </div>

              <div className="lonvera-details-intro-copy">
                <p className="lonvera-details-lead">
                  {destination.intro}
                </p>

                <p>
                  {destination.description}
                </p>

                <Link
                  to="/contact"
                  className="lonvera-rounded-btn"
                >
                  Plan this experience
                  <i className="bi bi-arrow-up-right"></i>
                </Link>
              </div>

            </div>

          </div>
        </section>


        {/* =========================================
            HIGHLIGHTS
        ========================================= */}

        <section className="lonvera-details-highlights section">
          <div className="container">

            <div className="lonvera-details-section-heading">
              <div>
                <span className="lonvera-details-small-label">
                  WHAT TO SEE
                </span>

                <h2>
                  The places
                  <em> worth knowing.</em>
                </h2>
              </div>

              <p>
                Discover the landmarks, streets and neighbourhood
                details that make this part of London unique.
              </p>
            </div>


            <div className="lonvera-highlights-grid">
              {destination.highlights.map((item, index) => (
                <div
                  className="lonvera-highlight-card"
                  key={item}
                >
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{item}</h3>

                  <i className="bi bi-arrow-up-right"></i>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* =========================================
            EXPERIENCE IMAGE
        ========================================= */}

        <section className="lonvera-details-image-section">
          <div className="container">

            <div className="lonvera-details-large-image">
              <img
                src={destination.image}
                alt={`${destination.title} London`}
                loading="lazy"
              />

              <div className="lonvera-details-large-image-overlay"></div>

              <div className="lonvera-details-image-caption">
                <span>EXPLORE WITH LONVÉRA</span>

                <h2>
                  London,
                  <br />
                  <em>your way.</em>
                </h2>
              </div>
            </div>

          </div>
        </section>


        {/* =========================================
            EXPERIENCES
        ========================================= */}

        <section className="lonvera-details-experiences section">
          <div className="container">

            <div className="lonvera-details-section-heading centered">
              <span className="lonvera-details-small-label">
                CURATED EXPERIENCES
              </span>

              <h2>
                Make your visit
                <em> memorable.</em>
              </h2>

              <p>
                Thoughtfully planned experiences designed around
                your interests, pace and style of travel.
              </p>
            </div>


            <div className="lonvera-details-experience-grid">

              {destination.experiences.map((experience, index) => (
                <div
                  className="lonvera-details-experience-card"
                  key={experience}
                >
                  <div className="lonvera-experience-number">
                    0{index + 1}
                  </div>

                  <div>
                    <span>PRIVATE EXPERIENCE</span>
                    <h3>{experience}</h3>
                  </div>

                  <Link to="/contact">
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>
                </div>
              ))}

            </div>

          </div>
        </section>


        {/* =========================================
            CTA
        ========================================= */}

        <section className="lonvera-details-cta">
          <div className="container">

            <div className="lonvera-details-cta-card">

              <div>
                <span className="lonvera-details-small-label">
                  READY WHEN YOU ARE
                </span>

                <h2>
                  Let's create your
                  <em> London story.</em>
                </h2>
              </div>

              <div className="lonvera-details-cta-action">

                <p>
                  Tell us what you want to experience and
                  we'll shape the rest.
                </p>

                <Link
                  to="/contact"
                  className="lonvera-rounded-btn light"
                >
                  Start a conversation
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

export default DestinationDetails;