import React, { useState } from "react";
import axios from "axios";
import { setUserSession } from "../Utils/Common";
import Footer from "./Footer/Footer";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Loginimg from "./Assets/login-1.png";
import "./Login.css";

function Login(props) {
  const [loading, setLoading] = useState(false);
  const email = useFormInput("");
  const password = useFormInput("");
  const [error, setError] = useState(null);

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios
      .post("http://157.245.98.13/api/login", {
        email: email.value,
        password: password.value,
      })
      .then((response) => {
        setLoading(false);
        setUserSession(response.data.token, response.data.user);
        if (response.data["success"] === "0") {
          alert(response.data["message"]);
        } else if (response.data["success"] === "2") {
          alert(response.data["message"]);
          localStorage.setItem(
            "userData",
            JSON.stringify(response.data["user"])
          );
          props.history.push("/dashboard");
        }

        // if (response.data.user.role == 2) {
        //   props.history.push("/dashboard");
        // } else {
        //   props.history.push("/dash");
        // }
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 401)
          setError(error.response.data.message);
        else setError("Something went wrong. Please try again later.");
      });
  };

  return (
    <div>
      <Container className="cont">
        <Row>
          <Col className="ema">
            <h1 className="stron">
              <strong>Login</strong>
            </h1>
            <br />
            <div>
              <h3>Email</h3>
              <input type="text" {...email} autoComplete="new-email" />
            </div>
            <div style={{ marginTop: 10 }}>
              <h3>Password</h3>
              <input
                type="password"
                {...password}
                autoComplete="new-password"
              />
            </div>
            {error && (
              <>
                <small style={{ color: "red" }}>{error}</small>
                <br />
              </>
            )}
            <br />
            <input
              type="button"
              value={loading ? "Loading..." : "Login"}
              onClick={handleLogin}
              disabled={loading}
            />
          </Col>
          <Col>
            <img className="loginimg" src={Loginimg} alt="" />
          </Col>
        </Row>
      </Container>
      <br />
      <Footer />
    </div>
  );
}

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};

export default Login;
