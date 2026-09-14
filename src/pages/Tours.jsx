
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollToTop from "../components/ScrollToTop";

import "./Tours.css";

/* =========================================================
   TOUR DATA
========================================================= */

const tours = [
    {
        number: "01",
        title: "London Essentials",
        subtitle: "The classic first chapter",
        duration: "1 DAY",
        type: "SIGNATURE TOUR",
        image:
            "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1800&q=90",
        description:
            "See London's defining landmarks, grand streets and riverside views in one beautifully paced day.",
        route: "Westminster · St James's · Mayfair · Thames",
        highlights: [
            "Big Ben & Westminster",
            "St James's",
            "Mayfair",
            "Thames Riverside",
        ],
    },

    {
        number: "02",
        title: "Royal London",
        subtitle: "Palaces & royal stories",
        duration: "HALF DAY",
        type: "HERITAGE",
        image:
            "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=1800&q=90",
        description:
            "Walk through London's royal heart, from palace gates to ceremonial avenues and hidden royal stories.",
        route: "Buckingham · St James's · Westminster",
        highlights: [
            "Buckingham Palace",
            "Royal Parks",
            "St James's",
            "Westminster Abbey",
        ],
    },

    {
        number: "03",
        title: "London After Dark",
        subtitle: "The city in another light",
        duration: "EVENING",
        type: "NIGHT EDIT",
        image:
            "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1800&q=90",
        description:
            "Discover illuminated landmarks, atmospheric neighbourhoods and London's best evening viewpoints.",
        route: "Soho · Covent Garden · South Bank",
        highlights: [
            "Soho Streets",
            "Covent Garden",
            "South Bank",
            "Night Views",
        ],
    },

    {
        number: "04",
        title: "Hidden London",
        subtitle: "Beyond the guidebook",
        duration: "1 DAY",
        type: "LOCAL EDIT",
        image:
            "https://images.unsplash.com/photo-1520986606214-8b456906c813?auto=format&fit=crop&w=1800&q=90",
        description:
            "Quiet lanes, independent cafés, character-filled neighbourhoods and stories most visitors miss.",
        route: "Notting Hill · Chelsea · Hampstead",
        highlights: [
            "Notting Hill",
            "Chelsea Streets",
            "Independent Cafés",
            "Hampstead",
        ],
    },

    {
        number: "05",
        title: "London for Food Lovers",
        subtitle: "A city served beautifully",
        duration: "HALF DAY",
        type: "FOOD TOUR",
        image:
            "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1800&q=90",
        description:
            "Taste London's classic flavours alongside markets, bakeries, pubs and contemporary food spots.",
        route: "Borough Market · Soho · Covent Garden",
        highlights: [
            "Borough Market",
            "British Classics",
            "Artisan Bakeries",
            "Local Pubs",
        ],
    },

    {
        number: "06",
        title: "London in Style",
        subtitle: "Fashion, design & luxury",
        duration: "1 DAY",
        type: "LUXURY EDIT",
        image:
            "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1800&q=90",
        description:
            "A polished day through London's most stylish districts, from heritage fashion to modern design.",
        route: "Mayfair · Chelsea · King's Road",
        highlights: [
            "Mayfair",
            "Luxury Boutiques",
            "Chelsea",
            "King's Road",
        ],
    },
];

/* =========================================================
   TOUR TABS
========================================================= */

const tourTabs = [
    "ALL",
    "SIGNATURE TOUR",
    "HERITAGE",
    "NIGHT EDIT",
    "LOCAL EDIT",
    "FOOD TOUR",
    "LUXURY EDIT",
];

/* =========================================================
   PROCESS
========================================================= */

const tourSteps = [
    {
        number: "01",
        title: "Tell us your London",
        text:
            "Share your interests, travel style, pace and the places you've already seen.",
    },
    {
        number: "02",
        title: "We shape the route",
        text:
            "Our local approach turns your wishlist into a relaxed and beautifully connected itinerary.",
    },
    {
        number: "03",
        title: "You enjoy the city",
        text:
            "Arrive, explore and let London unfold without worrying about what comes next.",
    },
];

