import Person from './D05Class.mjs';

let stefano = new Person("Stefano", "Fiorenza");

//1) Create object from an instance Object.create(object); //replace the need of constructor
    /*
    let stefanoCloned = Object.create(stefano);
    console.log(stefanoCloned.firstName);
    stefanoCloned.sayHello(); 
    */


//2) Dynamically add properties with Object.defineProperties 

    /*
    let anObject={};

    Object.defineProperties(anObject,{
        hireDate:{
            value: new Date(2019,1,1),
            writable:false,
            enumerable:true
        },
        address:{
            value:{
                street:'Viru',
                streetNumber:18,
                city:'Tallinn'
            },
            enumerable:true
        },
        anotherReadOnlyProp:{
            value:0,
            enumerable:false,
            writable:false,
            configurable:true
        }

    })

    console.log(anObject);

    for (let k in anObject){//only enumerable keys are accessible here
        console.log(k+ ": "+anObject[k]); 
    }

    */

//3) Copy (enumerable) properties into new object with assign:

    /*
    let stefanoCloned = Object.assign({}, stefano);
    console.log(stefanoCloned.firstName);
    stefanoCloned.sayHello(); 
    */

    //merge objects (right override left)
    /*
        let raul={'firstName':'Raul','age':8};
        let stefanoAndRaul = Object.assign(stefano, raul);
        console.log(stefanoAndRaul);
        stefanoAndRaul.sayHello(); 
    */

//4) Spread Operator (syntax sugar for Object.assign)
    /*
    let raul={'firstName':'Raul','age':8};
    let stefanoAndRaul = {...stefano,...raul}; //(right override left)
    console.log(stefanoAndRaul);
    */



//5) Shallow compare (compare by object reference)
    /*
    let stefanoCloned = Object.create(stefano);
    console.log(stefanoCloned == stefano) // return false (different object in memory) 
    */

    /*
    let stefanoSameInstance = stefano;
    console.log(stefanoSameInstance == stefano); //retun true (2 pointers to same data in memory);
    */


//6) Destructuring Objects: (extracting props from object)

    /*
    var {firstName, lastName} =stefano; 
    console.log("name: "+ firstName+" surname: "+lastName);
    */


