import IconLogo from "./IconLogo/iconLogo";
import MenuLogin from "./MenuLogin/menuLogin";
import "./navbar-header.css";

function NavbarHeader() {
  return (
    <div className="navbarHeader">
      <div className="menuPrimaryLogo">
        <IconLogo />
      </div>
      <div className="menuPrimaryLogin">
        <MenuLogin />
      </div>
    </div>
  );
}
export default NavbarHeader;