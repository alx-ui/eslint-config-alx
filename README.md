# ALX ESLint config

## O que inclui?

- Standard config base;
- React plugin;
- React Hooks plugin;
- JSX a11y plugin;
- Prettier;
- Import Helpers;

## Setup

1. Instale as dependências
```
npm i -D eslint @alxui/eslint-config
```

```
yarn add -D eslint @alxui/eslint-config
```

2. Crie um arquivo `.eslintrc.json` e adicione a configuração:
```
{
  "extends": "@alxui/eslint-config/react"
}
```

> Você também pode usar um `.eslintrc.js` em vez de JSON, se preferir.