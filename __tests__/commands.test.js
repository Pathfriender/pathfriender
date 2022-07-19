const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const  Character = require ('../lib/models/Character');
// const app = require('../lib/app');
// const request = require('supertest');

const newCharacter = {
  user_id: '1', 
  character_name: 'Theodore', 
  experience: '1', 
  class: 'bard', 
  race: 'gnome', 
  background: 'urchin', 
  dexterity: '11', 
  strength: '10', 
  intelligence: '10', 
  constitution: '10', 
  wisdom: '10',
  charisma: '10'
};

describe('Character routes', () => {
  beforeEach(() => {

    return setup(pool);
  });
  it('fetches a character by character id and returns characters name', async () => {
    const res = await Character.getName(1);
    expect(res).toBe('test');
  });  
  it('fetches a character by user id and returns characters name', async () => {
    const res = await Character.getCharNameByUserId(1);
    expect(res).toBe('test');
  });  
  it('Gets stats of a characters name', async () => {
    const res = await Character.getStats('test');
    expect(res.charisma).toBe(10);
    expect(res.strength).toBe(10);
    expect(res.dexterity).toBe(10);
    expect(res.intelligence).toBe(10);
    expect(res.constitution).toBe(10);
    expect(res.wisdom).toBe(10);
  });
  it('gets character experience points', async () => {
    const res = await Character.getXp('test');
    expect(res).toBe('1');
  });  
  it('Increments the total of experience a character has', async () => {
    const res = await Character.addXp('test', 100);
    expect(res).toBe('101');
  });
  it('Deletes a character', async () => {
    await Character.deleteCharacter('test');
    const res = await Character.getStats('test');
    expect(res).toBe(null);
  });
});  


afterAll(() => {
  pool.end();
});


