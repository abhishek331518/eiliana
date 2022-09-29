import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "../Login/Login";
import Load from "../../load";
import Signup from "../Signup/Signup";
import Howitworks from "../Howitworks/Howitworks";
import Projectreferral from "../Projectreferral/Projectreferral";
import Log from "../Assets/logo.png";
import "./Navb.css";
//import Contact from './Contact';

function Navb() {
  return (
    <BrowserRouter>
      <>
        <Navbar bg="light" variant="primary" sticky="top">
          <Container>
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/"}>
                <img className="na" src={Log} alt="logo" />
              </Nav.Link>
              <Nav.Link as={Link} to={"/"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/howitworks"}>
                How it works
              </Nav.Link>
              <Nav.Link as={Link} to={"/projectreferral"}>
                Project referral
              </Nav.Link>
              <Nav.Link as={Link} to={"/login"}>
                Login
              </Nav.Link>
              <Nav.Link as={Link} to={"/signup"}>
                Signup
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
      <div>
        <Routes>
          <Route path="/" element={<Load />} />
          <Route path="/howitworks" element={<Howitworks />} />
          <Route path="/projectreferral" element={<Projectreferral />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Navb;
