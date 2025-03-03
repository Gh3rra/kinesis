import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
  // const [scroll, setScroll] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const boxRef = useRef(null);
  useEffect(() => {
    // document.addEventListener("scroll", scrollFunction);
    document.addEventListener("mousedown", closeSideBar);
    document.addEventListener("scroll", closeSideBar);
    return () => {
      // document.removeEventListener("scroll", scrollFunction);
      document.removeEventListener("scroll", closeSideBar);

      document.removeEventListener("mousedown", closeSideBar);
    };
  }, []);

  /* const scrollFunction = () => {
    if (window.scrollY < 40) setScroll(window.scrollY);
    else setScroll(40);
    setShowMenu(false);
  }; */

  const closeSideBar = (event) => {
    console.log(boxRef.current);
    console.log(event.target);

    if (
      boxRef.current &&
      !boxRef.current.contains(event.target) &&
      event.target.id !== "sidebar-icon"
    ) {
      setShowMenu(false);
    }
  };

  return (
    <NavBarStyled>
      <div className={`navbar-wrapper`}>
        <div className="navbar-container">
          <div className="logo-container">
            <a href="/">
              <img src="images/logo-nav.png" alt="" />
            </a>
          </div>
          <RxHamburgerMenu
            size={"40px"}
            className={`hamburger-icon ${showMenu ? "active" : ""}`}
            id="sidebar-icon"
            onClick={() => {
              setShowMenu((prev) => !prev);
            }}
          />
          <div className="navbar-menu-container">
            <ul className="navbar-menu-list">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="treatments">Trattamenti</NavLink>
              </li>
              <li>
                <NavLink to="/contacts">Contatti</NavLink>
              </li>
            </ul>
          </div>
          <div className="book-button-container">
            <Link to="/booking" reloadDocument>
              <button className="book-button">
                <p>PRENOTA UN APPUNTAMENTO</p>
              </button>
            </Link>
          </div>
        </div>
        <div
          ref={boxRef}
          className={`sidebar-menu-container ${showMenu ? "active" : ""}`}
        >
          <div>
            <ul className="sidebar-menu-list">
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  to="treatments"
                >
                  Trattamenti
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  to="/contacts"
                >
                  Contatti
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </NavBarStyled>
  );
};
const NavBarStyled = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  top: 0;
  width: 100%;
  margin-top: 10px;
  padding: 0 100px;
  z-index: 99;
  height: 78px;

  .navbar-wrapper {
    background-color: var(--bg-primary);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2.5rem;
    width: 100%;
    max-width: 1300px;
    position: relative;
    border-radius: 10px;

    box-shadow: 0 8px 20px #00000026;
    .navbar-container {
      width: 100%;
      transition: all 1s linear;

      display: flex;
      flex-direction: row;
      align-items: center;

      justify-content: space-between;

      .logo-container {
        padding: 5px 0;
        overflow: hidden;

        img {
          align-self: center;
          height: 78px;
        }
      }
      .book-button-container {
        padding: 0 20px;
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
      .navbar-menu-container {
        height: 100%;
        .navbar-menu-list {
          display: flex;
          flex-direction: row;
          height: 100%;
          li {
            font-size: 1.1rem;
            font-weight: 500;
            height: 100%;
            position: relative;
            a {
              color: #363636;
              display: flex;
              align-items: center;
              height: 100%;
              padding: 0 2rem;
              text-align: center;
              &:hover {
                //            background-color: #dbdbdb;
                text-decoration: underline;
                /*  &::before {
              content: "";
              position: absolute;
              height: 2px;
              width: 100%;
              background-color: var(--secondary-color);
              bottom: 0;
              left: 0;
            } */
              }
            }
            /* .active-link {
          background-color: #dbdbdb;
          &::before {
            content: "";
            position: absolute;
            height: 2px;
            width: 100%;
            background-color: var(--secondary-color);
            bottom: 0;
            left: 0;
          }
        } */
          }
        }
      }

      .hamburger-icon {
        display: none;
      }

      @media screen and (max-width: 800px) {
        .navbar-menu-container {
          display: none;
        }
        .hamburger-icon {
          display: block;
          padding: 10px;
          border-radius: 10px;
          &:hover {
            cursor: pointer;
            border-radius: 10px;
            background: transparent;
            outline: none;
          }
          &.active {
            background-color: #dbdbdb;
          }
        }
      }
    }
    .sidebar-menu-container {
      transition: grid-template-rows 0.3s;
      overflow: hidden;
      display: grid;
      grid-template-rows: 0fr;
      width: 100%;
      background-color: white;
      border-radius: 0 0 10px 10px;
      z-index: 5;
      div {
        overflow: hidden;
      }
    }
  }
  @media screen and (max-width: 800px) {
    padding: 0 10px;
    .book-button-container {
      display: none;
    }

    .sidebar-menu-container {
      div {
        overflow: hidden;
        ul {
          display: flex;
          flex-direction: column;
          padding-bottom: 10px;

          li {
            display: flex;
            justify-content: center;
            font-size: 1.1rem;
            font-weight: 500;
            position: relative;
            a {
              border-radius: 10px;
              color: #363636;
              padding: 20px 20px;
              display: flex;
              align-items: center;
              height: 100%;
              text-align: center;
              &:hover {
                background-color: #dbdbdb;
              }
            }
            .active-link {
              background-color: #dbdbdb;
            }
          }
        }
      }
      &.active {
        transition: grid-template-rows 0.4s ease-out;
        grid-template-rows: 1fr;
      }
    }
  }
`;

export default NavBar;
