//Object from adding props to Object built in object

function externalFunction(){
    console.log(this.lastName);
}

let stefano = {
    'firstName':'Stefano',
    'lastName':'Fiorenza',
    sayHello:function(){ 
        console.log('Hello '+this.firstName);
    },
    anotherMethod:externalFunction
};


//if I need to do same for object Raul I cant reuse none of the above lines (better addressed with constructor function)


//********************TEST ******************* */

//1) loop on object members (keys are iterable)
/*
    console.log("Test Dynamically Inspect Object members")
    for (let m in stefano){
        console.log(m+ ": "+stefano[m]); //access object member name and current value
    }
*/

//2) Call property dynamically 
/*
    console.log("Test Dynamically called property")
    let propFirstName='firstName'
    console.log(stefano[propFirstName]);
*/

//3) (function pointer + ()) same as (function)()
/*
console.log("Test Dynamically called method")
stefano["sayHello"]();
*/

//4) All together:
/*
console.log("Test Full Introspection")
for (let m in stefano){ //loop on member names
    if((typeof stefano[m]) ==='function'){
        stefano[m]();
    }else{
        console.log(m+ ": "+stefano[m]);
    }   
}
*/