import User_78 from '../models/User_78.js';

const register_78 = async (req, res, next) => {
  try {
    console.log('body', req.body);
    const user = await User_78.create(req.body);
    const token = user.createJWT();
    res.status(201).json({ user, token });
  } catch (err) {
    //res.status(500).json({ msg: 'Error on registering user' });
    next(err);
  }

  //res.send('register user -- 鄭芷琳, 209410678');
};

const login_78 = async (req, res) => {
  res.send('login user -- 鄭芷琳, 209410678');
};

const updateUser_78 = async (req, res) => {
  res.send('update user -- 鄭芷琳, 209410678');
};

export { register_78, login_78, updateUser_78 };
