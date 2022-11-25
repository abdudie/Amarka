import React, { useState } from "react";
import "./App.css";

import BottomLeft2 from "./components/bottomleft2/BottomLeft2";
import BottomRight from "./components/bottomright/BottomRight";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
      <div className="container-fluid">
        {/* <div className="top-Left">
          <Navbar />
        </div> */}
        <div className="main-container ">
          {toggle ? (
            <div className="bottom-left ">
              <BottomLeft2 />
            </div>
          ) : (
            ""
          )}

          <div className="bottom-right ">
            <BottomRight toggle={toggle} setToggle={setToggle} />
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
