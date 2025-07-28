import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="m-0 p-2 w-100">
            <Navbar.Brand href="#home">My Dashboard</Navbar.Brand>
        </Navbar>
    );
}
export default Header;