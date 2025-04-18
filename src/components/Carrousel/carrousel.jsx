import "./carrousel.css";

export function Carrousel({ items }) {
  return (
    <div className="carrousel-section">
      
      <div className="carrousel-line"></div>

     
      <div className="carrousel-container">
        <div className="carrousel">
          {items.map((item, index) => (
            <button key={`original-${index}`} className="carrousel-button">
              <img src={item.icon} alt={item.text} className={`carrousel-icon ${item.className}`} />
              <span className="carrousel-text">{item.text}</span>
            </button>
          ))}
         
          {items.map((item, index) => (
            <button key={`duplicate-${index}`} className="carrousel-button">
              <img src={item.icon} alt={item.text} className={`carrousel-icon ${item.className}`} />
              <span className="carrousel-text">{item.text}</span>
            </button>
          ))}
        </div>
      </div>

      
      <div className="carrousel-line"></div>
    </div>
  );
}