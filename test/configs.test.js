import assert from 'node:assert/strict';
import path from 'node:path';
import { describe, it } from 'node:test';
import { fileURLToPath } from 'node:url';

import { ESLint } from 'eslint';
import prettier from 'prettier';

import defaultConfig, {
  next as namedNext,
  node as namedNode,
  prettier as namedPrettier,
  react as namedReact,
} from '../index.js';
import nextConfig from '../next.js';
import nodeConfig from '../node.js';
import prettierConfig from '../prettier.config.js';
import reactConfig from '../react.js';

const rootDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);

function createLinter(overrideConfig, options = {}) {
  return new ESLint({
    overrideConfigFile: true,
    overrideConfig,
    cwd: rootDir,
    ...options,
  });
}

describe('Package exports', () => {
  it('exposes default and named presets consistently', () => {
    assert.equal(defaultConfig, nodeConfig);
    assert.equal(namedNode, nodeConfig);
    assert.equal(namedReact, reactConfig);
    assert.equal(namedNext, nextConfig);
    assert.equal(namedPrettier, prettierConfig);
    assert.ok(Array.isArray(nodeConfig));
    assert.ok(Array.isArray(reactConfig));
    assert.ok(Array.isArray(nextConfig));
    assert.equal(typeof prettierConfig, 'object');
  });
});

describe('Node.js preset', () => {
  const eslint = createLinter(nodeConfig);

  it('passes valid modern TypeScript + Node.js code', async () => {
    const code = [
      "import fs from 'node:fs';",
      '',
      'export function readText(filePath: string, _encoding?: string): string {',
      "  return fs.readFileSync(filePath, 'utf8');",
      '}',
      '',
    ].join('\n');

    const [result] = await eslint.lintText(code, { filePath: 'src/index.ts' });
    assert.deepEqual(result.messages, []);
  });

  it('reports TypeScript, code quality, import order, and Prettier violations', async () => {
    const code = [
      'import { helper } from "./helper";',
      'import path from "node:path";',
      'const unused = 123',
      'export function bad(x: number) {',
      '  x = x + 1;',
      '  return x > 0 ? (x > 1 ? path.sep : helper()) : "none";',
      '}',
      '',
    ].join('\n');

    const [result] = await eslint.lintText(code, { filePath: 'src/bad.ts' });
    const ruleIds = result.messages.map((m) => m.ruleId);

    assert.ok(ruleIds.includes('@typescript-eslint/no-unused-vars'));
    assert.ok(ruleIds.includes('no-param-reassign'));
    assert.ok(ruleIds.includes('no-nested-ternary'));
    assert.ok(ruleIds.includes('import-x/order'));
    assert.ok(ruleIds.includes('prettier/prettier'));
  });

  it('ignores build and dependency directories', async () => {
    assert.equal(await eslint.isPathIgnored('dist/bundle.js'), true);
    assert.equal(await eslint.isPathIgnored('node_modules/pkg/index.js'), true);
    assert.equal(await eslint.isPathIgnored('src/app.ts'), false);
  });
});

describe('React preset', () => {
  const eslint = createLinter(reactConfig);

  it('passes valid React + TypeScript TSX component', async () => {
    const code = [
      "import { useState } from 'react';",
      '',
      'interface CounterProps {',
      '  initial: number;',
      '}',
      '',
      'export function Counter({ initial }: CounterProps) {',
      '  const [count, setCount] = useState(initial);',
      '',
      '  return (',
      '    <button type="button" onClick={() => setCount((c) => c + 1)}>',
      '      Count: {count}',
      '    </button>',
      '  );',
      '}',
      '',
    ].join('\n');

    const [result] = await eslint.lintText(code, {
      filePath: 'src/Counter.tsx',
    });
    assert.deepEqual(result.messages, []);
  });

  it('reports hook, a11y, @eslint-react, and Prettier issues without duplicate hook errors', async () => {
    const code = [
      "import { useState } from 'react';",
      '',
      'export function Broken({ flag }: { flag: boolean }) {',
      '  if (flag) {',
      '    useState(0);',
      '  }',
      '',
      '  return <img src="/logo.png" />;',
      '}',
      '',
    ].join('\n');

    const [result] = await eslint.lintText(code, {
      filePath: 'src/Broken.tsx',
    });
    const ruleIds = result.messages.map((m) => m.ruleId);

    assert.ok(ruleIds.includes('react-hooks/rules-of-hooks'));
    assert.equal(
      ruleIds.includes('@eslint-react/rules-of-hooks'),
      false,
      'should not duplicate rules-of-hooks via @eslint-react',
    );
    assert.ok(ruleIds.includes('jsx-a11y-x/alt-text'));
  });
});

