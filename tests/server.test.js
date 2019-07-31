const router = require("../src/router");
const test = require("tape");
const supertest = require("supertest");

test("Not found route test", t => {
  supertest(router)
    .get("/poo")
    .expect(404)
    .end((err, res) => {
      t.equal(res.text, "404: File not found");
      t.end();
    });
});

test("Error on server side", t => {
  supertest(router)
    .get("/public/test")
    .expect(500)
    .end((err, res) => {
      t.equal(true, res.text.startsWith("ENOENT: no such file or directory, "));
      t.end();
    });
});
