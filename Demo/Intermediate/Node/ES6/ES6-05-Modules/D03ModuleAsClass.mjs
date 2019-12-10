class Cat {

    constructor(name){
        this.name = name;
    }

    makeSound() {
      return `${this.name}: Meowww`;
    }
  }
  
// ES6: syntax export default <>
 export default Cat;