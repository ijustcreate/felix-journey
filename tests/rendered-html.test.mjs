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

test("renders Felix's working method before presenting the archive", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Felix Embree — Creative Technologist &amp; AI-Native Product Builder<\/title>/i);
  assert.match(html, /I make systems people can/);
  assert.match(html, /The thread behind the projects/);
  assert.match(html, /Watch the real context/);
  assert.match(html, /Felix owns/);
  assert.match(html, /AI accelerates/);
  assert.match(html, /Project Lantern/);
  assert.match(html, /Behind Closed Doors Karaoke/);
  assert.match(html, /Application Companion/);
  assert.equal((html.match(/role="tab"/g) ?? []).length, 6);
  assert.equal((html.match(/role="tabpanel"/g) ?? []).length, 6);
  assert.match(html, /Current focus/);
  assert.match(html, /Project Lantern/);
  assert.match(html, /BCD Karaoke/);
  assert.match(html, /All work/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("keeps the full public portfolio and contribution evidence inspectable", async () => {
  const response = await render();
  const html = await response.text();
  assert.equal((html.match(/class="work-index__number"/g) ?? []).length, 23);
  assert.equal((html.match(/class="case-story(?: |")/g) ?? []).length, 2);
  assert.match(html, /https:\/\/ijustcreate\.github\.io\/project-lantern\//);
  assert.match(html, /https:\/\/ijustcreate\.github\.io\/behind-closed-doors-karaoke\//);
  assert.match(html, /https:\/\/github\.com\/ijustcreate\/desktop-geometry-wars/);
  assert.match(html, /The responsibility is not/);
});

test("ships curated evidence and the revised social card", async () => {
  await Promise.all([
    access(new URL("../public/og-v2.png", import.meta.url)),
    access(new URL("../public/projects/application-companion.png", import.meta.url)),
    access(new URL("../public/projects/project-lantern-board-editor.png", import.meta.url)),
    access(new URL("../public/projects/project-lantern-schedule.png", import.meta.url)),
    access(new URL("../public/projects/project-lantern-broadcast.png", import.meta.url)),
    access(new URL("../public/projects/bcd-the-buzz-cocktail.png", import.meta.url)),
    access(new URL("../public/projects/bcd-back-bar-bottles.png", import.meta.url)),
    access(new URL("../ASSET_MANIFEST.md", import.meta.url)),
  ]);

  const manifest = await readFile(new URL("../ASSET_MANIFEST.md", import.meta.url), "utf8");
  assert.match(manifest, /Privacy screen/);
  assert.match(manifest, /Project Lantern/);
  assert.match(manifest, /Behind Closed Doors Karaoke/);
  assert.match(manifest, /Concept art/);
  assert.match(manifest, /Deliberate omissions/);
});
