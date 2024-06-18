import { Link } from "react-router-dom";
import "../App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <Navbar.Brand href="/">NC News</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/articles">Articles</Nav.Link>
      <Nav.Link href="/users">Users</Nav.Link> 
      <Nav.Link href="/log-in">Log In</Nav.Link>     
    </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
  );
};

export default NavBar;


