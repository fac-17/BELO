const test = require("tape");
const logic = require("../src/logic");

test("prepareAPIcallURL returns a string", t => {
  const actual = typeof logic.prepareAPIcallURL("love island", "666");
  t.equal(actual, "string");
  t.end();
});

test("prepareAPIcallURL returns a string that contains search term", t => {
  const actual = logic
    .prepareAPIcallURL("love island", "666")
    .includes("love island");
  t.equal(actual, true);
  t.end();
});
