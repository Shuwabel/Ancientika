/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Waitlist from "@/models/Waitlist";

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json(
                { error: "Email is required" },
                { status: 400 }
            );
        }

        await connectDB();

        try {
            await Waitlist.create({ email });
        } catch (err: any) {
            if (err.code === 11000) {
                return NextResponse.json(
                    { message: "Already on the waitlist" },
                    { status: 200 }
                );
            }
            throw err;
        }


        return NextResponse.json(
            { message: "Successfully joined waitlist" },
            { status: 201 }
        );
    } catch (error: any) {
        console.error("WAITLIST API ERROR:", error);

        return NextResponse.json(
            { error: error.message || "Server error" },
            { status: 500 }
        );
    }

}
