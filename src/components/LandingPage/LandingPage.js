import React from "react";
import "./LandingPage.scss";
import tabletView from "../../assets/images/tablet 1.png";
import phoneView from "../../assets/images/phone 1.png";
import ProductFeatures from "./ProductFeatures";
import AboutUs from "./AboutUs";
import Faq from "./Faq";
import avenLogo from "../../assets/images/Aven.png";
import amaraLogo from "../../assets/images/Amara.png";
import circleLogo from "../../assets/images/Circle.png";
import kyanLogo from "../../assets/images/Kyan.png";
import trevaLogo from "../../assets/images/Treva.png";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <div>
      <div className="landing-banner-container container">
        <h1>
          Analytics that transform your <br /> product inside out
        </h1>
        <div className="mt-3">
          <button className="primary-btn me-3 mb-2">Request for Demo</button>
          <button className="secondary-btn">Download</button>
        </div>
      </div>
      <div className="dashboard-view container">
        <img
          className="dashboard-view--tablet"
          src={tabletView}
          alt="tablet view"
        />
        <img
          className="dashboard-view--phone"
          src={phoneView}
          alt="phone view"
        />
      </div>
      <hr />
      <ProductFeatures />
      <AboutUs />
      <Faq />
      <div className="testimonial-teams container">
        <h5 className="section-intro text-center">
          5000+ high-impact teams rely on FieldX
          <div className="testimonial-teams-logos mt-4">
            <img src={avenLogo} alt="aven logo" />
            <img src={amaraLogo} alt="amara logo" />
            <img src={circleLogo} alt="circle logo" />
            <img src={kyanLogo} alt="kyan logo" />
            <img src={trevaLogo} alt="aven logo" />
          </div>
        </h5>
      </div>
      <Footer />
    </div>
  );
}
