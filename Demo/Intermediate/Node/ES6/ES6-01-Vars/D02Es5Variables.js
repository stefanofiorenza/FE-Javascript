/**
 * Issues from D01: using let keyword
 * 
 */


//Issue (2.1) var in statement blocks are visible outside

/** //1) let variables are scoped in their blocks */

/*
        if(4==4){
            let x=9;
            //do something...
        }
        console.log(x); //x is not defined
        */

        /*
        for (let i=0 ; i<10; i++){
            //do something useful...
        }
        console.log(i); //i is not defined
        */
  
        /*
        {let z=9;}
        console.log(z); //what will it print?
        */
        

  //Issue (2.3) and (2.4) Override vars in common/nested scopes
  /** //2) let variables live only in the scope of their declaration block */

  /*
        let thisShouldBeNotOverriden = 'Global declaration'; 

        function insidious() {
            let thisShouldBeNotOverriden = 'Function Outer declaration'; 

            if (true) {
                let thisShouldBeNotOverriden = 'Function (if) Inner declaration'; 
            }
            console.log(thisShouldBeNotOverriden); 
            return thisShouldBeNotOverriden;
        }

        // prints 'Function Outer declaration'
        insidious(); // thisShouldBeNotOverriden means something according to execution context (each block has its own copy)
        console.log(thisShouldBeNotOverriden); 
    */
    