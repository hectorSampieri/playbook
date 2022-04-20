const app = require('../app/app')
const request = require("supertest");

describe("Unit test for Express", () => {
    test("Get '/v1/Explorers", (done) => {
      request(app)
        .get("/v1/Explorers")
        .expect(200)
        .expect((res) => {
            expect(res.body.length).toBe(5)
        })
        .end((err, res) => {
          if (err) return done(err);
          return done();
        })
    })
    test("Get '/v1/Explorers/id", (done) => {
      request(app)
        .get("/v1/Explorers/1")
        .expect(200)
        .expect((res) => {
          console.log(res.body)
            expect((res.body).id).toBe(1)
            expect((res.body).name).toBe('Hector1')
        })
        .end((err, res) => {
          if (err) return done(err);
          return done();
        })
    })

    test("PUT '/v1/Explorers", (done) => {
      request(app)
        .post("/v1/Explorers")
        .expect(200)
        .expect((res) => {
            expect(JSON.parse(res.text).message).toBe('Created')
        })
        .end((err, res) => {
          if (err) return done(err);
          return done();
        })
    })
    test("Deleted '/v1/Explorers", (done) => {
      request(app)
        .delete("/v1/Explorers/1")
        .expect(200)
        .expect((res) => {
            expect(JSON.parse(res.text).message).toBe('Deleted')
        })
        .end((err, res) => {
          if (err) return done(err);
          return done();
        })
    })
    test("Put '/v1/Explorers", (done) => {
      request(app)
        .put("/v1/Explorers/1")
        .expect(200)
        .expect((res) => {
            expect(JSON.parse(res.text).message).toBe('Update')
        })
        .end((err, res) => {
          if (err) return done(err);
          return done();
        })
    })

  })