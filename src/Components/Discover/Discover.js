import './Discover.css';
import Gr from "../Assets/Gr.png";
import Adobe from "../Assets/Adobe.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Discover() {
  return (
    <div style={{ backgroundImage: `url(${Adobe})` }}>
       <Container>
      <Row>
        <Col className='ph' >
            <img className='masg' src={Gr} alt="Logo" />
        </Col>
        <Col className='smart'>
             <h1 className='dig'><strong>Discover through<br/> Videos of Interests</strong></h1>
            <h3 className='pr'><strong>Eiliana's Project Referral<br/> Program</strong></h3>
            <p className='ch'>Get a chance to earn a pre-decided amount of commission by referring your clients’ projects to us. When the project is successfully completed, you get rewarded with the amount of your desire. </p>
            <p className='ch'>Wondering how to get benefits from this unique referral program? From sign up to successful referrals - tune in to see how our “Project Referral Program” works.</p>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Discover;