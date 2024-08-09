const User = require('../models/User');

exports.getHome = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json({ message: `Welcome ${user.username}!`, data: 'Your personalized data here' });
  } catch (error) {
    res.status(500).send('Error fetching user data');
  }
};