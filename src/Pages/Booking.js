const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  checkInDate: Date,
  checkOutDate: Date,
  numberOfGuests: Number,
  numberOfRooms: Number,
  price:Number
});

module.exports = mongoose.model("Booking", bookingSchema);
