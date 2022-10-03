import React from "react";
import { getUser, removeUserSession } from "../Utils/Common";
import Footer from "../Components/Footer/Footer";
import dash from "../Components/Assets/dashboard.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Dashboard(props) {
  const user = getUser();

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };

  return (
    <div>
      <img className="da" src={dash} alt="First slide" />
      <Container>
        <Row>
          <Col>
            Welcome {user.name}!<br />
            <br />
            <input type="button" onClick={handleLogout} value="Logout" />
          </Col>
          <Col>
            <h1>
              Welcome back, start bidding now on projects that meet your skills.
            </h1>
            <p>
              Work on the most exciting projects from clients across the globe
              and take your career to new heights.
              <br />
              Browser jobs that match your skills and experience to a client’s
              hiring needs and budget. Work from anywhere, anytime and explore
              different ways to earn. Define project category, the scope of
              work, timeline, pricing model, and rate per hour upfront so
              clients
            </p>
            <input type="button" value="Browse Projects & Jobs" />
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default Dashboard;
