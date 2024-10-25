import React from "react";
import {
  contactInfo,
  companyLinks,
  otherServices,
  quickLinks,
  socialIcons,
} from "../../lib/constants/footerSections";
import paymentBitmap from "../../assets/images/Bitmap.png";
import paymentDiscover from "../../assets/images/discover.png";
import paymentVisa from "../../assets/images/visa.png";
import paymentPaypal from "../../assets/images/paypal.png";
import paymentMastercard from "../../assets/images/mastercard.png";
import usaFlag from "../../assets/images/usa.png";

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-one-ctn">
        <div className="footer-contact">
          <div className="footer-one-wrapper">
            <h3 className="footer-one-title">Need Travelsy</h3>
            <ul className="footer-one-list-ctn">
              <li className="footer-one-list-item">
                Got Questions? Call us 24/7!
              </li>
              <li className="footer-one-list-item">Call Us: +254 716909 815</li>
              <li className="footer-one-list-item">
                Email Us: info@travelsy.com
              </li>
            </ul>
          </div>

          <div className="footer-one-wrapper">
            <h3 className="footer-one-title">Contact Info:</h3>
            {contactInfo.map((info, idx) => (
              <p className="footer-one-list-ctn" key={idx}>
                {info}
              </p>
            ))}
            <ul className="social-ctn">
              {socialIcons.map((social, idx) => (
                <li className="social-icons" key={idx}>
                  <i className={social.className}></i>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-one-wrapper">
          <h3 className="footer-one-title">Company</h3>
          <ul className="footer-one-list-ctn">
            {companyLinks.map((link, idx) => (
              <li className="footer-one-list-item" key={idx}>
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-one-wrapper">
          <h3 className="footer-one-title">Other Services & Support</h3>
          <ul className="footer-one-list-ctn">
            {otherServices.map((service, idx) => (
              <li className="footer-one-list-item" key={idx}>
                {service}
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-one-wrapper">
          <h3 className="footer-one-title">Quick Links</h3>
          <ul className="footer-one-list-ctn">
            {quickLinks.map((link, idx) => (
              <li className="footer-one-list-item" key={idx}>
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-one-wrapper">
          <h3 className="footer-one-title">Mailing List</h3>
          <p className="footer-one-list-item">
            Sign Up for our mailing lists and get the latest <br />
            offers and promotions straight in your inbox.
          </p>
          <form action="">
            <input
              type="text"
              name="Email"
              placeholder="Your Email"
              className="email border border-gray-200 py-2"
            />
            <button className="email-button py-2">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-two-ctn">
        <div className="footer-two-wrapper">
          <div className="footer-icon-ctn">
            <a href="./index.html" className="footer-icon">
              Travelsy
            </a>
          </div>
          <div className="payment-ctn">
            {[
              paymentBitmap,
              paymentDiscover,
              paymentVisa,
              paymentPaypal,
              paymentMastercard,
            ].map((imgSrc, idx) => (
              <div className="payment-item" key={idx}>
                <img src={imgSrc} alt="payment-logo" />
              </div>
            ))}
          </div>
          <div className="country-ctn">
            <div className="country">
              <img src={usaFlag} alt="USA Flag" />
              <p>English (United States)</p>
              <i className="fas fa-angle-down"></i>
            </div>
            <div className="country">
              <p>KES</p>
              <i className="fas fa-angle-down"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-three-ctn">
        <p className="copyright">
          Copyright © 2019 Travelsy Ltd. All rights reserved
        </p>
        <p className="made-by">Made in Kenya by Ralak</p>
      </div>
    </footer>
  );
};
