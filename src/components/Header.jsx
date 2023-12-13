import React from "react";
import Logo from "../assets/siteImages/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to="/">
        <img src={Logo} alt="Lia Kahn" className="personal" />
      </Link>
    </div>
  );
}

export default Header;
