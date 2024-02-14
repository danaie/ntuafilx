require("dotenv").config();

const request = require("supertest");
const app = require("../app");

describe("GET /ntuaflix_api/titles", () => {
  it("should return all titles", async () => {
      return await request(app)
          .get("/ntuaflix_api/titles")
          .then((res) => {
            expect(res.statusCode).toBe(200);
            expect(res.headers['content-type']).toMatch(/json/);
          })
  });
});

const titleID = "tt0000977";

describe("GET /ntuaflix_api/title/:titleID", () => {
  test('should return titleOBject with the given titleID', async () => {
      return request(app)
          .get(`/ntuaflix_api/title/${titleID}`)
          .then((res) => {
            expect(200)
            expect(res.headers['content-type']).toMatch(/json/)
            expect(res.body).toHaveProperty('TitleObject');
            expect(res.body.TitleObject.titleID).toBe(titleID);
          })   
  });
});

describe("GET /ntuaflix_api/names", () => {
  it("should return all names", async () => {
      return await request(app)
          .get("/ntuaflix_api/names")
          .then((res) => {
            expect(res.statusCode).toBe(200);
            expect(res.headers['content-type']).toMatch(/json/);
          })
  });
});

const nameID = "nm0191280";

describe("GET /ntuaflix_api/title/:nameID", () => {
  test('should return nameOBject with the given nameID', async () => {
      return request(app)
          .get(`/ntuaflix_api/name/${nameID}`)
          .then((res) => {
            expect(200)
            expect(res.headers['content-type']).toMatch(/json/)
            expect(res.body).toHaveProperty('nameObject')
            expect(res.body.nameObject.basicsID).toBe(nameID);
          })   
  });
});