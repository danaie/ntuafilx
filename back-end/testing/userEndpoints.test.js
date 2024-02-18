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
const inavlidTitleID = "tt0000977djhfbgo";

describe("GET /ntuaflix_api/title/:titleID", () => {
  test('should return titleOBject with the given titleID', async () => {
      return request(app)
          .get(`/ntuaflix_api/title/${titleID}`)
          .then((res) => {
            expect(res.statusCode).toBe(200);
            expect(res.headers['content-type']).toMatch(/json/)
            expect(res.body).toHaveProperty('TitleObject');
            expect(res.body.TitleObject.titleID).toBe(titleID);
          })   
  });
  test('Invalid TitleID, should return 200 with movie not found message', async () => {
      return request(app)
          .get(`/ntuaflix_api/title/${inavlidTitleID}`)
          .then((res) => {
            expect(res.statusCode).toBe(200);
            expect(res.body.message).toBe("Movies not found");
          })   
  });
  test('No TitleID, should return 404 with endpoind not found message', async () => {
      return request(app)
          .get(`/ntuaflix_api/title/`)
          .then((res) => {
            expect(res.statusCode).toBe(404);
            expect(res.body.error).toBe("Endpoint not found");
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
const invalidnameID = "nm0191257980o57t095781q80";

describe("GET /ntuaflix_api/title/:nameID", () => {
  test('should return nameOBject with the given nameID', async () => {
      return request(app)
          .get(`/ntuaflix_api/name/${nameID}`)
          .then((res) => {
            expect(res.statusCode).toBe(200);
            expect(res.headers['content-type']).toMatch(/json/)
            expect(res.body).toHaveProperty('nameObject')
            expect(res.body.nameObject.basicsID).toBe(nameID);
          })
  });
  test('Invalid nameID, should return 200 with names not found message', async () => {
    return request(app)
        .get(`/ntuaflix_api/name/${invalidnameID}`)
        .then((res) => {
          expect(res.statusCode).toBe(200);
          expect(res.body.message).toBe("Name not found");
        })   
  });
  test('No nameID, should return 404 with endpoind not found message', async () => {
    return request(app)
        .get(`/ntuaflix_api/name/`)
        .then((res) => {
          expect(res.statusCode).toBe(404);
          expect(res.body.error).toBe("Endpoint not found");
        })   
});

});

const titlepart = 'asa';

describe("GET /ntuaflix_api/searchtitle/", () => {
  test('should return all titleOBjects with original title match to the titlepart', async () => {
      return request(app)
          .get(`/ntuaflix_api/searchtitle`, {
            params: {
              titlePart: titlepart,
            },
          })
          .then((res) => {
            expect(res.statusCode).toBe(200);
            expect(res.headers['content-type']).toMatch(/json/)
          })   
  });
  test('No title part, should return 400 Bad Request with titlepart missing', async () => {
      return request(app)
          .get(`/ntuaflix_api/searchtitle`)
          .then((res) => {
            expect(res.statusCode).toBe(400);
            expect(res.body.message).toBe("titlepart missing");
          })   
  });
});
const npart = 'asa';

describe("GET /ntuaflix_api/searchname/", () => {
  test('should return all nameOBjects with original name match to the namepart', async () => {
      return request(app)
          .get(`/ntuaflix_api/searchname`, {
            params: {
              namePart: npart,
            },
          })
          .then((res) => {
            
            expect(res.statusCode).toBe(200);
            expect(res.headers['content-type']).toMatch(/json/)
          })   
  });
  test('No name part, should return 400 Bad Request with namepart missing', async () => {
      return request(app)
          .get(`/ntuaflix_api/searchname/`)
          .then((res) => {
            expect(res.statusCode).toBe(400);
            expect(res.body.message).toBe("namepart missing");
          })   
  });
});

const qgenre = "comedy";
const min = "4.0";
const from = "1990";
const to = "2000";

describe("GET /ntuaflix_api/bygenre/", () => {
  test('should return all titleOBjects according to search parameters', async () => {
    return request(app)
      .get(`/ntuaflix_api/bygenre`)
      .query({
        qgenre: qgenre,
        minrating: min,
        yrFrom: from,
        toyrTo: to
      })
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.headers['content-type']).toMatch(/json/);
      });
  });

  test('Missing genre and minrating, should return 400 Bad Request', async () => {
    return request(app)
      .get(`/ntuaflix_api/bygenre`)
      .query({})
      .then((res) => {
        expect(res.statusCode).toBe(400);
        expect(res.body.message).toBe("qgenre and/or minrating missing");
      });
  });

  test('Missing genre, should return 400 Bad Request', async () => {
    return request(app)
      .get(`/ntuaflix_api/bygenre`)
      .query({
        minrating: min,
        yrFrom: from,
        toyrTo: to
      })
      .then((res) => {
        expect(res.statusCode).toBe(400);
        expect(res.body.message).toBe("qgenre and/or minrating missing");
      });
  });

  test('Missing minrating, should return 400 Bad Request', async () => {
    return request(app)
      .get(`/ntuaflix_api/bygenre`)
      .query({
        qgenre: qgenre,
        yrFrom: from,
        toyrTo: to
      })
      .then((res) => {
        expect(res.statusCode).toBe(400);
        expect(res.body.message).toBe("qgenre and/or minrating missing");
      });
  });
});
