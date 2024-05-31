const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.signup = async (req, res) => {
    const { username, email, name, password} = req.body;

    // check if user exists
    const userExists = await User.findOne({ email });
    if (userExists)
        return res.status(400).json({ message: "User already exists" })
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = new User({ username, email, name, password: hashedPassword })
    await newUser.save()
        .then(data => res.status(201).json({ message: "User created successfully" }))
        .catch(err => res.status(500).json({err: err.message}))

};

exports.login = async (req, res) => {
    try {
        const {username, password} = req.body;

        // find user using username
        const user = await User.findOne({ username });
        if (!user)
            return res.status(400).json({ message: "Invalid details" })

        // check password
        const match = await bcrypt.compare(password, user.password);
        if (!match)
            return res.status(400).json({ message: "Invalid details" })

        // generate JWT
        const token = jwt.sign(
            {user: {id: user._id, username: user.username}}, process.env.JWT_SECRET, { expiresIn: '1h' }
        );
        res.json(token)
    } catch (err) {
        console.error("Error loggin in: ", err)
        return res.status(500).json({ message: "Server error" })
    }
}


