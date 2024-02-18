import React, { Component } from "react";
import axios from "axios";
import './Book.css';
class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      checkInDate: "",
      checkOutDate: "",
      numberOfGuests: 1,
      numberOfRooms: 1,
      feedbackMessage: "",
      isPopupVisible: false,
      price: null,
    };
  }
  componentDidMount() {
    const { state } = this.props.location;
    if (state && state.price) {
      this.setState({
        price: state.price,
      });
    }
  }
  loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
  async checkoutHandler() {
    const res = await this.loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    const result = await axios.post("https://resort-booking-fbap.onrender.com/custom_pay", {
      amount: this.state.price*80,
    });
    if (!result) {
      alert("Server error. Are you online?");
      return;
    }
    const { amount, id: order_id, currency } = result.data;
    const options = {
      key: "rzp_test_zpcvSUNJXUqrLv",
      currency: currency,
      name: "Test Corp.",
      description: "Test Transaction",
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };
      },
      theme: {
        color: "#61dafb",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: name === "numberOfRooms" ? parseInt(value, 10) : value });
  };
  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      checkInDate: "",
      checkOutDate: "",
      numberOfGuests: 1,
      feedbackMessage: "Booking successful!",
      isPopupVisible: true,
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state.price);
    try {   
      await axios.post("https://resort-booking-fbap.onrender.com/book", this.state);
      this.checkoutHandler();
    } catch (error) {
      console.error("Error submitting the form:", error);
      this.setState({
        feedbackMessage: "Error submitting the form. Please try again.",
        isPopupVisible: true,
      });
    }
    console.log("Form submitted with data:", this.state);
  };
  render() {
    return (
      <>
        <br></br>
        <div className="booking-form-container">
          <h2>Resort Booking</h2>
          <form onSubmit={this.handleSubmit} className="booking-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="checkInDate">Check-In Date:</label>
              <input
                type="date"
                id="checkInDate"
                name="checkInDate"
                value={this.state.checkInDate}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="checkOutDate">Check-Out Date:</label>
              <input
                type="date"
                id="checkOutDate"
                name="checkOutDate"
                value={this.state.checkOutDate}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="numberOfGuests">Number of Guests:</label>
              <input
                type="number"
                id="numberOfGuests"
                name="numberOfGuests"
                value={this.state.numberOfGuests}
                onChange={this.handleChange}
                min="1"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="numberOfRooms">Number of Rooms:</label>
              <input
                type="number"
                id="numberOfRooms"
                name="numberOfRooms"
                value={this.state.numberOfRooms}
                onChange={this.handleChange}
                min="1"
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Book Now
            </button>
          </form>
        </div>
      </>
    );
  }
}
export default BookingForm;
