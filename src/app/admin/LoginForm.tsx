"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signIn } from "@/app/admin/actions";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn-primary mt-5 w-full py-3.5" disabled={pending}>
      {pending ? "Checking…" : "Sign in"}
    </button>
  );
}

export function LoginForm() {
  const [error, action] = useActionState(signIn, undefined);

  return (
    <form action={action} className="mt-6">
      <label className="label" htmlFor="password">
        Password
      </label>
      <input
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
        required
        className="input mt-2"
        aria-describedby={error ? "login-error" : undefined}
      />
      {error ? (
        <p id="login-error" className="error" role="alert">
          {error}
        </p>
      ) : null}
      <Submit />
    </form>
  );
}
