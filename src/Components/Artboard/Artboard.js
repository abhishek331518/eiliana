import "./Artboard.css";
import Group from "../Assets/Group.png";
import Mask from "../Assets/Mask.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Artboard() {
  return (
    <div className="art">
      <Container>
        <Row>
          <Col className="im">
            <img className="im" src={Mask} alt="Logo" />
          </Col>
          <Col>
            <h1 className="work">
              <strong>Working With Eiliana</strong>
            </h1>
            <p className="lor">
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit. Aliquam malesuada posuere mi
            </p>
            <label className="lor">
              <input type="checkbox" />
              No minimum account balance
            </label>
            <br />
            <label className="lor">
              <input type="checkbox" />
              We will be launching our services
            </label>
            <br />
            <label className="lor">
              <input type="checkbox" />
              Add credibility by getting reviewed
            </label>
            <br />
            <label className="lor">
              <input type="checkbox" />
              Access to online project tracker for
            </label>
            <br />
            <label className="lor">
              <img src={Group} alt="Logo" /> Evolution
            </label>
            <label className="lor">
              <img src={Group} alt="Logo" /> Evolution
            </label>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Artboard;
