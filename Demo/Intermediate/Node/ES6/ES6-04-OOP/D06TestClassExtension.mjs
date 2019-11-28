import Employee from './D06ClassExtension.mjs';

//********************TEST ******************* */
let stefano = new Employee("Stefano", "Fiorenza", 1000.0);

/*
console.log(stefano.firstName);

console.log(stefano.salary); //new method using added field
stefano.increaseSalary(5.8);
console.log(stefano.salary);

stefano.sayHello(); //override
*/

stefano.anotherMethod(); //inherited
Employee.staticMethod(); //inherited
Employee.staticMethodEmployee(); //new static method