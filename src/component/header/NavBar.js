// src/components/header/Navbar.js

import React from "react";
import "./NavBar.css";

export default function Navbar() {
  return (
    <section id="NavBar">
      <div className="outside-container">
        <div className="portfolio-name">logo</div>
        <div className="portfolio-name">About Me</div>
        <div className="portfolio-name">Publication</div>
        <div className="portfolio-name">Academic</div>
      </div>
    </section>
  );
}
