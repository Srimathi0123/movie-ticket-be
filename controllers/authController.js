const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../model/userModel');

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ email: user.email, role: user.role }, process.env.DB_URI, { expiresIn: '1h' });

    res.status(200).json({ firstName: user.firstName, lastName: user.lastName, token, role: user.role });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}

module.exports = { loginUser };
