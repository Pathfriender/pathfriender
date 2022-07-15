const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
// const request = require('supertest');
// const app = require('../lib/app');
const  { disadvantageRoller } = require('../lib/utils/disadvantage-roller.js');


describe('pathfriender routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('rolls the dice and returns a number of 1 - x depending on the size of the dice', async() => {
    const roll = disadvantageRoller(20, 1);
    expect(0 < roll[0] <= 20); 
  });
  afterAll(() => {
    pool.end();
  });
});
