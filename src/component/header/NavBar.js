// src/components/header/Navbar.js

import React from "react";
import "./NavBar.css";

export default function Navbar({
  sectionHomeInView,
  sectionAboutInView,
  sectionAcademicInView,
  sectionPublicationInView,
  sectionExperienceInView,
}) {
  return (
    <section id="NavBar">
      <div className="navbar-container">
        <a href="#home" className={sectionHomeInView ? "active" : ""}>
          logo
        </a>
        <a href="#about" className={sectionAboutInView ? "active" : ""}>
          About Me
        </a>
        <a href="#academic" className={sectionAcademicInView ? "active" : ""}>
          Academic
        </a>
        <a
          href="#experience"
          className={sectionExperienceInView ? "active" : ""}
        >
          Experiences
        </a>
        <a
          href="#publication"
          className={sectionPublicationInView ? "active" : ""}
        >
          Publication
        </a>
      </div>
    </section>
  );
}
