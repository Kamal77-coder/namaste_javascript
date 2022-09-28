
/* 1 comparison of let & var while hoisting

console.log(b);
console.log(a);

let a = 10 ;
var b = 100;

*/


/* 2 unlike b a is not attached to window object 
let a = 10 ;
console.log(a);

var b = 100 ; 
console.log(b);
*/


/* 3 Redclaration of let and const variables (error  : Identifier 'a' has already been declared )

let a = 100;

let a = 50;

console.log(a); */ 


/* 4 error : Identifier 'a' has already been declared

let a = 100;

var a = 50;

console.log(a); */


/* 5 No error  op -> 50 
var a = 100;

var a = 50;

console.log(a); */

/* 6 No error op-> 40 
let a  ;

a = 40 ;

console.log(a) ;*/

/* 7 Syntax error  -> Missing initializer in const declaration
const a ;
a = 40 ;

console.log(a); */

/*8 const is meant to be initialised at the time of declaration 

const a = 40;
console.log(a); */


/*
console.log(a);
const a = 10 ;
*/