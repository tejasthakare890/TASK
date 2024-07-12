// backend/controllers/welcomeController.js
const User = require('./User');

exports.getWelcomeMessage = (req, res) => {
  res.json({ message: 'Welcome to the backend!' });
};

exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = new User({
      name,
      email,
      password,
    });

    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};
