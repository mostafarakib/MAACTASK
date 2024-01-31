import React from "react";
import aboutImage from "../../assets/images/Group 34027.png";
import ceoImage from "../../assets/images/Ellipse 1.png";

export default function AboutUs() {
  return (
    <div className="about-container">
      <div className="container about-container-main">
        <div>
          <img className="w-100" src={aboutImage} alt="product img" />
        </div>
        <div>
          <h6 className="section-intro">About Us</h6>
          <h2 className="section-header">
            A dedicated solution for startups and enterprises
          </h2>
          <p>
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              fugiat, porro quia tempora et totam dolorum numquam? Non minima
              rem provident similique possimus quasi sint amet, vitae assumenda
              numquam sunt!
            </small>
          </p>
          <hr />
          <div className="d-flex">
            <img
              className="me-3 about-container-main-ceo-image"
              src={ceoImage}
              alt="img of ceo"
            />
            <div>
              <p>"Fieldx is for teams that care about their product growth"</p>
              <h6 className="fw-bold about-container-main-ceo-designation ">
                CEO, FieldX
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="about-container-secondary">
        <div className="about-container-secondary-items">
          <svg
            width="40"
            height="40"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 33.9001H12.42C5.68 33.9001 4 32.2201 4 25.4801V13.4801C4 6.74006 5.68 5.06006 12.42 5.06006H33.48C40.22 5.06006 41.9 6.74006 41.9 13.4801"
              stroke="#0052CC"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 42.9399V33.8999"
              stroke="#0052CC"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 25.8999H20"
              stroke="#0052CC"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.48 42.9399H20"
              stroke="#0052CC"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M44.0001 25.5999V37.0199C44.0001 41.7599 42.8201 42.9399 38.0801 42.9399H30.9801C26.2401 42.9399 25.0601 41.7599 25.0601 37.0199V25.5999C25.0601 20.8599 26.2401 19.6799 30.9801 19.6799H38.0801C42.8201 19.6799 44.0001 20.8599 44.0001 25.5999Z"
              stroke="#0052CC"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M34.489 36.5H34.507"
              stroke="#0052CC"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="about-container-secondary-items--quantity">10+</p>
          <p>Platforms Created</p>
        </div>
        <div className="about-container-secondary-items">
          <svg
            width="40"
            height="40"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.9999 14.32C35.8799 14.3 35.7399 14.3 35.6199 14.32C32.8599 14.22 30.6599 11.96 30.6599 9.16C30.6599 6.3 32.9599 4 35.8199 4C38.6799 4 40.9799 6.32 40.9799 9.16C40.9599 11.96 38.7599 14.22 35.9999 14.32Z"
              stroke="#0052CC"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M33.9399 28.8801C36.6799 29.3401 39.6999 28.8601 41.8199 27.4401C44.6399 25.5601 44.6399 22.4801 41.8199 20.6001C39.6799 19.1801 36.6199 18.7001 33.8799 19.1801"
              stroke="#0052CC"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.94 14.32C12.06 14.3 12.2 14.3 12.32 14.32C15.08 14.22 17.28 11.96 17.28 9.16C17.28 6.3 14.98 4 12.12 4C9.25996 4 6.95996 6.32 6.95996 9.16C6.97996 11.96 9.17996 14.22 11.94 14.32Z"
              stroke="#0052CC"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.9999 28.8801C11.2599 29.3401 8.23988 28.8601 6.11988 27.4401C3.29988 25.5601 3.29988 22.4801 6.11988 20.6001C8.25988 19.1801 11.3199 18.7001 14.0599 19.1801"
              stroke="#0052CC"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23.9999 29.2599C23.8799 29.2399 23.7399 29.2399 23.6199 29.2599C20.8599 29.1599 18.6599 26.8999 18.6599 24.0999C18.6599 21.2399 20.9599 18.9399 23.8199 18.9399C26.6799 18.9399 28.9799 21.2599 28.9799 24.0999C28.9599 26.8999 26.7599 29.1799 23.9999 29.2599Z"
              stroke="#0052CC"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.1799 35.56C15.3599 37.44 15.3599 40.52 18.1799 42.4C21.3799 44.54 26.6199 44.54 29.8199 42.4C32.6399 40.52 32.6399 37.44 29.8199 35.56C26.6399 33.44 21.3799 33.44 18.1799 35.56Z"
              stroke="#0052CC"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="about-container-secondary-items--quantity">1559+</p>
          <p>Total Users</p>
        </div>
        <div className="about-container-secondary-items">
          <svg
            width="40"
            height="40"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 24C29.5228 24 34 19.5228 34 14C34 8.47715 29.5228 4 24 4C18.4772 4 14 8.47715 14 14C14 19.5228 18.4772 24 24 24Z"
              stroke="#0052CC"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M41.1801 44C41.1801 36.26 33.4801 30 24.0001 30C14.5201 30 6.82007 36.26 6.82007 44"
              stroke="#0052CC"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="about-container-secondary-items--quantity">10+</p>
          <p>Total Clients</p>
        </div>
        <div className="about-container-secondary-items">
          <svg
            width="40"
            height="40"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.3 33V37.2"
              stroke="#0052CC"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.3 44H34.3V42C34.3 39.8 32.5 38 30.3 38H18.3C16.1 38 14.3 39.8 14.3 42V44V44Z"
              stroke="#0052CC"
              strokeWidth="3"
              strokeMiterlimit="10"
            />
            <path
              d="M12.3 44H36.3"
              stroke="#0052CC"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M24 32C16.26 32 10 25.74 10 18V12C10 7.58 13.58 4 18 4H30C34.42 4 38 7.58 38 12V18C38 25.74 31.74 32 24 32Z"
              stroke="#0052CC"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.9401 23.3C9.44008 22.82 8.12008 21.94 7.08008 20.9C5.28008 18.9 4.08008 16.5 4.08008 13.7C4.08008 10.9 6.28008 8.69995 9.08008 8.69995H10.3801C9.98008 9.61995 9.78008 10.64 9.78008 11.7V17.7C9.78008 19.7 10.2001 21.58 10.9401 23.3Z"
              stroke="#0052CC"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M37.0601 23.3C38.5601 22.82 39.8801 21.94 40.9201 20.9C42.7201 18.9 43.9201 16.5 43.9201 13.7C43.9201 10.9 41.7201 8.69995 38.9201 8.69995H37.6201C38.0201 9.61995 38.2201 10.64 38.2201 11.7V17.7C38.2201 19.7 37.8001 21.58 37.0601 23.3Z"
              stroke="#0052CC"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p className="about-container-secondary-items--quantity">300 Days</p>
          <p>In Operations</p>
        </div>
      </div>
    </div>
  );
}
