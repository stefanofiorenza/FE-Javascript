
function identity(n) { // <1>
    return n;
  }

  // Tests
  console.assert(identity(42) === 42);
  console.assert((typeof identity) === 'function'); // <2>
  console.assert(identity.name === 'identity'); // <3>

  
  //Prints out
  console.log("invocation: "+identity(42)); 
  console.log("typeof: "+(typeof identity));
  console.log("function name: "+identity.name);