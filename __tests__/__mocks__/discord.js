import { Client, Guild, GuildChannel, TextChannel, User, GuildMember, Message, MessageReaction, CommandInteraction, } from 'discord.js';
export default class MockDiscord {
  constructor(options) {
    let _a, _b, _c, _d;
    this.mockClient();
    this.mockGuild();
    this.mockChannel();
    this.mockGuildChannel();
    this.mockTextChannel();
    this.mockPartyChannel();
    this.mockBotPartyGuildChannel();
    this.mockBotPartyTextChannel();
    this.mockUser();
    this.mockGuildMember();
    this.mockMessage((_a = options === null || options === void 0 ? void 0 : options.message) === null || _a === void 0 ? void 0 : _a.content);
    this.mockInteraction(options === null || options === void 0 ? void 0 : options.command);
    this.mockPrototypes();
    if ((_b = options === null || options === void 0 ? void 0 : options.partyChannel) === null || _b === void 0 ? void 0 : _b.messages) {
      this.mockPartyMessages(options.partyChannel.messages);
    }
    if (options === null || options === void 0 ? void 0 : options.reaction) {
      const lastPartyMessage = this.botPartyTextChannel.messages.cache.last();
      this.mockReaction(options.reaction, lastPartyMessage);
      this.mockReactionUser((_d = (_c = options.reaction) === null || _c === void 0 ? void 0 : _c.user) === null || _d === void 0 ? void 0 : _d.id);
    }
    this.guild.channels.cache.set(this.botPartyTextChannel.id, this.botPartyTextChannel);
    this.client.channels.cache.set(this.botPartyTextChannel.id, this.botPartyTextChannel);
    this.client.guilds.cache.set(this.guild.id, this.guild);
  }
  getClient() {
    return this.client;
  }
  getGuild() {
    return this.guild;
  }
  getChannel() {
    return this.channel;
  }
  getGuildChannel() {
    return this.guildChannel;
  }
  getBotPartyGuildChannel() {
    return this.botPartyGuildChannel;
  }
  getBotPartyTextChannel() {
    return this.botPartyTextChannel;
  }
  getTextChannel() {
    return this.textChannel;
  }
  getUser() {
    return this.user;
  }
  getGuildMember() {
    return this.guildMember;
  }
  getMessage() {
    return this.message;
  }
  getInteraction() {
    return this.interaction;
  }
  getReaction() {
    return this.reaction;
  }
  getReactionUser() {
    return this.reactionUser;
  }
  mockPrototypes() {
    TextChannel.prototype.send = jest.fn().mockImplementation(() => {
      return {
        react: jest.fn()
      };
    });
    Message.prototype.edit = jest.fn();
  }
  mockReaction(reactionOptions, message) {
    this.reaction = Reflect.construct(MessageReaction, [
      this.client,
      { emoji: reactionOptions.emoji },
      message
    ]);
  }
  mockClient() {
    this.client = new Client({ intents: [], restSweepInterval: 0 });
    this.client.login = jest.fn(() => Promise.resolve('LOGIN_TOKEN'));
  }
  mockGuild() {
    this.guild = Reflect.construct(Guild, [
      this.client,
      {
        unavailable: false,
        id: 'guild-id',
        name: 'mocked js guild',
        icon: 'mocked guild icon url',
        splash: 'mocked guild splash url',
        region: 'eu-west',
        member_count: 42,
        large: false,
        features: [],
        application_id: 'application-id',
        afkTimeout: 1000,
        afk_channel_id: 'afk-channel-id',
        system_channel_id: 'system-channel-id',
        embed_enabled: true,
        verification_level: 2,
        explicit_content_filter: 3,
        mfa_level: 8,
        joined_at: new Date('2018-01-01').getTime(),
        owner_id: 'owner-id',
        channels: [],
        roles: [],
        presences: [],
        voice_states: [],
        emojis: [],
      }
    ]);
  }
  mockChannel() {
    this.channel = Reflect.construct([
      this.client,
      {
        id: 'channel-id',
      }
    ]);
  }
  mockPartyChannel() {
    this.botPartyChannel = Reflect.construct([
      this.client,
      {
        id: 'party-channel-id',
      }
    ]);
  }
  mockGuildChannel() {
    this.guildChannel = Reflect.construct(GuildChannel, [
      this.guild,
      Object.assign(Object.assign({}, this.channel), { name: 'guild-channel', position: 1, parent_id: '123456789', permission_overwrites: [] })
    ]);
  }
  mockBotPartyTextChannel() {
    this.botPartyTextChannel = Reflect.construct(TextChannel, [
      this.guild,
      Object.assign(Object.assign({}, this.botPartyGuildChannel), { topic: 'topic', nsfw: false, last_message_id: '123456789', lastPinTimestamp: new Date('2019-01-01').getTime(), rate_limit_per_user: 0 })
    ]);
    this.botPartyTextChannel.messages.fetch = jest.fn().mockResolvedValue(this.botPartyTextChannel.messages.cache);
  }
  mockBotPartyGuildChannel() {
    this.botPartyGuildChannel = Reflect.construct(GuildChannel, [
      this.guild,
      Object.assign(Object.assign({}, this.botPartyChannel), { name: 'listagem-de-grupos', position: 2, parent_id: '2', permission_overwrites: [] })
    ]);
  }
  mockTextChannel() {
    this.textChannel = Reflect.construct(TextChannel, [
      this.guild,
      Object.assign(Object.assign({}, this.guildChannel), { topic: 'topic', nsfw: false, last_message_id: '123456789', lastPinTimestamp: new Date('2019-01-01').getTime(), rate_limit_per_user: 0 })
    ]);
  }
  mockUser() {
    this.user = Reflect.construct(User, [
      this.client,
      {
        id: 'user-id',
        username: 'USERNAME',
        discriminator: 'user#0000',
        avatar: 'user avatar url',
        bot: false,
      }
    ]);
  }
  mockReactionUser(userId) {
    this.reactionUser = Reflect.construct(User, [
      this.client,
      {
        id: userId,
        username: `USERNAME-${userId}`,
        discriminator: `user#0000-${userId}`,
        avatar: 'user avatar url',
        bot: false,
      }
    ]);
  }
  mockGuildMember() {
    this.guildMember = Reflect.construct(GuildMember, [
      this.client,
      {
        id: 1,
        deaf: false,
        mute: false,
        self_mute: false,
        self_deaf: false,
        session_id: 'session-id',
        channel_id: 'channel-id',
        nick: 'nick',
        joined_at: new Date('2020-01-01').getTime(),
        user: this.user,
        roles: [],
      },
      this.guild
    ]);
  }
  mockPartyMessages(messages) {
    messages.forEach((message) => {
      const msg = Reflect.construct(Message, [
        this.client,
        {
          id: 20,
          type: 'DEFAULT',
          content: '',
          author: this.user,
          webhook_id: null,
          member: this.guildMember,
          pinned: false,
          tts: false,
          nonce: 'nonce',
          embeds: [message.embed],
          attachments: [],
          edited_timestamp: null,
          reactions: [],
          mentions: [],
          mention_roles: [],
          mention_everyone: [],
          hit: false,
        },
        this.botPartyTextChannel
      ]);
      msg.channelId = this.botPartyTextChannel.id;
      this.botPartyTextChannel.messages.cache.set(msg.id, msg);
    });
  }
  mockMessage(content) {
    this.message = Reflect.construct(Message, [
      this.client,
      {
        id: 10,
        type: 'DEFAULT',
        content,
        author: this.user,
        webhook_id: null,
        member: this.guildMember,
        pinned: false,
        tts: false,
        nonce: 'nonce',
        embeds: [],
        attachments: [],
        edited_timestamp: null,
        reactions: [],
        mentions: [],
        mention_roles: [],
        mention_everyone: [],
        hit: false,
      },
      this.textChannel
    ]);
    this.message.react = jest.fn();
  }
  mockInteracion(command) {
    if (!command)
      return;
    this.interaction = Reflect.construct(CommandInteraction, [
      this.client,
      {
        data: command,
        id: 1,
        user: this.guildMember,
      }
    ]);
    this.interaction.reply = jest.fn();
    this.interaction.guildId = this.guild.id;
    this.interaction.isCommand = jest.fn(() => true);
  }
}
