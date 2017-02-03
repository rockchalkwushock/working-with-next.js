import React, { Component } from 'react';
import Link from 'next/prefetch'

class Header extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link href='/'><a>Home</a></Link></li>
          <li><Link href='/about'><a>About</a></Link></li>
          <li><Link href='/portfolio'><a>Portfolio</a></Link></li>
        </ul>
      </nav>
    );
  }
}

export default Header;
