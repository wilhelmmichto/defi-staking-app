import "./Navbar.css";
import bank from "../../bank.png";

import React, { Component } from "react";
class Navbar extends Component {



render() {
  return (
    <div className="nav">
      <div className="navleft">
        <img src={bank} alt="bank" className="navimg" />
        <span className="navheading">
          DAPP Yield Staking (Decentralized Bank)
        </span>
      </div>
      <div className="centernav"></div>
      <div className="navright">
        <ul className="navul">
          <li>
            <span className="navheading">
              Account Number: {this.props.account}
            </span>
          </li>
        </ul>
      </div>
      
    </div>
  );
}
}




export default Navbar;
