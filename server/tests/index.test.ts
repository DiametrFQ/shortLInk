import request from "supertest";
import app, { server } from "../index";

describe("Test the root path", () => {
  test("It should response the GET method", (done) => {
    request(app)
      .get("/")
      .then(async (response) => {
        expect(response.statusCode).toBe(200);
        done();
      })
      .finally(() => server.close());
  });
});
