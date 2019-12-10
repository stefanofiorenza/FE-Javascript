
/**
 *  Array.from (array-like-structure) -> return array of elements
 *  
 * */

 //1) Object is not array-like
    /*
    let objectAsJson = {name:"Stefano", surname:"Fiorenza"}; 
    console.log(Array.from (objectAsJson));
    */

 //2) //string is array-like (collection of chars)
    /*
    let stringIsArrayLike="Stefano Fiorenza"; 
    console.log(Array.from (stringIsArrayLike));
    */

//3) ES6 Map structure is array-like (entryset)
    /*
    let mapIsArrayLike = new Map(); 
    mapIsArrayLike.set("key1","someValue");
    mapIsArrayLike.set("key2","otherValue");
    mapIsArrayLike.set("key3",100);
    console.log(Array.from (mapIsArrayLike));
    */


//4) ES6 Set is array-like (entryset)
    /*
    let setIsArrayLike = new Set();
    setIsArrayLike.add("Stefano");
    setIsArrayLike.add("Raul");
    setIsArrayLike.add("Maarja");
    console.log(Array.from (setIsArrayLike));
    */

//5) Array.from (source, conversionFunction)  /** Most used for extracting columns from dataset as api response */
/*
let data = [
    {name:"Stefano", surname:"Fiorenza"},
    {name:"Raul", surname:"Fiorenza"},
    {name:"Guido", surname:"Fiorenza"},
    {name:"Aldo", surname:"Fiorenza"}
]
console.log(Array.from (data, (record)=> record.name)); //array of names from data
*/