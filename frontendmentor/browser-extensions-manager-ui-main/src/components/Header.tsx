import Logo from "../assets/images/logo.svg?react";
import Sun from "../assets/images/icon-sun.svg?react";

const Header = () => {
  return (
    <main>
      <header className="header">
        <Logo className="logo" />
        <div className="dark-light-switch">
          <Sun />
        </div>
      </header>
    </main>
  );
};

export default Header;
