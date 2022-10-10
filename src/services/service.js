// import { BASE_URL, FETCH_COUNTRY } from "./appConstraints";
import axios from "axios";
import { setUserSession } from "../Utils/Common";
// import {  useHistory } from "react-router-dom";


// let navigate = useHistory();
export var countriesOption =[];
export var rolesOption =[];
export var registerMsg ;

// Signup Dashboard init method...!
export const initSignupDashboard = () => {
    getRoles();
    getCountries();
};

// To Get All Countries...!
export const getCountries = () => {
    axios
      .get("http://157.245.98.13/api/fetchcountry", {
        
      })
      .then((response) => {
        try {
            countriesOption = response.data;
        } catch (error) {
            console.log(error);
        }
      })
      .catch((error) => {
        console.log(error);
      });
};

// To Get Roles....!
export const getRoles = () => {
    axios
      .get("http://157.245.98.13/api/roles", {
        
      })
      .then((response) => {
        try {
            rolesOption = response.data;
        } catch (error) {
            console.log(error);
        }
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data['message']);
      });
};


// signup...!
export const signup = (data) => {
    // let navigate = useHistory();
    // let nsv = useLocation();
//    console.log(data);
    axios
      .post("http://157.245.98.13/api/signup", {
        'email': data.email,
        // _token: yhLekmKklqN0K5mGvX7L0IU4Bdw176XH3yilNU7q,
        'mobile': data.mobile,
        'registration_social': 1,
        'freelancer_referral': 0,
        'sales_referral_id': 0,
        'applyas': data.applyas,
        'register_as': data.register_as,
        'company_name': data.companyName,
        'gst_number': data.gstNumber,
        'first_name': data.firstName,
        'last_name': data.lastName,
        'anonymous': data.anony_mous,
        'gender': data.gender,
        'pseudoName': data.firstName,
        'dob': data.dob,
        'country': data.countryCode,
        'registration_id': null,
        'username': "h1uyix",
        'password': data.password,
        'password_confirm': data.password,
        'middle_name': null,
      })
      .then((response) => {
        console.log(response);
        try {
            if(response.data['message'] === "Account Created and now login to social media account"){
                registerMsg = "Account Created and now login to social media account";
                getUserDetails(data.email);
                alert("Account created successfully!");
            }else{
                alert(response.data.errors);
            }
        } catch (error) {
            console.log(error);
            
            alert(response.data.errors);
        }
      })
      .catch((error) => {
        console.log(error);
        alert(error);
        // alert(response.data.errors);
      });
};

const getUserDetails = (_email) => {
  axios
    .post("http://157.245.98.13/api/getuserdetails", {
      email: _email,
    })
    .then((response) => {
      if (response.data["success"] === "0") {
        alert(response.data["errors"]);
      } else if (response.data["success"] === "2") {
        alert(response.data["errors"]);
        setUserSession(response.data.token, response.data.user);
        console.log(response);
        localStorage.setItem(
          "userData",
          JSON.stringify(response.data["user"])
        );
      }
    })
    // .catch((error) => {
    //   setLoading(false);
    //   console.log(error);
    //  // alert("something went wrong!");
    //   // if (error.response.status === 401)
    //   //   setError(error.response.data.message);
    //   // else setError("Something went wrong. Please try again later.");
    // });
};