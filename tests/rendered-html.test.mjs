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

test("renders the complete Felix journey", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Felix’s Journey with AI<\/title>/i);
  assert.match(html, /Five chapters/);
  assert.match(html, /21 public repositories/);
  assert.match(html, /The Video Store Backrooms/);
  assert.match(html, /https:\/\/github\.com\/ijustcreate\/desktop-geometry-wars/);
  assert.match(html, /https:\/\/ijustcreate\.github\.io\/portals\//);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("ships the curated image set and publication boundary", async () => {
  await Promise.all([
    access(new URL("../public/og.png", import.meta.url)),
    access(new URL("../public/projects/fish-pond.png", import.meta.url)),
    access(new URL("../public/projects/desktop-reality.png", import.meta.url)),
    access(new URL("../public/projects/planet-smmith-concept.png", import.meta.url)),
    access(new URL("../ASSET_MANIFEST.md", import.meta.url)),
  ]);

  const manifest = await readFile(new URL("../ASSET_MANIFEST.md", import.meta.url), "utf8");
  assert.match(manifest, /Concept art/);
  assert.match(manifest, /Deliberate omissions/);
  assert.match(manifest, /Privacy screen/);
});
