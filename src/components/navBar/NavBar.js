import React, { useState } from 'react';
import './navBar.css';
import NavItems from './NavItems';
import navLinksData from '../../data/navLinks';

export default function NavBar(props) {
  const [navLinks, setNavLinks] = useState(navLinksData);

  const renderNavItems = (item, index) => {
    return (
      <NavItems
        key={item.title + index}
        href={item.href}
        title={item.title}
        textColor={item.color}
      />
    );
  };

  return (
    <nav>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">{navLinks.map(renderNavItems)}</ul>
          </div>
        </div>
      </nav>
    </nav>
  );
}
