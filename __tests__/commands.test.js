const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const  Character = require ('../lib/models/Character');


describe('Character routes', () => {
  beforeEach(() => {

    return setup(pool);
  });

  it('fetches a character by user id and returns characters name', async () => {
    const res = await Character.getCharNameByUserId(1);
    expect(res).toBe('test');
  });  
});  
it('Gets stats of a characters name', async () => {
  const res = await Character.getStats('test');
  expect(res.charisma).toBe(10);
  expect(res.strength).toBe(10);
  expect(res.dexterity).toBe(10);
  expect(res.intelligence).toBe(10);
  expect(res.constitution).toBe(10);
  expect(res.wisdom).toBe(10);
});  


afterAll(() => {
  pool.end();
});


