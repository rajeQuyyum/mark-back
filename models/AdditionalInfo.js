const mongoose = require("mongoose");

const AdditionalInfoSchema = new mongoose.Schema({
  accountNumber: { type: String, required: true }, // links to Employee accountNumber
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  address: { type: String },
  gender: { type: String },
});

module.exports = mongoose.model("AdditionalInfo", AdditionalInfoSchema);
