import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import bg from "../../images/port-bg2.png";

const Footer = () => {
  return (
    <StyledFooter>
      <h2 className="contact-me">Let's talk about that project of yours!</h2>
      <p className="content-paragraph">
        I am open for projects or collaboration. Or we can grab some coffee for
        the sake of it!
      </p>
      <a href="" className="contact-me-btn">
        Send me an Email
      </a>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  width: 100%;

  padding: 4rem 2rem;
  background-color: #071b37;
  background-image: url(${bg});
  background-blend-mode: multiply;
  color: #fff;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .footer-content {
    max-width: fit-content;
    width: 100%;
    margin: 0 auto;
  }
  .contact-me {
    font-size: 3.5rem;
  }
  .content-paragraph {
    margin: 0 auto;
    width: 100%;
  }

  .contact-me-btn {
    text-decoration: none;
    text-align: center;
    margin-top: 30px;
    color: #e63946;
    border-bottom: 3px solid #e63946;
    padding-bottom: 4px;
    &:hover {
      color: #ffffff;
      border-bottom: 3px solid #001e5f;
    }
  }
`;
