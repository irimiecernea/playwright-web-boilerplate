# playwright-web-boilerplate

Playwright boilerplate with test examples for several components.

# Getting started

### 💼 Prerequisites

- git
- brew (https://brew.sh)

### 🔧 Installation

```
brew install nvm
```

## 🧭 Quickstart

Clone the project and then run the following commands:

```
nvm use
npm install
```

## 📔 Notes

- if you are using `Visual Studio Code` as your IDE, please consider installing the following extensions to make your life easier: `GitLens`, `Path Autocomplete` and the official extension for Playwright called `Playwright Test for VSCode`.

### Commands to run tests

```
npx playwright test
```

Summary of command line arguments:

`npx playwright test` -> the command used by Playwright to run all the tests from the `tests` folder. If you want to run a specific test and not the whole suite, please refer to [this](https://playwright.dev/docs/running-tests#command-line) documentation.

Please note that Playwright supports several flags when running tests, such as `--workers`, `--debug`, `--project` etc. Please check the official documentation if you want to customise your command further.

### Playwright

Read more about configuring [Playwright](https://playwright.dev/docs/intro).
