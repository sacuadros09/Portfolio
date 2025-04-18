import "./Copyright.css";

export function Copyright() {
  return (
    <div className="copyright-section">
      <img
        src="/copyright-icon.png"
        alt="Copyright Icon"
        className="copyright-icon"
      />
      <span className="copyright-text">
        2025 Santiago Cuadros made in React.
      </span>
    </div>
  );
}