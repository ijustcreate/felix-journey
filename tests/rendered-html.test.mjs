import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders Felix as the candidate before presenting the archive", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Felix — AI-Native Product Builder &amp; Creative Technologist<\/title>/i);
  assert.match(html, /I turn unusual ideas into/);
  assert.match(html, /What I contribute/);
  assert.match(html, /Felix owns/);
  assert.match(html, /AI accelerates/);
  assert.match(html, /Three cases that show how I think/);
  assert.match(html, /Application Companion/);
  assert.match(html, /Comment Collector/);
  assert.match(html, /Desktop Reality/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("keeps the full public portfolio and contribution evidence inspectable", async () => {
  const response = await render();
  const html = await response.text();
  assert.equal((html.match(/class="work-index__number"/g) ?? []).length, 21);
  assert.equal((html.match(/class="case-study(?: |")/g) ?? []).length, 3);
  assert.match(html, /https:\/\/github\.com\/ijustcreate\/desktop-geometry-wars/);
  assert.match(html, /https:\/\/ijustcreate\.github\.io\/application-companion\//);
  assert.match(html, /The responsibility is not/);
});

test("ships curated evidence and the employer-facing social card", async () => {
  await Promise.all([
    access(new URL("../public/og-employer.png", import.meta.url)),
    access(new URL("../public/projects/application-companion.png", import.meta.url)),
    access(new URL("../public/projects/video-store-backrooms.png", import.meta.url)),
    access(new URL("../public/projects/desktop-reality.png", import.meta.url)),
    access(new URL("../ASSET_MANIFEST.md", import.meta.url)),
  ]);

  const manifest = await readFile(new URL("../ASSET_MANIFEST.md", import.meta.url), "utf8");
  assert.match(manifest, /Privacy screen/);
  assert.match(manifest, /Concept art/);
  assert.match(manifest, /Deliberate omissions/);
});
