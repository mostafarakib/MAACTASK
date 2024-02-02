import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Sidebar() {
  let navigate = useNavigate();
  let location = useLocation();

  let currentRoute = location.pathname;

  return (
    <div className="sidebar">
      <div className="d-md-block d-none">
        <div className="border-right" id="sidebar">
          <ul className="sidebar-links">
            <li>
              <svg
                fill="#757575"
                height="20px"
                width="20px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 297 297"
                stroke="#757575"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path d="M148.5,0C87.43,0,37.747,49.703,37.747,110.797c0,91.026,99.729,179.905,103.976,183.645 c1.936,1.705,4.356,2.559,6.777,2.559c2.421,0,4.841-0.853,6.778-2.559c4.245-3.739,103.975-92.618,103.975-183.645 C259.253,49.703,209.57,0,148.5,0z M148.5,272.689c-22.049-21.366-90.243-93.029-90.243-161.892 c0-49.784,40.483-90.287,90.243-90.287s90.243,40.503,90.243,90.287C238.743,179.659,170.549,251.322,148.5,272.689z" />{" "}
                    <path d="M148.5,59.183c-28.273,0-51.274,23.154-51.274,51.614c0,28.461,23.001,51.614,51.274,51.614 c28.273,0,51.274-23.153,51.274-51.614C199.774,82.337,176.773,59.183,148.5,59.183z M148.5,141.901 c-16.964,0-30.765-13.953-30.765-31.104c0-17.15,13.801-31.104,30.765-31.104c16.964,0,30.765,13.953,30.765,31.104 C179.265,127.948,165.464,141.901,148.5,141.901z" />{" "}
                  </g>{" "}
                </g>
              </svg>{" "}
              Geo information
            </li>
            <li
              className={`ms-3 ps-2 sidebar-route ${
                currentRoute.includes("region") ? "active-link" : ""
              }`}
              onClick={() => navigate("region")}
            >
              Region
            </li>
            <li
              className={`ms-3 ps-2 sidebar-route ${
                currentRoute.includes("area") ? "active-link" : ""
              }`}
              onClick={() => navigate("area")}
            >
              Area
            </li>
          </ul>
        </div>
      </div>
      <div className="d-md-none">
        <button
          className="btn btn-primary d-block d-lg-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasSidebar"
          aria-controls="offcanvasSidebar"
        >
          Toggle Sidebar
        </button>
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasSidebar"
          aria-labelledby="offcanvasSidebarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasSidebarLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="sidebar-links">
              <li>
                <svg
                  fill="#757575"
                  height="20px"
                  width="20px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 297 297"
                  stroke="#757575"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path d="M148.5,0C87.43,0,37.747,49.703,37.747,110.797c0,91.026,99.729,179.905,103.976,183.645 c1.936,1.705,4.356,2.559,6.777,2.559c2.421,0,4.841-0.853,6.778-2.559c4.245-3.739,103.975-92.618,103.975-183.645 C259.253,49.703,209.57,0,148.5,0z M148.5,272.689c-22.049-21.366-90.243-93.029-90.243-161.892 c0-49.784,40.483-90.287,90.243-90.287s90.243,40.503,90.243,90.287C238.743,179.659,170.549,251.322,148.5,272.689z" />{" "}
                      <path d="M148.5,59.183c-28.273,0-51.274,23.154-51.274,51.614c0,28.461,23.001,51.614,51.274,51.614 c28.273,0,51.274-23.153,51.274-51.614C199.774,82.337,176.773,59.183,148.5,59.183z M148.5,141.901 c-16.964,0-30.765-13.953-30.765-31.104c0-17.15,13.801-31.104,30.765-31.104c16.964,0,30.765,13.953,30.765,31.104 C179.265,127.948,165.464,141.901,148.5,141.901z" />{" "}
                    </g>{" "}
                  </g>
                </svg>{" "}
                Geo information
              </li>
              <li
                className={`ms-3 ps-2 sidebar-route ${
                  currentRoute.includes("region") ? "active-link" : ""
                }`}
                onClick={() => navigate("region")}
              >
                Region
              </li>
              <li
                className={`ms-3 ps-2 sidebar-route ${
                  currentRoute.includes("area") ? "active-link" : ""
                }`}
                onClick={() => navigate("area")}
              >
                Area
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
