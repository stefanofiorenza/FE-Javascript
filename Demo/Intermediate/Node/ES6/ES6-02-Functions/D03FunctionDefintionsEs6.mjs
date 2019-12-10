import {testFunction,logFunctionDetails } from './D00FunctionCommon.mjs';


//1) var, let, const <functionName> = function ...
/*
  let identity =function (n) { 
    return n;
  }
*/

//2) function <name>
/*
  function identity(n) { 
    return n;
  }
*/

//3) var, let, const <functionName> =(n) => n
/*
  let identity = (n) => n;
*/


/** Note:
 * Function statements are loaded before any of the code is executed. 
 * You can even invoke the function before defining it as a function statement.
 * 
 * Functions as variables apply variable rules.
 * 
 */

testFunction(identity,'identity',42,42);
logFunctionDetails(identity,42);


  // node --experimental-modules D03FunctionDefintionsEs6.mjs

