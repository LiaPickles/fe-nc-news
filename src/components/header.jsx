import NavBar from "./nav-bar";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css'

const Header = () => {
  return (
    <Container fluid>
      <Row>
      <Col className="header"> NC News </Col>
      <NavBar />
      </Row>
    </Container>
  );
};

export default Header;