// src/components/mainpage/MainPage.js

import React from "react";
import "./MainPage.css";

import { useInView } from "react-intersection-observer";
//import components
import Experience from "../experience/Experience";
import About from "../about/About";
import Navbar from "../header/NavBar.js";
import Academic from "../academic/Academic";
import Headline from "../headline/Headline";
import Publication from "../publication/Publication";
export default function MainPage() {
  const [sectionHome, sectionHomeInView] = useInView({ threshold: 0.5 });
  const [sectionAbout, sectionAboutInView] = useInView({ threshold: 0.5 });
  const [sectionAcademic, sectionAcademicInView] = useInView({
    threshold: 0.5,
  });
  const [sectionPublication, sectionPublicationInView] = useInView({
    threshold: 0.5,
  });
  const [sectionExperience, sectionExperienceInView] = useInView({
    threshold: 0.5,
  });
  return (
    <>
      <Navbar
        sectionHomeInView={sectionHomeInView}
        sectionPublicationInView={sectionPublicationInView}
        sectionAboutInView={sectionAboutInView}
        sectionAcademicInView={sectionAcademicInView}
        sectionExperienceInView={sectionExperienceInView}
      />
      <section id="home" ref={sectionHome}>
        <Headline />
      </section>
      <section id="about" ref={sectionAbout}>
        <About />
      </section>

      <section id="academic" ref={sectionAcademic}>
        <Academic />
      </section>
      <section id="experience" ref={sectionExperience}>
        <Experience />
      </section>
      <section id="publication" ref={sectionPublication}>
        <Publication />
      </section>
    </>
  );
}
