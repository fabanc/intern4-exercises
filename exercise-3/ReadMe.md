# Description

This is a demonstration on how to set-up TypeScript and Intern to run multiple unit test suite, within a browser or a the command line. This is done by pointing `intern.json` to a single file called `all.js`.

With that configuration, it is possible to run multiple test suites in a browser. The learning points compared to exercise 2 are covered next.

# Learning points

## Creating the suite that rule them all

There are 2 test suites:

- `standalone.ts` contains a suite with one successful test.
- `standaloneFailure.ts` contains a suite with one test will fail.

Intern configuration file is pointing to a third file, that loads and run those two test suites when transpiled: `all.js`

```json
"suites": "dist/tests/all.js",
```

The result is being able to run both test suites within intern browser.

## Loading AMD module using the Dojo 2 loader

In order to load the AMD module, we need an AMD loader. Because or goal is to use intern with the Esri 4 JavaScript API, I will use the dojo loader that comes with that API. This done by adding this configuration in the file `intern.json`

```json
  "loader": {
    "script": "dojo2"
  },
```

# Set-up

## Install

Open the command line in the current directory, and type the following command: `npm install`.

## Dependencies

Those dependencies will be installed when running the command `npm install`.

- TypeScript: I did a local installation: `npm install --save-dev typescript`
- Intern: `npm install intern`
- HTTP Server `npm install --save-dev http-server`

HTTP Server is only required to be able to run the unit tests in a browser.

To be able to load test suite as an AMD module in a browser, I need to have a reference to dojo 2: `npm install @dojo/loader`

# Running the test suite in command line

Run the following command: `npx run intern`.

# Running the test suite in Chrome

Intern has a way for you to run your unit test in a browser. That requires an starting a local server, which is why I have installed http-server with that project.

- Start the local http-server by running: `npm run start`
- Go to: http://127.0.0.1:8080/node_modules/intern/

![Brower Report](https://github.com/fabanc/intern4-exercises/blob/master/exercise-3/screenshots/chrome.PNG?raw=true)

The next exercise will demonstrate how to test a widget using the Esri JavaScript 4 API.
