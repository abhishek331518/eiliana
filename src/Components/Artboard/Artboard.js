import './Artboard.css';
import Group from '../Assets/Group.png';
import Mask from '../Assets/Mask.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 



function Artboard() {
  return (
   <>
    <Container>
      <Row>
        <Col className='im'>
        <img  src={Mask} alt="Logo" />
        </Col>
        <Col>
        <h1>Working With Eiliana</h1>
        <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. Aliquam malesuada posuere mi</p>
        <label>
        <input type="checkbox" />
        No minimum account balance 
      </label><br/>
      <label>
        <input type="checkbox" />
        We will be launching our services 
      </label><br/>
      <label>
        <input type="checkbox" />
        Add credibility by getting reviewed 
      </label><br/>
      <label>
        <input type="checkbox" />
        Access to online project tracker for
      </label><br/>
      <label>
      <img src={Group} alt="Logo" /> Evolution
      </label>
      <label>
      <img src={Group} alt="Logo" /> Evolution
      </label>
        </Col>
      </Row>
    </Container>

    <br/>
    <br/>
    <br/>
    <br/>
    
  
   </>
  );
}

export default Artboard;
