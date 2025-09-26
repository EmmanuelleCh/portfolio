import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  // Pour l’instant, on loggue (utile en dev)
  console.log("📩 Nouveau message reçu :", { name, email, subject, message });

  // TODO: tu peux brancher nodemailer ici pour envoyer vers ta boîte
  return NextResponse.json({ ok: true });
}
