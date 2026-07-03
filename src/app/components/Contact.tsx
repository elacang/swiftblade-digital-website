"use client";

import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

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
          <div className="reveal mt-12 border border-hairline bg-surface p-10">
            <p className="label-mono text-blade">// 受信確認</p>
            <p className="mt-4 text-lg text-mist">
              Message received. We&apos;ll be in touch shortly.
            </p>
          </div>
        ) : (
          <form
            className="reveal mx-auto mt-12 grid max-w-xl gap-px border border-hairline bg-hairline text-left"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <label className="bg-background p-5">
              <span className="label-mono">Name</span>
              <input
                required
                className="mt-3 w-full bg-transparent text-mist outline-none placeholder:text-steel"
                placeholder="Your name"
              />
            </label>
            <label className="bg-background p-5">
              <span className="label-mono">Email</span>
              <input
                required
                type="email"
                className="mt-3 w-full bg-transparent text-mist outline-none placeholder:text-steel"
                placeholder="you@company.com"
              />
            </label>
            <label className="bg-background p-5">
              <span className="label-mono">What do you need sharpened?</span>
              <textarea
                required
                rows={4}
                className="mt-3 w-full resize-none bg-transparent text-mist outline-none placeholder:text-steel"
                placeholder="A consulting engagement, a SaaS trial, a greenfield build…"
              />
            </label>
            <button
              type="submit"
              className="btn-blade w-full cursor-pointer py-4 font-semibold"
            >
              Send →
            </button>
          </form>
        )}
      </div>
    </section>
  );
}