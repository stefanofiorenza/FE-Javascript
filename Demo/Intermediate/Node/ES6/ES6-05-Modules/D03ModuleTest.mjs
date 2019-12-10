/**Experimental native support. Otherwise ED6 transpiler necessary.
 * 
 * 1) Node native support ( to be enabled in some node version)
 * > node --experimental-modules D03ModuleTest.mjs

 * 
 * 2) Use Babel (or other ES6 transpilers) (common in js frameworks as React, Vue...)
 * https://babeljs.io/docs/en/babel-plugin-transform-modules-commonjs
 */

 //1) import default from module (whole Cat class)
 import Cat from './D03ModuleAsClass.mjs';

 //2) import some visible module members
 import {area, circumference,name} from './D03Module.mjs';

 //3) import moduleAsLocalVar from './D03Module.mjs';


//**********************TESTS****************************************

 /* 1) Test Cat */
 const cat = new Cat('Felix');
console.log(cat.makeSound());


// 2) test Module public members

const r = 3;

console.log(`Circle with radius ${r} has
  area: ${area(r)};
  circunference: ${circumference(r)}`);

console.log(name);


/* 3) test default module member exported

moduleAsLocalVar();
*/