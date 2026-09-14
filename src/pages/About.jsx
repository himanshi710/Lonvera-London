import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollToTop from "../components/ScrollToTop";
import SectionTitle from "../components/SectionTitle";

import "./About.css";

const values = [
    {
        number: "01",
        icon: "bi-compass",
        title: "Local Perspective",
        text: "We look beyond the obvious, bringing together neighbourhoods, places and experiences that reveal another side of London.",
    },
    {
        number: "02",
        icon: "bi-stars",
        title: "Thoughtfully Chosen",
        text: "Every recommendation is selected for character, atmosphere and the little details that make a London experience memorable.",
    },
    {
        number: "03",
        icon: "bi-heart",
        title: "Made Personal",
        text: "Your London should feel like yours. We help shape journeys around your interests, pace and sense of adventure.",
    },
];

const londonMoments = [
    {
        title: "Morning",
        text: "Quiet streets, warm coffee and London slowly coming to life.",
        image:
            "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1000&q=85",
    },
    {
        title: "Afternoon",
        text: "Gallery afternoons, elegant streets and unexpected discoveries.",
        image:
            "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1000&q=85",
    },
    {
        title: "After Dark",
        text: "Golden lights, beautiful tables and London after sunset.",
        image:
            "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=1000&q=85",
    },
];

