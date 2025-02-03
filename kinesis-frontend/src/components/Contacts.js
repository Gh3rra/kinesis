import styled from "styled-components";
//import serverUrl from "./api/serverUrl";

const Contacts = () => {
  return (
    <ContactsStyled>
      <div className="contacts-container">
        <div className="image-flex">
          <div className="image-container">
            <img src="/images/contact-image.jpg" alt="" />
          </div>
        </div>
        <div className="contacts">
          <div className="title-container">
            <p>Contatti</p>
          </div>
          <div className="subtitle-container">
            <p>Contattaci subito!</p>
          </div>
          <h2 className="title-h2">Indirizzo</h2>
          <h2>Via Roma 17 </h2>
          <h2> 83030 Mirabella Eclano AV </h2>
          <h2>Italia</h2>
          <h2 className="title-h2">Telefono</h2>
          <h2>
            Cell: <a href="tel:+393924012832">+39 392 4012832</a>{" "}
          </h2>
          <h2>
            Email:{" "}
            <a href="mailto:jacopotauro@gmail.com">jacopotauro@gmail.com</a>{" "}
          </h2>
        </div>
      </div>
    </ContactsStyled>
  );
};

const ContactsStyled = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  .contacts-container {
    padding: 0 100px;
    max-width: 1300px;
    padding-bottom: 200px;
    margin-top: 200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    height: 1000px;

    .image-flex {
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;
      align-content: center;
      .image-container {
        img {
          border-radius: 20px;

          filter: brightness(0.8);
          width: 100%;
        }
      }
    }

    .contacts {
      flex: 1;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: start;
      padding: 2rem 5rem;
      .title-container {
        background-color: #6ebbe1;
        padding: 10px 15px;
        p {
          color: #fff;
          font-weight: 700;
          font-size: 1.6rem;
          font-style: italic;
          text-transform: uppercase;
        }
      }
      .subtitle-container {
        padding-top: 15px;
        padding-bottom: 20px;
        p {
          color: #363636;
          font-weight: 700;
          font-size: 3rem;
          font-style: italic;
          text-transform: uppercase;
        }
      }
      h1 {
        color: #363636;
        font-size: 1.5rem;
        font-weight: 600;
        padding: 1rem 0;
      }
      h2 {
        color: #363636;
        font-weight: 500;
        font-size: 1.3rem;
        padding: 0.2rem 0;
        a {
          text-decoration: none;
          color: #363636;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      .title-h2 {
        padding: 1rem 0;
        font-weight: 700;
      }
    }
  }

  @media screen and (max-width: 600px) {
    padding: 0;

    .contacts-container {
      padding: 0;
      padding-left: 20px;
      flex-direction: column-reverse;
      .contacts {
        padding: 0;
      }
      .image-flex {
        display: none;
      }
    }
  }
`;

export default Contacts;
