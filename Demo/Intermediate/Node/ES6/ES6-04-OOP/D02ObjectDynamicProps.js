//Object from adding props to Object built in object
function externalFunction(){
    console.log(this.lastName);
}


let stefano = new Object("Stefano", "Fiorenza");
stefano.firstName= "Stefano";
stefano.lastName= "Fiorenza";
//stefano[lastName]= "Fiorenza"; // achieve same result as above
stefano.sayHello = function(){ 
    console.log('Hello '+this.firstName);
}
stefano.anotherMethod=externalFunction;

//if I need to do same for anothobject (ex. raul) I cant reuse none of the above lines (better addressed with constructor function)


//********************TEST ******************* */
console.log(stefano.firstName);
stefano.sayHello();
stefano.anotherMethod();