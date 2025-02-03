/* import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const Services = () => {
  return (
    <ServicesStyled>
      <a className="anchor" id="services"></a>
      <div className="title-container">
        <h1>Servizi</h1>
      </div>
      <div className="services-list">
        <div className="service-container">
          <div className="service-text-wrapper">
            <div className="service-text">
              <h1 className="primaryText">Ferro</h1>
              <p className="secondaryText">
                <br />
                Offriamo soluzioni personalizzate per la realizzazione e
                l'installazione di prodotti in ferro su misura. Che si tratti di
                un cancello elegante per la tua abitazione, una recinzione
                robusta per la tua proprietà o altre applicazioni in ferro, il
                nostro team di esperti garantisce un lavoro preciso e duraturo.
                Siamo specializzati in: <br />
                <br />
              </p>
              <ul className="secondaryText">
                <li>Cancelli con automatismi</li>
                <li>Recinzioni</li>
                <li>Carpenteria metallica</li>
                <li>Serrande</li>
                <li>Persiane blindate</li>
              </ul>
              <div className="request-link-container">
                <Link to="contacts">
                  Richiedi un preventivo
                  <i className="fa-solid fa-arrow-right" />{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="service-img">
            <img src="images/first-service.jpg" alt="" />
          </div>
        </div>
        <div className="service-container">
          <div className="service-text-wrapper">
            <div className="service-text">
              <h1 className="primaryText">Alluminio</h1>
              <p className="secondaryText">
                <br />
                Il nostro servizio comprende la progettazione, il montaggio e
                l'assistenza post-installazione, garantendo un risultato
                impeccabile che unisce estetica e funzionalità. Utilizziamo
                alluminio di alta qualità, noto per la sua leggerezza, durata e
                resistenza agli agenti atmosferici, per assicurare prodotti che
                non solo migliorano l’aspetto della tua abitazione, ma anche la
                sua sicurezza e comfort.
                <br />
                <br />
              </p>
              <ul className="secondaryText">
                <li>Porte</li>
                <li>Finestre</li>
                <li>Avvolgibili</li>
                <li>Serrande</li>
                <li>Porte blindate</li>
              </ul>
              <div className="request-link-container">
                <Link to="contacts">
                  <span>Richiedi un preventivo </span>
                  <i className="fa-solid fa-arrow-right" />{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="service-img">
            <img src="images/first-service.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="title-container"></div>
    </ServicesStyled>
  );
};

const ServicesStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  text-align: center;
  padding-bottom: 0;
  width: 100%;

  .title-container {
    background: var(--bg-secondary);
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1rem 0;

    h1 {
      font-size: 2.5rem;
      font-weight: 500;
      color: white;
      max-width: 1300px;
    }
  }
  .services-list {
    max-width: 1400px;

    width: 100%;
    .service-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 100%;
      .service-text-wrapper {
        flex: 1;
        .service-text {
          margin: 2rem 4rem;

          p {
            text-align: left;
          }
          ul {
            text-align: left;
            padding-left: 2rem;
            li {
              list-style: disc;
            }
          }
        }
      }
      .service-img {
        flex: 1;
        overflow: hidden;

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }

      .request-link-container {
        margin: 0 0;
        padding: 1rem 0;
        border-radius: 0;
        box-shadow: none;
        text-align: left;
        font-size: 1.2rem;
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: var(--bg-secondary);
          font-size: 1.5rem;
          font-weight: 500;
          margin: 0 1rem;
          margin-top: 3rem;
          &:active {
            text-decoration: none;
          }
          i {
            padding-left: 0.7rem;
          }
        }
      }
      &:nth-child(even) {
        .service-text-wrapper {
          order: 1;
        }
        .service-img {
          order: 2;
        }
      }

      &:nth-child(odd) {
        .service-text-wrapper {
          order: 2;
        }
        .service-img {
          order: 1;
        }
      }
    }
  }

  
  // @media screen and (max-width: 1464px) {
  //   .services-list {
  //     .service-container {
  //       .service-img {
  //         img {
  //           width: auto;
  //           height: 100%;
  //         }
  //       }
  //     }
  //   }
  // }
  // @media screen and (max-width: 1243px) {
  //   .services-list {
  //     .service-container {
  //       height: 600px;
  //     }
  //   }
  // }

  // @media screen and (max-width: 1068px) {
  //   .services-list {
  //     .service-container {
  //       height: 650px;
  //     }
  //   }
  // } 
  @media screen and (max-width: 850px) {
    .title-container {
      background: var(--bg-secondary);
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 1rem 0;
      h1 {
        font-size: 1.8rem;
        font-weight: 500;
        color: white;
        max-width: 1300px;
      }
    }
    .services-list {
      width: 100%;
      .service-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        .service-text-wrapper {
          .service-text {
            margin: 2rem 1.5rem;
            h1 {
              font-size: 1.8rem;
            }

            p {
              font-size: 1.2rem;
              //text-align: left;
            }
            ul {
              //text-align: left;
              //padding-left: 2rem;
              li {
                font-size: 1.2rem;
                //list-style: disc;
              }
            }
          }
        }
        //  .service-img {
        // flex: 1;
        // overflow: hidden;
        // img {
        //   width: 100%;
        // }
        // } 

        &:nth-child(even) {
          .service-text-wrapper {
            order: 2;
          }
          .service-img {
            order: 1;
          }
        }

        &:nth-child(odd) {
          .service-text-wrapper {
            order: 2;
          }
          .service-img {
            order: 1;
          }
        }
        .request-link-container {
          a {
            font-size: 1.3rem;
          }
        }
      }
    }
  }
`;

export default Services;
 */
