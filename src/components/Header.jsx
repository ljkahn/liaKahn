import React from "react";
import Logo from "../assets/siteImages/logo.png";

function Header() {
  return (
    <div>
      <img src={Logo} alt="Lia Kahn" className="personal" />
    </div>
  );
}

export default Header;
