import IconLogo from "../IconLogo/iconLogo";
import MenuLogin from "../MenuLogin/menuLogin";
import "./navbar-header.css";

function NavbarHeader() {
  return (
    <div className="navbarHeader">
      <div className="navbarHeader-menuPrimaryLogo">
        <IconLogo />
      </div>
      <div className="navbarHeader-menuPrimaryLogin">
        <MenuLogin />
      </div>
    </div>
  );
}
export default NavbarHeader;
