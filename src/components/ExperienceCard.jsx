import { Link } from "react-router-dom";
import "./ExperienceCard.css";

function ExperienceCard({
  id,
  title,
  category = "EXPERIENCE",
  location,
  duration,
  image,
  description,
  price,
  hotel = "Private Experience",
  season = "All Year",
  tags = [],
}) {
  return (
    <article className="lonvera-package-card">

      {/* IMAGE */}
      <div className="lonvera-package-image">
        <img src={image} alt={title} loading="lazy" />

        <div className="lonvera-package-overlay"></div>

        <span className="lonvera-package-duration">
          <i className="bi bi-clock"></i>
          {duration}
        </span>

        <span className="lonvera-package-arrow">
          <i className="bi bi-arrow-up-right"></i>
        </span>

        <div className="lonvera-package-image-location">
          <i className="bi bi-geo-alt"></i>
          <span>{location}</span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="lonvera-package-content">

        <span className="lonvera-package-category">
          {category}
        </span>

        <h3>{title}</h3>

        <p className="lonvera-package-description">
          {description}
        </p>

        {tags.length > 0 && (
          <div className="lonvera-package-tags">
            {tags.map((tag, index) => (
              <span key={`${tag}-${index}`}>
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="lonvera-package-divider"></div>

        <div className="lonvera-package-meta">
          <span>
            <i className="bi bi-person-heart"></i>
            {hotel}
          </span>

          <span>
            <i className="bi bi-calendar3"></i>
            {season}
          </span>
        </div>

        <div className="lonvera-package-bottom">

          <div className="lonvera-package-price">
            <small>STARTING FROM</small>
            <strong>{price}</strong>
            <span>per person</span>
          </div>

          {/* IMPORTANT */}
          <Link
            to={`/experiences/${id}`}
            className="lonvera-package-button"
          >
            View Details
            <i className="bi bi-arrow-up-right"></i>
          </Link>

        </div>

      </div>
    </article>
  );
}

export default ExperienceCard;