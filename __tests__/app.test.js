const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const diceroller = require('../lib/commands/dice-roll');


describe('pathfriender routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('makes a new character', async() => {
    
    
  });
  afterAll(() => {
    pool.end();
  });
});
