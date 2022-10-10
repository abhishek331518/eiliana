import React from "react";
import Banner1 from "../Assets/Banner1.jpg";
import Banner2 from "../Assets/Banner2.jpg";
import Banner3 from "../Assets/Banner3.jpg";
import Banner4 from "../Assets/Banner4.jpg";
import Banner5 from "../Assets/Banner5.jpg";
import Banner6 from "../Assets/Banner6.jpg";
import "./Homepage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Carousel from "react-bootstrap/Carousel";
import Header from "../Header/Header";


function Homepage() {
  return (
    <>
    <Header/>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={Banner1} alt="First slide" />
          <Carousel.Caption className="car">
            <h3>
              <strong>Transforming Lives</strong>
              <br />
              Through Next Generation
              <br />
              Resources & Projects
            </h3>
            <button className="button n-button">Hire Talent</button>
            <button
              className="button n-button"
              style={{ backgroundColor: "#C3362A", color: "white" }}
            >
              Find Project
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={Banner2} alt="Second slide" />
          <Carousel.Caption>
            <h3>
              <strong>Transforming Lives</strong>
              <br />
              Through Next Generation
              <br />
              Resources & Projects
            </h3>
            <button className="button n-button">Hire Talent</button>
            <button
              className="button n-button"
              style={{ backgroundColor: "#C3362A", color: "white" }}
            >
              Find Project
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={Banner3} alt="Third slide" />
          <Carousel.Caption className="car">
            <h3>
              <strong>Transforming Lives</strong>
              <br />
              Through Next Generation
              <br />
              Resources & Projects
            </h3>
            <button className="button n-button">Hire Talent</button>
            <button
              className="button n-button"
              style={{ backgroundColor: "#C3362A", color: "white" }}
            >
              Find Project
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={Banner4} alt="Third slide" />
          <Carousel.Caption>
            <h3>
              <strong>Transforming Lives</strong>
              <br />
              Through Next Generation
              <br />
              Resources & Projects
            </h3>
            <button className="button n-button">Hire Talent</button>
            <button
              className="button n-button"
              style={{ backgroundColor: "#C3362A", color: "white" }}
            >
              Find Project
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={Banner5} alt="Third slide" />
          <Carousel.Caption className="car">
            <h3>
              <strong>Transforming Lives</strong>
              <br />
              Through Next Generation
              <br />
              Resources & Projects
            </h3>
            <button className="button n-button">Hire Talent</button>
            <button
              className="button n-button"
              style={{ backgroundColor: "#C3362A", color: "white" }}
            >
              Find Project
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={Banner6} alt="Third slide" />
          <Carousel.Caption>
            <h3>
              <strong>Transforming Lives</strong>
              <br />
              Through Next Generation
              <br />
              Resources & Projects
            </h3>
            <button className="button n-button">Hire Talent</button>
            <button
              className="button n-button"
              style={{ backgroundColor: "#C3362A", color: "white" }}
            >
              Find Project
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="hom">
        <Container>
          <Row>
            <Col className="high">
              <h4>High Skilled Freelancers</h4>
              <p className="fo">
                Form IOS Developer to Data Scientist all are on a surge to serve
                you best.
              </p>
            </Col>
            <Col className="high">
              <h4>Transparency</h4>
              <p className="fo">
                From IOS Developer to Data Scientist all are on a surge to serve
                you best.
              </p>
            </Col>
            <Col className="high">
              <h4>Remote Developer</h4>
              <p className="fo">
                From IOS Developer to Data Scientist all are on a surge to serve
                you best.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Homepage;
