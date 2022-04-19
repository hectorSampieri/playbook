const app = require('../app/app')
const request = require("supertest");

describe("Test example", () => {
    test("GET /", (done) => {
      request(app)
        .get("/")
        .expect(200)
        .expect((res) => {
            console.log(res.text)
            expect(res.text).toBe('Hello World')
        })
        .end((err, res) => {
          if (err) return done(err);
          return done();
        })
    })

    test("GET /launchX", (done) => {
        request(app)
          .get("/launchX")
          .expect(200)
          .expect((res) => {
              console.log(res.text)
              expect(res.text).toBe('Bienvenidos a LaunchX')
          })
          .end((err, res) => {
            if (err) return done(err);
            return done();
          })
      })
  })