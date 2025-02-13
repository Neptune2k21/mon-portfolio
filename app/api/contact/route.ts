// app/api/contact/route.ts
import { Resend } from "resend"
import { ContactFormSchema } from "@/lib/contact"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = ContactFormSchema.parse(body)

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "mamadoulcisse9236@gmail.com",
      subject: `[Portfolio] Nouveau message de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nouveau message depuis votre portfolio</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
            <p><strong>Nom:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 3px;">
              ${message.replace(/\n/g, "<br/>")}
            </div>
          </div>
        </div>
      `
    })

    return new Response("Email envoyé", { status: 200 })
  } catch (error) {
    return new Response("Erreur lors de l'envoi de l'email", { status: 500 })
  }
}