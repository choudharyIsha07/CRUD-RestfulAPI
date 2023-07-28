const UserModel = require("../models/userModel");

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserModel.create({
      name,
      email,
      password,
    });
    res.status(201).json({
      message: "success",
      user,
    });
  } catch (error) {
    console.log(`error in create user ctrl = ${error}`);
    res.status(400).json({
      message: false,
      error,
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json({
      success: true,
      totalUsers: users.length,
      users,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      msg: "get all user error",
      error: error.message,
    });
  }
};
const getSingleUser = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (user) {
      res.status(200).json({
        success: true,
        user,
      });
    } else {
      res.status(400).send("User not Found");
    }
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Single Use Error",
      error: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  const user = await UserModel.findById(req.params.id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    // updateUser --> updatedUser
    const updatedUser = await user.save();

    res.status(201).json({
      success: true,
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("User not Found");
  }
};

module.exports = { createUser, getAllUsers, getSingleUser, updateUser };
