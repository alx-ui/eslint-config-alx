# ALX ESLint Config

[![npm version](https://img.shields.io/npm/v/@ialexanderbrito/eslint-config.svg)](https://www.npmjs.com/package/@ialexanderbrito/eslint-config)
[![npm downloads](https://img.shields.io/npm/dm/@ialexanderbrito/eslint-config.svg)](https://www.npmjs.com/package/@ialexanderbrito/eslint-config)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> Shareable ESLint 9 flat config for Node.js, React, and Next.js projects.

🇺🇸 [English](#english) | 🇧🇷 [Português](#português)

---

## English

### ✨ Features

- ⚡ **ESLint 9** with Flat Config support
- 📘 **TypeScript** first-class support
- ⚛️ **React** & **React Hooks** plugins
- ♿ **JSX A11y** for accessibility rules
- 🎨 **Prettier** integration
- 📦 **Import ordering** with automatic sorting
- ▲ **Next.js** optimized configuration

### 📦 Installation

```bash
# npm
npm install -D eslint @ialexanderbrito/eslint-config

# yarn
yarn add -D eslint @ialexanderbrito/eslint-config

# pnpm
pnpm add -D eslint @ialexanderbrito/eslint-config
```

### 🚀 Usage

Create an `eslint.config.mjs` file in your project root:

#### Node.js / TypeScript

```js
import alxConfig from '@ialexanderbrito/eslint-config/node';

export default [...alxConfig];
```

#### React

```js
import alxConfig from '@ialexanderbrito/eslint-config/react';

export default [...alxConfig];
```

#### Next.js

```js
import alxConfig from '@ialexanderbrito/eslint-config/next';

export default [...alxConfig];
```

### ⚙️ Customization

Add your own rules after spreading the configuration:

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

### 🔄 Migration from v2 to v3

ESLint 9 introduced the new "Flat Config" format. Here are the main changes:

1. Rename `.eslintrc.json` or `.eslintrc.js` to `eslint.config.mjs`
2. Configuration format changed from object to array
3. No more `extends` property - use spread operator instead

**Before (v2):**

```json
{
  "extends": "@ialexanderbrito/eslint-config/react"
}
```

**After (v3):**

```js
import alxConfig from '@ialexanderbrito/eslint-config/react';

export default [...alxConfig];
```

---

## Português

### ✨ Funcionalidades

- ⚡ **ESLint 9** com suporte a Flat Config
- 📘 **TypeScript** suporte completo
- ⚛️ Plugins **React** e **React Hooks**
- ♿ **JSX A11y** para regras de acessibilidade
- 🎨 Integração com **Prettier**
- 📦 **Ordenação de imports** automática
- ▲ Configuração otimizada para **Next.js**

### 📦 Instalação

```bash
# npm
npm install -D eslint @ialexanderbrito/eslint-config

# yarn
yarn add -D eslint @ialexanderbrito/eslint-config

# pnpm
pnpm add -D eslint @ialexanderbrito/eslint-config
```

### 🚀 Como usar

Crie um arquivo `eslint.config.mjs` na raiz do seu projeto:

#### Node.js / TypeScript

```js
import alxConfig from '@ialexanderbrito/eslint-config/node';

export default [...alxConfig];
```

#### React

```js
import alxConfig from '@ialexanderbrito/eslint-config/react';

export default [...alxConfig];
```

#### Next.js

```js
import alxConfig from '@ialexanderbrito/eslint-config/next';

export default [...alxConfig];
```

### ⚙️ Personalização

Adicione suas próprias regras após o spread da configuração:

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

### 🔄 Migração da v2 para v3

O ESLint 9 introduziu o novo formato "Flat Config". Principais mudanças:

1. Renomeie `.eslintrc.json` ou `.eslintrc.js` para `eslint.config.mjs`
2. O formato mudou de objeto para array
3. Não existe mais a propriedade `extends` - use spread operator

**Antes (v2):**

```json
{
  "extends": "@ialexanderbrito/eslint-config/react"
}
```

**Depois (v3):**

```js
import alxConfig from '@ialexanderbrito/eslint-config/react';

export default [...alxConfig];
```

---

## 📄 License

MIT © [Alexander Brito](https://github.com/ialexanderbrito)
