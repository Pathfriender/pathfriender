const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const  Skill = require ('../lib/models/Skill');
const  Character = require ('../lib/models/Character');
describe('Character routes', () => {
  beforeEach(() => {
  
    return setup(pool);
  });
  it('retrieves the relevantStat by skillname', async() => {
    const res = await Skill.getRelevantStat('stealth');
    expect(res.skill_stat).toBe('dexterity');
  });
  it('calculates skill bonus for specific stat based off of character', async() => {
    const char = await Character.getStats('test');
    const res = await Skill.getSkillBonus('stealth', char);
    expect(res).toEqual(0);
  });
});
afterAll(() => {
  pool.end();
});
  
