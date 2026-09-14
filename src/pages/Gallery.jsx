import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollToTop from "../components/ScrollToTop";

import "./Gallery.css";

const galleryImages = [
  {
    id: "01",
    title: "Westminster",
    location: "Central London",
    category: "LANDMARKS",
    image:
      "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=1600&q=90",
    size: "large",
  },
  {
    id: "02",
    title: "London Streets",
    location: "Covent Garden",
    category: "CITY LIFE",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=90",
    size: "normal",
  },
  {
    id: "03",
    title: "The Thames",
    location: "South Bank",
    category: "RIVERSIDE",
    image:
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=90",
    size: "normal",
  },
  {
    id: "04",
    title: "Royal London",
    location: "Westminster",
    category: "HERITAGE",
    image:
      "https://images.unsplash.com/photo-1543832923-44667a44c804?auto=format&fit=crop&w=1600&q=90",
    size: "tall",
  },
  {
    id: "05",
    title: "London After Dark",
    location: "Central London",
    category: "NIGHT",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=90",
    size: "normal",
  },
  {
    id: "06",
    title: "Quiet Mornings",
    location: "Notting Hill",
    category: "NEIGHBOURHOODS",
    image:
      "https://images.unsplash.com/photo-1506501139177-710081a9e2a8?auto=format&fit=crop&w=1200&q=90",
    size: "normal",
  },
  {
    id: "07",
    title: "British Dining",
    location: "Mayfair",
    category: "FOOD",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=90",
    size: "wide",
  },
  {
    id: "08",
    title: "London Lights",
    location: "City of London",
    category: "CITY LIFE",
    image:
      "https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&w=1400&q=90",
    size: "normal",
  },
  {
    id: "09",
    title: "Market Mornings",
    location: "Borough Market",
    category: "LOCAL",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=90",
    size: "normal",
  },
];

const filters = [
  "ALL",
  "LANDMARKS",
  "CITY LIFE",
  "FOOD",
  "HERITAGE",
  "RIVERSIDE",
];

