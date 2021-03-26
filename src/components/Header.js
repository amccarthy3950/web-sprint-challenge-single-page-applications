// import React from 'react'
// import { Link, Route } from 'react-router-dom'
// import Form from './Form'
// import Home from './Home'

// function Header() {
//     return (
//         <div>
//            <h1>Little Sicily</h1>
//            <nav>
//            <Link to='/'>Home</Link>
//            <Link to='/Form'>Order</Link>
//            <Route exact path='/'>
//                 <Home/>
//            </Route>
//            <Route path='/Form'>
//                 <Form/>
//            </Route>
//           </nav> 
//         </div>
//     )
// }

// export default Header
import React from "react";
import { Link, Route } from "react-router-dom";
import Form from "./Form";
import Home from "./Home";
import "../App.css";
import Logo from "../Components/Pizza.jpg";

function Header() {
  return (
    <div className="nav-links">
      <div className="navBar">
      <div className="linkA">
        <Link to="/">Home</Link>
      </div>
      <div className="linkB">
        <Link to="/Form">Order Now</Link>
     </div> 
     </div>
      <h1>Little Sicily</h1>
      <img src={Logo} alt ="pizza"/>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/Form">
        <Form />
      </Route>
   </div>
  );
}
export default Header;
