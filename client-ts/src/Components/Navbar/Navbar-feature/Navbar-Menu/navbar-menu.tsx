import "./navbar-menu.scss";

function NavbarMenu() {
  return (
    <ul className="menu">
      <li className="li-home">
        <a href="#!">HOME</a>
      </li>
      <li className="li-history">
        <a href="#!">HISTORY</a>
      </li>
      <li className="li-notification">
        <a href="#!">NOTIFICATION</a>
      </li>
      <li className="li-contact">
        <a href="#!">CONTACT</a>
      </li>
    </ul>
  );
}

export default NavbarMenu;
