import "./Signupotp.css";
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
} from "mdb-react-ui-kit";
import { useHistory } from "react-router-dom";

function Signupotp(props) {
  const [otp, setOtp] = useState("");
  let navigate = useHistory();

  const otpVerify = () => {
    if (otp === "1234") {
      alert("valid otp!");
      navigate.push({pathname:"/signupDashboard",email:props.email, mobile:props.mobile});
    } else {
      alert("Invalid Otp!");
    }
  };
  return (
    <>
      <MDBContainer fluid className="p-4">
        <MDBRow>
          <MDBCol md="6">
            <MDBCard className="my-5">
              <MDBCardBody className="p-5">
                <MDBRow>
                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Enter Opt"
                      id="form1"
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </MDBCol>
                </MDBRow>
                <MDBBtn onClick={otpVerify} className="w-100 mb-4" size="md">
                  Verify Otp
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6">
            <img className="signimage" src={Sing} alt="sign" />
          </MDBCol>
        </MDBRow>
        {/* <Footer /> */}
      </MDBContainer>
    </>
  );
}

export default Signupotp;
