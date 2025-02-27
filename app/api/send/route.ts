// app/api/send/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactFormSchema } from '@/app/types/contact';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validation du formulaire
    const result = contactFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Données de formulaire invalides", details: result.error.issues },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = result.data;
    
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'mamadoulcisse9236@gmail.com',
      subject: `✨ Nouveau message de ${name}: ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px;">
            Nouveau message via le portfolio
          </h2>
          <div style="margin: 20px 0;">
            <p><strong>Nom:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Sujet:</strong> ${subject}</p>
            <div style="margin-top: 20px;">
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        </div>
      `
    });

    return NextResponse.json({ 
      success: true, 
      message: "Message envoyé avec succès" 
    });
  } catch (error) {
    console.error("Erreur d'envoi:", error);
    return NextResponse.json(
      { 
        success: false, 
        error: "Une erreur est survenue lors de l'envoi du message" 
      },
      { status: 500 }
    );
  }
}