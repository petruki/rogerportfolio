import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

const Footer = ({ contact, header }) => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <Fade bottom cascade>
            <h1>Contact</h1>
            <h2>{contact.contactSubHeading}</h2>
          </Fade>
          <a className="email-link" href={`mailto:${header.contactEmail}`}>
            {header.contactEmail}
          </a>
          <div className="social-icons">
            {contact.social.map((socialLink, index) => (
              <a id="social-icon"
                key={index}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer">
                <img src={socialLink.img} alt="icons"></img>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  contact: PropTypes.object.isRequired,
  header: PropTypes.object.isRequired
};

export default Footer;
