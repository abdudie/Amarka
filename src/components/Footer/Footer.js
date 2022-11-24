import React from "react";
import "./Footer.css";
import logo from "../oryen/Oryen_Logo-01.png";
import logo1 from "../oryen/logo_icon.png";

const Footer = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg footer">
        <a class="navbar-brand" href="#">
          <img style={{ width: "15rem" }} src={logo}></img>
        </a>

        {/* <div class="row d-flex flex-row-reverse"> */}
        <ul class="navbar-nav top-heading d-flex flex-row-reverse col-sm-10">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <button className="connect-btn">BUY ORYEN</button>
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <div className="coins ml-4 mr-4">
                <img style={{ width: "2rem" }} src={logo1}></img>
                <span className="coin-text">$0.003</span>
              </div>
            </a>
          </li>
        </ul>
        {/* </div> */}
      </nav>
    </>
  );
};

export default Footer;
