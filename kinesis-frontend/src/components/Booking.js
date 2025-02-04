import React, { useState } from "react";
import styled from "styled-components";
//import { useDropzone } from "react-dropzone";
//import serverUrl from "./api/serverUrl";

const Booking = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  // const [uploaded, setUploaded] = useState(false);
  const [sent, setSent] = useState(false);
  // const [errorCv, setErrorCv] = useState(false);
  const [error, setError] = useState(false);

  /*  const onDrop = (files) => {
    setAcceptedFiles(files);
    if (files.length === 0) {
      setErrorCv(true);
    } else {
      setUploaded(true);
      setErrorCv(false);
    }
  }; */

  /*    const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    disabled: uploaded,
    accept: {
      "application/pdf": [".pdf"],
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
    },
  });  */

  /*   const handleDelete = (file) => {
    setAcceptedFiles((value) => {
      const newValue = value.filter((item) => item !== file);
      if (newValue.length === 0) setUploaded(false);
      return newValue;
    });
  }; */

  /*  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {(file.size / 1000000).toFixed(3)} MB
      <i
        className="fa-solid fa-xmark delete-icon"
        onClick={() => handleDelete(file)}
      ></i>
    </li>
  )); */

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !surname || !email || !phone) {
      setError(true);
    } else {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("surname", surname);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("message", message);

      //const res = await serverUrl.post("/work-form", formData);
      setName("");
      setSurname("");
      setEmail("");
      setPhone("");
      setMessage("");
      // setErrorCv(false);
      setError(false);
      setSent(true);
    }
  };

  return (
    <BookingStyled>
      <div className="title-container">
        <h1>Prenota un appuntamento</h1>
      </div>
      <div className="subtitle-container">
        <h2>Prenota subito il tuo appuntamento con noi!</h2>
      </div>
      {!sent ? (
        <div className="booking-form-container">
          <h2>
            Per prima cosa seleziona la tua posizione. Potrai quindi scegliere
            tra i servizi offerti dalla sede. Una volta ricevuto il tuo
            messaggio, ti contatteremo immediatamente per concordare un
            appuntamento adatto a te. <br /> Non vediamo l'ora di vedervi!
          </h2>{" "}
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-container">
              <div
                className={
                  error && !name ? "input-control error-input" : "input-control"
                }
              >
                <label htmlFor="name">Nome*</label>
                <input
                  name="name"
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                {error && !name && (
                  <p className="error-message">
                    Questo campo non può essere vuoto
                  </p>
                )}
              </div>
              <div
                className={
                  error && !surname
                    ? "input-control error-input"
                    : "input-control"
                }
              >
                <label htmlFor="surname">Cognome*</label>
                <input
                  name="surname"
                  id="surname"
                  type="text"
                  value={surname}
                  onChange={(e) => {
                    setSurname(e.target.value);
                  }}
                />
                {error && !surname && (
                  <p className="error-message">
                    Questo campo non può essere vuoto
                  </p>
                )}
              </div>
              <div
                className={
                  error && !email
                    ? "input-control error-input"
                    : "input-control"
                }
              >
                <label htmlFor="email">Email*</label>
                <input
                  name="email"
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                {error && !email && (
                  <p className="error-message">
                    Questo campo non può essere vuoto
                  </p>
                )}
              </div>
              <div
                className={
                  error && !phone
                    ? "input-control error-input"
                    : "input-control"
                }
              >
                <label htmlFor="phone">Telefono*</label>
                <input
                  name="phone"
                  id="phone"
                  type="text"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
                {error && !phone && (
                  <p className="error-message">
                    Questo campo non può essere vuoto
                  </p>
                )}
              </div>
              <div className="input-control message-input">
                <label htmlFor="message">Messaggio</label>
                <textarea
                  name="message"
                  id="message"
                  //type="text"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
              </div>

              <div className="button-container">
                <button type="submit">Invia</button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="sent-message">
          <h1>
            Grazie per la sua prenotazione. Le sarà dato riscontro alla email
            che ci ha fornito o la richiameremo non appena possibile.
          </h1>
        </div>
      )}
    </BookingStyled>
  );
};

