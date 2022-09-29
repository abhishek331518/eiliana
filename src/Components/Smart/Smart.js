import "./Smart.css";
import Mas from "../Assets/Mas.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Smart() {
  return (
    <div className="sma">
      <Container>
        <Row>
          <Col>
            <img className="mas" src={Mas} alt="Logo" />
          </Col>
          <Col className="sm">
            <h1 className="ha">
              Smart <br />
              <strong>Project Referral Program</strong>
            </h1>
            <h1 className="st">
              Step 1- <strong>Register</strong>
            </h1>
            <p className="re">Register with us & start making extra money</p>
            <h1 className="st">
              Step 2- <strong>Refer</strong>
            </h1>
            <p className="re">
              Refer your client's projects & decide your own commission.
            </p>
            <h1 className="st">
              Step 3- <strong>Get Rewarded</strong>
            </h1>
            <p className="re">
              Once the project is completed get the pre-decided amount.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Smart;
