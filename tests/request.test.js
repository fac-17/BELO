const test = require("tape");
const request = require("../src/request");
const nock = require("nock");

test("Tape is working", t => {
  t.pass("Tape is working");
  t.end();
});

test("myRequest correctly fetches data", t => {
  request("http://jsonplaceholder.typicode.com/todos/1", (err, res) => {
    if (res.statusCode === 200) {
      //   t.pass("Yes, API");
      t.deepEqual(res.body.title, "delectus aut autem");
      t.end();
    }
  });
});

test("myRequest correctly fetches data from https", t => {
  request("https://jsonplaceholder.typicode.com/todos/1", (err, res) => {
    if (res.statusCode === 200) {
      //   t.pass("Yes, API");
      t.deepEqual(res.body.title, "delectus aut autem");
      t.end();
    }
  });
});

// test("myRequest correcly fetches data", t => {
//   nock("https://jsonplaceholder.typicode.com")
//     .get("/todos/1")
//     .reply(200, { title: "delectus aut autem" });
//   request.myRequest("https://jsonplaceholder.typicode.com/todos/1", (err, res) => {
//       t.error(error);
//       t.equal(
//           res.statusCode, 200,
//           "the API should respoinse with a status code of 200"
//       ),
//       t.deepEqual(
//           res.statusCode
//       )
//       )
//   });
// });
