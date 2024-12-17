# Playwright
Playwright Test was created specifically to accommodate the needs of end-to-end testing. Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox. Test on Windows, Linux, and macOS, locally or on CI, headless or headed with native mobile emulation of Google Chrome for Android and Mobile Safari.

## Installation
Get started by installing Playwright using npm, yarn or pnpm. Alternatively you can also get started and run your tests using the [VS Code Extension.](https://playwright.dev/docs/getting-started-vscode)

```bash
npm init playwright@latest
```

Run the install command and select the following to get started:

* Choose between TypeScript or JavaScript (default is TypeScript)

* Name of your Tests folder (default is tests or e2e if you already have a tests folder in your project)

* Add a GitHub Actions workflow to easily run tests on CI

* Install Playwright browsers (default is true)

## Running the Example Test
By default tests will be run on all 3 browsers, chromium, firefox and webkit using 3 workers. This can be configured in the [playwright.config file.](https://playwright.dev/docs/test-configuration) Tests are run in headless mode meaning no browser will open up when running the tests. Results of the tests and test logs will be shown in the terminal.

```bash
npx playwright test
```