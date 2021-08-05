import { getBooks } from "../src/controllers/controllers";
const assert = require('assert');

describe("New Book Added", () =>{
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
})
