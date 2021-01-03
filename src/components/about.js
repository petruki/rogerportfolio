import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

const AboutParagraph = ({ about }) => {
  return (
    <>
      {about.map((para, i) =>
        <p key={i}>{para}</p>
      )}
    </>
  );
};

const About = ({ about }) => {
  return (
    <div className="secion" id="about" style={{ background: '#1a1a1a' }}>
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <AboutParagraph about={about.about} />
          </div>
          <div className="image-wrapper">
            <img id="about-image" src={about.aboutImage} alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

About.propTypes = {
  about: PropTypes.any.isRequired
};

AboutParagraph.propTypes = {
  about: PropTypes.array.isRequired
};

export default About;
