import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

export async function POST(req: Request) {
  try {
    const { name, email, subject, message, chatId } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    if (!resend) {
      console.warn('RESEND_API_KEY is not configured. Email functionality is disabled.');
      return NextResponse.json(
        { error: 'Email service is not configured. Please try again later.' },
        { status: 503 }
      );
    }

    const finalSubject = subject || `Message from ${name} via AI Chatbot`;

    const { data, error } = await resend.emails.send({
      from: 'AI Chatbot <onboarding@resend.dev>',
      to: 'shrey094@gmail.com',
      replyTo: email,
      subject: finalSubject,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">New Message from AI Chatbot</h1>
          </div>
          <div style="background: white; padding: 30px; border: 1px solid #e1e4e8; border-top: none; border-radius: 0 0 10px 10px;">
            <div style="margin-bottom: 20px;">
              <p style="margin: 0; color: #586069; font-size: 14px;">FROM</p>
              <p style="margin: 5px 0; color: #24292e; font-size: 16px; font-weight: 600;">${name}</p>
            </div>
            <div style="margin-bottom: 20px;">
              <p style="margin: 0; color: #586069; font-size: 14px;">EMAIL</p>
              <p style="margin: 5px 0; color: #0366d6; font-size: 16px;">${email}</p>
            </div>
            <div style="margin-bottom: 20px;">
              <p style="margin: 0; color: #586069; font-size: 14px;">MESSAGE</p>
              <div style="margin-top: 10px; padding: 15px; background-color: #f6f8fa; border-radius: 6px; border-left: 4px solid #667eea;">
                <p style="margin: 0; color: #24292e; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</p>
              </div>
            </div>
            <hr style="border: none; border-top: 1px solid #e1e4e8; margin: 30px 0;">
            <p style="margin: 0; color: #586069; font-size: 12px; text-align: center;">
              This email was sent from your AI Chatbot application
            </p>
          </div>
        </div>
      `,
      text: `New message from ${name} (${email}):\n\n${message}`,
    });

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Your email has been successfully sent to Shrey! He'll receive your message at shrey094@gmail.com and can reply directly to ${email}.`,
      name,
      email,
      id: data?.id,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { error: 'An unknown error occurred' },
      { status: 500 }
    );
  }
}
