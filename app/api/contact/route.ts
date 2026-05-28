import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "El nombre es demasiado corto").max(120),
  email: z.string().email("El email no tiene un formato válido"),
  subject: z.string().min(3, "El asunto es demasiado corto").max(160),
  message: z.string().min(20, "El mensaje debe tener al menos 20 caracteres").max(3000)
});

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const payload = schema.parse(await request.json());
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_EMAIL_TO ?? "pabloriosglez@gmail.com";

    if (!apiKey) {
      return NextResponse.json({ error: "Falta configurar RESEND_API_KEY en Vercel o .env.local" }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    const safeName = escapeHtml(payload.name);
    const safeEmail = escapeHtml(payload.email);
    const safeSubject = escapeHtml(payload.subject);
    const safeMessage = escapeHtml(payload.message).replace(/\n/g, "<br />");

    const html = `
      <div style="font-family:Inter,Arial,sans-serif;line-height:1.6;color:#0f172a">
        <h1 style="color:#0f172a">Nuevo mensaje desde el portfolio</h1>
        <p><strong>Nombre:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Asunto:</strong> ${safeSubject}</p>
        <div style="margin-top:24px;padding:18px;border-left:4px solid #3b82f6;background:#f8fafc">
          ${safeMessage}
        </div>
      </div>
    `;

    await resend.emails.send({
      from: "Portfolio Pablo <onboarding@resend.dev>",
      to,
      replyTo: payload.email,
      subject: `[Portfolio] ${payload.subject}`,
      html
    });

    try {
      await resend.emails.send({
        from: "Pablo Ríos González <onboarding@resend.dev>",
        to: payload.email,
        subject: "He recibido tu mensaje",
        html: `
          <div style="font-family:Inter,Arial,sans-serif;line-height:1.7;color:#0f172a">
            <h1>Gracias por escribir, ${safeName}</h1>
            <p>He recibido tu mensaje correctamente y te responderé lo antes posible.</p>
            <p style="margin-top:24px">Un saludo,<br /><strong>Pablo Ríos González</strong></p>
          </div>
        `
      });
    } catch {
      console.warn("Resend rejected the auto-reply email. Main contact email was sent.");
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors[0]?.message ?? "Datos inválidos" }, { status: 400 });
    }

    return NextResponse.json({ error: "No se pudo enviar el mensaje. Inténtalo de nuevo más tarde." }, { status: 500 });
  }
}
