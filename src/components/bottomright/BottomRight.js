import React from "react";
import "./BottomRight.css";
import glow1 from "../oryen/single_glow.png";
import glow2 from "../oryen/Fixed_APY_glow.png";
import sound from "../oryen/circle.png";
import logo1 from "../oryen/logo_icon.png";

const data = "Connect with us";

const BottomRight = ({ toggle, setToggle }) => {
  const handleClick = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg ">
        <i class="fa-solid fa-bars icons" onClick={handleClick}></i>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon">
            {" "}
            <i class="fa-solid fa-bars icons"></i>
          </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav top-heading d-flex flex-row-reverse ">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <button className="connect-btn">CONNECT WALLET</button>
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
        </div>
      </nav>

      <div className="container-fluid ml-4 primary-container ">
        <h5 className="icon-text">DASHBOARD</h5>
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12">
            <div className="card card1">
              <div className=" card-body row d-flex justify-content-between">
                <div className="col-sm-6 col-lg-3">
                  <div className="item2">
                    <h6 className="icon-text">Marketcap</h6>
                    <h3 className="h3">$11.97M</h3>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-3">
                  <div className="item2">
                    <h6 className="icon-text">Circulating Supply</h6>
                    <h3 className="h3">38.35B</h3>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="item2">
                    <h6 className="icon-text">Holders</h6>
                    <h3 className="h3">82K</h3>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="item2">
                    <h6 className="icon-text">Oryen Price</h6>
                    <h3 className="h3">$0.0003</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-around">
            <div className="card card1">
              <div className="card-body d-flex justify-content-between ">
                <div
                  className="left"
                  style={{
                    backgroundImage: `url(${glow1})`,
                    backgroundSize: "cover",
                  }}
                >
                  <span className="icon-text">Liquidity</span>
                  <h3 className="h3">$1.61M</h3>
                </div>
                <div className="right">
                  <span className="loss">-0.33%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-around">
            <div className="card card1 ">
              <div className="card-body d-flex justify-content-between ">
                <div
                  className="left"
                  style={{
                    backgroundImage: `url(${glow1})`,
                    backgroundSize: "cover",
                  }}
                >
                  <span className="icon-text">Treasury</span>
                  <h3 className="h3">$8.34M</h3>
                </div>
                <div className="right">
                  <span className="loss">-0.33%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card card1 card12">
              <div className="card-body d-flex justify-content-between sound-card">
                <div
                  className="left-part"
                  style={{
                    backgroundImage: `url(${glow2})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="check">
                    <i class="fa-solid fa-circle-check icons"></i>
                    <span className="icon-text ml-1">Fixed APY</span>
                  </div>
                  <h3 className="h3">102 483.58%</h3>
                  <p className="p">A Simple Buy-Hold Earn System</p>
                </div>
                <div className="right-part">
                  <img src={sound}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-around">
            <div className="card card3 mb-4">
              <div className="card-body d-flex justify-content-center card-5">
                <div className="left d-flex justify-content-around ">
                  <div className="image">
                    <img src={logo1}></img>
                  </div>
                  <div className="other-details d-flex flex-column justify-content-center align-items-center ">
                    <h5 className="h3 mb-4">Still got questions?</h5>
                    <button className="connect-btn">More Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-around">
            <div className="card card3 mb-4">
              <div className="card-body d-flex justify-content-center card-last ">
                <div className="left d-flex flex-column justify-content-around ">
                  <div className="image  mr-3">
                    <h3 className="h3">Connect with us</h3>
                  </div>
                  <div className="other-details d-flex flex-column justify-content-center align-items-center ">
                    <div className="social-details">
                      <i class="fa-brands fa-facebook icons"></i>
                      <i class="fa-brands fa-instagram icons"></i>
                      <i class="fa-brands fa-twitter icons"></i>
                      <i class="fa-brands fa-telegram icons"></i>
                      <i class="fa-brands fa-discord icons"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomRight;