function Gallery() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeFilter === "ALL"
      ? galleryImages
      : galleryImages.filter(
          (item) => item.category === activeFilter
        );

  const handleFilter = (filter) => {
    setActiveFilter(filter);

    setTimeout(() => {
      document
        .getElementById("gallery-grid")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 50);
  };

  return (
    <>
      <Navbar />

      <main className="lonvera-gallery">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="lonvera-gallery-hero">

          <div className="lonvera-gallery-hero-image">
            <img
              src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=2200&q=90"
              alt="London skyline"
            />
          </div>

          <div className="lonvera-gallery-hero-overlay"></div>

          <div className="container">

            <div className="lonvera-gallery-hero-content">

              <span className="lonvera-gallery-eyebrow">
                <i></i>
                LONVÉRA / GALLERY
              </span>

              <h1>
                London,
                <br />
                <em>in frame.</em>
              </h1>

              <p>
                A visual collection of places, details
                <br />
                and moments that define the city.
              </p>

              <a
                href="#gallery-grid"
                className="lonvera-gallery-scroll"
              >
                View the collection
                <i className="bi bi-arrow-down"></i>
              </a>

            </div>

          </div>

        </section>


        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="lonvera-gallery-intro section">

          <div className="container">

            <div className="lonvera-gallery-intro-grid">

              <div>

                <span className="lonvera-gallery-label">
                  A LONDON JOURNAL
                </span>

                <h2>
                  Every corner
                  <br />
                  tells a
                  <em> story.</em>
                </h2>

              </div>

              <div className="lonvera-gallery-intro-copy">

                <p className="lead">
                  London is never quite the same twice.
                </p>

                <p>
                  From grand landmarks and historic streets to
                  quiet cafés and riverside evenings, this is our
                  visual diary of the city we love.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            FILTERS + GALLERY
        ===================================================== */}

        <section
          className="lonvera-gallery-collection section"
          id="gallery-grid"
        >

          <div className="container">

            <div className="lonvera-gallery-heading">

              <div>

                <span>
                  THE COLLECTION
                </span>

                <h2>
                  See London
                  <br />
                  <em>through our eyes.</em>
                </h2>

              </div>

              <p>
                A selection of visual moments from across
                London's neighbourhoods, landmarks and tables.
              </p>

            </div>


            {/* =================================================
                FILTER TABS
            ================================================= */}

            <div className="lonvera-gallery-filter-wrap">

              <div className="lonvera-gallery-filters">

                {filters.map((filter) => (

                  <button
                    key={filter}
                    type="button"
                    className={
                      activeFilter === filter
                        ? "active"
                        : ""
                    }
                    onClick={() => handleFilter(filter)}
                    aria-pressed={activeFilter === filter}
                  >
                    <span>
                      {filter === "ALL"
                        ? "ALL MOMENTS"
                        : filter}
                    </span>

                    {activeFilter === filter && (
                      <i className="bi bi-arrow-up-right"></i>
                    )}
                  </button>

                ))}

              </div>

            </div>


            {/* =================================================
                RESULTS BAR
            ================================================= */}

            <div className="lonvera-gallery-results">

              <span>
                <strong>
                  {String(filteredImages.length).padStart(2, "0")}
                </strong>
                MOMENTS
              </span>

              <span>
                {activeFilter === "ALL"
                  ? "SHOWING THE FULL COLLECTION"
                  : `FILTERED BY / ${activeFilter}`}
              </span>

            </div>


            {/* =================================================
                GALLERY GRID
            ================================================= */}

            <div className="lonvera-gallery-grid">

              {filteredImages.map((item) => (

                <article
                  key={item.id}
                  className={`lonvera-gallery-item ${item.size}`}
                  onClick={() => setSelectedImage(item)}
                  role="button"
                  tabIndex="0"
                  onKeyDown={(event) => {
                    if (
                      event.key === "Enter" ||
                      event.key === " "
                    ) {
                      setSelectedImage(item);
                    }
                  }}
                >

                  <div className="lonvera-gallery-image-wrap">

                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                    />

                    <div className="lonvera-gallery-item-overlay"></div>

                  </div>


                  <div className="lonvera-gallery-item-top">

                    <span>
                      {item.id}
                    </span>

                    <div className="lonvera-gallery-plus">
                      <i className="bi bi-plus"></i>
                    </div>

                  </div>


                  <div className="lonvera-gallery-item-content">

                    <span>
                      {item.category}
                    </span>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      <i className="bi bi-geo-alt"></i>
                      {item.location}
                    </p>

                  </div>


                  <div className="lonvera-gallery-item-corner">
                    <i className="bi bi-arrow-up-right"></i>
                  </div>

                </article>

              ))}

            </div>


            {/* EMPTY */}

            {filteredImages.length === 0 && (

              <div className="lonvera-gallery-empty">

                <i className="bi bi-camera"></i>

                <h3>
                  More London moments coming soon.
                </h3>

                <p>
                  Let us create a personal London story around
                  the places you want to see.
                </p>

                <Link to="/contact">
                  Plan my London
                  <i className="bi bi-arrow-up-right"></i>
                </Link>

              </div>

            )}

          </div>

        </section>


        {/* =====================================================
            FEATURED QUOTE
        ===================================================== */}

        <section className="lonvera-gallery-quote">

          <div className="container">

            <div className="lonvera-gallery-quote-inner">

              <span>
                THE LONVÉRA VIEW
              </span>

              <blockquote>
                “Don't just visit London.
                <br />
                <em>Notice it.</em>”
              </blockquote>

              <div className="lonvera-gallery-quote-line"></div>

              <p>
                LONVÉRA / THE LONDON LOCAL
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            JOURNAL CTA
        ===================================================== */}

        <section className="lonvera-gallery-cta section">

          <div className="container">

            <div className="lonvera-gallery-cta-card">

              <div className="lonvera-gallery-cta-image">

                <img
                  src="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=1600&q=90"
                  alt="London city"
                  loading="lazy"
                />

                <div></div>

              </div>

              <div className="lonvera-gallery-cta-content">

                <span>
                  READY TO SEE IT FOR YOURSELF?
                </span>

                <h2>
                  Your London
                  <br />
                  <em>story starts here.</em>
                </h2>

                <p>
                  Let us turn the places you've seen into
                  moments you'll actually remember.
                </p>

                <Link
                  to="/contact"
                  className="lonvera-rounded-btn"
                >
                  Plan my London
                  <i className="bi bi-arrow-up-right"></i>
                </Link>

              </div>

            </div>

          </div>

        </section>

      </main>


      {/* =====================================================
          LIGHTBOX
      ===================================================== */}

      {selectedImage && (

        <div
          className="lonvera-gallery-lightbox"
          onClick={() => setSelectedImage(null)}
        >

          <button
            type="button"
            className="lonvera-gallery-lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            <i className="bi bi-x-lg"></i>
          </button>

          <div
            className="lonvera-gallery-lightbox-inner"
            onClick={(event) => event.stopPropagation()}
          >

            <div className="lonvera-gallery-lightbox-image">

              <img
                src={selectedImage.image}
                alt={selectedImage.title}
              />

            </div>

            <div className="lonvera-gallery-lightbox-caption">

              <span>
                {selectedImage.category}
              </span>

              <h3>
                {selectedImage.title}
              </h3>

              <p>
                <i className="bi bi-geo-alt"></i>
                {selectedImage.location}
              </p>

            </div>

          </div>

        </div>

      )}

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}

export default Gallery;