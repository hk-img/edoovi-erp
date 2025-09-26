import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, mobile } = body;

    // transporter setup (Gmail ke liye)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "abhisheksharma.img@gmail.com", // apna gmail
        pass: "dtat pomw jgsz vxcm", // Gmail App Password (not your real password)
      },
    });

    // mail content
    await transporter.sendMail({
      from: `"Website Contact" <abhisheksharma.img@gmail.com>`,
      to: "abhisheksharma.img@gmail.com", // jaha receive karna hai
      subject: "New Contact Form Submission",
      html: `
        <h2>New Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
      `,
    });

    return new Response(
      JSON.stringify({ success: true, message: "Email sent!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, message: "Email failed." }),
      { status: 500 }
    );
  }
}
