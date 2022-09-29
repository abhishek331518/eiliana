import Footer from "../Footer/Footer";
import "./Projectreferral.css";
import project from "../Assets/project-referral-banner.jpg";
import proj from "../Assets/sales-referal-new1.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Projectreferral() {
  return (
    <>
      <img className="how" src={project} alt="Logo" />
      <Container>
        <Row>
          <Col>
            <img src={proj} alt="Logo" />
          </Col>
          <Col>
            <h3 className="intro">Introducing Work Marketplace</h3>
            <h3>
              <strong>One-Of-A-Kind</strong>
              <span className="proj"> Project Referral Program</span>
            </h3>
            <p className="wen">
              We are excited to introduce our distinctive Project Referral
              Program with the rewards of your desire. The program is designed
              to enable the freelancers to encash their professional network and
              strengthen their bond with their clients.
            </p>
            <p className="wen">
              The best thing about this program is that freelancers can decide
              their own commission for referring the projects to Eiliana and get
              the pre-decided amount of commission post successful delivery of
              the project.
            </p>
            <h2>Join Our Project Referral Program Today!</h2>
            <p className="wen">
              Please click the button below for details, submit your referrals
              and start earning extra money on the side.
            </p>
            <button className="button n-button">New Lead</button>
            <button
              className="button n-button"
              style={{ backgroundColor: "#C3362A", color: "white" }}
            >
              Lead Status
            </button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Projectreferral;
