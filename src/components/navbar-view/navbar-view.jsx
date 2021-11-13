import React from 'react';

// SCSS Import
import './navbar-view.scss';

// Import
import { NavbarView } from '../navbar-view/navbar-view';

// React Bootstrap
import { Navbar, Container, Nav } from 'react-bootstrap';

export class NavbarView extends React.Component {

  render() {
    const { user } = this.props;
    return (
      <>
        <Navbar expand="lg" bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="#myflix">My Flix</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#profile">Profile</Nav.Link>
            <Nav.Link href="#update-profile">Update Profile</Nav.Link>
            <Nav.Link href="#logout">Logout</Nav.Link>
            </Nav>
        </Container>
        </Navbar>
      </>
    );
  }
}