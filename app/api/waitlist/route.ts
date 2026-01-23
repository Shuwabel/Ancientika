import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Waitlist from "@/models/Waitlist";
import { Resend } from "resend";

export async function POST(req: Request) {

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json(
                { error: "Email is required" },
                { status: 400 }
            );
        }

        await connectDB();

        const exists = await Waitlist.findOne({ email });

        if (exists) {
            return NextResponse.json(
                { message: "Already on the waitlist" },
                { status: 200 }
            );
        }

        await Waitlist.create({ email });

        // Send confirmation email
        try {
            await resend.emails.send({
                from: "Your Site <hello@resend.dev>",
                to: email,
                subject: "You're on the waitlist! 🎉",
                html: `<p>Thanks for joining!</p>`,
            });
        } catch (err) {
            console.error("Email sending failed:", err);
        }

        return NextResponse.json(
            { message: "Successfully joined waitlist" },
            { status: 201 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}
