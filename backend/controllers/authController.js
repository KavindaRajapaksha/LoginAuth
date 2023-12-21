const Admin = require('../models/authModel.js');
const bcrypt = require('bcrypt');
const asyncHandler = require('express-async-handler');

const registerAdmin = asyncHandler(async (req, res) => {
  
    try {
    const { userName, email, password } = req.body;

    
    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = new Admin({
      userName,
      email,
      password: hashedPassword,
    });

    const savedAdmin = await admin.save();

    res.status(201).json({
      message: 'Admin Registered Successfully',
      user: savedAdmin,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to Register Admin' });
  }
});
const test = (req, res) => {
    res.send("Hello World");
  };
module.exports = { test,registerAdmin };
