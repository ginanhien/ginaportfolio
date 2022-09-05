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
    <div className="navbar-container">
      <a
        href="#home"
        id={sectionHomeInView ? "home" : ""}
        className={sectionHomeInView ? "active" : ""}
      >
        logo
      </a>
      <a
        href="#about"
        id={sectionAboutInView ? "about" : ""}
        className={sectionAboutInView ? "active" : ""}
      >
        About Me
      </a>
      <a
        href="#academic"
        id={sectionAcademicInView ? "academic" : ""}
        className={sectionAcademicInView ? "active" : ""}
      >
        Academic
      </a>
      <a
        href="#experience"
        id={sectionExperienceInView ? "experience" : ""}
        className={sectionExperienceInView ? "active" : ""}
      >
        Experiences
      </a>
      <a
        href="#publication"
        id={sectionPublicationInView ? "publication" : ""}
        className={sectionPublicationInView ? "active" : ""}
      >
        Publication
      </a>
    </div>
  );
}
