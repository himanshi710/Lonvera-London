import { Link, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollToTop from "../components/ScrollToTop";

import "./ExperienceDetails.css";


/* =========================================================
   EXPERIENCE DETAILS DATA
========================================================= */

const experienceDetails = {
  "private-london-walk": {
    title: "Private London Walk",
    category: "CITY STORIES",
    location: "Central London",
    duration: "3 HOURS",
    price: "£95",

    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=2000&q=90",

    description:
      "Discover London at your own pace through a beautifully curated private walking experience. Follow historic streets, iconic landmarks and hidden corners while your private guide brings the city to life.",

    intro:
      "London is best discovered slowly. This private walking experience takes you beyond the standard sightseeing route and introduces you to the stories, architecture and everyday details that make the capital unforgettable.",

    tags: [
      "PRIVATE",
      "CITY TOUR",
      "ICONIC",
    ],

    highlights: [
      "Private local guide",
      "Iconic London landmarks",
      "Hidden streets and stories",
      "Flexible walking pace",
      "Personalised experience",
      "Perfect for first-time visitors",
    ],

    itinerary: [
      {
        number: "01",
        title: "Meet your local guide",
        text:
          "Begin your experience in Central London and meet your private guide before setting off through the heart of the city.",
      },
      {
        number: "02",
        title: "Discover iconic London",
        text:
          "Walk through some of London's most recognisable areas while discovering the history and stories behind them.",
      },
      {
        number: "03",
        title: "Hidden London",
        text:
          "Leave the obvious route behind and explore atmospheric streets, beautiful corners and lesser-known details.",
      },
      {
        number: "04",
        title: "Your London moment",
        text:
          "Finish your walk with recommendations tailored around your interests, from food and culture to shopping and nightlife.",
      },
    ],
  },


  "royal-london": {
    title: "Royal London",
    category: "HERITAGE",
    location: "Westminster",
    duration: "4 HOURS",
    price: "£140",

    image:
      "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=2000&q=90",

    description:
      "Step into the world of royal London with a private journey through Westminster, grand avenues, historic palaces and centuries of British heritage.",

    intro:
      "From ceremonial streets to magnificent architecture, Royal London reveals a side of the capital shaped by monarchy, tradition and remarkable historical moments.",

    tags: [
      "ROYAL",
      "HERITAGE",
      "HISTORY",
    ],

    highlights: [
      "Westminster highlights",
      "Royal history",
      "Private local guide",
      "Historic architecture",
      "Buckingham Palace area",
      "Personalised route",
    ],

    itinerary: [
      {
        number: "01",
        title: "Westminster",
        text:
          "Begin around Westminster and discover the political and royal heart of London.",
      },
      {
        number: "02",
        title: "Royal stories",
        text:
          "Hear fascinating stories surrounding Britain's monarchy and royal traditions.",
      },
      {
        number: "03",
        title: "Historic avenues",
        text:
          "Walk through elegant streets and ceremonial routes connecting some of London's most important landmarks.",
      },
      {
        number: "04",
        title: "A royal finale",
        text:
          "Complete your experience with a carefully selected route and personalised local recommendations.",
      },
    ],
  },


  "thames-sunset": {
    title: "Thames at Sunset",
    category: "RIVERSIDE",
    location: "South Bank",
    duration: "2.5 HOURS",
    price: "£120",

    image:
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=2000&q=90",

    description:
      "Watch London transform as the sun begins to set. Follow the Thames through some of the city's most atmospheric riverside locations.",

    intro:
      "As daylight fades, London's skyline becomes something completely different. This relaxed evening experience combines riverside views, photography moments and local stories.",

    tags: [
      "SUNSET",
      "RIVERSIDE",
      "SCENIC",
    ],

    highlights: [
      "Golden-hour views",
      "Thames riverside walk",
      "London skyline",
      "Photography moments",
      "Relaxed pace",
      "Local recommendations",
    ],

    itinerary: [
      {
        number: "01",
        title: "Meet by the Thames",
        text:
          "Start your evening around South Bank and prepare for a slower side of London.",
      },
      {
        number: "02",
        title: "Riverside stories",
        text:
          "Explore the Thames while discovering stories connected to London's river.",
      },
      {
        number: "03",
        title: "Golden hour",
        text:
          "Enjoy some of the city's most beautiful sunset views.",
      },
      {
        number: "04",
        title: "London after sunset",
        text:
          "Continue into the evening and discover London's changing atmosphere.",
      },
    ],
  },


  "notting-hill-discovery": {
    title: "Notting Hill Discovery",
    category: "NEIGHBOURHOODS",
    location: "Notting Hill",
    duration: "3 HOURS",
    price: "£110",

    image:
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=2000&q=90",

    description:
      "Discover colourful streets, elegant architecture, independent boutiques and the local character that makes Notting Hill so distinctive.",

    intro:
      "Notting Hill is much more than its famous colourful houses. Explore the neighbourhood slowly and uncover its markets, independent shops, architecture and hidden corners.",

    tags: [
      "LOCAL",
      "COLOURFUL",
      "WALK",
    ],

    highlights: [
      "Colourful streets",
      "Local neighbourhood stories",
      "Independent boutiques",
      "Market areas",
      "Photography stops",
      "Private guide",
    ],

    itinerary: [
      {
        number: "01",
        title: "Neighbourhood introduction",
        text:
          "Begin with an introduction to the history and personality of Notting Hill.",
      },
      {
        number: "02",
        title: "Colourful London",
        text:
          "Explore the neighbourhood's iconic streets and beautiful residential architecture.",
      },
      {
        number: "03",
        title: "Local discoveries",
        text:
          "Visit independent shops, cafés and interesting local corners.",
      },
      {
        number: "04",
        title: "Hidden favourites",
        text:
          "Finish with recommendations for exploring more of West London independently.",
      },
    ],
  },


  "london-food-journey": {
    title: "London Food Journey",
    category: "FOOD & CULTURE",
    location: "Central London",
    duration: "4 HOURS",
    price: "£155",

    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=90",

    description:
      "Taste your way through London with a private food experience celebrating independent restaurants, classic favourites and contemporary food culture.",

    intro:
      "London's food scene is one of the world's most diverse. This journey brings together neighbourhood stories, memorable flavours and carefully selected local places.",

    tags: [
      "FOOD",
      "LOCAL",
      "CULTURE",
    ],

    highlights: [
      "Curated food stops",
      "Local restaurants",
      "British favourites",
      "Food stories",
      "Private experience",
      "Personal recommendations",
    ],

    itinerary: [
      {
        number: "01",
        title: "Meet your host",
        text:
          "Begin your food journey with your local host and an introduction to London's food culture.",
      },
      {
        number: "02",
        title: "Taste London",
        text:
          "Visit carefully selected food spots and discover flavours from across the city.",
      },
      {
        number: "03",
        title: "Stories behind the food",
        text:
          "Learn how London's diverse communities have shaped the city's incredible food scene.",
      },
      {
        number: "04",
        title: "Local favourites",
        text:
          "Finish with a collection of personalised recommendations for the rest of your London stay.",
      },
    ],
  },


  "shoreditch-after-dark": {
    title: "Shoreditch After Dark",
    category: "NIGHTLIFE",
    location: "East London",
    duration: "3.5 HOURS",
    price: "£135",

    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=2000&q=90",

    description:
      "Experience Shoreditch after dark through creative streets, contemporary culture, atmospheric spaces and London's energetic nightlife.",

    intro:
      "When the sun goes down, Shoreditch changes completely. Discover street art, creative spaces, atmospheric streets and the independent personality of East London.",

    tags: [
      "NIGHTLIFE",
      "CREATIVE",
      "LOCAL",
    ],

    highlights: [
      "Shoreditch nightlife",
      "Street art",
      "Creative neighbourhoods",
      "Independent venues",
      "Evening atmosphere",
      "Private local guide",
    ],

    itinerary: [
      {
        number: "01",
        title: "Shoreditch at dusk",
        text:
          "Begin as the neighbourhood transitions from daytime creativity into its evening personality.",
      },
      {
        number: "02",
        title: "Street art",
        text:
          "Discover murals, creative spaces and ever-changing street art around Shoreditch.",
      },
      {
        number: "03",
        title: "After-dark London",
        text:
          "Explore atmospheric streets and independent places away from the usual tourist routes.",
      },
      {
        number: "04",
        title: "Your evening",
        text:
          "End with personalised recommendations for food, drinks, music and nightlife.",
      },
    ],
  },
};


/* =========================================================
   PAGE
========================================================= */

function ExperienceDetails() {
  const { id } = useParams();

  const experience = experienceDetails[id];

  /* =======================================================
     NOT FOUND
  ======================================================= */

  if (!experience) {
    return (
      <div className="lonvera-experience-details-page">
        <Navbar />

        <main className="lonvera-experience-not-found">

          <span>404</span>

          <h1>Experience not found.</h1>

          <p>
            The London moment you're looking for
            doesn't exist.
          </p>

          <Link to="/experiences">
            Back to Experiences
            <i className="bi bi-arrow-right"></i>
          </Link>

        </main>

        <Footer />

        <WhatsAppButton />

        <ScrollToTop />
      </div>
    );
  }


  return (
    <div className="lonvera-experience-details-page">

      <Navbar />


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="lonvera-experience-details-hero">

        <img
          src={experience.image}
          alt={experience.title}
        />

        <div className="lonvera-details-hero-overlay"></div>

        <div className="container">

          <div className="lonvera-details-hero-content">

            <Link
              to="/experiences"
              className="lonvera-details-back"
            >
              <i className="bi bi-arrow-left"></i>
              All Experiences
            </Link>

            <span className="lonvera-details-category">
              {experience.category}
            </span>

            <h1 className="text-light">
              {experience.title}
            </h1>

            <div className="lonvera-details-hero-meta">

              <span className="text-light">
                <i className="bi bi-geo-alt"></i>
                {experience.location}
              </span>

              <span>
                <i className="bi bi-clock"></i>
                {experience.duration}
              </span>

              <span>
                <i className="bi bi-stars"></i>
                Private Experience
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="lonvera-details-intro">

        <div className="container">

          <div className="lonvera-details-intro-grid">

            <div className="lonvera-details-intro-title">

              <span>
                THE EXPERIENCE
              </span>

              <h2>
                {experience.title}
                <br />
                <em>your way.</em>
              </h2>

            </div>

            <div className="lonvera-details-intro-copy">

              <p className="lonvera-details-lead">
                {experience.description}
              </p>

              <p>
                {experience.intro}
              </p>

              <div className="lonvera-details-tags">

                {experience.tags.map((tag) => (
                  <span key={tag}>
                    {tag}
                  </span>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          HIGHLIGHTS
      ===================================================== */}

      <section className="lonvera-details-highlights">

        <div className="container">

          <div className="lonvera-details-section-title">

            <span>
              WHAT'S INCLUDED
            </span>

            <h2>
              Designed around
              <br />
              <em>the details.</em>
            </h2>

          </div>


          <div className="lonvera-highlights-grid">

            {experience.highlights.map((highlight, index) => (

              <div
                className="lonvera-highlight-card"
                key={highlight}
              >

                <span>
                  0{index + 1}
                </span>

                <i className="bi bi-check2"></i>

                <h3>
                  {highlight}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          LARGE IMAGE
      ===================================================== */}

      <section className="lonvera-details-image-section">

        <div className="container">

          <div className="lonvera-details-large-image">

            <img
              src={experience.image}
              alt={experience.title}
              loading="lazy"
            />

            <div className="lonvera-details-large-overlay"></div>

            <div className="lonvera-details-image-caption">

              <span>
                LONVÉRA / LONDON
              </span>

              <strong>
                Experience London differently.
              </strong>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ITINERARY
      ===================================================== */}

      <section className="lonvera-details-itinerary">

        <div className="container">

          <div className="lonvera-details-itinerary-heading">

            <span>
              YOUR JOURNEY
            </span>

            <h2>
              A London moment,
              <br />
              <em>beautifully planned.</em>
            </h2>

          </div>


          <div className="lonvera-itinerary-list">

            {experience.itinerary.map((item) => (

              <div
                className="lonvera-itinerary-item"
                key={item.number}
              >

                <div className="lonvera-itinerary-number">
                  {item.number}
                </div>

                <div className="lonvera-itinerary-content">

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </div>

                <i className="bi bi-arrow-up-right"></i>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          BOOKING CTA
      ===================================================== */}

      <section className="lonvera-details-booking">

        <div className="container">

          <div className="lonvera-booking-card">

            <div>

              <span>
                READY WHEN YOU ARE
              </span>

              <h2>
                Your London
                <br />
                <em>starts here.</em>
              </h2>

              <p>
                Tell us what kind of London experience
                you're looking for and we'll take care
                of the details.
              </p>

            </div>


            <div className="lonvera-booking-action">

              <div className="lonvera-booking-price">

                <small>
                  STARTING FROM
                </small>

                <strong>
                  {experience.price}
                </strong>

                <span>
                  per person
                </span>

              </div>

              <Link
                to="/contact"
                className="lonvera-booking-button"
              >
                Enquire Now
                <i className="bi bi-arrow-up-right"></i>
              </Link>

            </div>

          </div>

        </div>

      </section>


      <Footer />

      <WhatsAppButton />

      <ScrollToTop />

    </div>
  );
}

export default ExperienceDetails;