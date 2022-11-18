import React from "react";

function Content2() {
  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center">Product and Service</h2>
      <div className="row pt-5 m-5">
        <div className="col-md-4">
          <div>
            <img src="./WEB ASSETS/product-description 1.png" alt="img" />
          </div>
          <div className="pt-3 ">
            <h3 className="text-danger">Our Product</h3>
          </div>
          <div>
            <p>
              Our product is made on the base of our team’s careful research and
              analyses, ranging from internet based application.
            </p>
          </div>
          <button type="button" className="btn btn-danger ">
            Read More
          </button>
        </div>
        <div className="col-md-4">
          <div>
            <img src="./WEB ASSETS/product-description 2.png" alt="img" />
          </div>
          <div className="pt-3">
            <h3 className="text-danger">Our Service</h3>
          </div>
          <div>
            <p>
              DSI’s shared service solutions focus on the front-end based
              software development, designed specifically for the banking and
              financial sectors.
            </p>
          </div>
          <button type="button" className="btn btn-danger ">
            Read More
          </button>
        </div>
        <div className="col-md-4">
          <div>
            <img src="./WEB ASSETS/product-description 3.png" alt="img" />
          </div>
          <div className="pt-3">
            <h3 className="text-danger">Our Technology</h3>
          </div>
          <div>
            <p>
              First JAVA, runs on more than 850 million personal computers
              worldwide, and on billions of devices worldwide, including mobile
              and TV devices.
            </p>
          </div>
          <button type="button" className="btn btn-danger ">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Content2;
