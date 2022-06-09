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
              {header.headerTagline.map((_header, i) => {
                if (i % 2) 
                  return <LightSpeed key={i} left><h1>{_header}</h1></LightSpeed>;
                else
                  return <LightSpeed key={i} right><h1>{_header}</h1></LightSpeed>;
              })}
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
