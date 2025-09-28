import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  try {
    await resend.emails.send({
      from: "Site Contact <onboarding@resend.dev>", // doit être validé (ou ton domaine)
      to: process.env.MAIL_TO!,
      subject: subject || "📩 Nouveau message depuis ton site",
      html: `
        <h2>Nouveau message reçu</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ ok: true, message: "Mail envoyé ✅" });
  } catch (error) {
    console.error("❌ Erreur Resend :", error);
    return NextResponse.json(
      { ok: false, error: "Erreur envoi mail" },
      { status: 500 }
    );
  }
}
