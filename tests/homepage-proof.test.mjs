import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);

async function source(path) {
  return readFile(new URL(path, root), "utf8");
}

test("homepage routes proof-seeking visitors to one concrete walkthrough", async () => {
  const home = await source("src/components/PremiumHome.tsx");

  assert.match(home, /import \{ WorkflowWalkthrough \}/);
  assert.match(home, /href="#walkthrough">Bekijk één workflow/);
  assert.match(home, /<WorkflowWalkthrough \/>/);
});

test("walkthrough is user-controlled, accessible and clearly illustrative", async () => {
  const walkthrough = await source("src/components/WorkflowWalkthrough.tsx");

  assert.match(walkthrough, /^"use client";/);
  assert.match(walkthrough, /id="walkthrough"/);
  assert.match(walkthrough, /Illustratieve workflow/);
  assert.match(walkthrough, /aria-pressed=/);
  assert.match(walkthrough, /aria-live="polite"/);
  assert.match(walkthrough, /Signaal/);
  assert.match(walkthrough, /Context/);
  assert.match(walkthrough, /Voorstel/);
  assert.match(walkthrough, /Goedkeuring/);
  assert.match(walkthrough, /Actie & logboek/);
  assert.doesNotMatch(walkthrough, /setInterval|autoPlay/);
});

test("non-interactive logos do not mimic buttons and audit proof wraps cleanly", async () => {
  const css = await source("src/components/PremiumHome.module.css");

  assert.doesNotMatch(css, /\.integrationSet li:hover/);
  assert.doesNotMatch(css, /\.heroProof span:not\(:last-child\)::after/);
});
