const authRouter = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const sendEmail = require("../config/config.js");

// Register Route
authRouter.post('/register', async (req, res) => {
    try {
        console.log("Request Body:", req.body);

        // Check if emailId is provided
        if (!req.body.emailId) {
            return res.status(400).send('Email ID is required');
        }

        const tempUser = await User.findOne({ emailId: req.body.emailId });
        if (tempUser) return res.status(400).send('Email ID Already Exists');

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const token = uuidv4(); // Generate a unique confirmation code

        const newUser = new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            emailId: req.body.emailId,
            password: hashedPassword,
            isLawyer: req.body.isLawyer,
            confirmationCode: token, // Ensure confirmationCode is always generated
        });

        const user = await newUser.save();
        console.log("User Saved:", user);

        try {
            await sendEmail(user.firstname, user.emailId, user.confirmationCode);
            res.status(200).json("Check your email to verify your account!");
        } catch (emailError) {
            console.error("Error sending email:", emailError);
            res.status(500).send("Failed to send confirmation email.");
        }
    } catch (err) {
        console.error("Error in /register:", err);
        res.status(500).send('Server Error!');
    }
});

// Email Confirmation Route
authRouter.get('/confirm/:confirmationCode', async (req, res) => {
    try {
        const user = await User.findOne({ confirmationCode: req.params.confirmationCode });

        if (!user) {
            return res.status(404).send("User Not Found.");
        }

        // Activate the user
        user.status = "Active";
        await user.save();

        res.status(200).send('Email verified successfully!');
    } catch (err) {
        res.status(500).send(err);
    }
});

// Login Route
authRouter.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ emailId: req.body.emailId });

        if (!user) return res.status(404).send("Invalid email ID!");

        // Check if the user's email is verified
        if (user.status !== "Active") {
            return res.status(401).send("Please verify your email!");
        }

        // Validate the password
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(400).send("Incorrect Password");

        // Respond with the user data
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = authRouter;