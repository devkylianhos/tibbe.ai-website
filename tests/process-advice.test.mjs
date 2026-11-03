import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createContext, runInContext } from 'node:vm';
import test from 'node:test';
import ts from 'typescript';

// Compile only the pure advice module; no Next server or external services needed.
const source = readFileSync(new URL('../src/content/process-advice.ts', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } });
const context = createContext({ exports: {} });
runInContext(compiled.outputText, context);
const { getAdvice, updateAnswer, optionsFor } = context.exports;
const base = { area: 'service', task: 'Antwoorden voorbereiden', frequency: 'daily', time: 'high', bottleneck: 'time', software: 'mail' };

test('complete information-heavy task proposes a reviewed AI trial', () => {
  assert.equal(getAdvice(base, 'review').kind, 'ai');
  assert.match(getAdvice(base, 'review').control, /beoordeelt/);
});
test('repetitive data transfer proposes fixed automation before AI', () => {
  assert.equal(getAdvice({ ...base, bottleneck: 'copy' }, 'review').kind, 'automation');
});
test('small workload takes precedence over an automation opportunity', () => {
  assert.equal(getAdvice({ ...base, bottleneck: 'copy', time: 'low' }, 'review').kind, 'process');
});
test('unknown or missing information asks for an inventory, including unknown time', () => {
  for (const key of ['task', 'frequency', 'time', 'software']) {
    assert.equal(getAdvice({ ...base, [key]: 'unknown' }, 'review').kind, 'inventory');
  }
  assert.equal(getAdvice({}, 'review').kind, 'inventory');
  assert.equal(getAdvice({ ...base, area: 'invalid' }, 'review').kind, 'inventory');
});
test('changing the work area clears the stale task but preserves other answers', () => {
  const next = updateAnswer(base, 'area', 'content');
  assert.equal(next.task, undefined);
  assert.equal(next.time, 'high');
  assert.equal(base.task, 'Antwoorden voorbereiden');
  assert.equal(updateAnswer(base, 'area', 'service').task, base.task);
  assert.equal(optionsFor('task', next).some(([value]) => value === base.task), false);
});
test('mismatched task and work area cannot produce confident advice', () => {
  assert.equal(getAdvice({ ...base, area: 'orders' }, 'review').kind, 'inventory');
});
test('automatic preference is conditional on tests and agreements', () => {
  assert.match(getAdvice(base, 'auto').control, /na tests en afspraken/);
});
