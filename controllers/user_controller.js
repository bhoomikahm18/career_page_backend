const User = require("../models/User");

module.exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({ email })
    } catch (err) {
        return console.log(err);
    }

    if (existingUser) {
        return res.json({ message: "User Already Exists! Instead Login" })
    }

    const user = new User({
        name,
        email,
        password
    });

    try {
        await user.save();
    } catch (err) {
        return console.log(err);
    }

    return res.status(200).json({ user });
}