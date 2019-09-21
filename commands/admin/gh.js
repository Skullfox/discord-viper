module.exports = class ghCommand extends global.Commando.Command {
	constructor(client) {
		super(client, {
			name: 'gh',
			aliases: ['gh'],
			group: 'admin',
			memberName: 'gh',
			description: 'gh',
			details: 'gh',
      guildOnly : true
		});
	}

  hasPermission(msg) {
    return true;
  }

  async run(msg) {

    msg.reply(global.GHLINK);

  }
};
