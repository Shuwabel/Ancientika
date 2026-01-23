import mongoose, { Schema, models } from "mongoose";

const WaitlistSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
    },
    { timestamps: true }
);

export default models.Waitlist || mongoose.model("Waitlist", WaitlistSchema);
