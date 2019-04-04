# Description

Intern has a way for you to run your unit test in a browser. That requires an starting a local server, which is why I have installed http-server with that project.

- Start the local http-server by running: `npm run start`
- Go to: http://127.0.0.1:8080/node_modules/intern/

The browser should display the following.

![Brower Report](https://github.com/fabanc/intern4-exercises/blob/master/exercise-2/screenshots/intern-report.png?raw=true)

# Limitations

What if there are more than one unit test to run in the browser. Since you can't use glob, and you have to path the location to a file, how do you do that? This will be the next excercise.

# Set-up

- TypeScript: I did a local installation: `npm install --save-dev typescript`
- Intern: `npm install intern`
- HTTP Server `npm install --save-dev http-server`

HTTP Server is only required to be able to run the unit tests in a browser. Note than when running functional testing, Intern actually use Selenium by default, which makes using HTTP Server unnecessary.
