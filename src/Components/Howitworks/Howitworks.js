import Footer from "../Footer/Footer";
import "./Howitwork.css";
import Howitwor from "../Assets/Howitwor.jpg";
import howits from "../Assets/how-its-1.png";
import howit from "../Assets/how-its-2.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Howitworks() {
  return (
    <div>
      <img className="how" src={Howitwor} alt="Logo" />
      <h3 className="it">
        <strong>How it works</strong>{" "}
      </h3>
      <p className="ci">
        At Eiliana, we believe that we’re the bridge between the ones who help
        talents find the right project and clients <br /> find the right talent
        for their job. Check out our process below to see how we go about doing
        that.
      </p>

      <Container className="pri">
        <Row>
          <Col>
            <h2 className="pr">Pricing Model As Per Your Choice</h2>
            <h4>Choose from Our Multiple Payment Terms & Create Agreements.</h4>
            <h4>1. Fixed Price</h4>
            <p className="you">
              Your contract would include a predetermined budget for the entire
              project. You can further negotiate the price and payment of the
              project during the interview process.
            </p>
            <h4>2. Hourly</h4>
            <p className="you">
              Your contract would include the maximum number of allowed hours
              and your hourly rate. You can further negotiate the rate during
              the interview process.
            </p>
            <h4>3. Retainership</h4>
            <p className="you">
              Your contract would include an advance payment for the project
              during a set period of time. You can further negotiate the price.
            </p>
          </Col>
          <Col>
            <img className="masg" src={howits} alt="Logo" />
          </Col>
        </Row>
      </Container>

      <h3 className="free">Freelancer</h3>
      <p className="bring">
        Bring your skills, find opportunities at each level of your freelancing
        career, meet clients you’re <br /> excited to work with at your comfort
        zone, explore new ways of earning and take your career to new heights.
      </p>
      <Container>
        <Row>
          <Col>
            <img src={howit} alt="Logo" />
          </Col>
          <Col>
            <h4 className="sign">Sign Up</h4>
            <p className="reg">
              Register yourself free at our portal and explore the new ways of
              increasing your income
            </p>

            <h4 className="sign">Create Your Profile</h4>
            <p className="reg">
              Outline your profile by defining the core skills and services you
              offer, create your portfolio including your area of expertise and
              stand out from the crowd.
            </p>

            <h4 className="sign">View Current Job Posting</h4>
            <p className="reg">
              Browse all the job listings filtered based on your skills and get
              notified when the right job is available or directly search.
            </p>

            <h4 className="sign">Submit your best bid</h4>
            <p className="reg">
              Study the project and put your best foot forward showcasing your
              ability to do the job and why you should be considered for the
              project.
            </p>

            <h4 className="sign">Get Hired and Earn</h4>
            <p className="reg">
              Finalize the agreement to start work, deliver high-quality work
              and earn the predetermined amount and as per the schedule.
            </p>
          </Col>
        </Row>
      </Container>
      <h3 className="free">Client</h3>
      <p className="bring">
        Bring your skills, find opportunities at each level of your freelancing
        career, meet clients you’re excited to work with at your comfort zone,
        explore new ways of earning and take your career to new heights.
      </p>

      <Container>
        <Row>
          <Col>
            <h4 className="sign">Sign Up</h4>
            <p className="reg">
              Register yourself free at our portal and explore the new ways of
              increasing your income
            </p>

            <h4 className="sign">Create Your Profile</h4>
            <p className="reg">
              Outline your profile by defining the core skills and services you
              offer, create your portfolio including your area of expertise and
              stand out from the crowd.
            </p>

            <h4 className="sign">View Current Job Posting</h4>
            <p className="reg">
              Browse all the job listings filtered based on your skills and get
              notified when the right job is available or directly search.
            </p>

            <h4 className="sign">Submit your best bid</h4>
            <p className="reg">
              Study the project and put your best foot forward showcasing your
              ability to do the job and why you should be considered for the
              project.
            </p>

            <h4 className="sign">Get Hired and Earn</h4>
            <p className="reg">
              Finalize the agreement to start work, deliver high-quality work
              and earn the predetermined amount and as per the schedule.
            </p>
          </Col>
          <Col>
            <img src={howit} alt="Logo" />
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default Howitworks;
