const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
// const request = require('supertest');
// const app = require('../lib/app');
const  { disadvantageRoller } = require('../lib/utils/disadvantage-roller.js');
const { advantageRoller } = require('../lib/utils/advantage-roller.js');
const { statRoller } = require('../lib/utils/roller.js');
describe('pathfriender routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('disadvantage rolls the dice and returns a number of 1 - x depending on the size of the dice', async() => {
    const roll = disadvantageRoller(20, 1);
    expect(0 < roll[0] <= 20); 
  });
  it('advantage rolls the dice and returns a number of 1 - x depending on the size of the dice', async() => {
    const roll = advantageRoller(20, 1);
    expect(1 < roll[0] <= 20); 
  });
  it('returns an array of 6 numbers between 3 and 18', async() => {
    const roll = statRoller();
    expect(3 < roll[6] <= 18); 
  });
  afterAll(() => {
    pool.end();
  });
});
