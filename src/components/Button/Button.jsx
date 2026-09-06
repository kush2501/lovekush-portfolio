import "./Button.css";

function Button({ text, href, primary = true }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={primary ? "btn primary-btn" : "btn secondary-btn"}
    >
      {text}
    </a>
  );
}

export default Button;