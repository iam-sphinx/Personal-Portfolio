import { NextRequest, NextResponse } from "next/server";
import { ApiError } from "@/lib/apiError";
import { translator } from "@/lib/translator";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      throw new ApiError("Insufficient data to process", 400);
    }

    const mail = await translator.sendMail({
      from: process.env.NODEMAILER_EMAIL,
      to: process.env.NODEMAILER_EMAIL,
      subject: `Website activity from ${email}`,
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `,
    });

    if (mail.rejected.length > 0) {
      throw new ApiError("Failed to send email", 500);
    }

    return NextResponse.json("Success", { status: 200 });
  } catch (error) {
    if (error instanceof ApiError) {
      return NextResponse.json(
        { message: error.message },
        { status: error.status }
      );
    } else {
      return NextResponse.json({ message: "Uncaught error" }, { status: 500 });
    }
  }
}
