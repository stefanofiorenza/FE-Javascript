const fs = require('fs');

/*
The require function will look for files in the following order:

1) Built-in core Node.js modules (like fs)
2) NPM Modules. It will look in the node_modules folder.
3) Local Modules. 
  If the module name has a ./, / or ../, it will look for the directory/file in the given path. 
  It matches the file extensions: *.js, *.json, *.mjs, *.cjs, *.wasm and *.node.

*/

//use library code
fs.readFile('./file.txt', 'utf-8', (err, data) => {
  if(err) { throw err; }
  console.log('data: ', data);
});