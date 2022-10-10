import "./Redefining.css";
import Grou from "../Assets/Grou.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Group from "../Assets/Group.png";
import Mask from "../Assets/Mask.png";

function Redefining() {
  return (
    <div className="redef">
      <Container>
        <Row>
          <Col className="re">
            <h1 className="red">
              Redefining <strong>Gig Economy</strong>
            </h1>
            <p className="apart">
              Apart from our talent marketplace, we provide a variety of
              innovative solutions that help both talents and clients grow
            </p>
            <Col className="flex-container">
              <img src={Group} alt="Logo" />
              <img src={Group} alt="Logo" />
            </Col>
            <Col className="choose">
              <p className="apart">
                1.Choose experirnced freelancers from the global talent pool.
              </p>
              <p className="apart">
                2.Reverse Triangle Utilize the best talent to help manage
                business risk on Pay Per Use Model.{" "}
              </p>
              <p className="apart">
                3.Reverse Triangle Manage Delivery Model at Eiliana that
                facilitates smooth project delivery.
              </p>
              <p className="apart">
                4.Reverse Triangle Faster project roll out through instant
                resource deployment.{" "}
              </p>
              <p className="apart">
                Reverse triangle Access to super niche skills that help in
                transforming the project performance.
              </p>
            </Col>
          </Col>
          <Col className="im">
            <img className="im" src={Grou} alt="Logo" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Redefining;
