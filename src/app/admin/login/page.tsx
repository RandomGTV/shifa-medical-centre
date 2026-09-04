import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { isConfigured, isSignedIn } from "@/lib/auth";
import { LoginForm } from "@/app/admin/LoginForm";

export const metadata: Metadata = {
  title: "Admin sign in",
  robots: { index: false, follow: false },
};

export default async function LoginPage() {
  if (await isSignedIn()) redirect("/admin");

  const configured = isConfigured();

  return (
    <main className="grid min-h-screen place-items-center bg-cream px-5">
      <div className="w-full max-w-sm">
        <div className="card p-8">
          <p className="eyebrow">Shifa Medical Centre</p>
          <h1 className="mt-3 font-display text-[1.75rem] font-extrabold text-brand-900">
            Content manager
          </h1>

          {configured ? (
            <>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
                Sign in to update the clinic&rsquo;s phone number, address and timings.
                Changes go live for everyone.
              </p>
              <LoginForm />
            </>
          ) : (
            <div className="mt-5 rounded-2xl bg-amber-50 p-5 text-[13.5px] leading-relaxed text-amber-900">
              <p className="font-semibold">Not set up yet.</p>
              <p className="mt-2">
                Create <code>.env.local</code> in the project root with:
              </p>
              <pre className="mt-3 overflow-x-auto rounded-lg bg-amber-100/70 p-3 text-[12px]">
{`ADMIN_PASSWORD=choose-a-strong-one
SESSION_SECRET=paste-32-random-chars`}
              </pre>
              <p className="mt-3">
                Generate the secret with <code>openssl rand -base64 32</code>, then restart
                the server.
              </p>
            </div>
          )}
        </div>

        <p className="mt-5 text-center text-[12.5px] text-ink-faint">
          The password is checked on the server and never reaches the browser.
        </p>
      </div>
    </main>
  );
}
