import React from 'react';
import Logo from '../assets/t-logo.png';

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="Logo" />
            <span>Supernova Medical Diagnostic Laboratory Center</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-3">
              <li className="nav-item">
                <a className="nav-link text-light active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/reviews">
                  Reviews
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light mx-1" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
            <div className="navbar">
              {/* <a href="/book-appointment" className="btn btn-info text-light">
                Book Appointment
              </a> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
