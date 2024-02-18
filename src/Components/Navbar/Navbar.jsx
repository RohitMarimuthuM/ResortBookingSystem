import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/svg/logo.png";
import { FaAlignRight } from "react-icons/fa";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const logoStyle = {
      maxWidth: "70px", // Adjust the maximum width as needed
      height: "auto",
    };

    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            {/* app logo */}
            <Link to="/">
              <img src={Logo} alt="Reach Resort" style={logoStyle} /> {/* Apply the inline style */}
            </Link>

            {/* navbar toggle button */}
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>

          {/* navbar link */}
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
            <li>
              <Link to="/">About us</Link>
            </li>
          </ul>

          {/* Add the "Book Now" button on the right side */}
          
        </div>
      </nav>
    );
  }
}
