const router = require('../src/router');
const test = require('tape');
const supertest = require('supertest');

test("Not found route test",(t)=>{
    supertest(router)
     .get('/poo')
     .expect(404)
     .end( (err,res)=>{
         t.equal(res.text,'404: File not found');
         t.end();
     })
})