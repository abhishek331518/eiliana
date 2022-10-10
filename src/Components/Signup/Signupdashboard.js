import React, {useEffect, useState} from "react";
import "./Signupdashboard.css";
import Footer from "../Footer/Footer";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { countriesOption, rolesOption, initSignupDashboard, signup, registerMsg } from "../../services/service";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router-dom";

function Signupdashboard(props) {
  const [enrollAs, getEnrollAs] = useState(2);
  const [companyNameValue, setCompanyName] = useState("");
  const [gstOrPanNameValue, setGSTorPANname] = useState("");
  const [firstNameValue, setFirstName] = useState("");
  const [lastNameValue, setLastName] = useState("");
  const [registerAsValue, setRegisterAs] = useState("");
  const [anonymousValue, setAnonymous] = useState("");
  const [genderValue, getGender] = useState("");
  const [countryCodeValue, getCountryCode] = useState("");
  const [dateValue, setDate] = useState("");
  const [passwordValue, setPassword] = useState("");
  const [confirmPasswordValue, setConfirmPassword] = useState("");
  let navigate = useHistory();

  useEffect(()=>{
    initSignupDashboard();

  },[]) 
  

  

  const handleSignup = () => {
    // console.log('before toast')
    // toast.warning('HEllo toast',{position: toast.POSITION.BOTTOM_LEFT});
    // if(props.location.email === undefined || props.location.mobile === undefined){
    //   alert("Something went wrong please try again!");
    // }else if(registerAsValue === ""){
    //   alert("Choose Register as")
    // }else if(enrollAs === 2 && firstNameValue === ""){
    //   alert("First name Can not be empty!");
    // }else if(enrollAs === 2 && lastNameValue === ""){
    //   alert("Last name Can not be empty!");
    // }else if(enrollAs === 2 && firstNameValue === ""){
    //   alert("First Can not be empty!");
    // }
    if(passwordValue !== confirmPasswordValue){
      alert("Password and Confirm Password should be match.")
    }else{
      // setloading
      const data = {
        'email':props.location.email,
        'mobile':props.location.mobile,
        'applyas':enrollAs,
        'register_as':registerAsValue,
        'companyName':companyNameValue,
        'gstNumber':gstOrPanNameValue,
        'firstName':firstNameValue,
        'lastName':lastNameValue,
        'anony_mous':anonymousValue,
        'gender':genderValue,
        'dob':dateValue,
        'countryCode':countryCodeValue,
        'password' : passwordValue
      }

      signup(data);
      alert("test");
      if(registerMsg == "Account Created and now login to social media account"){
        navigate.push("dashboard");
        alert("tgest");
      }
      alert("test3");
    }
    
    
  }

  return (
    <>
      <br />
      <br />
      <div
        style={{
          color: "white",
          backgroundColor: "red",
          height: 40,
          width: 1900,
        }}
      >
       <h3>Account Registration</h3>
      </div>
      <Container className="border">
        <Row>
          <h1 style={{ textAliment: "center" }}>Basic Information</h1>
          <br />
          <br />
          <div>
            <label>
              Enroll as
              <br />
              <select style={{ width: 500 }}
              value={enrollAs}
              onChange={(e) => getEnrollAs(e.target.value)}
              required
              >
                {rolesOption.map(enroll=>{
                  return (<option key={enroll.id} value={enroll.id}>{enroll.name}</option>);
                })}
              </select>
            </label>
          </div>
        </Row>
       
        <br />
        Register As
        <Row style={{ width: 500 }}>
          <div>
            <input
              type="radio"
              value="1"
              style={{ paddingRight: 30 }}
              onChange={(e) => setRegisterAs(e.target.value)}
            />{" "}
            Freelancer
            <input type="radio" value="1" onChange={(e) => setRegisterAs(e.target.value)} /> Client
            <input type="radio" value="2"  onChange={(e) => setRegisterAs(e.target.value)}/> Both
          </div>
        </Row>
        <br />
        {enrollAs == 2 ?
        <Row style={{ width: 500 }}>
          <div>
            <br />
             Do you want to keep your profile anonymous?
            <br />
            <input type="radio" value="1" name="Yes" onChange= {(e)=> setAnonymous(e.target.value)}/>
            Yes
            <input type="radio" value="0" name="No" onChange= {(e)=> setAnonymous(e.target.value)}/>
            No
          </div>
        </Row>:<div></div>}
        {enrollAs != 2 ?
        <Row style={{ width: 500 }}>
          Company Name
          <input type="text"  name="name"   value={companyNameValue}
               onChange={(e) => setCompanyName(e.target.value)}/>
        </Row>:<div></div>}
        <br />
        {enrollAs != 2 ?
        <Row style={{ width: 500 }}>
          GST Number/PAN Number
          <input type="text" value={gstOrPanNameValue} name="name" onChange={(e) => setGSTorPANname(e.target.value)} />
        </Row>:<div></div>}
        <br />
        
        <Row style={{ width: 500 }}>
          First Name
          <input type="text" value={firstNameValue} name="name" onChange={(e) => setFirstName(e.target.value)} />
          <br />
          Last Name
          <input type="text" value={lastNameValue} name="name" onChange={(e) => setLastName(e.target.value)}/>
        </Row>
        <br />
        {enrollAs == 2 ?
        <Row>
          <div>
            <br />
             Gender
            <br />
            <input type="radio" value="Male" name="gender" style={{ paddingRight: 30 }} onChange = {(e) => getGender(e.target.value)}/>{" "}
            Male
            <input type="radio" value="Female" name="gender" onChange = {(e) => getGender(e.target.value)} style={{ paddingLeft: 30 }}/>
            Female
            <input type="radio" value="Other" name="gender" onChange = {(e) => getGender(e.target.value)} />
            Other
            
          </div>
        </Row>
        :<div></div>}
        {enrollAs == 2 ?
        <div>
          <br/>
        Date Of Birth
        <DatePicker
          style={{ width: 500 }}
          selected={dateValue}
          onChange={(date) => setDate(date)}
        />
        <br />
        </div>:<div></div>}
        <br />
        {enrollAs != 2 ?
        <div>
        <p>Date Of Incorporation</p>
        <DatePicker
          style={{ width: 500 }}
          selected={dateValue}
          onChange={(date) => setDate(date)}
        />
        </div>
        :<div></div>}
        <br />
        {/* <Calendar /> */}
        <div>
          <label>
            Country
            <br />
            <select style={{ width: 500 }} onChange = {(e)=>getCountryCode(e.target.value)}>
              {countriesOption.map(item => {
                return (
                  <option key={item.id} value={item.countries_isd_code}>{item.name}</option>
                );
              })}
            </select>
          </label>
        </div>
        <br />
       
        <Row style={{ width: 500 }}>
          Password
          <input type="text" value={passwordValue} name="name" onChange={(e) => setPassword(e.target.value)} />
          <br />
          Confirm Password 
          <input type="text" value={confirmPasswordValue} name="name" onChange={(e) => setConfirmPassword(e.target.value)}/>
        </Row>
        <Row>
        {/* <input
          type="submit"
          value="DISCARD"
          style={{
            color: "red",
            border: "1px solid red",
            borderRadius: "10px",
            padding: 10,
          }}
        /> */}
        <br/>
        <br/>
        <input
          type="submit"
          value="NEXT"
          style={{
            color: "red",
            border: "1px solid red",
            borderRadius: "10px",
            padding: 10,
            marginTop:40,
          }}
          onClick={handleSignup}
        />
        </Row>
      </Container>
      <Footer />
    </>
  );
}
export default Signupdashboard;


