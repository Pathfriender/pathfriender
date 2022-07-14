const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const diceroller = require('../lib/commands/dice-roll');


describe('pathfriender routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('roll the dice', async() => {
    const roll = await diceroller(20, 1);
    expect(roll).toBeGreaterThanOrEqual(1);
    expect(roll).toBeLessThanOrEqual(20);
  });
  afterAll(() => {
    pool.end();
  });
});
