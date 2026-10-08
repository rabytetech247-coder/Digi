"use client";

import PageShell from "@/components/PageShell";
import { Field } from "@/components/Forms";
import { useActionState } from "react";
import { registerAction } from "@/app/actions/auth-actions";
import Script from "next/script";

export default function Register() {
  const [state, action, isPending] = useActionState(registerAction, undefined);

  return (
    <PageShell>
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
      <section className="auth">
        <form action={action} className="auth-card">
          <small className="eyebrow">CREATE ACCOUNT</small>
          <h1>Join Rabyte-Tech</h1>
          {state?.error && <div className="notice" style={{ color: "red" }}>{state.error}</div>}
          <Field name="name" label="Name" placeholder="Your name" />
          <Field name="username" label="Username" placeholder="your-creator-handle" />
          <Field name="email" label="Email" placeholder="you@example.com" type="email" />
          <Field name="password" label="Password" placeholder="Create a password" type="password" />
          
          <div className="cf-turnstile" data-sitekey="1x00000000000000000000AA" style={{marginTop: 10}}></div>

          <button type="submit" className="button" disabled={isPending} style={{marginTop: 15}}>
            {isPending ? "Creating account..." : "Create account"}
          </button>
          <p>One account works as both buyer and seller.</p>
        </form>
      </section>
    </PageShell>
  );
}