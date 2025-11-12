import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      inquiryType,
      materialType,
      serviceType,
      quantity,
      deliveryLocation,
      message,
    } = body as Record<string, string | undefined>;

    if (!name || !phone || !deliveryLocation) {
      return NextResponse.json(
        { success: false, message: "Name, phone, and delivery location are required." },
        { status: 400 }
      );
    }

    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { success: false, message: "Please provide a valid email address." },
          { status: 400 }
        );
      }
    }

    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid phone number (10-15 digits)." },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT ?? 465);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM;
    const adminEmail = process.env.ADMIN_EMAIL;

    if (!smtpHost || !smtpUser || !smtpPass || !smtpFrom || !adminEmail || Number.isNaN(smtpPort)) {
      console.log(smtpHost, smtpUser, smtpPass, smtpFrom, adminEmail, smtpPort,'ssss');
      console.warn("SMTP configuration missing. Logging enquiry instead:", body);
      return NextResponse.json(
        {
          success: true,
          message:
            "Thank you for your enquiry! Our team will contact you shortly. (Email delivery not configured yet.)",
        },
        { status: 200 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: smtpFrom,
      to: adminEmail,
      subject: `New enquiry from ${name}`,
      html: `
        <h2>New enquiry received</h2>
        <p><strong>Name:</strong> ${name}</p>
        ${email ? `<p><strong>Email:</strong> ${email}</p>` : ""}
        <p><strong>Phone:</strong> ${phone}</p>
        ${inquiryType ? `<p><strong>Inquiry Type:</strong> ${inquiryType}</p>` : ""}
        ${materialType ? `<p><strong>Material Type:</strong> ${materialType}</p>` : ""}
        ${serviceType ? `<p><strong>Service Type:</strong> ${serviceType}</p>` : ""}
        ${quantity ? `<p><strong>Quantity:</strong> ${quantity}</p>` : ""}
        <p><strong>Delivery Location:</strong> ${deliveryLocation}</p>
        <p><strong>Additional Message:</strong> ${message || "N/A"}</p>
        <p><em>Submitted on ${new Date().toLocaleString()}</em></p>
      `.replace(/\s{2,}/g, " ").trim(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your enquiry! Our team will contact you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing enquiry:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "An error occurred while processing your request. Please try again later.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    {
      message: "This endpoint only accepts POST requests.",
    },
    { status: 405 }
  );
}
