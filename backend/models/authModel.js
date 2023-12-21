const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const adminSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const Admin = mongoose.model("AdminCollection", adminSchema);
module.exports = Admin;
