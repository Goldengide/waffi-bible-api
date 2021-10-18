const { response } = require("express");

const addFunction = (a,b) => {
    return a+b;
}
 const returnJson = () => {
     return response.json("I am a God")
 }

module.exports = {addFunction, returnJson};
