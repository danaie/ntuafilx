// cli.test.js
const axios = require('axios');
const { program } = require('commander');
const { title, searchtitle, bygenre, name, searchname } = require('./server');

// Mocking axios for testing purposes
jest.mock('axios');

beforeEach(() => {
  jest.clearAllMocks();
});

test('title command should fetch and display title information', async () => {
  axios.get.mockResolvedValue({ data: 'Mocked title information' });
  await title({ titleID: '123' });
  expect(axios.get).toHaveBeenCalledWith(expect.stringContaining('/title/123'));
  expect(console.log).toHaveBeenCalledWith('Title information:', 'Mocked title information');
});

test('searchtitle command should fetch and display search results', async () => {
  axios.get.mockResolvedValue({ data: 'Mocked search results' });
  await searchtitle({ titlepart: 'Adventure' });
  expect(axios.get).toHaveBeenCalledWith(expect.stringContaining('/searchtitle'), {
    params: { titlePart: 'Adventure' },
  });
  expect(console.log).toHaveBeenCalledWith('Search Results:', 'Mocked search results');
});

test('bygenre command should fetch and display search results', async () => {
    axios.get.mockResolvedValue({ data: 'Mocked bygenre results' });
    await bygenre({ qgenre: 'Action', min: '7', from: '2000', to: '2022' });
    expect(axios.get).toHaveBeenCalledWith(expect.stringContaining('/bygenre'), {
      params: { qgenre: 'Action', minrating: '7', yrFrom: '2000', toyrTo: '2022' },
    });
    expect(console.log).toHaveBeenCalledWith('Search Results:', 'Mocked bygenre results');
  });
  
  test('name command should fetch and display name information', async () => {
    axios.get.mockResolvedValue({ data: 'Mocked name information' });
    await name({ nameID: '456' });
    expect(axios.get).toHaveBeenCalledWith(expect.stringContaining('/name/456'));
    expect(console.log).toHaveBeenCalledWith('Name information:', 'Mocked name information');
  });
  
  test('searchname command should fetch and display search results', async () => {
    axios.get.mockResolvedValue({ data: 'Mocked searchname results' });
    await searchname({ namepart: 'John' });
    expect(axios.get).toHaveBeenCalledWith(expect.stringContaining('/searchname'), {
      params: { namePart: 'John' },
    });
    expect(console.log).toHaveBeenCalledWith('Search Results:', 'Mocked searchname results');
  });
  
