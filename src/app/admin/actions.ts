"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { checkPassword, endSession, isSignedIn, startSession } from "@/lib/auth";
import { readOverrides, writeOverrides } from "@/lib/store";
import { EDITABLE } from "@/lib/content";

/** Rough throttle so the login form cannot be hammered from one process. */
const attempts = new Map<string, { count: number; until: number }>();

export async function signIn(_prev: string | undefined, form: FormData) {
  const bucket = attempts.get("global") ?? { count: 0, until: 0 };
  if (bucket.until > Date.now()) {
    return "Too many attempts. Try again in a minute.";
  }

  const password = String(form.get("password") ?? "");
  if (!checkPassword(password)) {
    bucket.count += 1;
    if (bucket.count >= 5) {
      bucket.until = Date.now() + 60_000;
      bucket.count = 0;
    }
    attempts.set("global", bucket);
    return "That password is not right.";
  }

  attempts.delete("global");
  await startSession();
  redirect("/admin");
}

export async function signOut() {
  await endSession();
  redirect("/admin/login");
}

export async function saveContent(_prev: string | undefined, form: FormData) {
  if (!(await isSignedIn())) redirect("/admin/login");

  const next = { ...(await readOverrides()) };
  for (const field of EDITABLE) {
    const value = form.get(field.key);
    if (typeof value === "string") next[field.key] = value.trim();
  }

  try {
    await writeOverrides(next);
  } catch (error) {
    return error instanceof Error ? error.message : "Could not save.";
  }

  // every page reads this content, so clear the whole route cache
  revalidatePath("/", "layout");
  return "Saved. The live site is updated.";
}
