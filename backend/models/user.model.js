import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return typeof v === 'string' && isNaN(v);
            },
            message: 'must be a string and not a number'
        }
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"],
    },
    profilePic: {
        type: String,
        default: "",
    },
}, {
    timestamps: true,
});

export const User = mongoose.model("User", userSchema);