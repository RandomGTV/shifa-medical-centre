import "server-only";
import { promises as fs } from "node:fs";
import path from "node:path";

/**
 * Where edited content lives.
 *
 * Two backends, chosen by environment — no npm package for either:
 *
 *   Upstash Redis (production)   set UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN.
 *                                Plain REST over fetch. Works on Vercel, where the
 *                                filesystem is read-only and per-request ephemeral.
 *
 *   Local file (development)     .content/site.json under the project root.
 *                                Fine on your own machine or a VPS with a real disk.
 *                                On serverless it will silently lose writes, which is
 *                                why isDurable() exists and the admin page warns.
 */

const KEY = "shifa:site-content";
const FILE = path.join(process.cwd(), ".content", "site.json");

const restUrl = process.env.UPSTASH_REDIS_REST_URL;
const restToken = process.env.UPSTASH_REDIS_REST_TOKEN;

export type Overrides = Record<string, string>;

/** True when writes will survive a redeploy. The admin page says so plainly. */
export function isDurable() {
  return Boolean(restUrl && restToken);
}

async function readUpstash(): Promise<Overrides> {
  const res = await fetch(`${restUrl}/get/${encodeURIComponent(KEY)}`, {
    headers: { Authorization: `Bearer ${restToken}` },
    cache: "no-store",
  });
  if (!res.ok) return {};
  const body = (await res.json()) as { result: string | null };
  if (!body.result) return {};
  try {
    return JSON.parse(body.result) as Overrides;
  } catch {
    return {};
  }
}

async function writeUpstash(data: Overrides) {
  const res = await fetch(`${restUrl}/set/${encodeURIComponent(KEY)}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${restToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(`Upstash write failed: ${res.status}`);
}

async function readFile(): Promise<Overrides> {
  try {
    return JSON.parse(await fs.readFile(FILE, "utf8")) as Overrides;
  } catch {
    return {};
  }
}

async function writeFile(data: Overrides) {
  await fs.mkdir(path.dirname(FILE), { recursive: true });
  await fs.writeFile(FILE, JSON.stringify(data, null, 2), "utf8");
}

export async function readOverrides(): Promise<Overrides> {
  return isDurable() ? readUpstash() : readFile();
}

export async function writeOverrides(next: Overrides): Promise<void> {
  // drop empty values so a cleared field falls back to the default in the data files
  const cleaned = Object.fromEntries(
    Object.entries(next).filter(([, v]) => typeof v === "string" && v.trim() !== ""),
  );
  if (isDurable()) await writeUpstash(cleaned);
  else await writeFile(cleaned);
}
