import { User } from "../models/user.model.js";

export const signup = async (req, res) => {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    try {
        if (!fullName || !username || !password || !confirmPassword || !gender) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ success: false, message: "Passwords do not match" });
        }

        const user = await User.findOne({ username });

        if (user) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }

        const userGender = gender === 'male' ? 'boy' : 'girl';
        const profilePic = `https://avatar.iran.liara.run/public/${userGender}?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            password,
            gender,
            profilePic: profilePic,
        });
        await newUser.save();

        const { password: _, __v, ...userData } = newUser.toObject();

        res.status(201).json(userData);

    } catch (error) {
        console.log("Error in signup:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const login = (req, res) => {
    res.send("Login page");
}

export const logout = (req, res) => {
    res.send("Logout page");
}