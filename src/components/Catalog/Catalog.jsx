import "./style.css";
import { Link } from "react-router-dom";
const Catalog = () => {
  return (
    <nav className="Navigation">
      <ul className="Navigation-title">
        <Link to="/Showcase">
          {" "}
          <li className="Navigation__title_vitrina">
            <img
              className="header-img"
              src="/src/assets/img1.jpg"
              alt="Витрина"
            />
            Витрина
          </li>{" "}
        </Link>
        <Link to="/ForBrides">
          {" "}
          <li className="Navigation__title_nevesta">
            <img
              className="header-img"
              src="/src/assets/img2.jpg"
              alt="Для невест"
            />
            Для невест
          </li>
        </Link>

        <Link to="/СorporateСooperation">
          {" "}
          <li className="Navigation__title_corporative">
            <img
              className="header-img"
              src="/src/assets/img3.jpg"
              alt="Корпоративное сотрудничество"
            />
            Корпоративное сотрудничество
          </li>
        </Link>

        <Link to="/ContactTheManager">
          <li className="Navigation__title_menegers">
            <img
              className="header-img"
              src="/src/assets/img4.jpg"
              alt="Связь с менеджером"
            />
            Связь с менеджером
          </li>
        </Link>
      </ul>
    </nav>
  );
};
export default Catalog;
