// src/components/mainpage/MainPage.js

import React from "react";
import "./MainPage.css";
import Navbar from "../header/NavBar.js";
import { useInView } from "react-intersection-observer";
export default function MainPage() {
  const [sectionHome, sectionHomeInView] = useInView({ threshold: 0.5 });
  const [sectionAbout, sectionAboutInView] = useInView({ threshold: 0.5 });
  const [sectionAcademic, sectionAcademicInView] = useInView({
    threshold: 0.5,
  });
  const [sectionPublication, sectionPublicationInView] = useInView({
    threshold: 0.5,
  });
  return (
    <>
      <Navbar
        sectionHomeInView={sectionHomeInView}
        sectionPublicationInView={sectionPublicationInView}
        sectionAboutInView={sectionAboutInView}
        sectionAcademicInView={sectionAcademicInView}
      />
      <section id="home" ref={sectionHome}>
        <div class="container reveal">
          <h1>Watch the Nav Bar as you Scroll Down &#8595;</h1>
        </div>
      </section>
      <section id="about" ref={sectionAbout}>
        <div class="container reveal">
          <h2>About</h2>
          <div class="text-container">
            <div class="text-box">
              <h3>Section Text</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                eius molestiae perferendis eos provident vitae iste. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Quam blanditiis,
                officiis, voluptate quisquam aperiam nobis est, quis neque esse
                soluta dolores iste sit corrupti! Magnam, delectus qui. Odit,
                accusamus doloremque.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex est
                rerum id quis eaque rem suscipit reprehenderit quaerat vero
                nesciunt?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatum, eaque voluptatibus. Eaque tempore quam nesciunt.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                adipisci blanditiis assumenda atque officiis? Vel, fuga facilis
                quia reprehenderit nihil optio harum. Quo sapiente veniam atque
                corporis tempora non repellat?
              </p>
            </div>
          </div>
        </div>
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
      <section id="academic" ref={sectionAcademic}>
        <div class="container reveal">
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
    </>
  );
}
