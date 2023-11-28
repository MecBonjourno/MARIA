import prisma from "@/utils";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const data = await req.json()

    try {
      await prisma.feedback.create({
            data: {
                createdat: new Date(),
                username: data.username,
                phonenumber: data.phoneNumber,
                useremail: data.userEmail,
                content: data.content,
                reachratelimit: data.reachRateLimit,
                wannahelp: data.wannaHelp,
                wannacommunication: data.wannaCommunication
            }
        });
        return NextResponse.json({message: "Succesfully saved feedback", status: 201});
    } catch (error) {
        console.error(error)
        return NextResponse.json({message: "Failed to saved feedback", status: 500});
    }
}

