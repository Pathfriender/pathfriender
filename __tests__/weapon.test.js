const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const  Weapon = require ('../lib/models/Weapon');

describe('Magic-items routes', () => {
  beforeEach(() => {
  
    return setup(pool);
  });
  it('retrieves magic item by id', async() => {
    const res = await Weapon.getRandomWeaponById(1);
    expect(res).toBe('Club');
  });
});
afterAll(() => {
  pool.end();
});
