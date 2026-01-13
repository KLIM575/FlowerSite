import "./style.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="Footer-desctop">
        <address className="footer__contacts">
          <a href="#" className="footer__link">
            +7 921 123-45-67
          </a>
          <a href="#" className="footer__link">
            Byketnaya@.com
          </a>
        </address>
      </div>
      <div className="footer__info">
        <span></span>
      </div>
    </footer>
  );
};

export default Footer;
