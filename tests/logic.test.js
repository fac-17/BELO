const test = require("tape");
const logic = require("../src/logic");

test("prepareAPIcallURL returns a string", t => {
  const actual = typeof logic.prepareAPIcallURL("love island");
  t.equal(actual, "string");
  t.end();
});

test("prepareAPIcallURL returns a string that contains search term", t => {
  const actual = logic.prepareAPIcallURL("loveisland").includes("loveisland");
  t.equal(actual, true);
  t.end();
});

test("prepareAPIcallURL returns an actual URL for a single word search term", t => {
  const actual = logic.prepareAPIcallURL("love");
  const expected = "https://newsapi.org/v2/everything?q=love";
  t.equal(actual, expected);
  t.end();
});

test("prepareAPIcallURL returns an actual URL for multiple word search terms", t => {
  const actual = logic.prepareAPIcallURL("love island");
  const expected = "https://newsapi.org/v2/everything?q=love%20island";
  t.equal(actual, expected);
  t.end();
});
