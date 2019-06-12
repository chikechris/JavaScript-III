/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*

  Window Binding
* 1. When a function is housed in the global scope, this will point towards the window object

  Implicit Binding
* 2. Whenever a function is called by a preceding dot, this will point to the object before the dot.

  New Binding
* 3. When a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.

  Explicit Binding
* 4. When JavaScript's "call", "apply",  or "bind" is used, this is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayHi(name) {
  console.log("Hi " + name);
  console.log(this);
}
sayHi("Christian");

// Principle 2

// code example for Implicit Binding
let sayHello = {
  greeting: "Hello",
  name: "Christian",
  greet: function(name) {
    console.log(this.greeting + " " + name);
    console.log(this);
  }
};

sayHello.greet("Chris");

// Principle 3

// code example for New Binding

function SayHi(name) {
  this.greet = "Hi ";
  this.name = name;
  this.say = function() {
    console.log(this.greet + this.name);
    console.log(this);
  };
}

let greetChris = new SayHi("Chris");
let greetCyndy = new SayHi("Cyndy");
let greetMaggie = new SayHi("Maggie");

greetChris.say();
greetCyndy.say();
greetMaggie.say();

// Principle 4

// code example for Explicit Binding
let MyProps = function() {
  console.log("Prop A:  " + this.x + "Prop B: " + this.y);
};

let Object = {
  x: "PropA",
  y: "PropB"
};
MyProps.call(Object);
