import React from "react";
import featuredImage from "../../assets/images/Group 34050.png";
import featuredIcon from "../../assets/images/Group 34037.png";

export default function ProductFeatures() {
  return (
    <div className="features container">
      <h6 className="section-intro text-center">Product Features</h6>
      <h1 className="section-header text-center">Make more out of your data</h1>
      <div className="features-container">
        <div className="features-container-items">
          <div className="features-container-items--left">
            <img src={featuredIcon} alt="featured Icon" />
            <h6>Real-time analytics</h6>
            <p>
              See product usage, sign-ins, feature metrics change as users work
              on your.
            </p>
          </div>
          <div className="features-container-items--left">
            <img src={featuredIcon} alt="featured Icon" />
            <h6>Intuitive dashboard</h6>
            <p>
              See product usage, sign-ins, feature metrics change as users work
              on your.
            </p>
          </div>
          <div className="features-container-items--left">
            <img src={featuredIcon} alt="featured Icon" />
            <h6>Smart suggestions</h6>
            <p>
              See product usage, sign-ins, feature metrics change as users work
              on your.
            </p>
          </div>
        </div>
        <div className="features-container-img">
          <img className="w-100" src={featuredImage} alt="featured img" />
        </div>
        <div className="features-container-items">
          <div className="features-container-items--right">
            <img src={featuredIcon} alt="featured Icon" />
            <h6>Real-time analytics</h6>
            <p>
              See product usage, sign-ins, feature metrics change as users work
              on your.
            </p>
          </div>
          <div className="features-container-items--right">
            <img src={featuredIcon} alt="featured Icon" />
            <h6>Intuitive dashboard</h6>
            <p>
              See product usage, sign-ins, feature metrics change as users work
              on your.
            </p>
          </div>
          <div className="features-container-items--right">
            <img src={featuredIcon} alt="featured Icon" />
            <h6>Smart suggestions</h6>
            <p>
              See product usage, sign-ins, feature metrics change as users work
              on your.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
