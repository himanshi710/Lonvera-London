import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollToTop from "../components/ScrollToTop";

import "./Shopping.css";

const shoppingPlaces = [
  {
    id: "01",
    name: "Bond Street",
    area: "Mayfair",
    category: "LUXURY",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=90",
    description:
      "Elegant boutiques, heritage houses and some of London's most coveted luxury addresses.",
  },
  {
    id: "02",
    name: "Covent Garden",
    area: "Central London",
    category: "LIFESTYLE",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGSID4eVISUMQShMMfm94ZicA3HToQVBR-OBizOnppvA&s=10",
    description:
      "A lively mix of fashion, beauty, independent labels, cafés and beautiful little discoveries.",
  },
  {
    id: "03",
    name: "Notting Hill",
    area: "West London",
    category: "BOUTIQUE",
    image:
      "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&w=1600&q=90",
    description:
      "Colourful streets, independent boutiques, vintage treasures and neighbourhood character.",
  },
  {
    id: "04",
    name: "Camden Market",
    area: "North London",
    category: "MARKETS",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1600&q=90",
    description:
      "Alternative fashion, streetwear, handmade pieces and London's unmistakably creative side.",
  },
  {
    id: "05",
    name: "King's Road",
    area: "Chelsea",
    category: "DESIGN",
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1600&q=90",
    description:
      "A polished Chelsea shopping route filled with design, fashion and independent names.",
  },
  {
    id: "06",
    name: "Liberty London",
    area: "Soho",
    category: "BRITISH ICON",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1600&q=90",
    description:
      "A London institution known for distinctive fabrics, interiors, beauty and British style.",
  },
];

const shoppingCategories = [
  "ALL",
  "LUXURY",
  "BOUTIQUE",
  "MARKETS",
  "DESIGN",
  "BRITISH ICON",
];

const shoppingStyles = [
  {
    number: "01",
    title: "British Classics",
    text:
      "Timeless pieces, heritage labels and beautifully made things that feel unmistakably British.",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=90",
  },
  {
    number: "02",
    title: "Independent Finds",
    text:
      "Small labels, creative studios and hidden boutiques away from the obvious shopping streets.",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=90",
  },
  {
    number: "03",
    title: "Market Treasures",
    text:
      "Vintage objects, artwork, handmade goods and unexpected pieces waiting to be discovered.",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1400&q=90",
  },
];

