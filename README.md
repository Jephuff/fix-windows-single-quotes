# fix-windows-single-quotes

***you probably should not use this module, because it cannot always determine the intent, it will likely cause very strange edge cases***

tries to interpret command line arguments to fix windows single quote behavior. 

if you call a command with `'Hello World'` as a command line argument, you would expect the string `Hello World` to be passed as an argument. On windows you will actual get `'Hello` and `World'` as separate arguments.
```
node command.js 'Hello World'
```

this script will attempt to figure out when this is happening, and convert `["'Hello", "World'"]` to `["Hello World"]`

### install
```
npm i fix-windows-single-quotes
```

### Usage

```
var fixWindowsSingleQuotes = require('fix-windows-single-quotes');
var argv = fixWindowsSingleQuotes(process.argv.slice(2));
console.log(argv);
```

### Things that this can't catch

single quote inside double quotes of an argument without spaces
```node command.js "hello'world"```
expected `["hello'world"]`
actual `["hello", "world"]`

```node command.js "'helloworld'"```
expected `["'helloworld'"]`
actual `["helloworld"]`