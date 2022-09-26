import './Homepage.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function Homepage() {
  return (
   <>
   <div className='banner'>
    <h1>Transforming Lives Through<br/>Next Generation<br/>Resources & Projects</h1>
    <Button variant="danger">Find Project</Button>
    <Button variant="outline-success">Hire Talents</Button>
   </div>
   <div className='hom'>
   <Container>
      <Row>
        <Col>
          <h1>High Skilled Freelancers</h1>
          <p>Name the skill and we are on it to connect.<br/>Form IOS Developer to Data Scientist all are on a surge to serve you best.</p>
        </Col>
        <Col>
          <h1>Transparency</h1>
          <p>Name the skill and we are on it to connect.<br/>From IOS Developer to Data Scientist all are on a surge to serve you best.</p>
        </Col>
        <Col>
        <h1>24*7 Support</h1>
          <p>Name the skill and we are on it to connect.<br/>From IOS Developer to Data Scientist all are on a surge to serve you best.</p>
        </Col>
      </Row>
    </Container>
    </div>

    <br/>
    <br/>
    <br/>
    <br/>
   </>
  );
}

export default Homepage;
