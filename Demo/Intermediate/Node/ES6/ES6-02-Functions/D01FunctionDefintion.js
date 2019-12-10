
function identity(n) { // <1>
    return n;
  }

  let x=42;
  // Tests
  console.assert(identity(x) === 42,"Expected 41 found "+x);
  console.assert((typeof identity) === 'function'); // <2>
  console.assert(identity.name === 'identity'); // <3>

  
  //Prints out
  console.log("invocation: "+identity(42)); 
  console.log("typeof: "+(typeof identity));
  console.log("function name: "+identity.name);