import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import scrollTo from 'gatsby-plugin-smoothscroll';

const Navbar = (props) => {
  const navBar = useRef();
  let prevScrollpos;

  const onSelectMenu = (page) => {
    if (props.view === 'activity')
      props.setView('');
    scrollTo(page);
  };

  const scrollMenuHandler = () => {
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          navBar.current.style.opacity = '1';
        } else {
          navBar.current.style.opacity = '0';
        }
        prevScrollpos = currentScrollPos;
    };
  };

  scrollMenuHandler();

  return (
    <div
      ref={navBar} 
      className="section sticky-transition" 
      style={{ position: 'sticky', top: 0, zIndex: 1, background: 'black' }}>
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
