import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Hero = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <HeroStyled>
      <section className="hero-img-container">
        <img
          src="images/hero-background.svg"
          alt=""
          className="background-hero-image"
        />
        <img src="images/hero_image.png" alt="" className="hero-image" />
      </section>
      <div className="hero-container">
        <div className="hero-text-container">
          <div className="subtitle-container">
            <p className="subtitle-text">IL TUO FISIOTERAPISTA</p>
          </div>
          <p className="title-text">TORNA A FARE CIÓ CHE AMI</p>
          <br />
          <p className="description-text">
            Porta la tua salute a un livello superiore con le nostre terapie su
            misura e la tecnologia all'avanguardia. Il nostro team è pronto ad
            aiutarti a raggiungere i tuoi obiettivi personali. Pronto? Allora
            vai!
          </p>

          <div className="book-button-container">
            <button className="book-button">
              <a href="/booking">
                <p>PRENOTA UN APPUNTAMENTO</p>
              </a>
            </button>
          </div>
          <div className="hero-image-container">
            <img src="images/hero-image2.jpg" alt="" />
          </div>
        </div>
        <div className="second-hero-container">
          <div className="title-container">
            <p className="title-text"> La tua salute è nelle migliori mani</p>
          </div>
          <div className="text-container">
            <div className="image-container">
              <img src="/images/second-hero-image-1.avif" alt="" />
            </div>
            <div className="description-container">
              <p className="description-text">
                Noi di Kinesis abbiamo a cuore la vostra salute. Nella nostra
                sede troverete esattamente ciò di cui avete bisogno. Dalla
                fisioterapia e allenamento fitness alle misure preventive: il
                nostro team si affida alle tecniche più moderne e ai piani
                terapeutici individuali. Suona bene? Ti mostreremo come
                raggiungere i tuoi obiettivi di salute. Iniziamo insieme!
              </p>
              <div className="image-container">
                <img src="/images/second-hero-image-2.jpg" alt="" />
              </div>
            </div>
          </div>

          <div className="book-button-container"></div>
        </div>
        <div className="third-hero-container">
          <div className="title-container">
            <div className="first-title-container">
              <p className="first-title">La nostra sede</p>
            </div>
            <p className="second-title"> Siamo a disposizione qui</p>
          </div>
          <div className="text-container">
            <p className="description-text">
              La tua salute è il nostro obiettivo. Qualunque sia il problema
              siamo a vostra disposizione. Utilizzando tecniche moderne e piani
              individuali, ti porteremo sulla strada giusta. Non vediamo l'ora
              di supportarti!
            </p>
          </div>
          <div className="location-card">
            <div className="image-container">
              <p className="location-text">MIRABELLA ECLANO</p>
              <img src="/images/position.png" alt="" />
            </div>
            <div className="information-container">
              <div className="information-text-container">
                <div className="address-container">
                  <a href="https://maps.app.goo.gl/c6xHZwt9QAdHgFc3A">
                    <p>Via Roma, 117, 83036 Mirabella Eclano AV</p>
                  </a>
                </div>
                <div className="phone-container">
                  <FaPhoneAlt size={20} />
                  <a href="tel:+393924012832">
                    <p>392 401 2832</p>
                  </a>
                </div>
                <div className="email-container">
                  <IoMdMail size={20} />
                  <a href="mailto:jacopotauro@gmail.com">
                    <p>jacopotauro@gmail.com</p>
                  </a>
                </div>
              </div>
              <div className="address-button-container">
                <a href="https://maps.app.goo.gl/c6xHZwt9QAdHgFc3A">
                  <button className="address-button">
                    <p>VAI ALLA POSIZIONE</p>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroStyled>
  );
};

const HeroStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .hero-img-container {
    width: 100%;
    position: relative;
    overflow: visible;
    .background-hero-image {
      z-index: 1;
      position: absolute;
      width: 100%;
    }

    .hero-image {
      width: 81%;
      object-fit: cover;
      //height: 100%;
      position: absolute;
      inset: -100px 0% 0% auto;
    }
  }
  .hero-container {
    max-width: 1300px;
    .hero-text-container {
      max-width: 60rem;
      padding-top: 170px;
      position: relative;
      z-index: 3;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-width: 700px;
      background-size: cover;
      background-repeat: no-repeat;

      .subtitle-container {
        background-color: #6ebbe1;
        width: fit-content;
        padding: 6px 18px;
        .subtitle-text {
          font-style: italic;
          font-weight: 600;
          color: #fff;
          font-size: 1.5rem;
        }
      }
      .title-text {
        font-size: 4.2rem;
        color: #363636;
        font-weight: 800;
        font-style: italic;
      }
      .description-text {
        font-size: 1.4rem;
        font-family: "Myriad";
        color: #404040;
      }

      .img-container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem 4rem;
        flex: 1;
        img {
          width: 100%;
        }
      }

      .secondText {
        display: flex;
        justify-content: space-between;
        padding: 2rem 0;
        .text-container {
          padding: 2rem 4rem;
        }
        .img-container {
          padding: 2rem 4rem;
          img {
            width: 600px;
          }
        }
      }
      .book-button-container {
        padding: 20px 0px;
        .book-button {
          background-color: #6ebbe1;
          border: none;
          padding: 8px 25px;
          box-shadow: 5px 5px 5px 0px #000000;
          transform: translate(-3px, -3px);
          transition: all 0.2s;
          &:hover {
            box-shadow: none;
            transform: translate(0);
            cursor: pointer;
          }
          a {
            text-decoration: none;
            p {
              color: #fff;
              font-size: 1rem;
              font-weight: 600;
            }
          }
        }
      }
      .hero-image-container {
        display: none;
        width: 100%;
        img {
          width: 100%;
        }
      }
    }

    .second-hero-container {
      padding-top: 500px;
      position: relative;
      z-index: 3;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      background-size: cover;
      background-repeat: no-repeat;

      .title-container {
        text-align: center;
        .title-text {
          text-transform: uppercase;
          font-size: 4rem;
          color: #363636;
          font-weight: 800;
          font-style: italic;
        }
      }
      .text-container {
        padding: 50px 0;
        display: flex;
        flex-direction: row;
        height: 800px;
        gap: 50px;
        align-items: center;
        .image-container {
          flex: 0.5;
          border-radius: 20px;
          overflow: hidden;
          height: 100%;

          img {
            border-radius: 20px;

            width: 100%;
          }
        }
        .description-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: baseline;
          height: 100%;
          .description-text {
            padding: 0 0 30px 0;
            font-weight: 600;
          }
          .image-container {
            flex: 1;
            overflow: hidden;
            border-radius: 20px;
            height: 100%;
            img {
              width: 100%;
              border-radius: 20px;

              filter: brightness(0.8);
            }
          }
        }
        .description-text {
          font-size: 1.4rem;
          font-family: "Myriad";
          color: #404040;
        }
      }
    }

    .third-hero-container {
      margin-bottom: 50px;
      padding: 50px 20px;
      z-index: 3;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 2px 20px #00000021;
      .title-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        .first-title-container {
          background-color: #6ebbe1;
          width: fit-content;
          padding: 6px 18px;
          .first-title {
            font-style: italic;
            font-weight: 600;
            color: #fff;
            font-size: 1.5rem;
            text-transform: uppercase;
          }
        }
        .second-title {
          text-transform: uppercase;
          font-size: 3rem;
          color: #363636;
          font-weight: 800;
          font-style: italic;
        }
      }
      .text-container {
        padding: 20px 450px;
        .description-text {
          text-align: center;
          color: #363636;
          font-size: 1.2rem;
          font-weight: 600;
        }
      }
      .location-card {
        margin-top: 20px;
        background-color: #dbdbdb;
        border-radius: 10px;
        width: 450px;
        height: 500px;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        .image-container {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          flex: 0.9;
          width: 100%;
          height: 100%;
          overflow: hidden;
          p {
            color: #fff;
            font-size: 1.8rem;
            font-weight: 600;
            z-index: 3;
            position: relative;
          }
          img {
            z-index: 2;
            top: 0;
            position: absolute;
            width: 100%;
            filter: brightness(0.3);
          }
        }
        .information-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          height: 100%;
          align-items: center;
          .information-text-container {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            padding: 20px 0 15px 0;
            align-items: center;
            height: 100%;
            .address-container {
              //padding: 20px 0;
              text-align: center;
              a {
                text-decoration: none;
                p {
                  color: #363636;
                  font-weight: 600;
                  font-style: italic;
                  text-transform: uppercase;
                  font-size: 1.1rem;
                }
              }
            }
            .phone-container {
              //padding: 10px 0;

              text-align: center;
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 10px;

              svg {
                color: #404040;
              }

              a {
                text-decoration: none;
                p {
                  color: #363636;

                  font-size: 1.1rem;
                }
              }
            }
            .email-container {
              text-align: center;
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 10px;
              svg {
                color: #404040;
              }

              a {
                text-decoration: none;
                p {
                  color: #363636;

                  font-size: 1.1rem;
                }
              }
            }
          }
          .address-button-container {
            padding-bottom: 30px;

            .address-button {
              background-color: #6ebbe1;
              border: none;
              padding: 8px 25px;
              box-shadow: 5px 5px 5px 0px #000000;
              transform: translate(-3px, -3px);
              transition: all 0.2s;
              &:hover {
                box-shadow: none;
                transform: translate(0);
                cursor: pointer;
              }
              p {
                color: #fff;
                font-size: 1rem;
                font-weight: 600;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    .hero-img-container {
      .background-hero-image {
        top: 250px;
      }
      .hero-image {
        display: none;
      }
    }
    .hero-container {
      width: 100%;

      .hero-text-container {
        align-items: center;
        .subtitle-container {
          .subtitle-text {
          }
        }
        .title-text {
          text-align: center;
          font-size: 2.7rem;
        }
        .description-text {
          text-align: center;
          padding: 0 20px;
        }
        .hero-image-container {
          display: block;
        }
      }
      .img-container {
        img {
        }

        .secondText {
          .text-container {
          }
          .img-container {
            img {
            }
          }
        }
        .book-button-container {
          .book-button {
            &:hover {
            }
            p {
            }
          }
        }
      }

      .second-hero-container {
        margin-top: 150px;
        width: 100%;

        padding: 0;
        .title-container {
          .title-text {
            font-size: 2rem;
          }
        }
        .text-container {
          width: 100%;

          height: fit-content;
          .image-container {
            display: none;
            img {
            }
          }
          .description-container {
            width: 100%;

            height: auto;
            padding: 0 20px;
            .description-text {
              font-size: 1.2rem;
            }
            .image-container {
              width: 100%;
              display: flex;
              justify-content: center;
              img {
                width: auto;
                height: 100%;
              }
            }
          }
          .description-text {
          }
        }
      }

      .third-hero-container {
        .title-container {
          text-align: center;
          .first-title-container {
            .first-title {
            }
          }
          .second-title {
            font-size: 2rem;
          }
        }
        .text-container {
          padding: 20px 20px;
          .description-text {
            font-size: 1.2rem;
          }
        }
        .location-card {
          width: 100%;
          .image-container {
            p {
            }
            img {
            }
          }
          .information-container {
            .information-text-container {
              .address-container {
                a {
                  p {
                  }
                }
              }
              .phone-container {
                svg {
                }

                a {
                  p {
                  }
                }
              }
              .email-container {
                svg {
                }

                a {
                  p {
                  }
                }
              }
            }
            .address-button-container {
              .address-button {
                &:hover {
                }
                p {
                }
              }
            }
          }
        }
      }
    }
  }
  /*  @media screen and (max-width: 1070px) {
    .hero-img-container {
      height: 65vh;
      img {
        height: 100%;
        width: auto;
      }
    }
    .hero-text-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding-top: 1rem;
      padding-left: 0;
      padding-right: 0;

      .firstText {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0;
        max-width: 1300px;

        .text-container {
          flex: 1;
          padding: 2rem 1.5rem;
          h1 {
            padding: 0.5rem 0;
            font-size: 1.8rem;
          }
          p {
            padding: 0.5rem 0;
            font-size: 1.2rem;
          }
        }
      }
    }
  } */
`;

export default Hero;
