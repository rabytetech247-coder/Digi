"use client";

import Link from "next/link";
import PageShell from "@/components/PageShell";
import { Field } from "@/components/Forms";
import { useActionState, useEffect } from "react";
import { loginAction } from "@/app/actions/auth-actions";
import Script from "next/script";

export default function Login() {
  const [state, action, isPending] = useActionState(loginAction, undefined);

  return (
    <PageShell>
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
      <section className="auth">
        <form action={action} className="auth-card">
          <small className="eyebrow">WELCOME BACK</small>
          <h1>Log in</h1>
          {state?.error && <div className="notice" style={{ color: "red" }}>{state.error}</div>}
          <Field name="email" label="Email" placeholder="you@example.com" type="email" />
          <Field name="password" label="Password" placeholder="••••••••" type="password" />
          
          <div className="cf-turnstile" data-sitekey="1x00000000000000000000AA" style={{marginTop: 10}}></div>
          
          <button type="submit" className="button" disabled={isPending} style={{marginTop: 15}}>
            {isPending ? "Logging in..." : "Log in"}
          </button>
          <Link href="/forgot-password">Forgot password?</Link>
          <p>New here? <Link href="/register">Create an account</Link></p>
        </form>
      </section>
    </PageShell>
  );
}