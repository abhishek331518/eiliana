import React, { useState } from "react";
import Sing from "../Assets/singup.png";
//import { useHistory } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";

function Signup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // const history = useHistory();
  async function signup() {
    let item = { firstname, lastname, email, password };
    console.warn(item);
    // let result = await fetch("", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    //   body: JSON.stringify(items),
    // });
    // result = await result.json();
    // localStorage.setItem("user-info", JSON.stringify(result));
    // history.push("/add");
  }
  return (
    <MDBContainer fluid className="p-4">
      <MDBRow>
        <MDBCol md="6">
          <MDBCard className="my-5">
            <MDBCardBody className="p-5">
              <MDBRow>
                <MDBCol col="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="First name"
                    id="form1"
                    type="text"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </MDBCol>

                <MDBCol col="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Last name"
                    id="form1"
                    type="text"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </MDBCol>
              </MDBRow>

              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                id="form1"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form1"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="d-flex justify-content-center mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Subscribe to our newsletter"
                />
              </div>

              <MDBBtn onClick={signup} className="w-100 mb-4" size="md">
                sign up
              </MDBBtn>

              <div className="text-center">
                <p>or sign up with:</p>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="facebook-f" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="twitter" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="google" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="github" size="sm" />
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        {/* <MDBCol md="6">
          <MDBCardImage
            src={Sign}
            alt="login form"
            className="rounded-start w-100"
          />
        </MDBCol> */}

        <MDBCol md="6">
          <img src={Sing} alt="sign" />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Signup;
