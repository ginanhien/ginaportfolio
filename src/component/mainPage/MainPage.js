// src/components/mainpage/MainPage.js

import React from "react";
import "./MainPage.css";

import { useInView } from "react-intersection-observer";
//import components
import Experience from "../experience/Experience";
import About from "../about/About";
import Navbar from "../header/NavBar.js";
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
        <div class="container reveal">
          <h1>Watch the Nav Bar as you Scroll Down &#8595;</h1>
        </div>
      </section>
      <section id="about" ref={sectionAbout}>
        <About />
      </section>

      <section id="academic" ref={sectionAcademic}>
        <div class="section-container">
          <h2>Academic</h2>
          <div class="text-container">
            <div class="text-box">
              <h3>Section Text</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="text-box">
              <h3>Section Text</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="experience" ref={sectionExperience}>
        <Experience />
      </section>
      <section id="publication" ref={sectionPublication}>
        <div class="container reveal">
          <h2>Publication</h2>
          <div class="text-container">
            <div class="text-box">
              <h3>Section text</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                eius molestiae perferendis eos provident vitae iste.
              </p>
            </div>
            <div class="text-box">
              <h3>Section Text</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                eius molestiae perferendis eos provident vitae iste.
              </p>
            </div>
            <div class="text-box">
              <h3>Section Text</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                eius molestiae perferendis eos provident vitae iste.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