/* =========================================================
   TOURS
========================================================= */

function Tours() {
    const [activeTab, setActiveTab] = useState("ALL");

    const filteredTours = useMemo(() => {
        if (activeTab === "ALL") {
            return tours;
        }

        return tours.filter((tour) => tour.type === activeTab);
    }, [activeTab]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);

        setTimeout(() => {
            document
                .getElementById("tour-collection")
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
        }, 50);
    };

    return (
        <>
            <Navbar />

            <main className="lonvera-tours">

                {/* =====================================================
            HERO
        ===================================================== */}

                <section className="lonvera-tours-hero">

                    <div className="lonvera-tours-hero-image">
                        <img
                            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=2200&q=90"
                            alt="London skyline"
                        />
                    </div>

                    <div className="lonvera-tours-hero-overlay"></div>

                    <div className="container">

                        <div className="lonvera-tours-hero-content">

                            <span className="lonvera-tours-eyebrow">
                                <i></i>
                                LONVÉRA / CURATED TOURS
                            </span>

                            <h1 className="text-light">
                                See
                                <br />
                                London
                                <br />
                                <em>differently.</em>
                            </h1>

                            <p>
                                Thoughtfully paced journeys through the
                                <br />
                                places, flavours and stories that define the city.
                            </p>

                            <a
                                href="#tour-collection"
                                className="lonvera-tours-scroll"
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

                <section className="lonvera-tours-intro section">

                    <div className="container">

                        <div className="lonvera-tours-intro-grid">

                            <div className="lonvera-tours-intro-number">
                                <span>THE LONVÉRA WAY</span>
                                <strong>01</strong>
                            </div>

                            <div className="lonvera-tours-intro-content">

                                <span className="lonvera-tours-label">
                                    NOT JUST ANOTHER CITY TOUR
                                </span>

                                <h2>
                                    London's best
                                    <br />
                                    moments are
                                    <br />
                                    <em>between the stops.</em>
                                </h2>

                                <p>
                                    We believe a great London day isn't about
                                    rushing from one landmark to another. It's about
                                    the streets between them, the little café you
                                    weren't expecting and the story you remember
                                    long after you leave.
                                </p>

                                <p>
                                    Our tours are designed around that feeling —
                                    local, considered and never unnecessarily rushed.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
            TOUR COLLECTION
        ===================================================== */}

                <section
                    className="lonvera-tour-collection section"
                    id="tour-collection"
                >

                    <div className="container">

                        {/* COLLECTION HEADING */}

                        <div className="lonvera-tours-heading">

                            <div>

                                <span>THE COLLECTION</span>

                                <h2>
                                    Choose your
                                    <br />
                                    <em>London story.</em>
                                </h2>

                            </div>

                            <p>
                                From iconic first days to slower local discoveries,
                                choose a route that feels like your kind of London.
                            </p>

                        </div>


                        {/* =================================================
                FILTER AREA
            ================================================= */}

                        <div className="lonvera-tour-filter">

                            <div className="lonvera-tour-filter-head">

                                <div>

                                    <span className="lonvera-tour-filter-label">
                                        EXPLORE THE COLLECTION
                                    </span>

                                    <h3>
                                        Find your <em>perfect route.</em>
                                    </h3>

                                </div>

                                <p>
                                    Every route has a different rhythm.
                                    Choose the London experience that feels
                                    most like you.
                                </p>

                            </div>


                            {/* TABS */}

                            <div className="lonvera-tour-tabs">

                                <div className="lonvera-tour-tabs-inner">

                                    {tourTabs.map((tab, index) => {

                                        const isActive = activeTab === tab;

                                        return (
                                            <button
                                                type="button"
                                                key={tab}
                                                className={`lonvera-tour-tab ${isActive ? "active" : ""
                                                    }`}
                                                onClick={() => handleTabChange(tab)}
                                                aria-pressed={isActive}
                                            >

                                                <span className="lonvera-tour-tab-number">
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>

                                                <span className="lonvera-tour-tab-text">
                                                    {tab === "ALL" ? "ALL TOURS" : tab}
                                                </span>

                                                <span className="lonvera-tour-tab-arrow">
                                                    <i className="bi bi-arrow-up-right"></i>
                                                </span>

                                            </button>
                                        );

                                    })}

                                </div>

                            </div>


                            {/* RESULT INFO */}

                            <div className="lonvera-tour-results">

                                <div className="lonvera-tour-result-count">

                                    <strong>
                                        {String(filteredTours.length).padStart(2, "0")}
                                    </strong>

                                    <span>
                                        EXPERIENCES
                                    </span>

                                </div>

                                <div className="lonvera-tour-result-current">

                                    <span className="lonvera-tour-result-dot"></span>

                                    <span>
                                        {activeTab === "ALL"
                                            ? "SHOWING ALL LONDON EXPERIENCES"
                                            : `SHOWING / ${activeTab}`}
                                    </span>

                                </div>

                            </div>

                        </div>


                        {/* =================================================
                TOUR CARDS
            ================================================= */}

                        <div
                            className={`lonvera-tours-grid ${filteredTours.length === 1
                                    ? "single-result"
                                    : ""
                                }`}
                            key={activeTab}
                        >

                            {filteredTours.map((tour) => (

                                <article
                                    className="lonvera-tour-card"
                                    key={tour.number}
                                >

                                    {/* IMAGE */}

                                    <div className="lonvera-tour-card-image">

                                        <img
                                            src={tour.image}
                                            alt={tour.title}
                                            loading="lazy"
                                        />

                                        <div className="lonvera-tour-card-overlay"></div>

                                        <span className="lonvera-tour-number">
                                            {tour.number}
                                        </span>

                                        <span className="lonvera-tour-type">
                                            {tour.type}
                                        </span>

                                        <span className="lonvera-tour-arrow">
                                            <i className="bi bi-arrow-up-right"></i>
                                        </span>

                                        <div className="lonvera-tour-image-bottom">

                                            <span>
                                                <i className="bi bi-clock"></i>
                                                {tour.duration}
                                            </span>

                                            <span>
                                                CURATED EXPERIENCE
                                            </span>

                                        </div>

                                    </div>


                                    {/* CONTENT */}

                                    <div className="lonvera-tour-card-content">

                                        <div className="lonvera-tour-card-top">

                                            <span className="lonvera-tour-card-index">
                                                TOUR / {tour.number}
                                            </span>

                                            <span className="lonvera-tour-card-category">
                                                {tour.type}
                                            </span>

                                        </div>


                                        <h3>
                                            {tour.title}
                                        </h3>


                                        <span className="lonvera-tour-subtitle">
                                            {tour.subtitle}
                                        </span>


                                        <p>
                                            {tour.description}
                                        </p>


                                        {/* HIGHLIGHTS */}

                                        <div className="lonvera-tour-highlights">

                                            {tour.highlights.map((highlight, index) => (

                                                <span key={index}>
                                                    <i className="bi bi-check2"></i>
                                                    {highlight}
                                                </span>

                                            ))}

                                        </div>


                                        {/* ROUTE */}

                                        <div className="lonvera-tour-route">

                                            <div className="lonvera-tour-route-icon">

                                                <i className="bi bi-signpost-2"></i>

                                            </div>

                                            <div>

                                                <small>
                                                    CURATED ROUTE
                                                </small>

                                                <span>
                                                    {tour.route}
                                                </span>

                                            </div>

                                        </div>


                                        {/* FOOTER */}

                                        <div className="lonvera-tour-card-footer">

                                            <div className="lonvera-tour-card-duration">

                                                <small>
                                                    DURATION
                                                </small>

                                                <strong>
                                                    {tour.duration}
                                                </strong>

                                            </div>

                                            <Link
                                                to="/contact"
                                                className="lonvera-tour-plan-btn"
                                            >

                                                <span>
                                                    Plan this tour
                                                </span>

                                                <i className="bi bi-arrow-up-right"></i>

                                            </Link>

                                        </div>

                                    </div>

                                </article>

                            ))}

                        </div>


                        {/* =================================================
                EMPTY
            ================================================= */}

                        {filteredTours.length === 0 && (

                            <div className="lonvera-tour-empty">

                                <i className="bi bi-compass"></i>

                                <h3>
                                    More London stories coming soon.
                                </h3>

                                <p>
                                    Contact us and we'll create something
                                    completely personal for you.
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
            CUSTOM TOUR
        ===================================================== */}

                <section className="lonvera-custom-tour section">

                    <div className="container">

                        <div className="lonvera-custom-tour-card">

                            <div className="lonvera-custom-tour-image">

                                <img
                                    src="https://images.unsplash.com/photo-1520986606214-8b456906c813?auto=format&fit=crop&w=1900&q=90"
                                    alt="London street"
                                    loading="lazy"
                                />

                                <div></div>

                            </div>

                            <div className="lonvera-custom-tour-content">

                                <span>
                                    YOUR LONDON / YOUR RULES
                                </span>

                                <h2>
                                    Make it
                                    <br />
                                    <em>personal.</em>
                                </h2>

                                <p>
                                    Have a very specific London in mind?
                                    We'll create a private route around your
                                    interests, from architecture and photography
                                    to food, fashion, history or hidden corners.
                                </p>

                                <div className="lonvera-custom-tour-points">

                                    <div>
                                        <span>01</span>
                                        <p>Private itinerary</p>
                                    </div>

                                    <div>
                                        <span>02</span>
                                        <p>Flexible pace</p>
                                    </div>

                                    <div>
                                        <span>03</span>
                                        <p>Local recommendations</p>
                                    </div>

                                </div>

                                <Link
                                    to="/contact"
                                    className="lonvera-rounded-btn"
                                >
                                    Create my private tour
                                    <i className="bi bi-arrow-up-right"></i>
                                </Link>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
            HOW IT WORKS
        ===================================================== */}

                <section className="lonvera-tour-process section">

                    <div className="container">

                        <div className="lonvera-tour-process-heading">

                            <span>
                                HOW IT WORKS
                            </span>

                            <h2>
                                Simple from
                                <br />
                                <em>start to finish.</em>
                            </h2>

                        </div>


                        <div className="lonvera-tour-process-grid">

                            {tourSteps.map((step) => (

                                <article
                                    className="lonvera-tour-process-card"
                                    key={step.number}
                                >

                                    <span>
                                        {step.number}
                                    </span>

                                    <div className="lonvera-tour-process-line"></div>

                                    <h3>
                                        {step.title}
                                    </h3>

                                    <p>
                                        {step.text}
                                    </p>

                                </article>

                            ))}

                        </div>

                    </div>

                </section>


                {/* =====================================================
            QUOTE
        ===================================================== */}

                <section className="lonvera-tour-quote">

                    <div className="container">

                        <div className="lonvera-tour-quote-inner">

                            <span>
                                THE LONVÉRA PHILOSOPHY
                            </span>

                            <blockquote>
                                “Take the famous road,
                                <br />
                                <em>then turn left.</em>”
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

                <section className="lonvera-tours-cta section">

                    <div className="container">

                        <div className="lonvera-tours-cta-card">

                            <div className="lonvera-tours-cta-content">

                                <span>
                                    READY WHEN YOU ARE
                                </span>

                                <h2>
                                    Your London
                                    <br />
                                    day starts
                                    <br />
                                    <em>here.</em>
                                </h2>

                                <p>
                                    Tell us what you want to see, taste and
                                    experience. We'll take care of the rest.
                                </p>

                                <Link
                                    to="/contact"
                                    className="lonvera-rounded-btn"
                                >
                                    Plan my London tour
                                    <i className="bi bi-arrow-up-right"></i>
                                </Link>

                            </div>


                            <div className="lonvera-tours-cta-image">

                                <img
                                    src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=1800&q=90"
                                    alt="London city street"
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

export default Tours;

