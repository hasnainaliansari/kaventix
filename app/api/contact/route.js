import nodemailer from "nodemailer";

export async function POST(req) {
  const data = await req.json();
  const { name, email, message } = data;

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ message: "All fields are required." }), {
      status: 400,
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail", // Or use another like SendGrid, Outlook, etc.
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.RECEIVER_EMAIL, // Your email where you'll receive messages
      subject: "New Contact Form Message from Kavantix",
      text: message,
    });

    return new Response(JSON.stringify({ message: "Success" }), { status: 200 });
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(JSON.stringify({ message: "Failed to send email." }), {
      status: 500,
    });
  }
}
