import React from "react";
import { /*getUser,*/ getUserRole, removeUserSession } from "../Utils/Common";
import Footer from "../Components/Footer/Footer";
import dash from "../Components/Assets/dashboard.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Dashboard.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
//import StarRating from "react-star-rating";
// import Myreferral from "./Freelancer/Myreferral";
// import Recommendations from "./Freelancer/Recommendations";
// import Finance from "./Freelancer/Finance";
// import Routedash from "../Components/Freelancer/Routedash";

function Dashboard(props) {
  // const user = getUser();

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };

  console.log(getUserRole());
  if (getUserRole() === 2) {
    return (
      <div>
        <img className="da" src={dash} alt="First slide" />
        <input type="button" onClick={handleLogout} value="Logout" />
        <h1>Welcome to Freelancer page</h1>
        {/* <Routedash /> */}

        <Router>
          <div>
            <ul>
              <li>
                <Link to="/dashboar">Dashboard</Link>
              </li>
              <li>
                <Link to="/myreferrallist">My Referral List</Link>
              </li>
              <li>
                <Link to="/recommendation">Recommendations</Link>
              </li>
              <li>
                <Link to="/finances">Finance</Link>
              </li>
            </ul>

            <hr />
            <Switch>
              <Route exact path="/dashboar">
                <Dashboar />
              </Route>
              <Route path="/myreferrallist">
                <Myreferrallist />
              </Route>
              <Route path="/recommendation">
                <Recommendation />
              </Route>
              <Route path="/finances">
                <Finances />
              </Route>
            </Switch>
          </div>
        </Router>

        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <img className="da" src={dash} alt="First slide" />
        <input type="button" onClick={handleLogout} value="Logout" />
        <h1>Welcome to customer Page</h1>
        {/* <Routedash /> */}

        <Router>
          <div>
            <ul>
              <li>
                <Link to="/dashboar">Dashboard</Link>
              </li>
              <li>
                <Link to="/myreferrallist">My Referral List</Link>
              </li>
              <li>
                <Link to="/recommendation">Recommendations</Link>
              </li>
              <li>
                <Link to="/finances">Finance</Link>
              </li>
            </ul>

            <hr />
            <Switch>
              <Route exact path="/dashboar">
                <Dashboar />
              </Route>
              <Route path="/myreferrallist">
                <Myreferrallist />
              </Route>
              <Route path="/recommendation">
                <Recommendation />
              </Route>
              <Route path="/finances">
                <Finances />
              </Route>
            </Switch>
          </div>
        </Router>

        <Footer />
      </div>
    );
  }
}

export default Dashboard;

function Myreferrallist() {
  return (
    <div>
      <input
        type="submit"
        value="REFER A FREELANCER"
        style={{
          color: "white",
          backgroundColor: "red",
          border: "1px solid red",
          borderRadius: "10px",
          padding: 10,
        }}
      />
      <br />
      <br />
      <table>
        <tr
          style={{
            color: "white",
            backgroundColor: "red",
            padding: 30,
          }}
        >
          <th
            style={{
              padding: 10,
            }}
          >
            Referral's
          </th>
          <th
            style={{
              padding: 10,
            }}
          >
            Order Value of first order
          </th>
          <th
            style={{
              padding: 10,
            }}
          >
            Commission Amount
          </th>
        </tr>
        <tr>
          <td>List is empty</td>
        </tr>
      </table>
      <br />
      <br />
    </div>
  );
}

function Recommendation() {
  return (
    <div>
      <h2
        style={{
          color: "red",
        }}
      >
        My Recommendations
      </h2>
      <br />
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <br />
        <label>
          Rating
          <input type="text" name="name" />
        </label>
        <br />
        <br />
        <label>
          Recommendations
          <input type="textarea" name="textValue" />
        </label>
        <br />
        <br />
        <input
          type="submit"
          value="Submit"
          style={{
            color: "red",
            border: "1px solid red",
            borderRadius: "10px",
            padding: 10,
          }}
        />
      </form>
      <br />
      <br />
    </div>
  );
}

function Finances() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1
              style={{
                color: "red",
              }}
            >
              My Finance
            </h1>
            <br />
            <form>
              <label>
                Add Bank Details
                <input type="text" name="name" />
              </label>
              <br />
              <br />
              <input
                type="submit"
                value="Withdraw Amount"
                style={{
                  color: "red",
                  border: "1px solid red",
                  borderRadius: "10px",
                  padding: 10,
                  marginRight: 20,
                }}
              />
              <input
                type="submit"
                value="Transaction history"
                style={{
                  color: "red",
                  border: "1px solid red",
                  borderRadius: "10px",
                  padding: 10,
                }}
              />
            </form>
          </Col>
          <Col>
            <h1
              style={{
                color: "red",
              }}
            >
              Account Holder Info
            </h1>
            <br />
            <form>
              <label>
                Account Holder Name
                <input type="text" name="name" />
              </label>
              <br />
              <br />
              <label>
                Account number
                <input type="text" name="name" />
              </label>
              <br />
              <br />
              <label>
                IFSC code
                <input type="text" name="name" />
              </label>
              <label>
                Phone no
                <input type="text" name="name" />
              </label>
              <br />
              <br />
              <input
                type="submit"
                value="SAVE DETAILS"
                style={{
                  color: "white",
                  backgroundColor: "red",
                  border: "1px solid red",
                  borderRadius: "10px",
                  padding: 10,
                }}
              />
            </form>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
    </div>
  );
}

function Dashboar() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Title>Kiran Choudhary</Card.Title>
                <Card.Text>Designation</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Available Funds</ListGroup.Item>
                <ListGroup.Item>320.00$</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Update Profile</Card.Link>
                <Card.Link href="#">Change Password</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <h1>
              Welcome back, start bidding now on projects that meet your skills.
            </h1>
            <p className="most">
              Work on the most exciting projects from clients across the globe
              and take your career to new heights.
              <br />
              Browser jobs that match your skills and experience to a client’s
              hiring needs and budget. Work from anywhere, anytime and explore
              different ways to earn. Define project category, the scope of
              work, timeline, pricing model, and rate per hour upfront so
              clients
            </p>
            <input
              type="button"
              value="Browse Projects & Jobs"
              style={{
                color: "white",
                backgroundColor: "red",
                border: "1px solid red",
                borderRadius: "10px",
                padding: 10,
              }}
            />
          </Col>
        </Row>
      </Container>
      <br />
      <br />
    </div>
  );
}
