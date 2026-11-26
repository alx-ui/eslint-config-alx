# ALX ESLint Config

[![npm version](https://img.shields.io/npm/v/@ialexanderbrito/eslint-config.svg)](https://www.npmjs.com/package/@ialexanderbrito/eslint-config)
[![npm downloads](https://img.shields.io/npm/dm/@ialexanderbrito/eslint-config.svg)](https://www.npmjs.com/package/@ialexanderbrito/eslint-config)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> **A complete, shareable ESLint 10+ Flat Config & Prettier 3+ setup for Node.js, React, and Next.js projects.**

---

## 🌟 What is this?

This package provides a ready-to-use, opinionated ESLint 10+ and Prettier configuration for modern JavaScript/TypeScript projects. Every plugin is natively compatible with **ESLint 10 Flat Config** (zero peer-dependency conflicts) and integrated with **Prettier 3**.

---

## 🚦 Requirements

- **ESLint**: `^10.0.0` (Flat Config only)
- **Node.js**: `>=20.19.0`, `>=22.13.0`, or `>=24`
- **TypeScript**: `>=5.0.0` (optional, for TypeScript projects)

---

## ✨ Features

- ⚡ **ESLint 10+** native Flat Config (`@eslint/js` v10)
- 📘 **TypeScript** support out of the box (`typescript-eslint` v8)
- ⚛️ **React 19+** & **React Hooks v7** (`@eslint-react/eslint-plugin` + `eslint-plugin-react-hooks`)
- ♿ **JSX Accessibility** (`eslint-plugin-jsx-a11y-x`, ESLint 10 native)
- ▲ **Next.js 16+** Core Web Vitals (`@next/eslint-plugin-next`)
- 📦 **Import sorting** (`eslint-plugin-import-x`)
- 🎨 **Prettier 3** fully integrated (`eslint-plugin-prettier` + `eslint-config-prettier` v10) + shareable `./prettier` config
- 🧬 **Biome** preset also exported (`./biome`)

---

## 📦 Installation

Install ESLint and this config in your project:

```bash
# npm
npm install -D eslint @ialexanderbrito/eslint-config

# yarn
yarn add -D eslint @ialexanderbrito/eslint-config

# pnpm
pnpm add -D eslint @ialexanderbrito/eslint-config
```

---

## 🚀 Quick Start

1. **Create an `eslint.config.mjs` (or `.js`/`.cjs`/`.mts`) file in your project root:**
   - **Node.js / TypeScript:**

     ```js
     import alxConfig from '@ialexanderbrito/eslint-config/node';

     export default [...alxConfig];
     ```
   - **React:**

     ```js
     import alxConfig from '@ialexanderbrito/eslint-config/react';

     export default [...alxConfig];
     ```
   - **Next.js:**

     ```js
     import alxConfig from '@ialexanderbrito/eslint-config/next';

     export default [...alxConfig];
     ```

2. **(Optional) Share the exact same Prettier config with your editor & CLI:**

   Create `prettier.config.js` (or `.mjs`) in your project root:

   ```js
   export { default } from '@ialexanderbrito/eslint-config/prettier';
   ```

3. **(Optional) Customize rules:**

   Add your own config blocks after spreading the preset:

   ```js
   import alxConfig from '@ialexanderbrito/eslint-config/react';

   export default [
     ...alxConfig,
     {
       rules: {
         // your custom rules here
       },
     },
   ];
   ```

---

## 🛠️ Migrating from `.eslintrc.*` (Legacy)

ESLint 10+ **only supports Flat Config**. If you are using `.eslintrc.json` or `.eslintrc.js`, migrate as follows:

**Before (legacy):**

```json
{
  "extends": "@ialexanderbrito/eslint-config/react"
}
```

**After (Flat Config):**

```js
import alxConfig from '@ialexanderbrito/eslint-config/react';

export default [...alxConfig];
```

**Key differences:**

- Config is now an array, not an object
- No more `extends` — use the spread operator
- File must be `eslint.config.js`, `.mjs`, `.cjs`, or `.mts`

See [ESLint Flat Config docs](https://eslint.org/docs/latest/use/configure/configuration-files) for more info.

---

## 💡 Tips & Troubleshooting

- **VSCode:** Install the [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions and make sure your editor uses Node.js >=20.19.0.
- **Run lint & autofix:**

  ```bash
  npx eslint .
  npx eslint --fix .
  ```
- **Inspect resolved config:**

  ```bash
  npx eslint --print-config src/index.ts
  ```

---

## 🌍 Português

### O que é?

Este pacote fornece uma configuração pronta para uso, moderna e opinativa de **ESLint 10+ (Flat Config)** e **Prettier 3+** para projetos Node.js, React, Next.js e TypeScript. Todos os plugins são nativamente compatíveis com ESLint 10 (sem conflitos de `peerDependencies`).

### Requisitos

- **ESLint**: `^10.0.0` (apenas Flat Config)
- **Node.js**: `>=20.19.0`, `>=22.13.0` ou `>=24`
- **TypeScript**: `>=5.0.0` (opcional, para projetos TypeScript)

### Funcionalidades

- ⚡ **ESLint 10+** (Flat Config nativo com `@eslint/js` v10)
- 📘 Suporte completo a **TypeScript** (`typescript-eslint` v8)
- ⚛️ Melhores práticas para **React 19+** e **React Hooks v7** (`@eslint-react/eslint-plugin` + `eslint-plugin-react-hooks`)
- ♿ Regras de acessibilidade com **JSX A11y** (`eslint-plugin-jsx-a11y-x`)
- ▲ Configuração otimizada para **Next.js 16+** (`@next/eslint-plugin-next` Core Web Vitals)
- 📦 Ordenação automática de imports (`eslint-plugin-import-x`)
- 🎨 Integração total com **Prettier 3** (`eslint-plugin-prettier` + `eslint-config-prettier` v10) + export `./prettier`
- 🧬 Preset **Biome** também exportado (`./biome`)

### Instalação

```bash
# npm
npm install -D eslint @ialexanderbrito/eslint-config

# yarn
yarn add -D eslint @ialexanderbrito/eslint-config

# pnpm
pnpm add -D eslint @ialexanderbrito/eslint-config
```

### Como usar

1. Crie um arquivo `eslint.config.mjs` (ou `.js`/`.cjs`/`.mts`) na raiz do projeto:
   - **Node.js / TypeScript:**

     ```js
     import alxConfig from '@ialexanderbrito/eslint-config/node';

     export default [...alxConfig];
     ```
   - **React:**

     ```js
     import alxConfig from '@ialexanderbrito/eslint-config/react';

     export default [...alxConfig];
     ```
   - **Next.js:**

     ```js
     import alxConfig from '@ialexanderbrito/eslint-config/next';

     export default [...alxConfig];
     ```

2. (Opcional) Reaproveite exatamente a mesma configuração do Prettier no editor e na CLI criando `prettier.config.js`:

   ```js
   export { default } from '@ialexanderbrito/eslint-config/prettier';
   ```
3. (Opcional) Personalize regras:

   ```js
   import alxConfig from '@ialexanderbrito/eslint-config/react';

   export default [
     ...alxConfig,
     {
       rules: {
         // suas regras personalizadas aqui
       },
     },
   ];
   ```

### Dicas & Solução de Problemas

- **VSCode:** Instale as extensões [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) e [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) e use Node.js >=20.19.0.
- **Rodar lint e autofix:**

  ```bash
  npx eslint .
  npx eslint --fix .
  ```
- **Ver config final:**

  ```bash
  npx eslint --print-config src/index.ts
  ```

---

## 📄 License

MIT © [Alexander Brito](https://github.com/ialexanderbrito)
