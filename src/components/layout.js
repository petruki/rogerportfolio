import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import '../styles/mains.scss';

const Layout = (props) => {
  return (
    <>
      <Navbar setView={props.setView} view={props.view}></Navbar>
      <main>{props.children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any.isRequired,
  setView: PropTypes.func,
  view: PropTypes.string
};

export default Layout;
