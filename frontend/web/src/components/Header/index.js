import React from "react";
import api from "../../api";
import { Link, Route } from "react-router-dom";
import "./styles.css";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <div className="content-menu">
            <ul>
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">Serviços</Link>
              </li>
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">Home</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
