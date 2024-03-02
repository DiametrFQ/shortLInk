import request, { Response } from "supertest";
import app, { server } from "../index";

describe("GET /", () => {
  test('It should respond with "Hello World1!"', async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello World1!");
  });
});

describe("POST /create-link", () => {
  let path: Response | undefined;
  const testLongLink =
    "https://www.google.com/search?q=Lorem+ipsum%2C+dolor+sit+amet+consectetur+adipisicing+elit.+Facere+ut+nobis+non+velit!+Adipisci+itaque+libero+quo+earum+dicta+doloremque+illo+in+deserunt.+Facilis+tempora+voluptas+minima+aut+cumque+debitis!&oq=Lorem+ipsum%2C+dolor+sit+amet+consectetur+adipisicing+elit.+Facere+ut+nobis+non+velit!+Adipisci+itaque+libero+quo+earum+dicta+doloremque+illo+in+deserunt.+Facilis+tempora+voluptas+minima+aut+cumque+debitis!&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCTIyNzMzajBqN6gCALACAA&sourceid=chrome&ie=UTF-8";

  test("It should respond with a shortLink", async () => {
    path = await request(app)
      .post("/create-link")
      .send({ longLink: testLongLink });

    expect(path.status).toBe(200);
    expect(path.body).toHaveProperty("shortLink");
  });

  test("It should create a redirect for the shortLink", async () => {
    if (!path) {
      throw new Error("Path is empty");
    }

    const shortLink = path.body.shortLink;
    const redirectResponse = await request(app).get(`/${shortLink}`);

    expect(redirectResponse.status).toBe(302);
    expect(redirectResponse.header.location).toBe(testLongLink);
  });
});

afterAll(() => {
  server.close();
});
