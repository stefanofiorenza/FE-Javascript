const PI = 3.14159265359;

export function area(radius) {
  return (radius ** 2) * PI;
}

export function circumference(radius) {
  return 2 * radius * PI;
}

export const name="Stefano";


/*1) all in one line */
export default  function sayHello(){
    console.log("Hello");
} ;



/* 2) Thorugh variable/const

const sayHello = function (){
    console.log("Hello");
}

export default sayHello;
*/