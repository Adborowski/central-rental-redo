"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate submit — wire up to an email API (e.g. Resend) later
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
  };

  const field = (id: keyof typeof form, label: string, type = "text", rows?: number) => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1.5">
        {label}
      </label>
      {rows ? (
        <textarea
          id={id}
          rows={rows}
          value={form[id]}
          onChange={(e) => setForm({ ...form, [id]: e.target.value })}
          required={id !== "phone"}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none transition"
        />
      ) : (
        <input
          id={id}
          type={type}
          value={form[id]}
          onChange={(e) => setForm({ ...form, [id]: e.target.value })}
          required={id !== "phone"}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
        />
      )}
    </div>
  );

  if (status === "success") {
    return (
      <div className="bg-primary-50 border border-primary-200 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-3">✉️</div>
        <p className="text-primary-800 font-semibold">{t("success")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {field("name", t("name"))}
      {field("email", t("email"), "email")}
      {field("phone", t("phone"), "tel")}
      {field("message", t("message"), "text", 5)}

      {status === "error" && (
        <p className="text-red-600 text-sm">{t("error")}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-3.5 bg-accent-500 hover:bg-accent-600 disabled:bg-accent-300 text-white font-semibold rounded-xl transition-colors shadow"
      >
        {status === "sending" ? t("sending") : t("send")}
      </button>
    </form>
  );
}
