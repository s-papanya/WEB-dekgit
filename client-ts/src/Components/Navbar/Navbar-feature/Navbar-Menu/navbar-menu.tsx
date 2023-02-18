import "./navbar-menu.scss";

function NavbarMenu() {
  return (
    <ul className="navbar-menu">
      <li className="navbar-li-home">
        <a className="navbar-a" href="#!">
          HOME
        </a>
      </li>
      <li className="navbar-li-history">
        <a className="navbar-a" href="#!">
          HISTORY
        </a>
      </li>
      <li className="navbar-li-notification">
        <a className="navbar-a" href="#!">
          NOTIFICATION
        </a>
      </li>
      <li className="navbar-li-contact">
        <a className="navbar-a" href="#!">
          CONTACT
        </a>
      </li>
    </ul>
  );
}

export default NavbarMenu;
