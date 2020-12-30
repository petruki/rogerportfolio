import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';

const Header = ({ header }) => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h2> Hi, I&apos;m {header.name}</h2>
            <img id="avatar" src={header.avatarImg}  alt="avatar"></img>
          </Fade>
          <Fade big>
            <div className="heading-wrapper">
              <LightSpeed left><h1>{header.headerTagline[0]} </h1>
              </LightSpeed>
              <LightSpeed right><h1>{header.headerTagline[1]}</h1>
              </LightSpeed>
              <LightSpeed left><h1>{header.headerTagline[2]}</h1>
              </LightSpeed>
            </div>
          </Fade>
          <Fade bottom>
            <p>{header.headerParagraph}</p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  header: PropTypes.object.isRequired
};

export default Header;
