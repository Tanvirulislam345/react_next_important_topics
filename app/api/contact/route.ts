import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { render } from "@react-email/render";
import { contactFormSchema } from "@/lib/validations/contact";
import ContactFormEmail from "@/emails/ContactFormEmail";

const resendApiKey = process.env.RESEND_API_KEY;

export async function POST(req: NextRequest) {
  // Check if API key is configured
  if (!resendApiKey) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json(
      { error: "Email service is not configured. Please contact directly via email." },
      { status: 503 }
    );
  }

  const resend = new Resend(resendApiKey);
  try {
    const body = await req.json();

    // Validate the request body
    const validatedData = contactFormSchema.parse(body);

    // Render the email template
    const emailHtml = await render(
      ContactFormEmail({
        name: validatedData.name,
        email: validatedData.email,
        message: validatedData.message,
      })
    );

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["tanvirulislam122519@gmail.com"],
      replyTo: validatedData.email,
      subject: `Portfolio Contact: Message from ${validatedData.name}`,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
