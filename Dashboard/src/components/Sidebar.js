import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaUserPlus, FaSignOutAlt } from 'react-icons/fa';

function Sidebar() {
  return (
    <Nav
      className="flex-column bg-dark"
      style={{ height: '100vh', width: '100%', padding: 0, margin: 0 }}
    >
      <Nav.Link as={NavLink} to="/" className="text-white d-flex align-items-center px-3 py-2">
        <FaTachometerAlt className="me-2" /> Dashboard
      </Nav.Link>
      <Nav.Link as={NavLink} to="/registration" className="text-white d-flex align-items-center px-3 py-2">
        <FaUserPlus className="me-2" /> Registration
      </Nav.Link>
      <Nav.Link as={NavLink} className="text-white d-flex align-items-center px-3 py-2">
        <FaSignOutAlt className="me-2" /> Logout
      </Nav.Link>
    </Nav>
  );
}

export default Sidebar;
