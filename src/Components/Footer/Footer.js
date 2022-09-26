import './Footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Footer() {
  return (
   <div className='foot'>
    <Container>
      <Row>
        <Col>
          <h3>eiliana</h3>
          <p>Eiliana is an evolving online portal<br/> creating opportunities for Freelancers<br/> around the globe to connect.</p>
        </Col>
        <Col>
          <h3>Categories</h3>
          <p>Development & Testing</p>
          <p>UI & Desigm</p>
          <p>Animation & Video</p>
          <p>Content & Marketing</p>
        </Col>
        <Col>
        <h3>Product</h3>
          <p>Contract Staffing</p>
          <p>Reafer a Friend</p>
          <p>Product Referral</p>
          <p>Commercial Terms</p>
        </Col>
        <Col>
        <h3>Company</h3>
          <p>About us</p>
          <p>Carrer</p>
          <p>Blogs</p>
          <p>Values@Eiliana</p>
          <p>User Agreement</p>
          <p>Privacy Policy</p>
          <p>Contact Us</p>
          <p>Sitemap</p>
        </Col>
        <Col>
        <h1>Stay up to date</h1>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Col>
      </Row>
    </Container>
   </div>
  );
}

export default Footer;
