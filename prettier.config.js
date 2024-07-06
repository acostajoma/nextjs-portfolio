/** @type {import('prettier').Options} */
import prettier from 'prettier';

const config = {
  singleQuote: true,
  semi: false,
  trailingComma: 'es5',
  tabWidth: 2,
  printWidth: 80,
  useTabs: false,
  jsxSingleQuote: true,
  bracketSpacing: true,
  arrowParens: 'avoid',
  plugins: ['prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.md',
      options: {
        proseWrap: 'always',
      },
    },
  ],
};

export default config;
