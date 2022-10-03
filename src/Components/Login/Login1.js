import React, { useEffect, useState } from "react";
import Log from "../Assets/login-1.png";
import Log1 from "../Assets/logo.png";
import { useHistory } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import { json } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/add");
    }
  }, []);
  async function login() {
    let item = { email, password };
    console.warn(item);
    let result = await fetch("http://157.245.98.13/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(items),
    });
    result = await result.json();
    localStorage.setItem("user-info", json.stringify(result));
    history.push("/add");
  }
  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column">
              <div className="d-flex flex-row mt-2">
                <MDBIcon
                  fas
                  icon="cubes fa-3x me-3"
                  style={{ color: "#ff6219" }}
                />
                <span className="h1 fw-bold mb-0">
                  <img src={Log1} alt="logo" />
                </span>
              </div>

              <h5
                className="fw-normal my-4 pb-3"
                style={{ letterSpacing: "1px" }}
              >
                Log In into your account
              </h5>

              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <MDBBtn
                onClick={login}
                className="mb-4 px-5"
                color="dark"
                size="lg"
              >
                Login
              </MDBBtn>
              <a className="small text-muted" href="#!">
                Forgot password?
              </a>
              <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                Don't have an account?{" "}
                <a href="#!" style={{ color: "#393f81" }}>
                  Register here
                </a>
              </p>

              <div className="d-flex flex-row justify-content-start">
                <a href="#!" className="small text-muted me-1">
                  Terms of use.
                </a>
                <a href="#!" className="small text-muted">
                  Privacy policy
                </a>
              </div>
            </MDBCardBody>
          </MDBCol>

          <MDBCol md="6">
            <MDBCardImage
              src={Log}
              alt="login form"
              className="rounded-start w-100"
            />
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default Login;
