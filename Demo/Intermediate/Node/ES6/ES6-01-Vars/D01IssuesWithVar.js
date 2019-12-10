/**
 * Hoisting:
 * Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope 
 * (to the top of the current script or the current function).
 * 
 *  a var could be used and then declared, because vars are hoisted (placed in beginning of block) at runtime
 */

//1)  undeclared is always global

    /*
    for (i=0 ; i<10; i++){
        //do something...
    }
    console.log(i); //what will it print?
    */

//2) var scopes: issues

    //2.1) var in statement blocks are visible outside

        /*
        if(4==4){
            var x=9;
            //do something...
        }
        console.log(x); //what will it print?
        */

        /*
        for (var i=0 ; i<10; i++){
            //do something useful...
        }
        console.log(i); //what will it print?
        */
  
        /*
        {var z=9;}
        console.log(z); //what will it print?
        */

    //2.2) function block vars are scoped:

        /*
        function myFunction() {
            var innerVariable=7;           
        }
      
        myFunction();
        console.log(innerVariable); //undefined as expected
        */

    //2.3) But even in Function var there is an issue:
        /** inner scope overrides outer, without exception on same var name */
        /**Expected would be either exception on declaration (same name in nested scopes) OR variable are indipendent (invisible in outer scopes) */

    
        /*
        function insidious() {
                var functionScoped = 'Outer declaration'; 

                if (true) {
                    var functionScoped = 'Inner declaration'; 
                }
                console.log(functionScoped); 
                return functionScoped;
            }

            // prints 'Inner declaration'
            insidious();
            
            // try to guess what happens here... -> console.log(functionScoped); 
        */


    //2.4) Nothing prevents me from accidentally use same variable in nested scopes...
    
    /*
        var x= 9;

        //... many code lines after...

        var x="Stefano";
        console.log(x);
    */

//3) How to set constant ? (var is always mutable)
/*
    var x=8;
    x="Stefano";
    x=10.9;

    const y=0;
    // y="Stefano"; //decomment this will trigger exception at runtime

    */

