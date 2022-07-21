const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const  Armor = require ('../lib/models/Armor');

describe('Magic-items routes', () => {
  beforeEach(() => {
  
    return setup(pool);
  });
  it('retrieves magic item by id', async() => {
    const res = await Armor.getRandomArmorById(1);
    console.log(res);
    expect(res).toBe('Padded');
  });
});
afterAll(() => {
  pool.end();
});
