// JavaScript Document

function Person(n,s,y,em){

  this.name=n;
  this.surname=s;
  this.yearOfBirth=y;
  this.email=em;

  this.method1=function(){alert("method1 call")}
  this.method2=internalMethod;
  this.method3=methodWithInput;
  this.method4=methodUsingDataFromProps;
}

function internalMethod(){
  alert("internalMethod")
}

function methodWithInput(x){
  alert(x);
}

function methodUsingDataFromProps(){  
  alert(this.name);
}