"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { CheckIcon } from "./Icons";

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

  const inputClasses =
    "w-full px-4 py-3 bg-sand-50 border border-stone-200 rounded-xl text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-primary-500/60 focus:border-primary-500 focus:bg-white transition";

  const field = (id: keyof typeof form, label: string, type = "text", rows?: number) => (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-stone-700 mb-2">
        {label}
      </label>
      {rows ? (
        <textarea
          id={id}
          rows={rows}
          value={form[id]}
          onChange={(e) => setForm({ ...form, [id]: e.target.value })}
          required={id !== "phone"}
          className={`${inputClasses} resize-none`}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={form[id]}
          onChange={(e) => setForm({ ...form, [id]: e.target.value })}
          required={id !== "phone"}
          className={inputClasses}
        />
      )}
    </div>
  );

  if (status === "success") {
    return (
      <div className="bg-primary-50 border border-primary-200 rounded-3xl p-10 text-center animate-fade-up">
        <div className="w-14 h-14 rounded-full bg-primary-600 text-white flex items-center justify-center mx-auto mb-5">
          <CheckIcon className="w-6 h-6" />
        </div>
        <p className="text-lg font-semibold text-primary-900">
          {t("success")}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {field("name", t("name"))}
        {field("email", t("email"), "email")}
      </div>
      {field("phone", t("phone"), "tel")}
      {field("message", t("message"), "text", 5)}

      {status === "error" && <p className="text-red-600 text-sm">{t("error")}</p>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-4 bg-accent-500 hover:bg-accent-600 disabled:bg-accent-300 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-accent-600/20 hover:shadow-xl disabled:shadow-none"
      >
        {status === "sending" ? t("sending") : t("send")}
      </button>
    </form>
  );
}
