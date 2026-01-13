import "./style.css";

const Hero = () => {
  return (
    <div className="header-main">
      <img
        className="header-logo-img"
        src="/src/assets/img5.jpg"
        alt="Логотип Byketnaya"
      />
      <div className="site-main-info">
        <h1>Добро пожаловать в BYKETNAYA</h1>
        <p>Эксклюзивные букеты для особых моментов вашей жизни</p>
        <p>Мы создаем уникальные цветочные композиции с 2023 года</p>
        <p>Доставка по Ванино в течение 30 минут</p>
      </div>
    </div>
  );
};
export default Hero;
