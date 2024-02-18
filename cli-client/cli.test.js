const axios = require('axios');
const program = require('./server'); 

jest.mock('axios');

describe('CLI Tests', () => {
  it('should return title information for a given titleID', async () => {
    const titleID = 'tt0000977';
    const expectedData = { 
      
        "TitleObject": {
            "titleID": "tt0000977",
            "titleInfo": [
                {
                    "titleID": "tt0000977",
                    "titleType": "short",
                    "originalTitle": "Mutterliebe",
                    "image": null,
                    "startYear": 1990,
                    "endYear": null,
                    "genres": "Short"
                }
            ],
            "titleAKAlist": [
                {
                    "titleID": "tt0000977",
                    "title": "Mutterliebe",
                    "region": null
                },
                {
                    "titleID": "tt0000977",
                    "title": "Mutterliebe",
                    "region": "DE"
                }
            ],
            "titlePrincipalsList": [
                {
                    "titleID": "tt0000977",
                    "basicsID": "nm0092290",
                    "primaryName": "Curt Bois",
                    "category": "actor"
                },
                {
                    "titleID": "tt0000977",
                    "basicsID": "nm0667386",
                    "primaryName": "Charles Paulus",
                    "category": "cinematographer"
                },
                {
                    "titleID": "tt0000977",
                    "basicsID": "nm1902148",
                    "primaryName": "Alfred Duskes",
                    "category": "producer"
                }
            ],
            "ratings": []
        
    }
    };

    axios.get.mockResolvedValue({ data: expectedData });
    const logSpy = jest.spyOn(console, 'log');
    await program.parse(['node', 'server.js', 'title', '-t', titleID]);
    expect(logSpy).toHaveBeenCalledWith('Title information:', expectedData);
  });
});

  describe('CLI Tests', () => {
    it('should return search results for a given title part', async () => {
      const titlePart = 'casa';
      const expectedData = { 
        "TitleObject": {
          "titleID": "tt0094841",
          "titleInfo": [
              {
                  "titleID": "tt0094841",
                  "titleType": "movie",
                  "originalTitle": "La casa del sorriso",
                  "image": "https://image.tmdb.org/t/p/{width_variable}/cBhYGT6qFEDZAtB8hEjPb1hzJAC.jpg",
                  "startYear": 1991,
                  "endYear": null,
                  "genres": "Drama,Romance"
              }
          ],
          "titleAKAlist": [
              {
                  "titleID": "tt0094841",
                  "title": "La maison du sourire",
                  "region": "FR"
              },
              {
                  "titleID": "tt0094841",
                  "title": "微笑みの家",
                  "region": "JP"
              },
              {
                  "titleID": "tt0094841",
                  "title": "Mosolyotthon",
                  "region": "HU"
              },
              {
                  "titleID": "tt0094841",
                  "title": "Leendets hus",
                  "region": "SE"
              },
              {
                  "titleID": "tt0094841",
                  "title": "A Casa do Sorriso",
                  "region": "BR"
              },
              {
                  "titleID": "tt0094841",
                  "title": "The House of Smiles",
                  "region": "XWW"
              },
              {
                  "titleID": "tt0094841",
                  "title": "La casa de la sonrisa",
                  "region": "ES"
              },
              {
                  "titleID": "tt0094841",
                  "title": "Das Haus der Freuden",
                  "region": "XWG"
              },
              {
                  "titleID": "tt0094841",
                  "title": "Дом улыбок",
                  "region": "SUHH"
              },
              {
                  "titleID": "tt0094841",
                  "title": "Dom uśmiechów",
                  "region": "PL"
              },
              {
                  "titleID": "tt0094841",
                  "title": "A Casa do Sorriso",
                  "region": "PT"
              },
              {
                  "titleID": "tt0094841",
                  "title": "La casa del sorriso",
                  "region": "IT"
              },
              {
                  "titleID": "tt0094841",
                  "title": "La casa del sorriso",
                  "region": null
              }
          ],
          "titlePrincipalsList": [
              {
                  "titleID": "tt0094841",
                  "basicsID": "nm0079342",
                  "primaryName": "Liliane Betti",
                  "category": "writer"
              },
              {
                  "titleID": "tt0094841",
                  "basicsID": "nm0131840",
                  "primaryName": "Augusto Caminito",
                  "category": "producer"
              },
              {
                  "titleID": "tt0094841",
                  "basicsID": "nm0134073",
                  "primaryName": "Enzo Cannavale",
                  "category": "actor"
              },
              {
                  "titleID": "tt0094841",
                  "basicsID": "nm0274659",
                  "primaryName": "Marco Ferreri",
                  "category": "director"
              },
              {
                  "titleID": "tt0094841",
                  "basicsID": "nm0298553",
                  "primaryName": "Nuccia Fumo",
                  "category": "actress"
              },
              {
                  "titleID": "tt0094841",
                  "basicsID": "nm0345410",
                  "primaryName": "Bruno Guarnera",
                  "category": "composer"
              },
              {
                  "titleID": "tt0094841",
                  "basicsID": "nm0547739",
                  "primaryName": "Antonino Marino",
                  "category": "writer"
              },
              {
                  "titleID": "tt0094841",
                  "basicsID": "nm0738603",
                  "primaryName": "Giovanna Romagnoli",
                  "category": "producer"
              },
              {
                  "titleID": "tt0094841",
                  "basicsID": "nm0750874",
                  "primaryName": "Dado Ruspoli",
                  "category": "actor"
              },
              {
                  "titleID": "tt0094841",
                  "basicsID": "nm0862026",
                  "primaryName": "Ingrid Thulin",
                  "category": "actress"
              }
          ],
          "ratings": [
              {
                  "titleID": "tt0094841",
                  "averageRating": 6.5,
                  "numVotes": 296
              }
          ]
      }
      };
      axios.get.mockResolvedValue({ data: expectedData });
      const logSpy = jest.spyOn(console, 'log');
      await program.parse(['node', 'server.js', 'searchtitle', '-tp', titlePart]);
      expect(logSpy).toHaveBeenCalledWith('Search Results:', expectedData);
      logSpy.mockRestore();

  });
});

