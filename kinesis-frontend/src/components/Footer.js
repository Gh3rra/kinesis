import React from "react";
import styled from "styled-components";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <FooterStyled>
      <div className="footer-container">
        <div className="first-container">
          <div className="footer-logo">
            <a href="/">
              <img src="images/logo.png" alt="" />
            </a>
          </div>
          <div className="logo-text-container">
            <p>Migliora la tua salute facendo la terapia più adatata a te</p>
          </div>
          <div className="footer-social-container">
            <a href="https://www.facebook.com/profile.php?id=100063545590266">
              <FaFacebook size={30} />
            </a>
            <a href="https://www.instagram.com/kinesis_fisioepostura/">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.linkedin.com/in/jacopo-tauro-274b36b3/">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
        <div className="separator"></div>
        <div className="second-container">
          <div className="map-footer-container">
            <p className="title">Sito</p>
            <Link to="/" reloadDocument>
              Home
            </Link>
            <Link to="/treatments" reloadDocument>
              Trattamenti
            </Link>
            <Link to="/contacts" reloadDocument>
              Contatti
            </Link>
          </div>
          <div className="map-footer-container">
            <p className="title">Social</p>
            <a href="https://www.facebook.com/profile.php?id=100063545590266">
              Facebook
            </a>
            <a href="https://www.instagram.com/kinesis_fisioepostura/">
              Instagram
            </a>
            <a href="https://www.linkedin.com/in/jacopo-tauro-274b36b3/">
              Linkedin
            </a>
          </div>
          <div className="map-footer-container">
            <p className="title">Contatti</p>
            <a href="tel:+393924012832">+39 392 4012832</a>
            <a href="mailto:jacopotauro@gmail.com">jacopotauro@gmail.com</a>
            <a href="https://maps.app.goo.gl/c6xHZwt9QAdHgFc3A">
              Via Roma 17, Mirabella Eclano
            </a>
          </div>
        </div>
      </div>
      <div className="powered-container">
        <p>Powered by Gerardo Schiavo</p>
      </div>
    </FooterStyled>
  );
};

const FooterStyled = styled.section`
  height: 500px;
  background-color: #404040;
  display: flex;
  width: -webkit-fill-available;
  border-radius: 20px 20px 0 0;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  //gap: 100px;
  padding: 0 330px;

  p {
    color: #fff;
  }
  .footer-container {
    display: flex;
    //width: -webkit-fill-available;
    //border-radius: 20px 20px 0 0;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 80px 0 0 0;

    .first-container {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      .footer-logo {
        height: 150px;
        width: 150px;
        overflow: hidden;
        border-radius: 50%;
        display: flex;
        align-items: center;
        a {
          height: 100%;
          img {
            height: 100%;
          }
        }
      }
      .logo-text-container {
        padding: 20px 0;
        p {
          color: #949494;
          font-size: 1.1rem;
        }
      }
      .footer-social-container {
        display: flex;
        flex-direction: row;
        gap: 20px;
        padding: 20px 0;

        a {
          svg {
            color: #fff;
          }
        }
      }
    }
    .separator {
      width: 2px;
      height: 100%;
      margin: 0 30px;
      background-color: #fff;
    }
    .second-container {
      display: flex;
      flex-direction: row;

      .map-footer-container {
        width: fit-content;
        padding: 0 80px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        .title {
          color: #6ebbe1;
          text-transform: uppercase;
          font-size: 1.6rem;
          font-weight: 600;
          padding-bottom: 20px;
        }

        a {
          text-decoration: none;
          color: #fff;
          font-size: 1.2rem;
          &:hover {
            cursor: pointer;
            text-decoration: underline;
          }
        }
      }
    }
  }
  .powered-container {
    padding: 10px 0;
    p {
      font-size: 0.8rem;
    }
  }
  @media screen and (max-width: 800px) {
    padding: 0;
    height: auto;
    .footer-container {
      padding-left: 20px;
      flex-direction: column;
      .first-container {
        .footer-logo {
          height: 100px;
          width: 100px;
        }
        .footer-social-container {
          a {
            svg {
              height: 25px;
              width: 25px;
            }
          }
        }
      }
      .separator {
        display: none;
      }
      .second-container {
        flex-direction: column;
        .map-footer-container {
          padding: 20px 0;
          .title {
            font-size: 1.3rem;
          }
          a {
            font-size: 1rem;
          }
        }
      }
    }
  }

  /*  @media screen and (max-width: 600px) {
    align-items: start;
    .footer-container {
      display: flex;
      flex-direction: column;
      padding: 0 1.5rem;
      gap: 0;
      padding-bottom: 4rem;
      .footer-logo {
        display: none;
      }

      .footer-text {
        display: flex;
        flex-direction: column;
        gap: 0;
        .footer-menu {
          display: flex;
          flex-direction: column;
          padding-top: 1rem;
          h1 {
            font-weight: 600;
            font-size: 1.2rem;

            color: white;
            padding: 0.7rem 0;
          }
          p {
            font-size: 0.9rem;
            color: white;
            padding: 0.2rem 0;
          }
          a {
            color: inherit;
            &:hover {
              text-decoration: underline;
              text-decoration-color: white;
            }
          }
        }
      }
    }
    .powered-text {
      background-color: white;
      text-align: center;
      padding: 0.4rem;
      width: 100%;
      p {
        font-size: 0.9rem;
        font-weight: 500;
      }
      a {
        text-decoration: none;
        color: inherit;
        &:hover {
          text-decoration: underline;
          text-decoration-color: var(--secondary-color);
        }
      }
    }
  } */
`;

export default Footer;
