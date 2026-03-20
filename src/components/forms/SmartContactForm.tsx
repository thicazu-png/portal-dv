"use client";

import { FormEvent, useState } from "react";
import Button from "@/components/ui/Button";

const interests = [
  "Contratar palestrante",
  "Licenciar composição",
  "Adquirir livro",
  "Anunciar nas rádios",
  "Contratar jingle/marketing",
  "Suporte jurídico",
];

export default function SmartContactForm() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    subject: "",
    interest: interests[0],
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setStatus("success");
        setForm({ name: "", contact: "", subject: "", interest: interests[0], message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-900/75 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-sm text-zinc-300">Nome</span>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
            className="mt-1 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-white"
          />
        </label>
        <label className="block">
          <span className="text-sm text-zinc-300">E-mail ou WhatsApp</span>
          <input
            type="text"
            required
            value={form.contact}
            onChange={(e) => setForm((prev) => ({ ...prev, contact: e.target.value }))}
            className="mt-1 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-white"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-sm text-zinc-300">Assunto</span>
          <input
            type="text"
            required
            value={form.subject}
            onChange={(e) => setForm((prev) => ({ ...prev, subject: e.target.value }))}
            className="mt-1 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-white"
          />
        </label>
        <label className="block">
          <span className="text-sm text-zinc-300">Tipo de interesse</span>
          <select
            value={form.interest}
            onChange={(e) => setForm((prev) => ({ ...prev, interest: e.target.value }))}
            className="mt-1 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-white"
          >
            {interests.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block">
        <span className="text-sm text-zinc-300">Mensagem</span>
        <textarea
          required
          value={form.message}
          onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
          className="mt-1 w-full min-h-[120px] rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-white"
        />
      </label>

      <div className="flex items-center justify-between gap-4">
        <Button type="submit" variant="primary" className="w-full md:w-auto" disabled={status === "sending"}>
          {status === "sending" ? "Enviando..." : "Enviar mensagem"}
        </Button>
        {status === "success" && <span className="text-sm text-emerald-300">Mensagem enviada com sucesso!</span>}
        {status === "error" && <span className="text-sm text-rose-300">Erro ao enviar. Tente novamente.</span>}
      </div>
    </form>
  );
}