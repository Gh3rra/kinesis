import React from "react";
import styled from "styled-components";

const Treatments = () => {
  return (
    <TreatmentsStyled>
      <div className="first-hero">
        <div className="background-container">
          <img
            className="hero-image-background"
            src="images/treatment-hero-background.jpg"
            alt=""
          />
          <img
            className="hero-background"
            src="images/hero-background.svg"
            alt=""
          />
        </div>
        <div className="first-hero-container">
          <div className="hero-text-container">
            <div className="title-container">
              <p>Trattamenti</p>
            </div>
            <div className="subtitle-container">
              <p>Fisioterapia</p>
            </div>
            <div className="description-container">
              <p>
                Esercizi terapeutici mirati per migliorare la mobilità, la forza
                muscolare e ridurre il dolore
              </p>
            </div>
            <div className="book-button-container">
              <button className="book-button">
                <p>PRENOTA UN APPUNTAMENTO</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="second-hero-container">
        <div className="image-flex">
          <div className="dotted-background-container">
            {" "}
            <img
              className="dotted-background"
              src="/images/dotted-line.svg"
              alt=""
            />
          </div>
          <div className="image-container">
            <img src="/images/treatment-hero-image-1.jpg" alt="" />
          </div>
        </div>
        <div className="description-flex">
          <div className="description-container">
            <div className="title-container">
              <p>Cos'è la fisioterapia?</p>
            </div>
            <div className="text-container">
              <p>
                La fisioterapia comprende una serie di esercizi terapeutici
                volti a migliorare la mobilità, alleviare il dolore e aumentare
                la forza muscolare. Viene utilizzato per trattare sia lesioni
                acute che disturbi cronici.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="third-hero-container">
        <div className="description-flex">
          <div className="description-container">
            <div className="title-container">
              <p>Benefici della fisioterapia</p>
            </div>
            <div className="text-container">
              <p>
                Con una fisioterapia regolare puoi ripristinare le tue
                prestazioni fisiche e mantenerle a lungo termine. Gli esercizi
                ti aiuteranno a migliorare i tuoi schemi motori e ad aumentare
                il tuo benessere generale.
              </p>
            </div>
          </div>
        </div>
        <div className="image-flex">
          <div className="dotted-background-container">
            {" "}
            <img
              className="dotted-background"
              src="/images/dotted-line.svg"
              alt=""
            />
          </div>
          <div className="image-container">
            <img src="/images/treatment-hero-image-2.jpg" alt="" />
          </div>
        </div>
      </div>
    </TreatmentsStyled>
  );
};

const TreatmentsStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .first-hero {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .background-container {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      overflow: visible;
      top: 0;
      right: 0;
      width: 100%;
      .hero-background {
        width: 100%;
        position: absolute;
        left: 0;
        top: 200px;
      }
      .hero-image-background {
        width: 50%;
        height: 930px;
        border-radius: 0 0 20px 20px;
        position: absolute;
        z-index: 1;
        object-fit: cover;
      }
    }

    .first-hero-container {
      max-width: 1300px;
      width: 100%;
      margin-top: 200px;
      display: flex;
      flex-direction: column;
      margin-bottom: 200px;

      .hero-text-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-width: 650px;
        .title-container {
          background-color: #6ebbe1;
          width: fit-content;
          padding: 8px 15px;
          p {
            font-size: 1.5rem;
            font-weight: 700;
            color: #fff;
            text-transform: uppercase;
            font-style: italic;
          }
        }
        .subtitle-container {
          p {
            font-size: 3.2rem;
            color: #363636;
            text-transform: uppercase;
            font-style: italic;
            font-weight: 700;
          }
        }
        .description-container {
          padding: 20px 5px;
          p {
            font-weight: 600;
            font-size: 1.2rem;
            color: #363636;
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
  .second-hero-container {
    margin-top: 600px;
    margin-bottom: 200px;
    display: flex;
    max-width: 1300px;

    .image-flex {
      flex: 1;
      width: 100%;
      display: flex;
      justify-content: center;
      position: relative;
      .dotted-background-container {
        position: absolute;
        height: 100%;
        display: flex;
        align-items: center;
        .dotted-background {
          height: 120%;
          transform: rotate(60deg);
        }
      }
      .image-container {
        z-index: 3;
        display: flex;
        width: 500px;
        height: 500px;
        overflow: hidden;
        border-radius: 20px;
        justify-content: center;
        img {
          height: 100%;
        }
      }
    }
    .description-flex {
      flex: 1;

      .description-container {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-content: center;
        justify-content: center;
        padding: 0 90px 0 80px;

        .title-container {
          p {
            font-size: 3rem;
            color: #363636;
            text-transform: uppercase;
            font-style: italic;
            font-weight: 700;
          }
        }
        .text-container {
          p {
            font-weight: 600;
            font-size: 1.2rem;
            color: #363636;
          }
        }
      }
    }
  }
  .third-hero-container {
    margin-top: 300px;
    margin-bottom: 200px;
    max-width: 1300px;

    display: flex;
    flex-direction: row;
    .image-flex {
      flex: 1;
      width: 100%;
      display: flex;
      position: relative;
      justify-content: center;
      .dotted-background-container {
        position: absolute;
        height: 100%;
        display: flex;
        align-items: center;
        .dotted-background {
          height: 120%;
        }
      }
      .image-container {
        display: flex;
        width: 500px;
        height: 500px;
        border-radius: 20px;
        justify-content: center;
        overflow: hidden;
        align-items: flex-start;
        position: relative;

        img {
          width: 100%;
          object-fit: cover;
        }
      }
    }
    .description-flex {
      flex: 1;

      .description-container {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-content: center;
        justify-content: center;
        padding: 0 90px 0 80px;

        .title-container {
          p {
            font-size: 3rem;
            color: #363636;
            text-transform: uppercase;
            font-style: italic;
            font-weight: 700;
          }
        }
        .text-container {
          p {
            font-weight: 600;
            font-size: 1.2rem;
            color: #363636;
          }
        }
      }
    }
  }
  @media screen and (max-width: 800px) {
    .first-hero {
      flex-direction: column-reverse;
      .background-container {
        .hero-background {
          display: none;
        }
        .hero-image-background {
          border-radius: 0;
          position: static;
          height: 400px;
          width: 100%;
        }
      }

      .first-hero-container {
        margin-bottom: 50px;
        .hero-text-container {
          align-items: center;
          .description-container {
            text-align: center;
          }
        }
      }
    }
    .second-hero-container {
      margin-top: 100px;
      margin-bottom: 50px;
      width: 100%;
      flex-direction: column-reverse;
      overflow: hidden;
      .image-flex {
        .dotted-background-container {
        }
        .image-container {
          margin: 0 20px;
          overflow: hidden;
        }
      }
      .description-flex {
        margin-bottom: 50px;
        .description-container {
          padding: 0 30px;
        }
      }
    }
    .third-hero-container {
      margin-top: 50px;
      width: 100%;
      flex-direction: column;
      overflow: hidden;

      .image-flex {
        .dotted-background-container {
        }
        .image-container {
          margin: 0 20px;
          overflow: hidden;
        }
      }
      .description-flex {
        margin-bottom: 50px;
        .description-container {
          padding: 0 30px;
        }
      }
    }
  }
`;

export default Treatments;
