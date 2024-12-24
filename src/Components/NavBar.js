import React from 'react';
import { Link } from 'react-router-dom'; // Correctly importing Link
import logo from './imgs/logo.png';

export default function NavBar() {
  return (
    <div>
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark"
        style={{
          border: "solid #2deb10",
          borderWidth: "0px 0px 5px 0px",
        }}
      >
        <div className="container-fluid">
          <img src={logo} alt="Logo" style={{ width: "50px", marginTop: "3px" }} />
          <Link
            className="navbar-brand"
            to="/general"
            style={{ fontSize: "25px", fontWeight: "600" }}
          >
            EnSure News
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNavDropdown"
            style={{
              fontSize: "20px",
              fontWeight: "600",
              justifyContent: "end",
              marginRight: "15px",
            }}
          >
            <ul className="navbar-nav">
                            <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
