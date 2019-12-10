/**
 * This demo requires understanding of Destructuring Operators..
 * 
 */


//1) Intro to destructuring operators. 

    /** Because of destructuring. operators we have that */
      /*
      var someObject = { a: 1, b: 2, c: 3 }
      var { a: a, b: b, c: c } = someObject
      console.log(a); //yelds 1
    */


    /** variable with same name could be simplified with this form (equal result to the above) */
      /*
      var someObject = { a: 1, b: 2, c: 3 }
      var { a, b, c } = someObject
      console.log(a); //yelds 1
      */

//2) leveraging named parameters it is possible to define more readable functions
/**
 call:      function(object)
 defintion: function ({<<propsFromObject>>})-> props could be used in function body
 */

 //Function definition
function apiRequest({   // notice the curly braces! we are receiving an object now
  endpoint,
  method='GET',
  getParams,
  headers,
  callback,
  timeout,
  authRequest,
}) {
 
  //...access parameter by name as result of destructuring on arg object 
  console.log("endpoint: "+endpoint);
  console.log("method: "+method);
}


 //Function Call
apiRequest({    // notice the curly braces! we are passing an object now
  endpoint: 'somebeautifulapi/v1/api/products',
  //method: 'GET',
  getParams: { category: 3 },
  headers: ["Content-Type: text/plain"],
  callback: function(response) {},
  timeout: 0,
  authRequest: true
})