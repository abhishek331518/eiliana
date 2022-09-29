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
          <h3 className='eili'>eiliana</h3>
          <p className='eilia'>Eiliana is an evolving online portal<br/> creating opportunities for Freelancers<br/> around the globe to connect.</p>
        </Col>
        <Col>
          <h3 className='eili'>Categories</h3>
          <p className='eilia'>Development & Testing</p>
          <p className='eilia'>UI & Desigm</p>
          <p className='eilia'>Animation & Video</p>
          <p className='eilia'>Content & Marketing</p>
        </Col>
        <Col>
        <h3 className='eili'>Product</h3>
          <p className='eilia'>Contract Staffing</p>
          <p className='eilia'>Reafer a Friend</p>
          <p className='eilia'>Product Referral</p>
          <p className='eilia'>Commercial Terms</p>
        </Col>
        <Col>
        <h3 className='eili'>Company</h3>
          <p className='eilia'>About us</p>
          <p className='eilia'>Carrer</p>
          <p className='eilia'>Blogs</p>
          <p className='eilia'>Values@Eiliana</p>
          <p className='eilia'>User Agreement</p>
          <p className='eilia'>Privacy Policy</p>
          <p className='eilia'>Contact Us</p>
          <p className='eilia'>Sitemap</p>
        </Col>
        <Col>
        <h1 className='eili'>Stay up to date</h1>
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
