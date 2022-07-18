const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const  Character = require ('../lib/models/Character');


describe('Character routes', () => {
  beforeEach(() => {

    return setup(pool);
  });

  it('fetch a character', async () => {
    const res = await Character.getCharNameByUserId(1);
    expect(res).toBe('test');
  });  
});

afterAll(() => {
  pool.end();
});


