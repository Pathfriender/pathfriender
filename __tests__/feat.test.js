const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const  Feat = require ('../lib/models/Feat');

describe('Feat routes', () => {
  beforeEach(() => {
  
    return setup(pool);
  });
  it('gets feats from a character', async() => {
    const res = await MagicItem. getRandomMagicItemsbyId(1);
    console.log(res);
  });
});
afterAll(() => {
  pool.end();
});
