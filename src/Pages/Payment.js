import React, { Component } from "react";
import QRCode from "qrcode.react"; // Import the QRCode component
import { startSession } from "./Booking";

class PaymentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 100, // Set the initial amount (you can customize this)
      paymentStatus: null, // To track the payment status
    };
  }

  handlePayment = () => {
    // In a real application, you would interact with your payment gateway here.
    // This example is simplified and does not handle actual payments.
    // You would need to integrate with a payment provider to handle payments securely.
    // For demonstration purposes, we'll simulate a successful payment after a delay.

    setTimeout(() => {
      this.setState({ paymentStatus: "success" });
    }, 2000); // Simulate a 2-second payment process
  };

  render() {
    return (
      <div>
        <h2>Payment Page</h2>
        <div>
          <p>Amount: ${this.state.amount}</p>
          <button onClick={this.handlePayment}>Pay Now</button>
        </div>
        {this.state.paymentStatus === "success" && (
          <div>
            <p>Payment successful!</p>
            {/* Generate a QR code for payment confirmation */}
            <QRCode value={`Payment successful for $${this.state.amount}`} />
          </div>
        )}
      </div>
    );
  }
}

export default PaymentComponent;