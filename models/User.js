const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  purchased: {
    type: Boolean,
    default: false
  },
  _customerID: {
    type: String,
    default: true
  },
 TeamSENTINEL: {
    type: Boolean,
    default: false
  },
  TeamSENTINEL_nano: {
    type: Boolean,
    default: false
  },
  TeamSENTINEL_mini: {
    type: Boolean,
    default: false
  },
  TeamSENTINEL_micro: {
    type: Boolean,
    default: false
  },
  TeamSOIGNE: {
    type: Boolean,
    default: false
  },
  Wire_Gen2_Antenna: {
    type: Boolean,
    default: false
  },
  Toadstool_Antenna: {
    type: Boolean,
    default: false
  },
  TriStar_Antenna: {
    type: Boolean,
    default: false
  },
  Fractal_Antenna: {
    type: Boolean,
    default: false
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
