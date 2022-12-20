import React from "react";
import Logo from "../../assets/logo.png";
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UsersIcon,
  LinkIcon,
} from "@heroicons/react/outline";

import css from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />
      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="logo" />
          <span>amazon</span>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <label>Contact Us</label>
            <div className={css.pngLine}>
              <LocationMarkerIcon className={css.icon} />
              <span>111 north avenue Orlando, FL 32801</span>
            </div>
            <div className={css.pngLine}>
              <PhoneIcon className={css.icon} />
              <a href="tel:352-306-4415">
                <span>352-306-4415</span>
              </a>
            </div>
            <div className={css.pngLine}>
              <InboxIcon className={css.icon} />
              <a href="mailto:support@amazon.com">
                <span>support@amazon.com</span>
              </a>
            </div>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <label>Account</label>
            <div className={css.pngLine}>
              <LoginIcon className={css.icon} />
              <a href="/signin">
                <span>Sign In</span>
              </a>
            </div>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <label>Company</label>
            <div className={css.pngLine}>
              <UsersIcon className={css.icon} />
              <a href="/about">
                <span>About Us</span>
              </a>
            </div>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <label>Resources</label>
            <div className={css.pngLine}>
              <LinkIcon className={css.icon} />

              <p>Safety Privacy & Terms</p>
            </div>
          </div>
        </div>
      </div>
      <div className={css.copyRight}>
        <span>Copyright &#169;2022 by Amazon, Inc</span>
        <span>All Rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