function About() {
    return (
        <>
            <Navbar />

            <main className="lonvera-about">

                {/* =====================================================
            HERO
        ===================================================== */}

                <section className="lonvera-about-hero">

                    <img
                        src="https://images.unsplash.com/photo-1520986606214-8b456906c813?auto=format&fit=crop&w=2200&q=90"
                        alt="London street architecture"
                    />

                    <div className="lonvera-about-hero-overlay"></div>

                    <div className="lonvera-about-hero-content">

                        <span className="lonvera-about-eyebrow">
                            <i></i>
                            THE LONVÉRA JOURNEY
                            <i></i>
                        </span>

                        <h1 className="text-light">
                            London,
                            <br />
                            <em>reimagined.</em>
                        </h1>

                        <p>
                            Not the London you simply visit,
                            <br />
                            but the London you remember.
                        </p>

                    </div>

                    <div className="lonvera-about-hero-bottom">

                        <span>BEYOND THE ORDINARY</span>

                        <div></div>

                        <span>01 — 04</span>

                    </div>

                </section>

                {/* =====================================================
            INTRO
        ===================================================== */}

                <section className="lonvera-about-intro">

                    <div className="lonvera-about-container">

                        <div className="lonvera-about-intro-label">
                            <span>01</span>
                            <i></i>
                            THE LONVÉRA STORY
                        </div>

                        <div className="lonvera-about-intro-grid">

                            <div className="lonvera-about-intro-title">

                                <span className="lonvera-about-small-label">
                                    A DIFFERENT WAY TO TRAVEL
                                </span>

                                <h2>
                                    London is a city
                                    <br />
                                    of <em>layers.</em>
                                </h2>

                            </div>

                            <div className="lonvera-about-intro-copy">

                                <p className="lonvera-about-lead">
                                    There is the London you see in photographs.
                                    And then there is the London you feel when
                                    you know where to look.
                                </p>

                                <p>
                                    LONVÉRA was created for curious travellers
                                    who want more than a checklist of landmarks.
                                    We bring together iconic places, local
                                    favourites, beautiful stays, memorable food
                                    and experiences that make the city feel
                                    personal.
                                </p>

                                <Link
                                    to="/destinations"
                                    className="lonvera-rounded-btn"
                                >
                                    <span>Discover London</span>
                                    <i className="bi bi-arrow-up-right"></i>
                                </Link>

                            </div>

                        </div>

                    </div>

                </section>

                {/* =====================================================
            IMAGE STORY
        ===================================================== */}

                <section className="lonvera-about-story">

                    <div className="lonvera-about-container">

                        <div className="lonvera-about-story-grid">

                            <div className="lonvera-about-story-image large">

                                <img
                                    src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=90"
                                    alt="London skyline"
                                />

                                <div className="lonvera-about-image-caption">
                                    <span>01</span>
                                    <strong>THE CITY</strong>
                                </div>

                            </div>

                            <div className="lonvera-about-story-side">

                                <div className="lonvera-about-story-quote">
                                    <span>“</span>

                                    <h3>
                                        The best parts of
                                        <em> London</em>
                                        are often the ones
                                        you weren't looking for.
                                    </h3>

                                    <small>
                                        — THE LONVÉRA PHILOSOPHY
                                    </small>
                                </div>

                                <div className="lonvera-about-story-image small">

                                    <img
                                        src="https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=1000&q=85"
                                        alt="London neighbourhood"
                                    />

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                {/* =====================================================
            VALUES
        ===================================================== */}

                <section className="lonvera-about-values">

                    <div className="lonvera-about-container">

                        <SectionTitle
                            eyebrow="WHAT WE BELIEVE"
                            title="Travel with"
                            highlight="curiosity."
                            description="Three simple principles sit behind everything we create at LONVÉRA."
                        />

                        <div className="lonvera-about-values-grid">

                            {values.map((value) => (
                                <article
                                    className="lonvera-about-value-card"
                                    key={value.number}
                                >

                                    <div className="lonvera-value-top">

                                        <span>
                                            {value.number}
                                        </span>

                                        <i className={`bi ${value.icon}`}></i>

                                    </div>

                                    <div className="lonvera-value-icon">
                                        <i className={`bi ${value.icon}`}></i>
                                    </div>

                                    <h3>
                                        {value.title}
                                    </h3>

                                    <p>
                                        {value.text}
                                    </p>

                                    <span className="lonvera-value-line"></span>

                                </article>
                            ))}

                        </div>

                    </div>

                </section>

                {/* =====================================================
            LONDON MOMENTS
        ===================================================== */}

                <section className="lonvera-about-moments">

                    <div className="lonvera-about-container">

                        <div className="lonvera-about-moments-heading">

                            <div>

                                <span className="lonvera-about-small-label">
                                    ONE CITY
                                </span>

                                <h2>
                                    Endless
                                    <br />
                                    <em>moments.</em>
                                </h2>

                            </div>

                            <p>
                                London changes personality throughout the day.
                                These are the moments that make us come back.
                            </p>

                        </div>

                        <div className="lonvera-about-moments-grid">

                            {londonMoments.map((moment, index) => (
                                <article
                                    className={`lonvera-moment-card ${index === 1 ? "featured" : ""
                                        }`}
                                    key={moment.title}
                                >

                                    <div className="lonvera-moment-image">

                                        <img
                                            src={moment.image}
                                            alt={moment.title}
                                            loading="lazy"
                                        />

                                        <div className="lonvera-moment-overlay"></div>

                                        <span>
                                            0{index + 1}
                                        </span>

                                    </div>

                                    <div className="lonvera-moment-content">

                                        <span>
                                            LONDON / {moment.title.toUpperCase()}
                                        </span>

                                        <h3>
                                            {moment.title}
                                        </h3>

                                        <p>
                                            {moment.text}
                                        </p>

                                    </div>

                                </article>
                            ))}

                        </div>

                    </div>

                </section>

                {/* =====================================================
            FINAL CTA
        ===================================================== */}

                <section className="lonvera-about-cta">

                    <div className="lonvera-about-cta-inner">

                        <span className="lonvera-about-small-label">
                            YOUR LONDON STORY
                        </span>

                        <h2>
                            Ready to see
                            <br />
                            <em>London differently?</em>
                        </h2>

                        <p>
                            Start with a place, an experience or simply
                            an idea. We'll take it from there.
                        </p>

                        <div className="lonvera-about-cta-actions">

                            <Link
                                to="/destinations"
                                className="lonvera-rounded-btn light"
                            >
                                <span>Explore London</span>
                                <i className="bi bi-arrow-up-right"></i>
                            </Link>

                            <Link
                                to="/contact"
                                className="lonvera-about-outline-btn"
                            >
                                Talk to us
                                <i className="bi bi-arrow-right"></i>
                            </Link>

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

export default About;