import React from "react";
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg  sticky-top navbar-white bg-white shadow-sm py-4">
      <div class="container-fluid container">
        <p class="navbar-brand"></p>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center align-items-center w-100 ">
            <li class="nav-item px-lg-2">
              <a class="navbar-brand active" aria-current="page" href="/">
                Services
              </a>
            </li>
            <li class="nav-item px-lg-2">
              <a class="navbar-brand" href="/">
                Product
              </a>
            </li>
            <li class="nav-item px-lg-2">
              <a class="navbar-brand" href="/">
                Technology
              </a>
            </li>
            <li class="nav-item px-lg-2 dropdown">
              <a
                class="navbar-brand dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Actions
              </a>
            </li>
            <li class="nav-item px-lg-2">
              <a class="navbar-brand " href="/">
                Client
              </a>
            </li>
            <li class="nav-item px-lg-2">
              <a class="navbar-brand " href="/">
                Partner
              </a>
            </li>
          </ul>
          <div className="ms-lg-5 ps-lg-5 d-flex justify-content-center align-items-center">
            <a className="navbar-brand" href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-home"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="5 12 3 12 12 3 21 12 19 12" />
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
              </svg>
            </a>
            <a className="navbar-brand" href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-mail"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <polyline points="3 7 12 13 21 7" />
              </svg>
            </a>
            <a className="navbar-brand" href="/">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-shuffle"
              >
                <polyline points="16 3 21 3 21 8"></polyline>
                <line x1="4" y1="20" x2="21" y2="3"></line>
                <polyline points="21 16 21 21 16 21"></polyline>
                <line x1="15" y1="15" x2="21" y2="21"></line>
                <line x1="4" y1="4" x2="9" y2="9"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
