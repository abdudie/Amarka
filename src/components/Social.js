import React from "react";

const Social = ({ data }) => {
  return (
    <div>
      {" "}
      <h6 className="card-title icon-text">{data}</h6>
      <div className="social-details">
        <i class="fa-brands fa-facebook icons"></i>
        <i class="fa-brands fa-instagram icons"></i>
        <i class="fa-brands fa-twitter icons"></i>
        <i class="fa-brands fa-telegram icons"></i>
        <i class="fa-brands fa-discord icons"></i>
      </div>
    </div>
  );
};

export default Social;
