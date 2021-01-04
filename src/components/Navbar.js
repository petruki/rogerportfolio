import React from 'react';
import PropTypes from 'prop-types';
import scrollTo from 'gatsby-plugin-smoothscroll';

const Navbar = (props) => {

  const onSelectMenu = (page) => {
    if (props.view === 'activity')
      props.setView('');
    scrollTo(page);
  };

  const getSticky = () => {
    return props.view == 'activity' ? 'inherit' : 'sticky';
  };

  return (
    <div className="section" style={{ position: getSticky(), top: 0, zIndex: 1, background: 'black' }}>
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => onSelectMenu('#home')}
            onKeyPress={() => onSelectMenu('#home')}
            className="name"
            tabIndex={0}>
            Portfolio.
          </div>
          <div className="links-wrapper">
            {props.view != 'activity' &&
              <>
                <button onClick={() => onSelectMenu('#work')}>Work</button>
                <button onClick={() => onSelectMenu('#about')}>About</button>
                <button onClick={() => onSelectMenu('#skills')}>Skills</button>
                <button onClick={() => props.setView('activity')}>Activiy</button>
              </>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  setView: PropTypes.func,
  view: PropTypes.string
};

export default Navbar;
