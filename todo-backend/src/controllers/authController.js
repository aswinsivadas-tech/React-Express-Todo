import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';

export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        
        // 1. Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'Email is already registered' });

        // 2. Encrypt (Hash) the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // 3. Save the new user to MongoDB
        const newUser = await User.create({ username, email, password: hashedPassword });
        
        // 4. Send back success (but never send the password back!)
        res.status(201).json({ _id: newUser._id, username: newUser.username, email: newUser.email });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // 1. Find the user by email
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found' });

        // 2. Compare the typed password with the encrypted database password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid password' });

        res.status(200).json({ _id: user._id, username: user.username, email: user.email });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};