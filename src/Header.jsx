import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css'

const Header = () => {
  const logo = process.env.PUBLIC_URL + "/images/logo123.jpg";

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="WhiteBoard Logo" />
      </div>
    </header>
  );
};

export default Header;
