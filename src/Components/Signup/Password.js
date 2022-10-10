import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Pass from "../Assets/change-password.jpg";
import Footer from "../Footer/Footer";

function Password() {
  return (
    <>
      <div>
        <div
          style={{
            color: "white",
            backgroundColor: "red",
            height: 40,
            width: 1900,
            textAlign: "left",
          }}
        >
          <h3>Reset Your Password</h3>
        </div>
        <br />
        <br />
        <Container className="cont">
          <Row>
            <Col className="ema">
              <h1 className="stron">
                <strong>Change Your Password</strong>
              </h1>
              <br />
              <div>
                <h3>Password</h3>
                <input type="text" autoComplete="new-email" />
              </div>
              <div style={{ marginTop: 10 }}>
                <h3>Confirm Password</h3>
                <input type="password" autoComplete="new-password" />
              </div>
              <br />
              <input type="button" value={"CHANGE PASSWORD"} />
            </Col>
            <Col>
              {/* <img className="#" src={Pass} alt="" /> */}
            </Col>
          </Row>
        </Container>
        <br />
        <Footer />
      </div>
    </>
  );
}

export default Password;
