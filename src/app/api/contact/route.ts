import { NextResponse } from "next/server";
import nodemailer from 'nodemailer'
export const runtime = "nodejs";
export async function POST(request: Request) {
    try {
        const { name, email, subject, message } = await request.json();
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }
    
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth:{
                user:process.env.EMAIL_USER,
                pass:process.env.EMAIL_PASS
            }
        })
await transporter.sendMail({
  from: `Contact Form <${process.env.EMAIL_USER}>`,
  to: process.env.EMAIL_USER,
  replyTo: email,
  subject: `New Contact Message: ${subject}`,
  html: `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>New Contact Message</title>
  </head>
  <body style="font-family: Arial, sans-serif; background-color: #f4f4f7; margin:0; padding:0;">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; margin: 20px auto; background-color:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.05);">
      <tr style="background-color:#4f46e5; color:white;">
        <td style="padding:20px; text-align:center;">
          <h1 style="margin:0; font-size:24px;">📩 New Contact Message</h1>
        </td>
      </tr>
      <tr>
        <td style="padding:20px;">
          <p style="font-size:16px; color:#333;">You have received a new message from your website contact form. Here are the details:</p>

          <table width="100%" style="margin-top:10px; font-size:16px; color:#333;">
            <tr>
              <td style="font-weight:bold; padding:5px 0;">Name:</td>
              <td style="padding:5px 0;">${name}</td>
            </tr>
            <tr>
              <td style="font-weight:bold; padding:5px 0;">Email:</td>
              <td style="padding:5px 0;">${email}</td>
            </tr>
            <tr>
              <td style="font-weight:bold; padding:5px 0;">Subject:</td>
              <td style="padding:5px 0;">${subject}</td>
            </tr>
            <tr>
              <td style="font-weight:bold; padding:5px 0; vertical-align: top;">Message:</td>
              <td style="padding:5px 0;">${message.replace(/\n/g, "<br>")}</td>
            </tr>
          </table>

          <p style="margin-top:20px; font-size:14px; color:#666;">This message was sent from your website contact form.</p>
        </td>
      </tr>
      <tr style="background-color:#f4f4f7; text-align:center; padding:10px;">
        <td style="padding:15px; font-size:12px; color:#999;">
          © ${new Date().getFullYear()} Your Website. All rights reserved.
        </td>
      </tr>
    </table>
  </body>
  </html>
  `
})

        return NextResponse.json({success: true, message: 'Send Email successfully'})
    } catch (error) {
        console.error(error);
        return NextResponse.json({error: 'Email Failed', success: false})
    }


}
