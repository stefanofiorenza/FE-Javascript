
//1) ES5: Different behavior of Array constructor:

    /*
    let items = new Array(2); //single number parameter means lenght
    console.log(items.length); // 2
    console.log(items[0]); // undefined
    console.log(items[1]); // undefined
    */

    /*
    let items = new Array("2"); //single string parameter means value of first elem
    console.log(items.length); // 1
    console.log(items[0]); // "2"
    */

    /*
    let items = new Array(1, 2); //n parameter become values
    console.log(items.length); // 2
    console.log(items[0]); // 1
    console.log(items[1]); // 2
    */

    /*
    let items = new Array(3, "2"); //n parameter become values (accept different types in array)
    console.log(items.length); // 2
    console.log(items[0]); // 3
    console.log(items[1]); // "2"
    */

//2) ES6 introuces Array.of to lead to more readable and predictable behavior: Array.of(elements)

    /*
    let items = Array.of(1, 2);
    console.log(items.length); // 2
    console.log(items[0]); // 1
    console.log(items[1]); // 2
    */

    /*
    let items = Array.of(2);
    console.log(items.length); // 1
    console.log(items[0]); // 2
    */

