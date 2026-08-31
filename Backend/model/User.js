import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: {
        type: String,
        required: function () {
            return !this.googleId;
        },
    },
    googleId: { type: String, default: null },
    avatar: { type: String, default: null },
    authProvider: { type: String, enum: ["local", "google"], default: "local" },
    isAdmin: { type: Boolean, default: false },
}, { timestamps: true });

userSchema.pre("save", async function () {
    if (!this.password || !this.isModified("password")) return;

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.comparePassword = async function (enteredPassword) {
    if (!this.password) return false;
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);
export default User;