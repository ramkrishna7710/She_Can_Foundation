const User = require("../models/User");

const bcrypt = require("bcryptjs");

const generateToken = require("../utils/generateToken");

exports.register = async (req, res) => {
  try {
    const {
      name,

      email,

      password,
    } = req.body;

    const exist = await User.findOne({
      email,
    });

    if (exist) {
      return res.status(400).json({
        message: "User Exists",
      });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,

      email,

      password: hashed,

      role: "user",
    });

    res.status(201).json({
      message: "User Created",

      token: generateToken(user._id),

      user: {
        id: user._id,

        name: user.name,

        email: user.email,

        role: user.role,
      },
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: err.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const {
      email,

      password,
    } = req.body;

    const user = await User.findOne({
      email,
    });

    if (!user) {
      return res.status(401).json({
        message: "User Not Found",
      });
    }

    const match = await bcrypt.compare(
      password,

      user.password,
    );

    if (!match) {
      return res.status(401).json({
        message: "Invalid Credentials",
      });
    }

    res.json({
      token: generateToken(user._id),

      user: {
        id: user._id,

        name: user.name,

        email: user.email,

        role: user.role,
      },
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: err.message,
    });
  }
};
