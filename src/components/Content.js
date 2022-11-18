import React from "react";

function Content() {
  return (
    <div className="container pt-5 mt-5">
      <div className="row">
        <div className="col-6">
          <h1>
            Making the most of the <br /> ever-growing <br />{" "}
            <span className="text-danger"> Information Technology</span>
          </h1>
          <p className=" fs-4 pt-4">
            Managed by a team of professional experts with extensive <br />
            experience and impressive track records
          </p>
          <button type="button" className="btn btn-danger shadow-lg p-3">
            Read More
          </button>
        </div>
        <div className="col-6">
          <img src="./WEB ASSETS/pana.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Content;
