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
  it('Gets dex stat by character name', async () => {
    const res = await Character.getDex('test');
    expect(res).toEqual(10);
  });
  it('Creates a new character', async () => {
    await Character.makeCharacter(1, 'Theodore', { ...newCharacter });
    const res = await Character.getDex('Theodore');
    console.log('pizza', res);
  });
});  


afterAll(() => {
  pool.end();
});


