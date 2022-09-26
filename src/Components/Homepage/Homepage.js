import React, { Component } from "react";
import Slider from "react-slick";
import Banner from '../Assets/Banner.jpg';
import Final from '../Assets/Final.png';
import './Homepage.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Homepage extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
          <img  src={Final} alt="Logo" />
          </div>
          <div>
          <img  src={Banner} alt="Logo" />
          </div>
          <div>
          <img  src={Final} alt="Logo" />
          </div>
          <div>
          <img  src={Banner} alt="Logo" />
          </div>
          <div>
          <img  src={Final} alt="Logo" />
          </div>
          <div>
          <img  src={Banner} alt="Logo" />
          </div>
        </Slider>
        <div className='hom'>
   <Container>
      <Row>
        <Col>
          <h1>High Skilled Freelancers</h1>
          <p>Name the skill and we are on it to connect.<br/>Form IOS Developer to Data Scientist all are on a surge to serve you best.</p>
        </Col>
        <Col>
          <h1>Transparency</h1>
          <p>Name the skill and we are on it to connect.<br/>From IOS Developer to Data Scientist all are on a surge to serve you best.</p>
        </Col>
        <Col>
        <h1>24*7 Support</h1>
          <p>Name the skill and we are on it to connect.<br/>From IOS Developer to Data Scientist all are on a surge to serve you best.</p>
        </Col>
      </Row>
    </Container>
    </div>
      </div>
    );
  }
}