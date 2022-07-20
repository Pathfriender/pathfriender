const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const  Feat = require ('../lib/models/Feat');

describe('Feat routes', () => {
  beforeEach(() => {
  
    return setup(pool);
  });
  it('gets feats from a character', async() => {
    const feats = await Feat.getFeat(1);
    const res = feats.map((feat => {
      return { feat: feat.feat_name };
    }));
    expect(res).toStrictEqual([{ 'feat' : 'Sunlight Sensitivity' }]);
  });
});
afterAll(() => {
  pool.end();
});
