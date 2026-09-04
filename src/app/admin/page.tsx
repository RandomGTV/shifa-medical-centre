import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ExternalLink, ShieldAlert } from "lucide-react";
import { isSignedIn } from "@/lib/auth";
import { isDurable, readOverrides } from "@/lib/store";
import { EDITABLE, defaults } from "@/lib/content";
import { EditorForm } from "@/app/admin/EditorForm";
import { signOut } from "@/app/admin/actions";

export const metadata: Metadata = {
  title: "Content manager",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  if (!(await isSignedIn())) redirect("/admin/login");

  const saved = await readOverrides();
  const values = { ...defaults(), ...saved };
  const durable = isDurable();

  return (
    <main className="min-h-screen bg-cream pb-24">
      <header className="border-b bg-white hairline">
        <div className="container-x flex flex-wrap items-center justify-between gap-4 py-5">
          <div>
            <p className="eyebrow">Shifa Medical Centre</p>
            <h1 className="mt-1 font-display text-[1.5rem] font-extrabold text-brand-900">
              Content manager
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="btn-ghost px-5 py-2.5" target="_blank">
              View site
              <ExternalLink className="h-4 w-4" strokeWidth={1.9} />
            </Link>
            <form action={signOut}>
              <button type="submit" className="btn-ghost px-5 py-2.5">
                Sign out
              </button>
            </form>
          </div>
        </div>
      </header>

      <div className="container-x pt-8">
        {!durable ? (
          <div className="mb-8 flex gap-4 rounded-2xl bg-amber-50 p-5 text-[13.5px] leading-relaxed text-amber-900">
            <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={1.9} />
            <div>
              <p className="font-semibold">Saving to a local file.</p>
              <p className="mt-1">
                That works on this machine and on a normal server, but on a serverless host
                such as Vercel the filesystem is wiped between requests and edits will not
                stick. Add <code>UPSTASH_REDIS_REST_URL</code> and{" "}
                <code>UPSTASH_REDIS_REST_TOKEN</code> to your environment and saves move to a
                real database — no code change, no npm package.
              </p>
            </div>
          </div>
        ) : null}

        <p className="mb-8 max-w-2xl text-[14.5px] leading-relaxed text-ink-soft">
          These are the values that go stale. Everything else — department descriptions,
          prices, the gallery — still lives in the code, so a change there gets reviewed
          before it goes out.
        </p>

        <EditorForm fields={[...EDITABLE]} values={values} />
      </div>
    </main>
  );
}
