# Description

This is demonstration on how to set-up TypeScript and Intern to run a simple unit test suite, within a browers. At that point, we don't use load the dojo API nor the Esri JavaScript 4 API.

The environement is setup to be using chrome as a default browser. Only one test suite is run.

# Set-up

- TypeScript: I did a local installation: `npm install --save-dev typescript`
- Intern: `npm install intern`
- HTTP Server `npm install --save-dev http-server`

HTTP Server is only required to be able to run the unit tests in a browser.

Note than when running functional testing, Intern actually use Selenium by default, which makes using HTTP Server unnecessary.

# Running the test suite in command line

Run the following command: `npx run intern`.

![Unit Test Success via command line](https://github.com/fabanc/intern4-exercises/blob/master/exercise-1/screenshots/command_line_success.PNG?raw=true)

# Running the test suite in Chrome

Intern has a way for you to run your unit test in a browser. That requires an starting a local server, which is why I have installed http-server with that project.

- Start the local http-server by running: `npm run start`
- Go to: http://127.0.0.1:8080/node_modules/intern/

However you will see that the page displays nothing. If you open the debugger in Chrome Developer Tools, you will even see an error message `Error: The server does not support suite glob resolution`. This is because debugging in Chrome does not expression for the location of the unit test. Instead you need a path to an existing file.

In other word, this is because our configuration file use a glob expression in the configuration file.

```json
{
  "suites": "dist/tests/**/*.js",
  "environments": ["chrome"]
}
```

The following configuration in our config file would work:

```json
{
  "suites": "dist/tests/unit/standalone.js",
  "environments": ["chrome"]
}
```

How you can bypass that will be demonstrated in the next exercise.
