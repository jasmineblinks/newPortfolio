import React, { useState, useEffect } from "react";

import reactLogo from "../../images/logo.svg";
import myLogo from "../../images/jasmine.png";

import jSLogo from "../../images/logo-javascript.svg";

import htmlLogo from "../../images/html5-logo.svg";
import nextLogo from "../../images/next-js.svg";
import myCV from "../../assets/faith_pueneh.pdf";
import AOS from "aos";
import "aos/dist/aos.css";

import { StyledLayout } from "../layout/Layout";
import "./header.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 400,
      easing: "ease-in-sine",
      delay: 100,
      once: true,
    });
  });
  return (
    <div className={"header-banner"}>
      <header className={"header-section"}>
        {" "}
        <img src={myLogo} className={"header-logo"} />{" "}
        <nav className={"nav-bar"}>
          <a href={"#about-me"} data-aos="fade-right" className={"nav-link"}>
            About
          </a>{" "}
          <a href={"#my-works"} data-aos="fade-right" className={"nav-link"}>
            Works
          </a>
          <a href={"#contact-me"} data-aos="fade-right" className={"nav-link"}>
            Contact
          </a>
        </nav>
      </header>
      <div className={"banner-content-wrapper"}>
        <section className={"banner-content"} data-aos="fade-left">
          <h1 id={"title"} data-aos="fade-left">
            {" "}
            For the <b className={"love"}>Love</b> of <br /> Frontend{" "}
          </h1>
          <p className={"about-me"} id={"about-me"}>
            A front-end developer who enjoys problem-solving, loves creating
            dynamic and beautiful web applications with knowledge of UI/UX. A
            volunteer-lead at the women who code front-end track.
          </p>
          <a
            href={myCV}
            className={"download-btn"}
            download="Faith_Pueneh_resume">
            Download CV
          </a>
        </section>
        <div className={"user-img-wrapper"} data-aos="fade-in">
          {/* <img src={logo} className={"user-img"} /> */}
        </div>
      </div>

      <section className={"stack-section"}>
        <h2 className={"stack-section-title"}>I work with these:</h2>
        <div className={"stack-wrapper"}>
          <img src={jSLogo} />
          <img src={htmlLogo} />
          <img src={reactLogo} id={"react-logo"} />
          <img src={nextLogo} />
        </div>
      </section>
    </div>
  );
};

export default Header;
