const circle = require('./D02CustomModule'); //path without extension (.js) 

const r = 3;
console.log(`Circle with radius ${r} has
  area: ${circle.area(r)};
  circumference: ${circle.circumference(r)}`);
