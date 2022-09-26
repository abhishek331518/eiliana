import './Navb.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navb() {
  return (
   <>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">eiliana</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Post a Project</Nav.Link>
            <Nav.Link href="#action2">How it Works</Nav.Link>
            <Nav.Link href="#">Projects Referral</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-success">LOGIN</Button>
            <Button variant="danger">SIGN UP</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  );
}

export default Navb;
