import React from "react";

function Content() {
  return (
    <div className="container pt-5 mt-5">
      <div className="d-flex justify-content-between flex-column flex-lg-row flex-xl-row">
        <div className="fb-50 order-lg-0 order-1" >
          <h1>
            Making the most of the <br /> ever-growing <br />{" "}
            <span className="text-danger"> Information Technology</span>
          </h1>
          <p className=" fs-5 pt-4">
            Managed by a team of professional experts with extensive <br />
            experience and impressive track records
          </p>
          <button type="button" className="btn btn-danger shadow-lg p-lg-3 btn-md-sm">
            Read More
          </button>
        </div>
        <div className="fb-50 order-lg-0 order-0">
          <img className="img-fluid" src="./WEB ASSETS/pana.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Content;
