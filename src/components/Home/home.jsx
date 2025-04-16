import "./home.css";

export function Home({ titles, subtitles, descriptions, buttons, image }) {
  return (
    <div className="home-container">
      {/* Contenedor principal (todo menos la imagen) */}
      <div className="home-content">
        {/* Sección de títulos y subtítulos */}
        <div className="home-header">
          {/* Títulos */}
          <div className="home-titles">
            <h1 className="home-title1">{titles.title1}</h1>
            <h1 className="home-title2">{titles.title2}</h1>
          </div>

          {/* Subtítulos */}
          <div className="home-subtitles">
            {subtitles.map((subtitle, index) => (
              <h2 key={index} className={`home-subtitle ${subtitle.className || ""}`}>
                {subtitle.content}
              </h2>
            ))}
          </div>
        </div>

        {/* Sección de descripción y botones */}
        <div className="home-description-buttons">
          {/* Descripciones */}
          <div className="home-descriptions">
            {descriptions.map((description, index) => (
              <p key={index} className={`home-description ${description.className || ""}`}>
                {description.content}
              </p>
            ))}
          </div>

          {/* Botones */}
          <div className="home-buttons">
            {buttons.map((button, index) => (
              <button
                key={index}
                className={`home-button ${button.className || ""}`}
                onClick={button.onClick}
              >
                {button.icon && <span className="button-icon">{button.icon}</span>}
                {button.text}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Imagen */}
      <div className="home-image">
        <img src={image.src} alt={image.alt} className="home-image-element" />
      </div>
    </div>
  );
}