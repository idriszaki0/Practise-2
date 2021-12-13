'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`
    console.log(output)

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true
      const str = `Oh, and you're a millenial, ${firstName}`
      console.log(str)
      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial)
    // console.log(add(2, 3));
  }
  printAge()
  return age;
}
const firstName = 'Jonas';
calcAge(1991);
// -------------------------------------
// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = "jonas";
let job = 'teacher';
const year = 1991

// functions
console.log(addDecl(2, 3))
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));
function addDecl(a, b) {
  return a + b;
}

const addExpr = function(a, b) {
  return a + b;
}

var addArrow = (a, b) => a + b

// Example
console.log(undefined)
if(!numProducts) deleteShoppingCart()

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All product deleted");
}

var x = 1;
var y = 2;
const z = 3;
console.log(x === window.x)
console.log(y === window.y);
console.log(z === window.z);

// 'this' keyword works

// this = <Objet that is calling the method></Objet>
// simple function call - this = undefined ; because it only works in strict mode otherwise: window (in the browser) inspect element
// arrow function - this = <this of surrounding function(lexical this)
// event listener - this = <DOM  element that hte handler is attached to></DOM>

const jonas = {
  name: 'JOnas',
  year: 1989,
  calcAge: function() {
    return 2037 - this.year; // same like jonas.year
  }
}
console.log(jonas.calcAge())

// THIS

// console.log(this)

const calAge = function(birthyear) {
  console.log(2037 - birthyear);
  console.log(this)
}
calAge(1991)

const calAges = birthyear => {
  console.log(2037 - birthyear);
  // console.log(this);
};
calAges(1980);


const jona = {
  year: 1991,
  calAge: function() {
    console.log(this)
    console.log(2021 - this.year)
  }
}
jona.calAge()

const matilda = {
  year: 2017,
};
matilda.calAge = jona.calAge
matilda.calAge()

const f = jona.calAge
f()