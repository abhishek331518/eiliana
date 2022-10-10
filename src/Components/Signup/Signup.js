import React, { useState } from "react";
import Sing from "../Assets/singup.png";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./Signup.css";
import Footer from "../Footer/Footer";
import Signupotp from "./Signupotp";

function Signup() {
  const [otp, setOtpPage] = useState(false);
  const [MobileNumber, setMobileNumber] = useState("");
  const [Email, setEmail] = useState("");
  async function sign_up() {
    let item = { Email, MobileNumber };
    // console.warn(item.Email);
    if (item.MobileNumber === "") {
      alert("Mobile number can not be empty!");
    } else if (item.Email === "") {
      alert("Email can not be empty!");
    } else {
      setOtpPage(true);
    }
    // let result = await fetch("http://157.245.98.13/api/account/register", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    //   body: JSON.stringify(item),
    // });
    // result = await result.json();
    // localStorage.setItem("user-info", JSON.stringify(result));
    // console.log(result);
  }
  return (
    <MDBContainer fluid className="p-4">
      {!otp ? (
        <MDBRow>
          <MDBCol md="6">
            <MDBCard className="my-5">
              <MDBCardBody className="p-5">
                <MDBRow>
                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Mobile Number"
                      id="form1"
                      type="text"
                      value={MobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                    />
                  </MDBCol>
                </MDBRow>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  id="form1"
                  type="email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MDBBtn onClick={sign_up} className="w-100 mb-4" size="md">
                  sign up
                </MDBBtn>
                <div className="text-center">
                  <p></p>
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
          <MDBCol md="6">
            <img className="signimage" src={Sing} alt="sign" />
          </MDBCol>
        </MDBRow>
      ) : (
        <Signupotp email={Email} mobile = {MobileNumber}/>
      )}
      <Footer />
    </MDBContainer>
  );
}

export default Signup;
