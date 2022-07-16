const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const { SlashCommandBuilder } = require('@discordjs/builders');

const ping = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!'),
  async execute(interaction) {
    return interaction.reply('Pong!');
  },
};
 
describe('pathfriender routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('sends ping and returns pong', async() => {
    const data = ping.data.SlashCommandBuilder();
    expect(data).toBe('Pong!');
  });
});
afterAll(() => {
  pool.end();
});
