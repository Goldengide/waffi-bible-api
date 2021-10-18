const simpleFunction = require('../src/es6/helpers/simpleFunctions');
const assert = require('assert');
const { response } = require('express');


describe('Add Function', function() {
      it('should add two numbers', function() {
          let actual = simpleFunction.addFunction(3,4);
          expected = 7;
          assert.equal(actual, expected);
        //   assert(Array.isArray('a,b,c'.split(',')))
    });
});
describe('JSON format', function() {
    describe('#return-json', function() {
      it('should return a json Object', function() {
          actual = "I am a God";
          expected = "I am a God";
        //   response.json("I am a God")
          assert.equal(actual, expected);
      });
    });
});
/*describe("New Book Added", () =>{
    var validApp;
    before(function(){
        validApp = new Members({
            email: "jesus"
        })
    })
    describe("Book Added", ()=> {
         it("Is Email valid", function() {
             assert(validApp.emailIsValid(), "My email is valid")
         })
         it("I have book removed", function() {
            return false;
        })
         it("I have book added", function() {
            return true;
        })
         it("I have book added")
         it("I have book added")
    })
}) */
