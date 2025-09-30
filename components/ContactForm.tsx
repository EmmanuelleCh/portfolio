"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(e.currentTarget);
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Erreur serveur");

      form.reset();
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <div className="card p-4 sm:p-6 max-w-2x1 mx-auto w-full">
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="text-sm font-medium">
              Prénom
            </label>
            <input
              id="name"
              name="name"
              required
              placeholder="Ton prénom"
              className="mt-1 w-full rounded-lg border border-white/10 bg-white/70 dark:bg-white/5 px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="toi@exemple.com"
              className="mt-1 w-full rounded-lg border border-white/10 bg-white/70 dark:bg-white/5 px-3 py-2"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="text-sm font-medium">
            Sujet
          </label>
          <input
            id="subject"
            name="subject"
            placeholder="Sujet de ton message"
            className="mt-1 w-full rounded-lg border border-white/10 bg-white/70 dark:bg-white/5 px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="message" className="text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Explique moi tout !"
            className="mt-1 w-full rounded-lg border border-white/10 bg-white/70 dark:bg-white/5 px-3 py-2"
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="opacity-80 text-sm">Je reviens vers toi sous 24h. ✉️</p>
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn btn-primary disabled:opacity-60"
          >
            {status === "loading" ? "Envoi…" : "Envoyer"}
          </button>
        </div>

        {status === "success" && (
          <p className="mt-2 text-sm text-green-600">✅ Message envoyé !</p>
        )}
        {status === "error" && (
          <p className="mt-2 text-sm text-red-600">
            ❌ Erreur lors de l’envoi.
          </p>
        )}
      </form>
    </div>
  );
}
