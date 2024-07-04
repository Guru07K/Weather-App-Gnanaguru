const User = require('../models/users');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

// SIGNUP MIDDLEWARE FUNCTION***************************
exports.register = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcryptjs.hash(password,10);

  try {
    const isUserExist = await User.findOne({username})
    if(isUserExist) {
     return res.status(404).json({
          message: 'User already exist'
      })
    }
    const user = await User.create({ username, password: hashedPassword });
   
    res.status(201).json({
         message: 'User registered successfully',
         user
        })
  } catch (error) {
    res.status(400).json({
        error
    });
  }
};


// SIGNIN MIDDLEWARE FUNCTION***************************
exports.login = async (req, res) => {

  const { username, password } = req.body;

  try {

    const user = await User.findOne({ username });
    if(!user){
        res.status(404).json({
            message: 'User not found'
        })
    }

    const validUserPassword = bcryptjs.compare(password, user.password);
    if(!validUserPassword){
        res.status(404).json({
            message: 'Invalid password'
        })
    }
   
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.status(200)
      .cookie('token',token,{httpOnly:true})
      .json({
            message : "user logged in successfully",
            token
        });

  } catch (error) {
    res.status(400).json({
        error: error.message 
    });
  }
};


exports.logOut = async (req,res,next)=>{
  res.clearCookie('token')
       .status(200)
       .json({
        message: 'Logged out successfully'
       })
}
