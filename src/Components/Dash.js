import React from "react";
import { getUser, removeUserSession } from "../Utils/Comm";
import Footer from "../Components/Footer/Footer";
import dash from "../Components/Assets/dashboard.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import "./Dashboard.css";
//import StarRating from "react-star-rating";
// import Myreferral from "./Freelancer/Myreferral";
// import Recommendations from "./Freelancer/Recommendations";
// import Finance from "./Freelancer/Finance";
// import Routedash from "../Components/Freelancer/Routedash";

function Dash(props) {
  // const user = getUser();

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };

  return (
    <div>
      <h1>hello</h1>
      {/* <img className="da" src={dash} alt="First slide" />
      <input type="button" onClick={handleLogout} value="Logout" />
      { <Routedash /> }

      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
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
            <Route exact path="/">
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

      <Footer /> */}
    </div>
  );
}

export default Dash;

// function Myreferrallist() {
//   return (
//     <div>
//       <input
//         type="submit"
//         value="REFER A FREELANCER"
//         style={{
//           color: "white",
//           backgroundColor: "red",
//           border: "1px solid red",
//           borderRadius: "10px",
//           padding: 10,
//         }}
//       />
//       <br />
//       <br />
//       <table>
//         <tr
//           style={{
//             color: "white",
//             backgroundColor: "red",
//             padding: 30,
//           }}
//         >
//           <th
//             style={{
//               padding: 10,
//             }}
//           >
//             Referral's
//           </th>
//           <th
//             style={{
//               padding: 10,
//             }}
//           >
//             Order Value of first order
//           </th>
//           <th
//             style={{
//               padding: 10,
//             }}
//           >
//             Commission Amount
//           </th>
//         </tr>
//         <tr>
//           <td>List is empty for Freelancer</td>
//         </tr>
//       </table>
//       <br />
//       <br />
//     </div>
//   );
// }

// function Recommendation() {
//   return (
//     <div>
//       <h2
//         style={{
//           color: "red",
//         }}
//       >
//         My Recommendations
//       </h2>
//       <br />
//       <form>
//         <label>
//           Name:
//           <input type="text" name="name" />
//         </label>
//         <br />
//         <br />
//         <label>
//           Rating
//           <input type="text" name="name" />
//         </label>
//         <br />
//         <br />
//         <label>
//           Recommendations
//           <input type="textarea" name="textValue" />
//         </label>
//         <br />
//         <br />
//         <input
//           type="submit"
//           value="Submit"
//           style={{
//             color: "red",
//             border: "1px solid red",
//             borderRadius: "10px",
//             padding: 10,
//           }}
//         />
//       </form>
//       <br />
//       <br />
//     </div>
//   );
// }

// function Finances() {
//   return (
//     <div>
//       <Container>
//         <Row>
//           <Col>
//             <h1
//               style={{
//                 color: "red",
//               }}
//             >
//               My Finance
//             </h1>
//             <br />
//             <form>
//               <label>
//                 Add Bank Details
//                 <input type="text" name="name" />
//               </label>
//               <br />
//               <br />
//               <input
//                 type="submit"
//                 value="Withdraw Amount"
//                 style={{
//                   color: "red",
//                   border: "1px solid red",
//                   borderRadius: "10px",
//                   padding: 10,
//                   marginRight: 20,
//                 }}
//               />
//               <input
//                 type="submit"
//                 value="Transaction history"
//                 style={{
//                   color: "red",
//                   border: "1px solid red",
//                   borderRadius: "10px",
//                   padding: 10,
//                 }}
//               />
//             </form>
//           </Col>
//           <Col>
//             <h1
//               style={{
//                 color: "red",
//               }}
//             >
//               Account Holder Info
//             </h1>
//             <br />
//             <form>
//               <label>
//                 Account Holder Name
//                 <input type="text" name="name" />
//               </label>
//               <br />
//               <br />
//               <label>
//                 Account number
//                 <input type="text" name="name" />
//               </label>
//               <br />
//               <br />
//               <label>
//                 IFSC code
//                 <input type="text" name="name" />
//               </label>
//               <label>
//                 Phone no
//                 <input type="text" name="name" />
//               </label>
//               <br />
//               <br />
//               <input
//                 type="submit"
//                 value="SAVE DETAILS"
//                 style={{
//                   color: "white",
//                   backgroundColor: "red",
//                   border: "1px solid red",
//                   borderRadius: "10px",
//                   padding: 10,
//                 }}
//               />
//             </form>
//           </Col>
//         </Row>
//       </Container>
//       <br />
//       <br />
//     </div>
//   );
// }

// function Dashboar() {
//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <Container>
//         <Row>
//           <Col>
//             {/* Welcome {user.name}!<br /> */}
//             <br />
//           </Col>
//           <Col>
//             <h1>
//               Welcome back, start bidding now on projects that meet your skills.
//             </h1>
//             <p>
//               Work on the most exciting projects from clients across the globe
//               and take your career to new heights.
//               <br />
//               Browser jobs that match your skills and experience to a client’s
//               hiring needs and budget. Work from anywhere, anytime and explore
//               different ways to earn. Define project category, the scope of
//               work, timeline, pricing model, and rate per hour upfront so
//               clients
//             </p>
//             <input type="button" value="Browse Projects & Jobs" />
//           </Col>
//         </Row>
//       </Container>
//       <br />
//       <br />
//     </div>
//   );
// }
