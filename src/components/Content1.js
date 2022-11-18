import React from "react";

function Content1() {
  return (
    <div className="bg-light mt-5 pt-5">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img src="./WEB ASSETS/pana-1.svg" alt="" />
          </div>

          <div className="col-6 pt-5">
            <h2>
              Welcome to{" "}
              <span className="text-danger">
                {" "}
                Dwidasa Samsara <br /> Indonesia (DSI)
              </span>
            </h2>
            <p className="fs-5 pt-3">
              Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by
              the founders, who each of them has a common end objective to
              innovate new creations by making the most of the ever-growing
              information technology through{" "}
              <span className="text-danger"> DSI</span> ’s distinct front-end
              based application concept.
            </p>
            <p className="fs-5 pt-3">
              Managed by a team of professional experts with extensive
              experience and impressive track records,
              <span className="text-danger"> DSI</span> believes that continuous
              improvements and innovations assure your business to run
              effectively and efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content1;
