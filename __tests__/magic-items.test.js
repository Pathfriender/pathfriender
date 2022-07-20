const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const  MagicItem = require ('../lib/models/Magic-Item');

describe('Magic-items routes', () => {
  beforeEach(() => {
  
    return setup(pool);
  });
  it('retrieves magic item by id', async() => {
    const res = await MagicItem.getRandomMagicItemById(1);
    console.log(res);
    expect(res).toBe('Adamantine Armor');
  });
});
afterAll(() => {
  pool.end();
});
