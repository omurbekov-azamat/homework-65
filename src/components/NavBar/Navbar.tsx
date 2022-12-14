import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary bg-opacity-50">
      <div className="container p-2">
        <p className="navbar-brand m-0 me-5">Test</p>
        <div className="ms-5">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to='/home' className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/about' className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/contacts' className="nav-link">
                Contacts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/divisions' className="nav-link">
                Divisions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/admin' className="nav-link">
                Admin
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;