describe('CLI Tests', () => {
  it('should return titles by genre with specified options', async () => {
    const genre = 'short';
    const minRating = '6.5';
    const fromYear = '1999';
    const toYear = '2000';
    const expectedData = { 
      "TitleObject": {
        "titleID": "tt0082473",
        "titleInfo": [
            {
                "titleID": "tt0082473",
                "titleType": "short",
                "originalTitle": "Great Barrier Reef",
                "image": "https://image.tmdb.org/t/p/{width_variable}/woteaQKihwadpEr7XXxyt6aAd0v.jpg",
                "startYear": 1999,
                "endYear": null,
                "genres": "Documentary,Short"
            }
        ],
        "titleAKAlist": [
            {
                "titleID": "tt0082473",
                "title": "The Great Barrier Reef",
                "region": "GB"
            },
            {
                "titleID": "tt0082473",
                "title": "IMAX: The Great Barrier Reef",
                "region": "US"
            },
            {
                "titleID": "tt0082473",
                "title": "A korallok birodalma",
                "region": "HU"
            },
            {
                "titleID": "tt0082473",
                "title": "Great Barrier Reef",
                "region": "US"
            },
            {
                "titleID": "tt0082473",
                "title": "The Great Barrier Reef",
                "region": "XWW"
            },
            {
                "titleID": "tt0082473",
                "title": "Great Barrier Reef",
                "region": null
            },
            {
                "titleID": "tt0082473",
                "title": "The Great Barrier Reef",
                "region": "US"
            }
        ],
        "titlePrincipalsList": [
            {
                "titleID": "tt0082473",
                "basicsID": "nm0044011",
                "primaryName": "Rosalind Ayres",
                "category": "actress"
            },
            {
                "titleID": "tt0082473",
                "basicsID": "nm0143426",
                "primaryName": "George Casey",
                "category": "director"
            },
            {
                "titleID": "tt0082473",
                "basicsID": "nm0164950",
                "primaryName": "Philip L. Clarke",
                "category": "actor"
            },
            {
                "titleID": "tt0082473",
                "basicsID": "nm0347858",
                "primaryName": "David Gulpilil",
                "category": "self"
            },
            {
                "titleID": "tt0082473",
                "basicsID": "nm0403174",
                "primaryName": "Tim Huntley",
                "category": "editor"
            },
            {
                "titleID": "tt0082473",
                "basicsID": "nm0637280",
                "primaryName": "Paul Novros",
                "category": "producer"
            },
            {
                "titleID": "tt0082473",
                "basicsID": "nm0724255",
                "primaryName": "Mose Richards",
                "category": "writer"
            },
            {
                "titleID": "tt0082473",
                "basicsID": "nm0938101",
                "primaryName": "Mal Wolfe",
                "category": "cinematographer"
            }
        ],
        "ratings": [
            {
                "titleID": "tt0082473",
                "averageRating": 6.7,
                "numVotes": 120
            }
        ]
    }
    };
    axios.get.mockResolvedValue({ data: expectedData });
    const logSpy = jest.spyOn(console, 'log');
    await program.parse(['node', 'server.js', 'bygenre', '-g', genre, '-mr', minRating, '-fy', fromYear, '-ty', toYear]);
    expect(logSpy).toHaveBeenCalledWith('Search Results:', expectedData);
    logSpy.mockRestore();
  });
});

describe('CLI Tests', () => {
  it('should return information for a given nameID', async () => {
    const nameID = 'nm0191280'; 
    const expectedData = { 
      "success": 1,
      "nameObject": {
        "basicsID": "nm0191280",
        "primaryName": "Luowen Cui",
        "image": null,
        "birthYear": null,
        "deathYear": null,
        "primaryProfession": "actor",
        "titles": [
            {
                "titleID": "tt0093989",
                "category": "actor"
            }
        ]
      }
    };
    axios.get.mockResolvedValue({ data: expectedData });
    const logSpy = jest.spyOn(console, 'log');
    await program.parse(['node', 'server.js', 'name', '-n', nameID]);
    expect(logSpy).toHaveBeenCalledWith('Name information:', expectedData);
    logSpy.mockRestore();
  });
});


describe('CLI Tests', () => {
  it('should return search results for a given name part', async () => {
    const namePart = 'Thewlis';
    const expectedData = { 
      "personData": {
        "basicsID": "nm0000667",
        "primaryName": "David Thewlis",
        "image": "https://image.tmdb.org/t/p/{width_variable}/sNuYyT8ocLlQr3TdAW9CoKVbCU8.jpg",
        "birthYear": 1963,
        "deathYear": null,
        "primaryProfession": "actor,soundtrack,writer",
        "titles": [
            {
                "titleID": "tt0096405",
                "category": "actor"
            },
            {
                "titleID": "tt0102863",
                "category": "actor"
            }
        ]
    }
    };
    axios.get.mockResolvedValue({ data: expectedData });
    const logSpy = jest.spyOn(console, 'log');
    await program.parse(['node', 'server.js', 'searchname', '-np', namePart]);
    expect(logSpy).toHaveBeenCalledWith('Search Results:', expectedData);
    logSpy.mockRestore();
  });
});