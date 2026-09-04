import "server-only";
import { createHmac, timingSafeEqual, randomBytes } from "node:crypto";
import { cookies } from "next/headers";

/**
 * Admin session, server-side.
 *
 * The password is never sent to the browser and never appears in the bundle —
 * it is read from ADMIN_PASSWORD at request time on the server. What the browser
 * holds is an httpOnly cookie containing an expiry and an HMAC of that expiry,
 * signed with SESSION_SECRET. Without the secret a cookie cannot be forged, and
 * because it is httpOnly no script on the page can read it.
 *
 * Required environment variables (.env.local, and your host's dashboard):
 *   ADMIN_PASSWORD   the password staff type
 *   SESSION_SECRET   a long random string — `openssl rand -base64 32`
 */

const COOKIE = "shifa_admin";
const MAX_AGE_SECONDS = 60 * 60 * 8; // one working day

function secret() {
  const value = process.env.SESSION_SECRET;
  if (!value || value.length < 16) {
    throw new Error(
      "SESSION_SECRET is missing or too short. Set it in .env.local — see README.",
    );
  }
  return value;
}

function sign(payload: string) {
  return createHmac("sha256", secret()).update(payload).digest("hex");
}

/** Constant-time compare, so a wrong password cannot be found by timing. */
function safeEqual(a: string, b: string) {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  if (ab.length !== bb.length) {
    // still burn the comparison so length is not a side channel
    timingSafeEqual(ab, ab);
    return false;
  }
  return timingSafeEqual(ab, bb);
}

export function isConfigured() {
  return Boolean(process.env.ADMIN_PASSWORD && process.env.SESSION_SECRET);
}

export function checkPassword(candidate: string) {
  const real = process.env.ADMIN_PASSWORD;
  if (!real) return false;
  return safeEqual(candidate, real);
}

export async function startSession() {
  const expires = Date.now() + MAX_AGE_SECONDS * 1000;
  const nonce = randomBytes(8).toString("hex");
  const payload = `${expires}.${nonce}`;
  const jar = await cookies();
  jar.set(COOKIE, `${payload}.${sign(payload)}`, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: MAX_AGE_SECONDS,
  });
}

export async function endSession() {
  const jar = await cookies();
  jar.delete(COOKIE);
}

export async function isSignedIn() {
  const jar = await cookies();
  const raw = jar.get(COOKIE)?.value;
  if (!raw) return false;

  const parts = raw.split(".");
  if (parts.length !== 3) return false;
  const [expires, nonce, mac] = parts;

  let expected: string;
  try {
    expected = sign(`${expires}.${nonce}`);
  } catch {
    return false;
  }
  if (!safeEqual(mac, expected)) return false;

  return Number(expires) > Date.now();
}
