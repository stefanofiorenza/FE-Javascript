/**
 * JavaScript classes cannot have member variables—
 * if we wish to tack on a property on the instance, we 
 * must use this inside the constructor or any instance method
 * 
 */

export default class Person{

    constructor(firstName, lastName){ 
        this.firstName=firstName; 
        this.lastName=lastName;
    }
     
    sayHello = function(){ 
        console.log('Hello '+this.firstName);
    } 

    anotherMethod=externalFunction;  

    static staticMethod(){ //static replaces function
        console.log("static method in class Person");
    }
}

function externalFunction(){
    console.log(this.lastName);
}

