const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const bcrypt =require ("bcryptjs");
const jwt  =require("jsonwebtoken");
// const ErrorHander = require("../utils/errorhander");
// const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

router.post("/register", async(req, res) => {
  const { name, email, password } = req.body;

   // Check if the username already exists
   const existingUser = await User.findOne({ name });
  
   if (existingUser) {
     return res.status(400).json({ error: 'Username already exists.' });
   }

   // Hash the password before saving it to the database
   const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({ name, email, password });
  try {
    newUser.save();
    res.status(200).json({
      success: true,
      message: "Register success",
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
});

// router.post("/loginUser", async (req, res) => {
//   const { name, password } = req.body;
//   try {
//     const user = await User.findOne({name});
      
//           if (!user) {
//             return res.status(401).json({ error: 'Invalid username or password.' });
//           }
      
//           // Compare the entered password with the hashed password in the database
//           const passwordMatch = await bcrypt.compare(password, user.password);
      
//           if (!passwordMatch) {
//             return res.status(401).json({ error: 'Invalid username or password.' });
//           }
      
//           // Generate a JSON Web Token (JWT) for authentication
//           const token = jwt.sign({ userId: user._id, username: user.name }, 'your-secret-key', { expiresIn: '1h' });
      
//           res.status(200).json({ message: 'Login successful.', token });
//         } catch (error) {
//           console.error(error);
//           res.status(500).json({ error: 'Internal Server Error' });
//         }
//       });

// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   // checking if user has given password and email both

//   if (!email || !password) {
//     return res.send("Please Enter Email & Password", 400);
//   }

//   const user = await User.findOne({ email }).select("+password");

//   if (!user) {
//     return res.send("Invalid email or password", 401);
//   }

//   const isPasswordMatched = await user.comparePassword(password);

//   if (!isPasswordMatched) {
//     return res.send("Invalid email or password", 401);
//   }

//   sendToken(user, 200, res);
// });

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.find({ email, password });
    if (user.length > 0) {
      const currentUser = {
        name: user[0].name,
        email: user[0].email,
        isAdmin: user[0].isAdmin,
        _id: user[0].Id,
      };
      res.status(200).send(currentUser);
    } else {
      res.status(400).json({
        message: "Login Failed",
      });
    }
  } catch (error) {
    res.status(404).json({
      message: "Something Went wrong",
    });
  }
});
     


// Forgot Password
router.post("/forgotpassword", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    res.send("User not found", 404);
  }

  // Get ResetPassword Token
  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  const resetPasswordUrl = `${req.protocol}://${req.get(
    "host"
  )}/password/reset/${resetToken}`;

  const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;

  try {
    await sendEmail({
      email: user.email,
      subject: `Password Recovery`,
      message,
    });

    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email} successfully`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    res.send(error.message, 500);
  }
});

// Reset Password
router.post("/resetpassword/:id", async(req, res) => {
  // creating token hash
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    // return next(
    //   new ErrorHander(
    //     "Reset Password Token is invalid or has been expired",
    //     400
    //   )
    // );
    return res.status(400).send("Reset Password Token is invalid or has been expired");
  }

  if (req.body.password !== req.body.confirmPassword) {
    // return next(new ErrorHander("Password does not match", 400));
    return res.status(400).send("Password does not match");

  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  sendToken(user, 200, res);
});


// update User Role -- Admin
router.put("./updaterole",async (req, res) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
  };

  await User.findByIdAndUpdate(req.params.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
  });
});


// Get single user --Admin
router.get("./getsingleuser",async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    // return next(
    //   new ErrorHander(`User does not exist with Id: ${req.params.id}`)
    // );
    return res.send(`User does not exist with Id: ${req.params.id}`);
  }

  res.status(200).json({
    success: true,
    user,
  });
});



      
// get all users --Admin
  router.get("/getallusers", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(404).json({ message: error.stack });
  }
});

//delete user --- Admin
router.post("/deleteuser", async (req, res) => {
  const userid = req.body.userid;
  try {
    await User.findOneAndDelete({ _id: userid });
    res.status(200).send("User Deleted");
  } catch (error) {
    res.status(404).json({ message: error.stack });
  }
});
module.exports = router;
