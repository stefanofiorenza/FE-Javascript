import Person from './D05Class.mjs';

//********************TEST ******************* */
let stefano = new Person("Stefano", "Fiorenza");
console.log(stefano.firstName);
stefano.sayHello();
stefano.anotherMethod();
Person.staticMethod();