# Wudojo

Wudojo is an app for learning JS on your own. It uses:

- **Webpack** for bundling and auto-reloading the browser
- **ESLINT** for linting your JS
- **ES6** cuz that's where we're at

## Description

Wudojo exists for people that want to lean JS by creating their own JS lessons to practice. For example, I would populate the `js` directory with various .js files. Each file would have a particular code challenge/concept/fundamental that I want to practice. Now I can run that lesson from the command line and automatically launch it in the browser. Everytime I save the changes I make, Webpack will update the browser for me, and ESLINT will lint my code in the terminal.

This just like my [Budojo](https://github.com/brownerd/budojo) project, but it uses Webpack instead of Gulp and Browserify. Feel free to use which ever one you prefer.

## Usage

`npm run start 1`

This will launch the FIRST js file in the `js` directory in Chrome Canary.

`npm run start 2`

You can change which file opens in the `js` directory by changing the number to the start command. So, the above command will open the 2nd .js file in the `js` directory. This is great because you can dump a bunch of js files into the `js` directory and you can run them without having to type their name.

## Data/file-list.js

Everytime you run `npm run start 1` the `file-list.js` file will be updated with an array of the .js file name in the `js` directory, and exported as a module. So the number you specify in the start command refers to the index of the file you want to run.

file-list.js is created by running `file-lister.js` This is built into the package.json script:

```json
"scripts": {
  "start": "node file-lister.js && webpack-dev-server --inline --hot --config webpack.config.js -f"
}
```

## LINT

Wudojo uses ESLINT. It is configured to use ESLINT's [standard](https://github.com/feross/eslint-config-standard) configuration.

If you run `npm run start 2` you will see that ESLINT found an error in the file.

```bash
  5:2  error  More than 1 blank line not allowed  no-multiple-empty-lines

✖ 1 problem (1 error, 0 warnings)
```

Once you remove the extra line from this file and save it, ESLINT will allow Webpack to lanuch the file.

## TODO

[] - Make directory configurable from the command line
[] - Make browser configurable as well
[] - Figure out whether I want to use ESLINT as a PreLoader or a Loader
