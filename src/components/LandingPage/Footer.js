import React from "react";
import fieldxLogo from "../../assets/images/Group.png";
import twitterLogo from "../../assets/images/013-twitter.png";
import linkedinLogo from "../../assets/images/010-linkedin.png";
import facebookLogo from "../../assets/images/001-facebook.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <img
          className="d-block mx-auto footer-logo"
          src={fieldxLogo}
          alt="fieldx logo"
        />
        <p className="footer-description">
          <small>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium, dicta Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Praesentium, dicta
          </small>
        </p>
        <div className="footer-social-logo">
          <img src={twitterLogo} alt="twitter logo" />
          <img src={linkedinLogo} alt="linkedin logo" />
          <img src={facebookLogo} alt="facebook logo" />
        </div>
        <hr />
        <p className="footer-copyright">
          <small>
            &copy; All rights reserve by <span>MAAC</span>
          </small>
        </p>
      </div>
    </div>
  );
}