function Shopping() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredPlaces =
    activeCategory === "ALL"
      ? shoppingPlaces
      : shoppingPlaces.filter(
          (place) => place.category === activeCategory
        );

  return (
    <>
      <Navbar />

      <main className="lonvera-shopping">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="lonvera-shopping-hero">

          <div className="lonvera-shopping-hero-image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN2U2bBzzGiGZGDTmtkc3-pQTzE5suNcr2sO_G0Lrb7Q&s=10"
              alt="London shopping street"
            />
          </div>

          <div className="lonvera-shopping-hero-overlay"></div>

          <div className="container">

            <div className="lonvera-shopping-hero-content">

              <span className="lonvera-shopping-eyebrow">
                <i></i>
                LONVÉRA / SHOPPING
              </span>

              <h1 className="text-light">
                Shop
                <br />
                <em>London.</em>
              </h1>

              <p>
                From elegant Mayfair boutiques to colourful
                <br />
                markets and independent discoveries.
              </p>

              <a
                href="#shopping-edit"
                className="lonvera-shopping-scroll"
              >
                Explore the edit
                <i className="bi bi-arrow-down"></i>
              </a>

            </div>

          </div>

        </section>


        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="lonvera-shopping-intro section">

          <div className="container">

            <div className="lonvera-shopping-intro-grid">

              <div>

                <span className="lonvera-shopping-label">
                  THE LONDON SHOPPING GUIDE
                </span>

                <h2>
                  Don't just
                  <br />
                  <em>buy things.</em>
                  <br />
                  Find stories.
                </h2>

              </div>

              <div className="lonvera-shopping-intro-copy">

                <p className="lead">
                  London is made for curious shoppers.
                </p>

                <p>
                  The best finds are often tucked behind beautiful
                  doors, around quiet corners or inside markets
                  that have been part of the city for generations.
                </p>

                <div className="lonvera-shopping-stat-row">

                  <div>
                    <strong>06</strong>
                    <span>CURATED AREAS</span>
                  </div>

                  <div>
                    <strong>∞</strong>
                    <span>THINGS TO DISCOVER</span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            SHOPPING EDIT
        ===================================================== */}

        <section
          className="lonvera-shopping-edit section"
          id="shopping-edit"
        >

          <div className="container">

            <div className="lonvera-shopping-heading">

              <div>

                <span>WHERE TO GO</span>

                <h2>
                  London's
                  <br />
                  <em>best addresses.</em>
                </h2>

              </div>

              <p>
                Whether you're searching for a statement piece,
                a thoughtful souvenir or simply somewhere beautiful
                to wander, start here.
              </p>

            </div>


            {/* FILTERS */}

            <div className="lonvera-shopping-filters">

              <div className="lonvera-shopping-filters-inner">

                {shoppingCategories.map((category) => (

                  <button
                    key={category}
                    type="button"
                    className={
                      activeCategory === category
                        ? "active"
                        : ""
                    }
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={activeCategory === category}
                  >
                    <span>
                      {category === "ALL"
                        ? "ALL PLACES"
                        : category}
                    </span>

                    {activeCategory === category && (
                      <i className="bi bi-arrow-up-right"></i>
                    )}

                  </button>

                ))}

              </div>

            </div>


            {/* RESULT INFO */}

            <div className="lonvera-shopping-results">

              <span>
                <strong>
                  {String(filteredPlaces.length).padStart(2, "0")}
                </strong>
                CURATED PLACES
              </span>

              <span>
                {activeCategory === "ALL"
                  ? "SHOWING THE COMPLETE EDIT"
                  : `FILTERED BY / ${activeCategory}`}
              </span>

            </div>


            {/* CARDS */}

            <div className="lonvera-shopping-grid">

              {filteredPlaces.map((place) => (

                <article
                  className="lonvera-shopping-card"
                  key={place.id}
                >

                  <div className="lonvera-shopping-card-image">

                    <img
                      src={place.image}
                      alt={place.name}
                      loading="lazy"
                    />

                    <div className="lonvera-shopping-card-overlay"></div>

                    <span className="lonvera-shopping-card-number">
                      {place.id}
                    </span>

                    <span className="lonvera-shopping-card-category">
                      {place.category}
                    </span>

                    <span className="lonvera-shopping-card-arrow">
                      <i className="bi bi-arrow-up-right"></i>
                    </span>

                  </div>


                  <div className="lonvera-shopping-card-content">

                    <div className="lonvera-shopping-card-top">

                      <span className="lonvera-shopping-location">
                        <i className="bi bi-geo-alt"></i>
                        {place.area}
                      </span>

                      <span className="lonvera-shopping-card-mini">
                        LONVÉRA EDIT
                      </span>

                    </div>

                    <h3>{place.name}</h3>

                    <p>{place.description}</p>

                    <div className="lonvera-shopping-card-line"></div>

                    <Link to="/contact">
                      Plan a shopping day
                      <i className="bi bi-arrow-right"></i>
                    </Link>

                  </div>

                </article>

              ))}

            </div>


            {filteredPlaces.length === 0 && (

              <div className="lonvera-shopping-empty">

                <i className="bi bi-bag-heart"></i>

                <h3>
                  More London finds are coming.
                </h3>

                <p>
                  Tell us what you're looking for and we'll
                  create a personal shopping route for you.
                </p>

                <Link to="/contact">
                  Talk to a London local
                  <i className="bi bi-arrow-up-right"></i>
                </Link>

              </div>

            )}

          </div>

        </section>


        {/* =====================================================
            SHOPPING STYLES
        ===================================================== */}

        <section className="lonvera-shopping-styles section">

          <div className="container">

            <div className="lonvera-shopping-styles-heading">

              <span>WHAT ARE YOU LOOKING FOR?</span>

              <h2>
                Choose your
                <br />
                <em>kind of treasure.</em>
              </h2>

            </div>


            <div className="lonvera-shopping-style-grid">

              {shoppingStyles.map((style) => (

                <article
                  className="lonvera-shopping-style-card"
                  key={style.number}
                >

                  <div className="lonvera-shopping-style-image">

                    <img
                      src={style.image}
                      alt={style.title}
                      loading="lazy"
                    />

                    <div></div>

                  </div>

                  <div className="lonvera-shopping-style-content">

                    <span>{style.number}</span>

                    <h3>{style.title}</h3>

                    <p>{style.text}</p>

                    <Link to="/contact">
                      Build my shopping day
                      <i className="bi bi-arrow-up-right"></i>
                    </Link>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            FEATURE
        ===================================================== */}

        <section className="lonvera-shopping-feature section">

          <div className="container">

            <div className="lonvera-shopping-feature-card">

              <div className="lonvera-shopping-feature-image">

                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1800&q=90"
                  alt="London boutique shopping"
                  loading="lazy"
                />

                <div></div>

              </div>


              <div className="lonvera-shopping-feature-content">

                <span>
                  THE LONVÉRA SHOPPING RULE
                </span>

                <h2>
                  Leave room
                  <br />
                  for the
                  <em> unexpected.</em>
                </h2>

                <p>
                  The best shopping days aren't always about
                  ticking every shop off a list. They're about
                  finding something you didn't know you wanted.
                </p>

                <div className="lonvera-shopping-feature-list">

                  <div>
                    <i className="bi bi-arrow-right"></i>
                    <span>Independent boutiques</span>
                  </div>

                  <div>
                    <i className="bi bi-arrow-right"></i>
                    <span>Vintage discoveries</span>
                  </div>

                  <div>
                    <i className="bi bi-arrow-right"></i>
                    <span>British designers</span>
                  </div>

                  <div>
                    <i className="bi bi-arrow-right"></i>
                    <span>Beautiful local markets</span>
                  </div>

                </div>

                <Link
                  to="/contact"
                  className="lonvera-rounded-btn"
                >
                  Create my shopping route
                  <i className="bi bi-arrow-up-right"></i>
                </Link>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            SHOPPING QUOTE
        ===================================================== */}

        <section className="lonvera-shopping-quote">

          <div className="container">

            <div className="lonvera-shopping-quote-inner">

              <span>
                A LITTLE LONDON WISDOM
              </span>

              <blockquote>
                “The best souvenirs
                <br />
                <em>aren't always things.</em>”
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

        <section className="lonvera-shopping-cta section">

          <div className="container">

            <div className="lonvera-shopping-cta-card">

              <div className="lonvera-shopping-cta-content">

                <span>
                  LET'S GO SHOPPING
                </span>

                <h2>
                  Your kind of
                  <br />
                  London
                  <br />
                  <em>awaits.</em>
                </h2>

                <p>
                  Tell us what you love and we'll create a
                  shopping day around your taste, pace and
                  favourite side of London.
                </p>

                <Link
                  to="/contact"
                  className="lonvera-rounded-btn"
                >
                  Plan my shopping day
                  <i className="bi bi-arrow-up-right"></i>
                </Link>

              </div>


              <div className="lonvera-shopping-cta-image">

                <img
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1800&q=90"
                  alt="London fashion shopping"
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

export default Shopping;