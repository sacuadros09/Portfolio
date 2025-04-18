import "./home.css";

export function Home({ titles, subtitles, descriptions, buttons, image }) {
  return (
    <div className="home-container">
      
      <div className="home-content">
       
        <div className="home-header">
         
          <div className="home-titles">
            <h1 className="home-title1">{titles.title1}</h1>
            <h1 className="home-title2">{titles.title2}</h1>
          </div>

         
          <div className="home-subtitles">
            {subtitles.map((subtitle, index) => (
              <h2 key={index} className={`home-subtitle ${subtitle.className || ""}`}>
                {subtitle.content}
              </h2>
            ))}
          </div>
        </div>

       
        <div className="home-description-buttons">
         
          <div className="home-descriptions">
            {descriptions.map((description, index) => (
              <p key={index} className={`home-description ${description.className || ""}`}>
                {description.content}
              </p>
            ))}
          </div>

          
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

      
      <div className="home-image">
        <img src={image.src} alt={image.alt} className="home-image-element" />
      </div>
    </div>
  );
}