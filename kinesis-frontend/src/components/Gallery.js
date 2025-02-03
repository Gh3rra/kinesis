/* import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { gallery } from "../data/galleryData";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

const Gallery = () => {
  const [active, setActive] = useState(3);

  const prevProject = () => {
    setActive((prevValue) => {
      if (prevValue === 0) return 0;
      else return prevValue - 1;
    });
  };

  const nextProject = () => {
    setActive((prevValue) => {
      if (prevValue === gallery.length - 1) return gallery.length - 1;
      else return prevValue + 1;
    });
  };

  const getPositionClass = (i) => {
    let positionClass;
    if (i === active) {
      positionClass = "active";
    } else if (i > active) {
      positionClass = "next";
    } else if (i < active) {
      positionClass = "prev";
    }
    return positionClass;
  };

  return (
    <GalleryStyled>
      <a className="anchor" id="gallery" />
      <div className="title-container">
        <h1 className="primaryText">Gallery</h1>
      </div>
      <div className="gallery-container">
        <button className="left-btn" onClick={prevProject}>
          <MdOutlineNavigateBefore size={60} className="prevIcon" />
        </button>

        {gallery.map((item, i) => {
          let positionClass = getPositionClass(i);
          return (
            <div className={`gallery-item ${positionClass}`} key={i}>
              <img src={item} alt="" className="gallery-img" />
            </div>
          );
        })}
        <button className="right-btn" onClick={nextProject}>
          <MdOutlineNavigateNext size={60} className="nextIcon" />
        </button>
      </div>
    </GalleryStyled>
  );
};

const GalleryStyled = styled.section`
  padding: 2rem;
  .title-container {
    padding: 1rem;
    text-align: center;
  }
  .gallery-container {
    position: relative;
    display: flex;
    padding: 2rem;
    justify-content: center;
    align-items: center;
    height: auto;
    .gallery-item {
      padding: 0px;
      overflow: hidden;
      width: 70vw;
      height: 70vh;
      max-width: 1400px;
      max-height: 900px;
      box-shadow: black 1px 1px 5px;

      .gallery-img {
        width: 100%;
      }
    }
    .active {
      display: block;
      cursor: pointer;
    }

    .prev {
      display: none;
      transform: translateX(-80%) scale(0.9);
    }

    .next {
      display: none;
      transform: translateX(+80%) scale(0.9);
    }

    button {
      border: none;
      background-color: transparent;
      cursor: pointer;
      width: 70px;
      height: 70px;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #4f4a4a;

      &:hover {
        background-color: #d5d5d5;
      }
    }
    .right-btn {
      padding-left: 2px;
      transform: translateX(+80%);
    }
    .left-btn {
      padding-right: 2px;
      transform: translateX(-80%);
    }
  }

  @media screen and (max-width: 980px) {
    .gallery-container {
      .gallery-item {
        padding: 0px;
        overflow: hidden;
        width: 80vw;
        height: 65vh;
        max-width: 1400px;
        max-height: 900px;
        box-shadow: black 1px 1px 5px;
      }
    }
  }
  @media screen and (max-width: 870px) {
    .gallery-container {
      .gallery-item {
        padding: 0px;
        overflow: hidden;
        width: 80vw;
        height: 55vh;
        max-width: 1400px;
        max-height: 900px;
        box-shadow: black 1px 1px 5px;
      }
    }
  }
  @media screen and (max-width: 750px) {
    .gallery-container {
      .gallery-item {
        padding: 0px;
        overflow: hidden;
        width: 80vw;
        height: 50vh;
        max-width: 1400px;
        max-height: 900px;
        box-shadow: black 1px 1px 5px;
      }
    }
  }
  @media screen and (max-width: 690px) {
    .gallery-container {
      .gallery-item {
        padding: 0px;
        overflow: hidden;
        width: 80vw;
        height: 40vh;
        max-width: 1400px;
        max-height: 900px;
        box-shadow: black 1px 1px 5px;
      }
    }
  }
  @media screen and (max-width: 610px) {
    .gallery-container {
      .gallery-item {
        padding: 0px;
        overflow: hidden;
        width: 80vw;
        height: 35vh;
        max-width: 1400px;
        max-height: 900px;
        box-shadow: black 1px 1px 5px;
      }
    }
  }
  @media screen and (max-width: 580px) {
    .gallery-container {
      .gallery-item {
        padding: 0px;
        overflow: hidden;
        width: 80vw;
        height: 30vh;
        max-width: 1400px;
        max-height: 900px;
        box-shadow: black 1px 1px 5px;
      }
    }
  }
  @media screen and (max-width: 540px) {
    .title-container {
      h1 {
        font-size: 1.8rem;
      }
    }
    .gallery-container {
      .gallery-item {
        padding: 0px;
        overflow: hidden;
        width: 80vw;
        height: 25vh;
        max-width: 1400px;
        max-height: 900px;
        box-shadow: black 1px 1px 5px;
      }
      button {
        border: none;
        background-color: transparent;
        cursor: pointer;
        width: 35px;
        height: 35px;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #4f4a4a;

        &:hover {
          background-color: transparent;
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
    .gallery-container {
      .gallery-item {
        padding: 0px;
        overflow: hidden;
        width: 80vw;
        height: 25vh;
        max-width: 1400px;
        max-height: 900px;
        box-shadow: black 1px 1px 5px;
      }
    }
  }
  @media screen and (max-width: 440px) {
    .gallery-container {
      .gallery-item {
        padding: 0px;
        overflow: hidden;
        width: 80vw;
        height: 20vh;
        max-width: 1400px;
        max-height: 900px;
        box-shadow: black 1px 1px 5px;
      }
    }
  }
  @media screen and (max-width: 400px) {
    .gallery-container {
      position: relative;
      display: flex;
      padding: 0.5rem;
      justify-content: center;
      align-items: center;
      height: auto;
      .gallery-item {
        padding: 0px;
        overflow: hidden;
        width: 80vw;
        height: 20vh;
        max-width: 1400px;
        max-height: 900px;
        box-shadow: black 1px 1px 5px;
      }
    }
  }
`;

export default Gallery;
 */