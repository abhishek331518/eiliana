import './Categories.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Categories() {
  return (
   <div>
   <Container>
      <Row>
        <Col className='spo' >
            <h1>Categories in <br/>Spotlight</h1>
        </Col>
        <Col className='tes'>
            <h1 className='ments'>Development & Testing</h1>
            <p className='dolor'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus.</p>
            <Button variant="light">Expolore</Button>{' '}
        </Col>
        <Col className='tes'>
            <h1 className='ments'>Content & Marketing</h1>
            <p className='dolor'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus.</p>
            <Button variant="light">Expolore</Button>{' '}
        </Col>
      </Row>
    </Container>
   </div>
  );
}

export default Categories;
