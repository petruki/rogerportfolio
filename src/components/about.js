import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

const About = ({ about }) => {
  return (
    <div className="secion" id="about" style={{ background: '#1a1a1a' }}>
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <p>
              {about.aboutParaOne}
              <br></br>
              <br></br>
              {about.aboutParaTwo}
              <br></br>
              <br></br>
              {about.aboutParaThree}
              <br></br>
              <br></br>
              {about.aboutParaFour}
            </p>
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

export default About;
