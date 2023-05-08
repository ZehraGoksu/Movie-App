import React from "react";
import { TfiVideoClapper } from "react-icons/tfi";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3">
          <div className="col-md-4 mb-0">
            <p className={styles.copyText}>© 2021 Company, Inc</p>
          </div>

          <a
            href="#"
            className="col-md-4 d-flex align-items-start gap-2 justify-content-center mb-3 mb-md-0 me-md-auto text-decoration-none"
          >
            <TfiVideoClapper className={styles.icon} />
            <h6>YourMovies</h6>
          </a>

          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                About
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