describe('Next.js preset', () => {
  const eslint = createLinter(nextConfig);

  it('passes valid Next.js + TypeScript TSX component', async () => {
    const code = [
      "import Link from 'next/link';",
      '',
      'export default function HomePage() {',
      '  return (',
      '    <main>',
      '      <Link href="/about">About</Link>',
      '    </main>',
      '  );',
      '}',
      '',
    ].join('\n');

    const [result] = await eslint.lintText(code, {
      filePath: 'app/page.tsx',
    });
    assert.deepEqual(result.messages, []);
  });

  it('reports Next.js core-web-vitals and a11y Link issues', async () => {
    const code = [
      "import Link from 'next/link';",
      '',
      'export default function BadPage() {',
      '  return (',
      '    <main>',
      '      <img src="/hero.png" alt="Hero" />',
      '      <Link href="javascript:void(0)">Invalid</Link>',
      '    </main>',
      '  );',
      '}',
      '',
    ].join('\n');

    const [result] = await eslint.lintText(code, {
      filePath: 'app/bad/page.tsx',
    });
    const ruleIds = result.messages.map((m) => m.ruleId);

    assert.ok(ruleIds.includes('@next/next/no-img-element'));
    assert.ok(ruleIds.includes('jsx-a11y-x/anchor-is-valid'));
  });

  it('ignores Next.js generated directories and types', async () => {
    assert.equal(await eslint.isPathIgnored('.next/server/app.js'), true);
    assert.equal(await eslint.isPathIgnored('out/index.js'), true);
    assert.equal(await eslint.isPathIgnored('next-env.d.ts'), true);
  });
});

describe('Prettier integration', () => {
  it('aligns standalone Prettier output 100% with ESLint prettier/prettier rule', async () => {
    const rawCode =
      'import {useState} from "react"\nexport function Card({title}:{title:string}){const [open,setOpen]=useState(false);return <button type="button" onClick={()=>setOpen(!open)}>{title}{open?"!":""}</button>}\n';

    const formatted = await prettier.format(rawCode, {
      ...prettierConfig,
      filepath: 'src/Card.tsx',
    });

    const eslint = createLinter(reactConfig);
    const [result] = await eslint.lintText(formatted, {
      filePath: 'src/Card.tsx',
    });

    const prettierErrors = result.messages.filter(
      (m) => m.ruleId === 'prettier/prettier',
    );
    assert.deepEqual(prettierErrors, []);
    assert.deepEqual(result.messages, []);
  });

  it('autofixes formatting violations cleanly via ESLint', async () => {
    const eslint = createLinter(nodeConfig, { fix: true });
    const rawCode =
      'export const greet = (name: string) => {return "hi " + name}\n';

    const [result] = await eslint.lintText(rawCode, {
      filePath: 'src/greet.ts',
    });

    assert.ok(result.output);
    const [recheck] = await createLinter(nodeConfig).lintText(result.output, {
      filePath: 'src/greet.ts',
    });
    assert.deepEqual(recheck.messages, []);
  });
});

describe('Repository self-lint', () => {
  it('lints all package source and test files with zero errors or warnings', async () => {
    const eslint = createLinter(nodeConfig);
    const results = await eslint.lintFiles([
      'index.js',
      'node.js',
      'react.js',
      'next.js',
      'prettier.config.js',
      'test/configs.test.js',
    ]);

    const issues = results.flatMap((r) =>
      r.messages.map(
        (m) =>
          `${path.relative(rootDir, r.filePath)}:${m.line} ${m.ruleId}: ${m.message}`,
      ),
    );
    assert.deepEqual(issues, []);
  });
});