const BookingStyled = styled.section`
  padding: 50px 8rem;
  margin-top: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin: 150px 300px 100px 300px;
  border-radius: 20px;
  box-shadow: 0 8px 20px #00000026;

  .title-container {
    background-color: #6ebbe1;
    padding: 10px 20px;
    h1 {
      width: 100%;
      text-align: center;
      font-size: 1.7rem;
      font-weight: 500;
      text-transform: uppercase;
      color: #fff;
      font-style: italic;
      font-weight: 600;
    }
  }
  .subtitle-container {
    h2 {
      text-align: center;
      font-size: 2.9rem;
      font-weight: 700;
      font-style: italic;
      text-transform: uppercase;
      color: #363636;
    }
  }
  .booking-form-container {
    padding-top: 50px;
    h2 {
      color: #363636;
      font-size: 1.1rem;
      font-weight: 600;
      padding: 0 200px;
      text-align: center;
    }
    form {
      padding-top: 50px;
      width: 100%;
      max-width: 1300px;

      .form-container {
        padding: 3rem 5rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        row-gap: 3rem;
        justify-items: start;
        column-gap: 5rem;

        .input-control {
          position: relative;
          width: 100%;
          input {
            width: 100%;
            height: 2.5rem;
            font-family: inherit;
            font-size: 1rem;
            padding: 0 1rem;
            border: 1px solid #363636;
            border-radius: 8px;
          }
          label {
            color: #363636;
            position: absolute;
            top: -25px;
          }
          .error-message {
            color: red;
            padding-top: 0.5rem;
          }
        }
        .error-input {
          label {
            color: red;
          }
          input {
            border: 1px solid red;
          }
        }

        .message-input {
          grid-column: 1/3;
          textarea {
            padding: 1rem;
            font-size: inherit;
            font-weight: inherit;
            font-family: inherit;
            width: 100%;
            height: 5rem;
            max-width: 100%;
            min-width: 100%;
            min-height: 4rem;
            border: 1px solid #363636;
            border-radius: 10px;
          }
        }
        .attachment-input {
          grid-column: 1/3;
          .dropzone {
            padding-top: 0.5rem;
            padding-bottom: 1rem;
            min-height: 4rem;
            border: 2px dashed rgb(118, 118, 118);
            border-radius: 2px;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            p {
              padding-top: 0.5rem;
            }
            i {
              width: auto;
              height: 3rem;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
          .disabled {
            color: #c3c3c3;
            border-color: #c3c3c3;
          }
          aside {
            padding: 1rem 1rem;
            display: none;
            h4 {
              padding: 0.5rem 0;
            }
            .delete-icon {
              padding: 0 0.4rem;
              cursor: pointer;
            }
          }
          .active {
            display: block;
          }
          .error-cv {
            padding: 0.8rem 0;
            h4 {
              display: inline;
              font-weight: 500;
              color: red;
            }
          }
        }

        .error-attachment-input {
          label {
            color: red;
          }
          .dropzone {
            border: 2px dashed red;
          }
        }

        .attachment-form-container {
          padding: 2rem;
        }
        .button-container {
          display: flex;
          justify-content: center;
          grid-column: 1 / 3;
          width: 100%;
          button {
            border: none;
            background-color: var(--secondary-color);
            border-radius: 5px;
            color: white;
            font-size: inherit;
            font-weight: 500;
            font-family: inherit;
            padding: 1rem 2rem;
            transition: all 0.3s ease;
            &:hover {
              background-color: #0073b9;
              cursor: pointer;
            }
          }
        }
      }
    }
  }

  .sent-message {
    padding: 8rem 5rem;
    display: flex;
    justify-content: center;
    h1 {
      color: var(--primary-color);
      max-width: 40ch;
    }
  }

  @media screen and (max-width: 800px) {
    margin: 150px 10px 50px 10px;
    padding: 40px 10px 20px 10px;
    .title-container {
      h1 {
        font-size: 1.2rem;
      }
    }
    .subtitle-container {
      padding-top: 20px;
      h2 {
        font-size: 1.8rem;
      }
    }
    .booking-form-container {
      padding-bottom: 30px;
      h2 {
        font-size: 1.1rem;
        padding: 0 10px;
      }
      form {
        .form-container {
          padding: 0 20px;
          display: flex;
          flex-direction: column;
          .button-container {
            display: flex;
            justify-content: center;
            grid-column: 1 / 3;
            width: 100%;
            button {
              border: none;
              background-color: var(--secondary-color);
              border-radius: 5px;
              color: white;
              font-size: inherit;
              font-weight: 500;
              font-family: inherit;
              padding: 1rem 2rem;
              transition: all 0.3s ease;
              &:hover {
                background-color: #0073b9;
                cursor: pointer;
              }
            }
          }
        }
      }
    }

    .sent-message {
      padding:120px 20px;
      h1 {
        text-align: center;
        font-size: 1.3rem;

      }
    }
  }
`;

export default Booking;
