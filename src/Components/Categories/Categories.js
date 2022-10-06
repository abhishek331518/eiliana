import "./Categories.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import React from "react";
import Slider from "react-slick";

function Categories() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  return (
    <div>
      <Container>
        <Row>
          <Col className="spo">
            <h1>
              Categories in <br />
              Spotlight
            </h1>
          </Col>
          <Col>
            <Slider className="sli" {...settings}>
              <div className="tes">
                <h1 className="ments">Development & Testing</h1>
                <p className="dolor">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus.
                </p>
                <Button variant="light">Expolore</Button>{" "}
              </div>
              <div className="tes">
                <h1 className="ments">Content & Marketing</h1>
                <p className="dolor">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus.
                </p>
                <Button variant="light">Expolore</Button>{" "}
              </div>
              <div className="tes">
                <h1 className="ments">Development & Testing</h1>
                <p className="dolor">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus.
                </p>
                <Button variant="light">Expolore</Button>{" "}
              </div>
              <div className="tes">
                <h1 className="ments">Content & Marketing</h1>
                <p className="dolor">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus.
                </p>
                <Button variant="light">Expolore</Button>{" "}
              </div>
              <div className="tes">
                <h1 className="ments">Development & Testing</h1>
                <p className="dolor">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus.
                </p>
                <Button variant="light">Expolore</Button>{" "}
              </div>
              <div className="tes">
                <h1 className="ments">Content & Marketing</h1>
                <p className="dolor">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus.
                </p>
                <Button variant="light">Expolore</Button>{" "}
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Categories;
