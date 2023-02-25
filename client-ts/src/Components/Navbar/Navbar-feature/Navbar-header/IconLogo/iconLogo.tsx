import "./iconLogo.css";

function IconLogo() {
  const iconLogo = require("../../../../../Assets/cover_iconLogo/iconLogo.png");

  return (
    <div className="iconLogo">
      <img className="iconLogo-image" src={iconLogo} alt="Logo" />
    </div>
  );
}

export default IconLogo;
