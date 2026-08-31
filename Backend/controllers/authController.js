import User from "../model/User.js";
import jwt from "jsonwebtoken";


// @desc    Auth user & get token
// @route   POST /api/auth/login
// @access  Public
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Please provide email and password" });
        }

        const user = await User.findOne({ email });

        if (user && (await user.comparePassword(password))) {
            return res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                avatar: user.avatar,
                authProvider: user.authProvider,
                token: generateToken(user._id),
                isAdmin: user.isAdmin,
            });
        } else {
            return res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message || "Login failed" });
    }
};

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "Please provide all required fields" });
        }

        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: "User with this email already exists" });
        }

        const user = await User.create({ name, email, password, authProvider: "local" });

        if (user) {
            return res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                avatar: user.avatar,
                authProvider: user.authProvider,
                token: generateToken(user._id),
                isAdmin: user.isAdmin,
            });
        } else {
            return res.status(400).json({ message: "Invalid user data" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message || "Registration failed" });
    }
};

// @desc    Google OAuth login / signup
// @route   POST /api/auth/google
// @access  Public
export const googleAuth = async (req, res) => {
    try {
        const { credential, access_token, profile } = req.body;
        let googleUser = null;

        if (credential) {
            // ID Token verification via Google API
            const response = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${credential}`);
            if (response.ok) {
                const data = await response.json();
                googleUser = {
                    email: data.email,
                    name: data.name,
                    picture: data.picture,
                    googleId: data.sub,
                };
            }
        } else if (access_token) {
            // Access token user info fetch
            const response = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
                headers: { Authorization: `Bearer ${access_token}` },
            });
            if (response.ok) {
                const data = await response.json();
                googleUser = {
                    email: data.email,
                    name: data.name,
                    picture: data.picture,
                    googleId: data.sub,
                };
            }
        } else if (profile && profile.email) {
            // Direct profile payload fallback
            googleUser = {
                email: profile.email,
                name: profile.name || profile.email.split("@")[0],
                picture: profile.picture || profile.avatar || null,
                googleId: profile.googleId || profile.sub || `google_${Date.now()}`,
            };
        }

        if (!googleUser || !googleUser.email) {
            return res.status(400).json({ message: "Invalid Google authentication credentials" });
        }

        let user = await User.findOne({ email: googleUser.email });

        if (!user) {
            // New user registration via Google
            user = await User.create({
                name: googleUser.name || googleUser.email.split("@")[0],
                email: googleUser.email,
                googleId: googleUser.googleId,
                avatar: googleUser.picture,
                authProvider: "google",
            });
        } else {
            // Existing user linking Google ID / avatar
            let updated = false;
            if (!user.googleId) {
                user.googleId = googleUser.googleId;
                updated = true;
            }
            if (!user.avatar && googleUser.picture) {
                user.avatar = googleUser.picture;
                updated = true;
            }
            if (updated) {
                await user.save();
            }
        }

        return res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
            authProvider: user.authProvider,
            token: generateToken(user._id),
            isAdmin: user.isAdmin,
        });
    } catch (error) {
        console.error("Google Auth error:", error);
        return res.status(500).json({ message: error.message || "Google authentication failed" });
    }
};

// @desc    Get user profile
// @route   GET /api/auth/profile
// @access  Private
export const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);

        if (user) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                avatar: user.avatar,
                authProvider: user.authProvider,
                isAdmin: user.isAdmin,
            });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update user profile
// @route   PUT /api/auth/profile
// @access  Private
export const updateProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);

        if (user) {
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;
            if (req.body.avatar) {
                user.avatar = req.body.avatar;
            }
            if (req.body.password) {
                user.password = req.body.password;
            }

            const updatedUser = await user.save();

            res.json({
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                avatar: updatedUser.avatar,
                authProvider: updatedUser.authProvider,
                token: generateToken(updatedUser._id),
                isAdmin: updatedUser.isAdmin,
            });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET || "defaultsecret", {
        expiresIn: "30d",
    });
};
