
//load node.js assertion library
/*const assert = require("assert");

//load calculator code
var Calculator = require("../Calculator"); // this is the dir we //testing
var calc = new Calculator();

describe("Calculator Tests",function(){
 // this is scription shere we discrip our abject
  it("Adds 1 and 2",function(){
	var result = calc.add(1,2);
	assert.equal(result,3); // I claim this is assertion means
  });
// this is where we put what does in.
});*/

//load chai assertion library
const chai = require("chai");
const expect = chai.expect; // this uses expected instead of asserted.
const asserttype = require('chai-asserttype');
chai.use(asserttype);

//load calculator code
var Calculator = require("../Calculator");
var calc = new Calculator();

describe("Calculator Tests",function(){
 
  it("Adds 1 and 2",function(){
	expect(calc.add(1,2)).to.be.equal(3);//this testing is much eaiser //but does the same thing
  });

  
it("Add Allows one parameter",function(){
   expect(calc.add(1)).to.be.equal(1); // this is saying that it can only take one parameter.
 });
  it("Add Allows no parameters",function(){
   expect(calc.add()).to.be.equal(0);
 });

  it("Add turns strings to zeros",function(){
   expect(calc.add("frog","toad")).to.be.number();
 });



//this is how you write unit test.

});

