// src/components/header/Navbar.js

import React from "react";
import "./NavBar.css";

export default function Navbar() {
  return (
    <section id="NavBar">
      <div className="navbar-container">
        <a href="#home" className="">
          logo
        </a>
        <a href="#about">About Me</a>
        <a href="#publication">Publication</a>
        <a href="#academic">Academic</a>
      </div>
    </section>
  );
}
