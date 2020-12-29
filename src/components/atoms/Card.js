import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ heading, paragraph, imgUrl, projectLink }) => {
  return (
    <div
      className="card"
      style={{
        borderRadius: '50px',
        backgroundSize: '100%',
        backgroundImage:
          'linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(' +
          imgUrl +
          ')'
      }}
    >
      <div className="content">
        <h1 className="header">{heading}</h1>
        <p className="text">{paragraph}</p>
        <a
          id="exploreBtn"
          href={projectLink ? projectLink : '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >Explore</a>
      </div>
    </div>
  );
};

Card.propTypes = {
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  projectLink: PropTypes.string
};

export default Card;
