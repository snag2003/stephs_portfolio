import React, { useState } from "react";
import stephanyPhoto from "../../images/profile_pic.jpg";
import emailLogo from "../../images/email-logo.svg";
import calendarLogo from "../../images/calendar-logo.svg";
import phoneLogo from "../../images/cell-phone-logo.svg";
import locationLogo from "../../images/location-point-logo.svg";
import linkedinLogo from "../../images/linkedin-logo.svg";
import githubLogo from "../../images/github-logo.svg";

export default function Header() {
  const [showContacts, setShowContacts] = useState(false);

  // Function to toggle the showContacts state
  const toggleContacts = () => {
    setShowContacts(!showContacts);
  };

  return (
    <header className="header">
      <div className="header__info">
        <figure className="header__avatar-box">
          <img src={stephanyPhoto} alt="Stephany Acosta" />
        </figure>

        <div className="header__content">
          <h1 className="header__name" title="Stephany Acosta">
            Stephany Acosta
          </h1>

          <p className="header__title">Web Developer</p>
          <p className="header__title">Virtual Assistant</p>
        </div>

        <button className="header__show-btn" onClick={toggleContacts}>
          <span>Show Contacts</span>
        </button>
      </div>

      <div className={`header__more-info ${showContacts ? "" : "inactive"}`}>
        <div className="header__separator"></div>
        <ul className="header__contacts-list">
          <li className="header__contact-item">
            <div className="header__icon-box">
              <img src={emailLogo} alt="Logo Email" className="header__logo" />
            </div>

            <div className="header__contact-info">
              <p className="header__contact-title">Email</p>

              <a
                href="mailto:stephanynag@gmail.com"
                className="header__contact-link"
              >
                stephanynag@gmail.com
              </a>
            </div>
          </li>

          <li className="header__contact-item">
            <div className="header__icon-box">
              <img src={phoneLogo} alt="Logo Phone" className="header__logo" />
            </div>

            <div className="header__contact-info">
              <p className="header__contact-title">Phone</p>

              <a href="tel:+507 6637-5743" className="header__contact-link">
                +507 6637-5743
              </a>
            </div>
          </li>

          <li className="header__contact-item">
            <div className="header__icon-box">
              <img
                src={calendarLogo}
                alt="Logo Calendar"
                className="header__logo"
              />
            </div>

            <div className="header__contact-info">
              <p className="header__contact-title">Birthday</p>

              <time dateTime="2003-12-31">December 31, 2003</time>
            </div>
          </li>

          <li className="header__contact-item">
            <div className="header__icon-box">
              <img
                src={locationLogo}
                alt="Logo Location"
                className="header__logo"
              />
            </div>

            <div className="header__contact-info">
              <p className="header__contact-title">Location</p>

              <address>Panama, Panama</address>
              <address>Miami, USA</address>
            </div>
          </li>
        </ul>

        <div className="header__separator"></div>

        <ul className="header__social-list">
          <li className="header__social-item">
            <a
              href="https://www.linkedin.com/in/stephany-acosta/"
              className="header__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedinLogo}
                alt="Logo LinkedIn"
                className="header__logo"
              />
            </a>
          </li>

          <li className="header__social-item">
            <a
              href="https://github.com/snag2003"
              className="header__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={githubLogo}
                alt="Logo GitHub"
                className="header__logo"
              />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
