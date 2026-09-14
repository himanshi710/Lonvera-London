import { Link } from "react-router-dom";

import "./DestinationCard.css";

function DestinationCard({
  id,
  title,
  location,
  category = "DESTINATION",
  image,
  description,
  featured = false,
}) {
  return (
    <Link
      to={id ? `/destinations/${id}` : "/destinations"}
      className={`lonvera-destination-card ${
        featured ? "featured" : ""
      }`}
    >

      {/* IMAGE */}
      <div className="lonvera-destination-image">

        <img
          src={image}
          alt={title}
          loading="lazy"
        />

        <div className="lonvera-destination-image-overlay"></div>

        <span className="lonvera-destination-category">
          {category}
        </span>

        <span className="lonvera-destination-number">
          {featured ? "01" : "02"}
        </span>

      </div>

      {/* CONTENT */}
      <div className="lonvera-destination-content">

        <div className="lonvera-destination-heading">

          <div>
            <span className="lonvera-destination-location">
              <i className="bi bi-geo-alt"></i>
              {location}
            </span>

            <h3>
              {title}
            </h3>
          </div>

          <span className="lonvera-destination-arrow">
            <i className="bi bi-arrow-up-right"></i>
          </span>

        </div>

        {description && (
          <p>
            {description}
          </p>
        )}

        <span className="lonvera-destination-explore">
          Explore destination
          <i className="bi bi-arrow-right"></i>
        </span>

      </div>

    </Link>
  );
}

export default DestinationCard;