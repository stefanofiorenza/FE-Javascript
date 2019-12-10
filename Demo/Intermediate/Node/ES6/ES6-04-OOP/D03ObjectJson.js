function externalFunction(){
    console.log(this.lastName);
}


let stefano = {
    'firstName':'Stefano',
    'lastName':'Fiorenza',
    'sayHello':function(){ 
        console.log('Hello '+this.firstName);
    },
    'anotherMethod':externalFunction
};


//if I need to do same for anothobject (ex. raul) I cant reuse none of the above lines (better addressed with constructor function)


//********************TEST ******************* */
console.log(stefano.firstName);
stefano.sayHello();
stefano.anotherMethod();