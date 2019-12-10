
import {testFunction,logFunctionDetails } from './D00FunctionCommon.mjs';


function identity(n) { // <1>
    return n;
}

testFunction(identity,'identity',42,42);
logFunctionDetails(identity,42);


  // node --experimental-modules D02FunctionDefintions.mjs