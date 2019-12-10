import Person from './D05Class.mjs';

export default class Employee extends Person{

    constructor(firstName, lastName, salary){ 
        super(firstName,firstName); 
        this.salary=salary;
    }
     
    sayHello = function(){ 
        console.log('Hello Employee: '+this.firstName);
    } 

    increaseSalary= (rate) => {
        this.salary=this.salary+this.salary*rate/100;
    }

    static staticMethodEmployee(){ //static replaces function
        console.log("static method in class Employee");
    }
}