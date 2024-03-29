const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ mail: email.toLowerCase() });
    if (user && (await bcrypt.compare(password, user.password))) {
      //    Create token
      const token = jwt.sign(
        {
          userId: user._id,
          mail: email,
        },
        process.env.TOKEN_KEY,
        {
          expiresIn: "24h",
        }
      );

      return res.status(200).json({
        userDetails: {
          mail: user.mail,
          token: token,
          username: user.username,
          _id:user._id,
        },
      });
    } else {
      return res.status(400).send("Invalid credentials. Please try again!");
    }
  } catch (error) {
    return res.status(500).send("Something went wrong. Please try again!");
  }
};
module.exports = Login;
