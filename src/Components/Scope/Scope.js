import './Scope.css';
import Ma from '../Assets/Ma.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Scope() {
  return (
   <>
       <Container>
      <Row>
        <Col className='scope'>
        <h1 className='sco'>Scope of Work</h1>
   <h3 className='smo'>Smooth Delivery</h3>
   <h3 className='exp'>experience empowered by Eiliana’s SOW</h3>
   <p className='at'>At Eiliana, we’re committed to helping freelancers and clients grow their businesses. With SOW, a freelancer can work with Eiliana clients seamlessly, and get access to features such as work outlines, easy payments, expected outcomes, dispute assistance, and more.</p>
        </Col>
        <Col className='grou'>
        <img className='gr' src={Ma} alt="Logo" />
        </Col>
      </Row>
    </Container>
   </>
  );
}

export default Scope;
