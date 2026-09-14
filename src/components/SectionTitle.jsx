import "./SectionTitle.css";

function SectionTitle({
  eyebrow = "LONVÉRA",
  title,
  highlight,
  description,
  align = "left",
}) {
  return (
    <div className={`lonvera-section-title ${align}`}>

      <span className="lonvera-section-eyebrow">
        <i></i>
        {eyebrow}
      </span>

      <h2>
        {title}
        {highlight && (
          <>
            <br />
            <em>{highlight}</em>
          </>
        )}
      </h2>

      {description && (
        <p>
          {description}
        </p>
      )}

    </div>
  );
}

export default SectionTitle;