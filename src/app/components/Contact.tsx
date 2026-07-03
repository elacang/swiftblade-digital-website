"use client";

import { useRef, useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
      "company-website": honeypotRef.current?.value || "",
    };

    // Honeypot: if the hidden field is filled, it's a bot — silently succeed
    if (data["company-website"]) {
      setSent(true);
      return;
    }

    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSent(true);
    } catch {
      setError("Something went wrong. Please email us directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="slash-divider mx-auto max-w-7xl">
        <span className="slash-sweep" data-slash-sweep />
      </div>
      <div className="mx-auto max-w-3xl pt-24 text-center">
        <p className="label-mono mb-6 reveal">// 連絡 — contact</p>
        <h2 className="reveal display display-lg text-mist">
          Let&apos;s draw the blade.
        </h2>
        <p className="reveal mx-auto mt-6 max-w-xl text-lg leading-relaxed text-mist-dim">
          Tell us what you&apos;re building or what&apos;s slowing you down. We
          reply within one business day — no funnels, no discovery-call
          theatre.
        </p>

        {sent ? (
          <div className="mt-12 border border-hairline bg-surface p-10 text-center">
            <p className="label-mono text-blade">// 侍の約束 — samurai&apos;s promise</p>
            <p className="mt-4 text-lg text-mist">
              Thank you for reaching out. Your message has been received, and we
              will be in touch with you within one business day.
            </p>
            <p className="mt-3 text-sm text-mist-dim">
              In the meantime, feel free to explore our work above.
            </p>
          </div>
        ) : (
          <form
            className="reveal mx-auto mt-12 grid max-w-xl gap-px border border-hairline bg-hairline text-left"
            onSubmit={handleSubmit}
          >
            {/* Honeypot — hidden from humans, bots fill it automatically */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "-9999px",
                width: "1px",
                height: "1px",
                overflow: "hidden",
              }}
            >
              <label htmlFor="company-website">Don&apos;t fill this field</label>
              <input
                ref={honeypotRef}
                id="company-website"
                type="text"
                name="company-website"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <label className="bg-background p-5">
              <span className="label-mono">Name</span>
              <input
                required
                name="name"
                className="mt-3 w-full bg-transparent text-mist outline-none placeholder:text-steel"
                placeholder="Your name"
              />
            </label>
            <label className="bg-background p-5">
              <span className="label-mono">Email</span>
              <input
                required
                type="email"
                name="email"
                className="mt-3 w-full bg-transparent text-mist outline-none placeholder:text-steel"
                placeholder="you@company.com"
              />
            </label>
            <label className="bg-background p-5">
              <span className="label-mono">Phone</span>
              <input
                type="tel"
                name="phone"
                className="mt-3 w-full bg-transparent text-mist outline-none placeholder:text-steel"
                placeholder="+64 21 234 5678"
              />
            </label>
            <label className="bg-background p-5">
              <span className="label-mono">What do you need sharpened?</span>
              <textarea
                required
                rows={4}
                name="message"
                className="mt-3 w-full resize-none bg-transparent text-mist outline-none placeholder:text-steel"
                placeholder="Professional website or landing page · SEO audit · Custom software build · Test automation · Cybersecurity testing · AI workflow integration…"
              />
            </label>
            {error && (
              <p className="bg-background px-5 py-3 text-sm text-red-400">
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={sending}
              className="btn-blade w-full cursor-pointer py-4 font-semibold disabled:cursor-wait disabled:opacity-60"
            >
              {sending ? "Sending…" : "Send →"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}