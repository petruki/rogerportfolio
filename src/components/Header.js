import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

const Header = ({ header }) => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h2> Hi, I&apos;m {header.name}</h2>
            <img id="avatar" src={header.avatarImg}  alt="avatar"></img>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                {header.headerTagline[0]}
              </h1>
              <h1>
                {header.headerTagline[1]}
              </h1>
              <h1>
                {header.headerTagline[2]}
              </h1>
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
