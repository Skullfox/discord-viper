module.exports = class removeCommand extends global.Commando.Command {
	constructor(client) {
		super(client, {
			name: 'remove',
			aliases: ['rm'],
			group: 'admin',
			memberName: 'remove',
			description: 'Deletes a mission',
			details: 'Deletes a mission',
      guildOnly : true,
      args: [
                {
                    key: 'pbo',
                    prompt: 'mission file',
                    type: 'string'
                }
            ]
		});
	}

  hasPermission(msg) {
    if (!this.client.isOwner(msg.author)) return 'Only the bot owner(s) may use this command.';
    return true;
  }

  async run(msg,{pbo}) {

    if (global.FS.existsSync(global.config.system.mpmissions + pbo)) {
      console.log('The file exists.');

      var ext = global.PATH.extname(global.config.system.mpmissions + pbo);
      if(ext != ".pbo"){
        msg.reply("only .pbo can be deleted");
        return new Promise((resolve) => true)
      };

      global.FS.unlink(global.config.system.mpmissions + pbo, (err) => {
        if (err) {
          console.error(err)
          msg.reply( err.toString() );
        }else{
          msg.reply("``" + pbo + "`` was deleted");
        };
      })

    }else{
      msg.reply(pbo + " dont exist in ``" + global.config.system.mpmissions + "``");
    };
  }
};
