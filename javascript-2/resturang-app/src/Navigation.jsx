import Logo from "./assets/logo.svg";

function Navigation() {
  return (
    <nav className="navigation">
      <a href="#">
        <img src={Logo} className="logo" alt="Logo" />
      </a>
    </nav>
  );
}

export default Navigation;
