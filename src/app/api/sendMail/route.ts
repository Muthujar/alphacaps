import { NextRequest, NextResponse } from "next/server";

/**
 * API Route: /api/sendMail
 * 
 * Handles POST requests from the enquiry form.
 * Currently logs the form data to console.
 * 
 * Future Enhancement:
 * - Integrate Nodemailer or another email service
 * - Send confirmation email to customer
 * - Send notification email to admin
 * - Store enquiries in database
 */

export async function POST(request: NextRequest) {
  try {
    // Parse the JSON body from the request
    const body = await request.json();

    // Extract form fields
    const {
      name,
      email,
      phone,
      materialType,
      quantity,
      deliveryLocation,
      message,
    } = body;

    // Basic server-side validation
    if (!name || !email || !phone || !materialType || !quantity || !deliveryLocation) {
      return NextResponse.json(
        {
          success: false,
          message: "All required fields must be filled out.",
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid email address.",
        },
        { status: 400 }
      );
    }

    // Validate phone format (10-15 digits)
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid phone number (10-15 digits).",
        },
        { status: 400 }
      );
    }

    // Log the form data to console
    console.log("=== New Enquiry Received ===");
    console.log("Timestamp:", new Date().toISOString());
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Material Type:", materialType);
    console.log("Quantity:", quantity);
    console.log("Delivery Location:", deliveryLocation);
    console.log("Message:", message || "N/A");
    console.log("===========================\n");

    // TODO: Future implementation
    // 1. Send email to customer confirming receipt
    // 2. Send notification to admin/sales team
    // Example with Nodemailer:
    /*
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: "Thank you for your enquiry - ConstructionCo",
      html: `<p>Dear ${name},</p>...`,
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: "New Enquiry from Website",
      html: `<h3>New Enquiry Details</h3>...`,
    });
    */

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your enquiry! We will contact you shortly.",
        data: {
          name,
          email,
          materialType,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    // Log error to console
    console.error("Error processing enquiry:", error);

    // Return error response
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while processing your request. Please try again later.",
      },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    {
      message: "This endpoint only accepts POST requests.",
    },
    { status: 405 }
  );
}


