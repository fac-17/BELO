const test = require('tape');
const logic =require('../src/logic');

test("prepareAPIcallURL returns a string",t=>{
    const actual=typeof logic.prepareAPIcallURL("love island","666")
    t.equal(actual,'string');
    t.end();
})