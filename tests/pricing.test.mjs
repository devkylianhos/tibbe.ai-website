import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("live pricing has one centrally defined beta and agent-team price", () => {
  const site = read("src/lib/site.ts");

  assert.match(site, /export const BETA_MONTHLY_PRICE = 750;/);
  assert.match(site, /export const AGENT_TEAM_MONTHLY_PRICE = 1_250;/);
});

test("all public pricing surfaces use 750 beta and 1250 agent team", () => {
  const combined = [
    "src/components/Pricing.tsx",
    "src/components/Compare.tsx",
    "src/components/IntegrationsStats.tsx",
    "src/app/launch/page.tsx",
    "src/app/voorwaarden/page.tsx",
    "src/lib/site.ts",
  ].map(read).join("\n");

  assert.match(combined, /€ 750/);
  assert.match(combined, /€ 1\.250/);
  assert.match(combined, /Agent Team/);
  assert.doesNotMatch(combined, /€ 250|250 euro per maand|€ 500|500 euro per maand/);
});
