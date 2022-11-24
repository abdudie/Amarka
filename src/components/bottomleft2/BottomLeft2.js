import React from "react";
import "./Bottomleft2.css";
import Social from "../Social";
import logo from "../oryen/Oryen_Logo-01.png";

const data = "Social Connection";

const BottomLeft2 = () => {
  return (
    <div className="master">
      {" "}
      <div className="Bottom-Left">
        <div
          className="logo d-flex align-items-center"
          style={{ borderBottom: "1px solid rgb(38, 87, 71)" }}
        >
          <img src={logo}></img>
        </div>

        <div className="container">
          <ul className="list">
            <li className="list-item">
              <a>
                <i class="fa-solid fa-house icons"></i>
                <span className="icon-text">Dashboard</span>
              </a>
            </li>
            <li className="list-item">
              <a>
                <div className="exch">
                  <i class="fa-solid fa-arrow-right-arrow-left icons"></i>
                  <div className="my-accord accordion">
                    <div className="accordion-item ">
                      <h2 className="accordion-header" id="heading-1">
                        <a
                          className="acc-btn accordion-button "
                          type="button"
                          data-toggle="collapse"
                          data-target="#detail-1"
                        >
                          <div className="dropdown">
                            <span className="icon-text">Exchange</span>
                          </div>
                        </a>
                      </h2>
                      <div id="detail-1" className="container dropdown">
                        <ul className="Lists">
                          <li className="list-item icon-text">- Swap</li>
                          <li className="list-item icon-text">- Liquidity</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li className="list-item">
              <a>
                <i class="fa-solid fa-calendar-days icons"></i>
                <span className="icon-text">calendar</span>
              </a>
            </li>
            <li className="list-item">
              <a>
                <i class="fa-solid fa-file-invoice icons"></i>
                <span className="icon-text ">Accounts</span>
              </a>
            </li>
          </ul>

          <h4 className="icon-text d-flex ml-4">About</h4>
          <ul className="list">
            <li className="list-item">
              <a>
                <i class="fa-solid fa-address-card icons"></i>
                <span className="icon-text">Contact</span>
              </a>
            </li>

            <li className="list-item">
              <a>
                <i class="fa-solid fa-address-card icons"></i>
                <span className="icon-text">Community</span>
              </a>
            </li>

            <li className="list-item">
              <a>
                <i class="fa-solid fa-address-card icons"></i>
                <span className="icon-text">
                  <b>Oryen</b> Token
                </span>
              </a>
            </li>
          </ul>

          <h4 className="icon-text d-flex ml-4">About</h4>
          <ul className="list">
            <li className="list-item">
              <a>
                <i class="fa-solid fa-address-card icons"></i>
                <span className="icon-text">Documentation</span>
              </a>
            </li>

            <li className="list-item">
              <a>
                <i class="fa-solid fa-address-card icons"></i>
                <span className="icon-text">FAQ</span>
              </a>
            </li>
          </ul>
          <div className="row">
            <div className="col-sm-12">
              <div className="card card1 mb-5">
                <div className="card-body">
                  <Social data={data} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomLeft2;
