import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { fromEvent, interval } from 'rxjs';
import { throttle } from 'rxjs/operators';

let selectMenu;
let prevScrollpos;
let throttleTimer;

const Navbar = (props) => {
  const navBar = useRef();

  const onSelectMenu = (page) => {
    selectMenu = true;
    if (props.view === 'activity')
      props.setView('');
    scrollTo(page);
    throttleMenuSelcetion();
  };

  const throttleMenuSelcetion = () => {
    if (!throttleTimer)
    throttleTimer = setTimeout(() => { 
        selectMenu = false; 
        throttleTimer = undefined; 
      }, 2000);
  };

  const scrollHandler = () => {
    if (!selectMenu) {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        navBar.current.style.top = '0px';
      } else {
        navBar.current.style.top = '-100px';
      }
      prevScrollpos = currentScrollPos;
    }
  };

  useState(() => {
    fromEvent(document, 'scroll')
      .pipe(throttle(() => interval(200)))
      .subscribe(() => scrollHandler());
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.document) {
      return;
    }
  }, []);

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
