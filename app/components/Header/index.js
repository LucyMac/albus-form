import React from 'react';

import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import logo from './albus-logo.png';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <NavBar>
        {/* main nav */}
        <div style={{ display: 'flex' }}>
          <div style={{ width: '70px' }}>
            <Img src={logo} alt="Albus Logo" />
          </div>
          <HeaderLink>Campaigns</HeaderLink>
          <HeaderLink>Hall of fame</HeaderLink>
        </div>
        {/* secondary nav */}
        <div style={{ display: 'flex' }}>
          <HeaderLink>Notifications</HeaderLink>
          <HeaderLink>Jane Smith</HeaderLink>
        </div>
      </NavBar>
    );
  }
}

export default Header;
