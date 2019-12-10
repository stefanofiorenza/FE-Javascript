//Object from Constructor function
/**
 * 
 *  1) definition of class property
 *  2) definition of class method
 *  3) link method to external function
 *  4) constructor doesnt return object
 *  5) exernal function
 */
    function Person(firstName, lastName){ 
        this.firstName=firstName; //1)this.property
        this.lastName=lastName;
        this.sayHello = function(){ //2)this.method
            console.log('Hello '+this.firstName);
        }
        this.anotherMethod=externalFunction; //3)this.method=function
        
        //4) no return 
    }

    /** 5)Not recommended but possible */
    function externalFunction(){
        console.log(this.lastName);
    }



//********************TEST ******************* */
let stefano = new Person("Stefano", "Fiorenza");
console.log(stefano.firstName);
stefano.sayHello();
stefano.anotherMethod();