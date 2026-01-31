import "./style.css";
const Footer = () => {
  const now = new Date();
  return (
    <footer className="footer">
      <div className="footer-title">
        <h1 className="footer__title">Цветочная мастерская BYKETNAYA</h1>
        <strong className="footer__subtitle">Хабаровский край п.Ванино</strong>
      </div>

      <div className="footer__content">
        <address className="footer__contacts">
          <a href="tel:+79142008118" className="footer__link">
            📞 +7 914 200-81-18
          </a>
          <a href="mailto:info@byketnaya.com" className="footer__link">
            ✉️ Byketnaya@.com
          </a>
        </address>

        <div className="footer__social">
          <a href="#" className="footer__social-link">
            Instagram
          </a>
          <a href="#" className="footer__social-link">
            VK
          </a>
          <a href="#" className="footer__social-link">
            Telegram
          </a>
        </div>
      </div>

      <div className="footer__info">
        <span>
          © {new Date().getFullYear()} Цветочная мастерская BYKETNAYA. Все права
          защищены.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
