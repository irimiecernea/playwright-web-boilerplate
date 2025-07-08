# playwright-web-boilerplate

Playwright boilerplate with test examples for several components.

# Getting started

### 1. Prerequisites

- [git](https://git-scm.com)
- [nvm](https://github.com/nvm-sh/nvm)

### 2. Technologies

- [Playwright](https://playwright.dev)
- [Node.JS](https://nodejs.org)
- [TypeScript](https://www.typescriptlang.org/)

### 3. Test Framework Dependencies

- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Husky](https://github.com/typicode/husky)
- [lint-staged](https://github.com/lint-staged/lint-staged)
- [types-node](https://www.npmjs.com/package/@types/node)

### 4. Quickstart

Clone the project and then run the following commands:

```
cd playwright-web-boilerplate
nvm use
npm install
```

### 5. Install browsers for Playwright

```
npx playwright install
```

### 6. Commands

```
npx playwright test
```

Explanation of commands:

`npx playwright install` installs the Playwright supported browser engines (Chromium, Firefox and Webkit which is also known as Safari)

`npx playwright test` is the command used by Playwright to run all the tests from the `tests` folder. If you want to run a specific test and not the whole suite, please refer to [this](https://playwright.dev/docs/running-tests#command-line) documentation.

Please note that Playwright supports several flags when running tests, such as `--workers`, `--debug`, `--project` etc. Please check the official documentation if you want to customise your command further.

### 7. Notes

- if you are using `Visual Studio Code` as your IDE, please consider installing the following extensions for better QoL features: `GitLens`, `Path Autocomplete`, `vscode-icons`, and the official extension for Playwright called `Playwright Test for VSCode`.
- this project uses `ESLint` and `Prettier` along with `Husky` and `lint-staged` for pre-commit linting and formatting. This means that if will go through your code and analyze if you have left over unused variables, empty conditional blocks, etcetera, as well as apply formatting to your files (remove trailing spaces, empty rows) on commit.

### 8. Playwright

This project aims to follow the [best practices](https://playwright.dev/docs/best-practices) suggested by the Playwright team.

Read more about configuring [Playwright](https://playwright.dev/docs/intro).
