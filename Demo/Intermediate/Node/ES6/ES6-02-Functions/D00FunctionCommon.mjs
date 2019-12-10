

export const testFunction= function testFunction(functionAsVar, expectedName, givenInput, expectedResult){
    console.assert(functionAsVar(givenInput) === expectedResult);
    console.assert((typeof functionAsVar) === 'function'); // <2>
    console.assert(functionAsVar.name === expectedName); // <3>
}

export const logFunctionDetails= function logFunctionDetails(functionAsVar,givenInput ){
  console.log("invocation: "+functionAsVar(givenInput)); 
  console.log("typeof: "+(typeof functionAsVar));
  console.log("function name: "+functionAsVar.name);
}
