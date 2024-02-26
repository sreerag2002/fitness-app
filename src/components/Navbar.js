import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../assets/fit-and-well-logo-vector-removebg-preview.png';
import './Navbar.css';

const AppNavbar = () => {
  const [isNavbarHidden, setNavbarHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;

      if (scrolled > 100) {
        setNavbarHidden(true);
      } else {
        setNavbarHidden(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar
      variant="dark"
      fixed="top"
      className={`app-navbar ${isNavbarHidden ? 'hide' : ''}`}
      style={{ backgroundColor: 'transparent' }}
    >
      <Navbar.Brand as={Link} to="/">
        <img
          src={Logo}
          alt="Fitness Well Logo"
          height="80"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/" className="nav-link">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/gallery" className="nav-link">
          Gallery
        </Nav.Link>
        <Nav.Link as={Link} to="/pricing" className="nav-link">
          Packages
        </Nav.Link>
        <Nav.Link as={Link} to="/workouts" className="nav-link">
          Reviews
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default AppNavbar;
