import * as z from "zod"

export const ContactFormSchema = z.object({
  name: z.string()
    .min(2, "👋 Oups ! Votre nom doit contenir au moins 2 caractères")
    .max(50, "😅 Wow, ça fait un long nom ! Maximum 50 caractères s'il vous plaît"),
  
  email: z.string()
    .email("📧 Hmm... Cet email ne semble pas valide")
    .min(5, "🤔 L'email semble un peu court")
    .max(100, "📝 L'email est un peu trop long"),
  
  message: z.string()
    .min(10, "✍️ Votre message est un peu court ! Dites-m'en un peu plus")
    .max(1000, "📚 Waouh, quel roman ! Pourriez-vous le raccourcir un peu ?")
})